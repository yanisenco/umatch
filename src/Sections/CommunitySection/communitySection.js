import React from "react";
import { useTranslation } from 'react-i18next';
import Button from "../../components/Button/button";
import communityEN from "../../assets/illustrations/svg/community_en.svg";
import communityFR from "../../assets/illustrations/svg/community_fr.svg";
import waves from "../../assets/illustrations/svg/waves.svg";
import artistsEN from "../../assets/illustrations/svg/community-mobile/en/artists-professionals.svg";
import influencersEN from "../../assets/illustrations/svg/community-mobile/en/influencers.svg";
import usersEN from "../../assets/illustrations/svg/community-mobile/en/users-fans.svg";
import artistsFR from "../../assets/illustrations/svg/community-mobile/fr/artists-professionals.svg";
import influencersFR from "../../assets/illustrations/svg/community-mobile/fr/influencers.svg";
import usersFR from "../../assets/illustrations/svg/community-mobile/fr/users-fans.svg";

const CommunitySection = () => {
    const { t, i18n } = useTranslation();
    const isFrench = i18n.language === 'fr';

    return (
        <div className="relative">
            <img 
                className="md:hidden flex m-auto items-center justify-center absolute top-1/2 transform -translate-y-1/2 -z-10"
                src={waves} 
                alt="waves illustration"
            />
            <img 
                className="md:hidden flex m-auto items-center justify-center absolute top-full transform -translate-y-1/2 scale-y-[-1] -z-10"
                src={waves} 
                alt="waves illustration"
            />
            <div className="w-page m-auto relative" id={t('communitySection.id')}>
                <h2 className="text-4xl text-dark-blue font-bold text-center mt-20">{t('communitySection.title')}</h2>
                <p className="text-base text-center mt-10">{t('communitySection.description')}</p>
                <div className="mt-4 flex justify-center items-center">
                    <Button text={t('communitySection.button')}/>
                </div>
            </div>
            <div className="w-[90%] m-auto md:w-page">
                <img 
                    className="hidden md:block m-auto"
                    src={isFrench ? communityFR : communityEN} 
                    alt="Community illustration"
                />
                <img 
                    className="md:hidden m-auto w-4/5"
                    src={isFrench ? artistsFR : artistsEN} 
                    alt="artists illustration"
                />
                <img 
                    className="md:hidden m-auto"
                    src={isFrench ? influencersFR : influencersEN} 
                    alt="influencers illustration"
                />
                <img 
                    className="md:hidden m-auto mb-10"
                    src={isFrench ? usersFR : usersEN} 
                    alt="users illustration"
                />
            </div>                          
        </div>
    )
}

export default CommunitySection;