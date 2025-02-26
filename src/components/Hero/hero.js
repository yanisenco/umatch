import React from "react";
import { useTranslation } from 'react-i18next';
import singer from "../../assets/illustrations/singer.svg";
import musicNote from "../../assets/icons/music-note.svg";
import Button from "../Button/button";

const Hero = () => {
    const { t } = useTranslation();
    const heroBanner = t('heroBanner', { returnObjects: true });

    const bulletPoints = Array.isArray(heroBanner.subparts) ? heroBanner.subparts.map((bulletPoint, index) => (
        <div key={index} className="mb-1 flex">
            <img 
                className="mr-2"
                src={musicNote} 
                alt="music note"
            />
            <p>{bulletPoint.description}</p>
        </div>
    )) : [];

    return (
        <div className="flex items-center justify-center md:h-screen">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full">
                <img 
                    className="relative md:absolute top-0 right-0 -z-10"
                    src={singer} 
                    alt="Singer Hero illustration"
                />
                <div className="w-page m-auto">
                    <div className="w-full md:w-[30%] mb-10">
                        <p className="text-green uppercase mb-4">{t('heroBanner.availability')}</p>
                        <h1 className="text-5xl font-bold mb-4">{t('heroBanner.title')}</h1>
                        <div className="my-4">
                            {bulletPoints}
                        </div>
                        <Button text={heroBanner.button} width={'w-full'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;