import React from "react";
import { useTranslation } from 'react-i18next';
import PlanCard from "../../components/PlanCard/planCard";

const SubscriptionPlansSection = () => {
    const { t } = useTranslation();

    return (
        <div className="">
            <h2 className="text-4xl font-bold text-center text-white">{t('subscriptionPlansSection.title')}</h2>
            <PlanCard />
        </div>
    )
}

export default SubscriptionPlansSection;