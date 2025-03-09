import React from "react";
import { useTranslation } from 'react-i18next';
import Button from "../../components/Button/button";
import TitleWithDescription from "../../components/TitleWithDescription/titleWithDescription";
import SliderCustom from "../../components/SliderCustom/sliderCustom";
import useIsDesktop from "../../hooks/useIsDesktop";

const ServicesPresentation = () => {
    const { t } = useTranslation();
    const servicesPresentation = t('servicesPresentation', { returnObjects: true });
    const isDesktop = useIsDesktop();
    const offers = Array.isArray(servicesPresentation.subparts) ? servicesPresentation.subparts.map((offer, index) => (
        <div key={index} className="p-4">
            <TitleWithDescription title={offer.title} text={offer.description} />
        </div>
    )) : [];

    const groupedOffers = [];
    for (let i = 0; i < offers.length; i += 2) {
        groupedOffers.push(
            <div key={i} className="flex flex-col">
                {offers.slice(i, i + 2)}
            </div>
        );
    }

    return (
        <div className="w-page m-auto">
            <h2 className="text-4xl text-dark-blue font-bold text-center mb-10">{servicesPresentation.title}</h2>
            {isDesktop ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {offers}
                </div>
            ) : (
                <SliderCustom>
                    {groupedOffers}
                </SliderCustom>
            )}
            <div className="mt-4 flex justify-center items-center mb-10">
                <Button text={servicesPresentation.buttonText} />
            </div>
        </div>
    );
}

export default ServicesPresentation;