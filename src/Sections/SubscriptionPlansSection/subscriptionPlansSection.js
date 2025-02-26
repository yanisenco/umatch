import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import PlanCard from "../../components/PlanCard/planCard";
import Slider from "react-slick";
import { ReactComponent as SubscriptionSectionBackground } from '../../assets/illustrations/subscription-section-background.svg';

const SubscriptionPlansSection = () => {
    const { t } = useTranslation();
    const subscriptionPlansSection = t('subscriptionPlansSection', { returnObjects: true });
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isDesktop ? 2 : 1,
        slidesToScroll: isDesktop ? 2 : 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    const plans = Array.isArray(subscriptionPlansSection.plans) ? subscriptionPlansSection.plans.map((plan, index) => (
        <div key={index} className="p-2 md:flex-1">
            <PlanCard title={plan.title} price={plan.price} features={plan.features} id={index} />
        </div>
    )) : [];

    return (
        <div className="relative">
            <SubscriptionSectionBackground className="absolute -top-[10%] md:-top-[80%] right-0 w-full h-auto -z-50" />
            <div className="relative w-page m-auto">
                <h2 className="text-4xl font-bold text-center md:max-w-[45%] m-auto my-10">{t('subscriptionPlansSection.title')}</h2>
                    {isDesktop ? 
                    <div className="flex justify-center gap-4">
                        {plans}
                    </div>
                        :
                        <Slider {...settings} className="flex flex-col gap-2 md:flex-row mb-10">
                            {plans}
                        </Slider>
                    }
            </div>
        </div>
    );
}

export default SubscriptionPlansSection;