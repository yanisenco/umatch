import React from "react";
import { useTranslation } from 'react-i18next';
import Button from "../../components/Button/button";
import community from "../../assets/illustrations/community.svg";
import artists from "../../assets/illustrations/community-mobile/artists-professionals.svg";
import influencers from "../../assets/illustrations/community-mobile/influencers.svg";
import users from "../../assets/illustrations/community-mobile/users-fans.svg";

const CommunitySection = () => {
    const { t } = useTranslation();

    return (
        <div className="w-page m-auto relative" id={t('communitySection.id')}>
            <h2 className="text-4xl font-bold text-center mt-20">{t('communitySection.title')}</h2>
            <p className="text-base text-center mt-10">{t('communitySection.description')}</p>
            <div className="mt-4 flex justify-center items-center">
            <Button text={t('communitySection.button')}/>
            </div>
                <img 
                    className="hidden md:block m-auto"
                    src={community} 
                    alt="Community illustration"
                />
                <img 
                    className="md:hidden m-auto"
                    src={artists} 
                    alt="artists illustration"
                />
                <img 
                    className="md:hidden m-auto"
                    src={influencers} 
                    alt="influencers illustration"
                />
                <img 
                    className="md:hidden m-auto mb-10"
                    src={users} 
                    alt="users illustration"
                />

        </div>
    )
}

export default CommunitySection;