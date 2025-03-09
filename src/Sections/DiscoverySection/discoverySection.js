import React from "react";
import { useTranslation } from 'react-i18next';
import desktop from "../../assets/illustrations/svg/desktop-dashboard.svg";
import mobile from "../../assets/illustrations/svg/mobile-dashboard.svg";
import artysMobileInterface from "../../assets/illustrations/webp/artys-mobile-interface.webp";
import discoverSectionBackground from "../../assets/illustrations/svg/discovery-section-background.svg";
import Button from "../../components/Button/button";

const DiscoverySection = () => {
    const { t } = useTranslation();

    return (
        <div className="relative">
            <div className="w-page m-auto" id={process.env.REACT_APP_DISCOVER_UMATCH}>
                <h2 className="text-4xl text-dark-blue font-bold mb-10">{t('discoverySection.titleUmatch')}</h2>
                <p className="text-base mb-10">{t('discoverySection.descriptionUmatch')}</p>
                <Button text={t('discoverySection.button')}/>
            </div>
            <img
                className="absolute md:-top-[70%] right-0 w-full h-auto -z-50"
                src={discoverSectionBackground}
                alt="Discovery Section Background"
            />
            <div className="relative flex justify-end">
                <img
                    className="relative z-10"
                    src={desktop}
                    alt="Discovery Section Desktop"
                />
                <img
                    className="relative z-10"
                    src={mobile}
                    alt="Discovery Section Mobile"
                />
            </div>
            <div className="flex flex-col-reverse md:flex-row " id={process.env.REACT_APP_DISCOVER_ARTYS}>
            <img
                className="relative z-10"
                src={artysMobileInterface}
                alt="Discover Artys interface"
            />
            <div className="w-page md:w-auto items-center justify-center m-auto" >
                <h2 className="text-4xl text-dark-blue font-bold my-3">{t('discoverySection.titleArtys')}</h2>
                <p className="text-base mb-3">{t('discoverySection.descriptionArtys')}</p>
            </div>
            </div>
             
        </div>
    );
}

export default DiscoverySection;