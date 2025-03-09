import React from "react";
import { useTranslation } from 'react-i18next';
import LogoWithCategories from "../../components/LogoWithCategories/logoWithCategories";

const ActorsSection = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2 className="text-4xl text-dark-blue font-bold text-center mt-20">{t('actorSection.title')}</h2>
            <p className="text-base text-center mt-10 m-auto md:max-w-[30%]">{t('actorSection.description')}</p>
            <LogoWithCategories />
        </div>
    )
}

export default ActorsSection;