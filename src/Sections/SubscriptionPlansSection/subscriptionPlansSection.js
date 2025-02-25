import React from "react";
import { useTranslation } from 'react-i18next';
import PlanCard from "../../components/PlanCard/planCard";
import { ReactComponent as SubscriptionSectionBackground} from '../../assets/illustrations/subscription-section-background.svg';

const SubscriptionPlansSection = () => {
    const { t } = useTranslation();
    const subscriptionPlansSection = t('subscriptionPlansSection', { returnObjects: true });
    const plans = Array.isArray(subscriptionPlansSection.plans) ? subscriptionPlansSection.plans.map((plan, index) => (
        <div key={index} className="flex-1">
            <PlanCard title={plan.title} price={plan.price} features={plan.features} id={index} />
        </div>
    )) : [];
    return (
        <div className="relative "> 
            <SubscriptionSectionBackground className="absolute md:-top-full right-0 w-full h-auto -z-50" />
        <div className="relative w-page m-auto ">
            <h2 className="text-4xl font-bold text-center max-w-[45%] m-auto my-10">{t('subscriptionPlansSection.title')}</h2>
            <div className="flex justify-center gap-4">
                {plans}
            </div>
            
        </div>
        </div>
       
    )
}

export default SubscriptionPlansSection;