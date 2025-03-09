import React from "react";
import { useTranslation } from 'react-i18next';
import concert from "../../assets/illustrations/webp/concert.webp";
import forbes from "../../assets/logos/forbes.svg";
import Button from "../../components/Button/button";

const AboutUsSection = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="w-page m-auto">
            <h2 className="text-4xl text-dark-blue font-bold text-center mt-20">{t('aboutUsSection.title')}</h2>
        </div>
            <div className="w-screen md:w-[55%] flex m-auto p-5"> 
                <img 
                    className="w-[45%] md:w-[40%] object-cover object-center rounded-l-lg"
                    src={concert} 
                    alt="concert illustration"
                /> 
                <div className="w-[55%] md:w-[60%] bg-light-gray p-2 md:p-8 rounded-r-lg">
                    <img 
                    className="mb-1 md:mb-8"
                    src={forbes} 
                    alt="forbes logo"
                    /> 
                    <h3 className="md:text-2xl font-bold mb-1 md:mb-0">{t('aboutUsSection.article.title')}</h3>
                    <p className="hidden md:block text-base mt-8 mb-10 ">{t('aboutUsSection.article.description')}</p>
                    <Button text={t('aboutUsSection.article.button')}/>
                </div>
            </div>
        </div>
       
    );
}

export default AboutUsSection;