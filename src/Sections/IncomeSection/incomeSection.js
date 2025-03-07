import React from "react";
import { useTranslation } from 'react-i18next';
import IncomeSimulator from "../../components/IncomeSimulator/incomeSimulator";

const IncomeSection = () => {
    const { t } = useTranslation();
    return (
            <div className="md:w-page m-auto">
                <h2 className="text-4xl font-bold text-center mb-10">{t('IncomeSection.title')}</h2>
                <IncomeSimulator/>
            </div> 
    );
}

export default IncomeSection;