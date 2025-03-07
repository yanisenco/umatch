import React from "react";
import { useTranslation } from 'react-i18next';
import musicNote from "../../assets/icons/music-note.svg";
import Button from "../Button/button";

const Hero = () => {
    const { t } = useTranslation();
    const heroBanner = t('heroBanner', { returnObjects: true });
    const singerDesktop = `${process.env.PUBLIC_URL}/singer-desktop.webp`;
    const singerMobile = `${process.env.PUBLIC_URL}/singer-mobile.webp`;

    const bulletPoints = Array.isArray(heroBanner.subparts) ? heroBanner.subparts.map((bulletPoint, index) => (
        <div key={index} className="mb-1 flex">
            <img 
                className="mr-2"
                src={musicNote} 
                alt="Music note"
            />
            <p>{bulletPoint.description}</p>
        </div>
    )) : [];

    return (
        <div className="flex items-center justify-center md:h-screen">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full">
                
                <picture className="relative md:absolute  right-0 -z-10 md:w-[80%] -top-10 md:top-0">
                    <source srcSet={singerDesktop} media="(min-width: 1024px)" />
                    <source srcSet={singerMobile} media="(max-width: 1023px)" />
                    <img 
                        src={singerMobile} 
                        alt="Singer Hero illustration"
                        fetchpriority="high"
                        className="w-full"
                    />
                </picture>

                <div className="w-page m-auto">
                    <div className="w-full md:w-[30%] mb-10">
                        <p className="text-dark-blue uppercase mb-4">{t('heroBanner.availability')}</p>
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
