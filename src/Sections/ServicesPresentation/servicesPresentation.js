import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Button from "../../components/Button/button";
import Slider from "react-slick";
import TitleWithDescription from "../../components/TitleWithDescription/titleWithDescription";

const ServicesPresentation = () => {
    const { t } = useTranslation();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const servicesPresentation = t('servicesPresentation', { returnObjects: true });

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
            <h2 className="text-4xl font-bold text-center mb-10">{servicesPresentation.title}</h2>
            {isDesktop ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {offers}
                </div>
            ) : (
                <Slider {...settings} className="flex flex-col md:flex-row mb-10">
                    {groupedOffers}
                </Slider>
            )}
            <div className="mt-4 flex justify-center items-center mb-10">
                <Button text={servicesPresentation.buttonText} />
            </div>
        </div>
    );
}

export default ServicesPresentation;