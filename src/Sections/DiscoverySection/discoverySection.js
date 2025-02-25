import React from "react";
import { useTranslation } from 'react-i18next';
import desktop from "../../assets/illustrations/desktop-dashboard.svg";
import mobile from "../../assets/illustrations/mobile-dashboard.svg";
import discoverSectionBackground from "../../assets/illustrations/discovery-section-background.svg";

const DiscoverySection = () => {
    const { t } = useTranslation();

    return (
        <div className="relative">
            <div className="w-page m-auto">
                <h2 className="text-4xl font-bold mb-10">{t('discoverySection.title')}</h2>
                <p className="text-base mb-10">{t('discoverySection.description')}</p>
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
        </div>
    );
}

export default DiscoverySection;