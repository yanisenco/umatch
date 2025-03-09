import React from "react";
import { useTranslation } from 'react-i18next';
import PlanCard from "../../components/PlanCard/planCard";
import { ReactComponent as SubscriptionSectionBackground } from '../../assets/illustrations/svg/subscription-section-background.svg';
import SliderCustom from "../../components/SliderCustom/sliderCustom";
import useIsDesktop from "../../hooks/useIsDesktop";

const SubscriptionPlansSection = () => {
    const { t } = useTranslation();
    const subscriptionPlansSection = t('subscriptionPlansSection', { returnObjects: true });
    const isDesktop = useIsDesktop();

    const plans = Array.isArray(subscriptionPlansSection.plans) ? subscriptionPlansSection.plans.map((plan, index) => (
        <div key={index} className="p-2 md:flex-1 mb-5">
            <PlanCard title={plan.title} price={plan.price} features={plan.features} id={index} />
        </div>
    )) : [];

    return (
        <div className="relative" id={process.env.REACT_APP_SUBSCRIPTION_LINK}>
            <SubscriptionSectionBackground className="absolute -top-[10%] md:-top-[80%] right-0 w-full h-auto -z-50" />
            <div className="relative w-page m-auto">
                <h2 className="text-4xl text-dark-blue font-bold text-center md:max-w-[45%] m-auto my-10">{t('subscriptionPlansSection.title')}</h2>
                    {isDesktop ? 
                    <div className="flex justify-center gap-4">
                        {plans}
                    </div>
                        :
                        <SliderCustom>
                             {plans}
                        </SliderCustom>
                    }
            </div>
        </div>
    );
}

export default SubscriptionPlansSection;