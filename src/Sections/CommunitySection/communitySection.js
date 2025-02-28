import React from "react";
import { useTranslation } from 'react-i18next';
import Button from "../../components/Button/button";
import community from "../../assets/illustrations/svg/community.svg";
import waves from "../../assets/illustrations/svg/waves.svg";
import artists from "../../assets/illustrations/svg/community-mobile/artists-professionals.svg";
import influencers from "../../assets/illustrations/svg/community-mobile/influencers.svg";
import users from "../../assets/illustrations/svg/community-mobile/users-fans.svg";

const CommunitySection = () => {
    const { t } = useTranslation();

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
                    <h2 className="text-4xl font-bold text-center mt-20">{t('communitySection.title')}</h2>
                    <p className="text-base text-center mt-10">{t('communitySection.description')}</p>
                    <div className="mt-4 flex justify-center items-center">
                        <Button text={t('communitySection.button')}/>
                    </div>
                </div>
                <div className="w-[90%] m-auto md:w-page">
                <img 
                    className="hidden md:block m-auto"
                    src={community} 
                    alt="Community illustration"
                />
                <img 
                    className="md:hidden m-auto w-4/5"
                    src={artists} 
                    alt="artists illustration"
                />
                <img 
                    className="md:hidden m-auto "
                    src={influencers} 
                    alt="influencers illustration"
                />
                <img 
                    className="md:hidden m-auto mb-10"
                    src={users} 
                    alt="users illustration"
                />
                </div>                          
        </div>
    )
}

export default CommunitySection;