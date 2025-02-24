import React from "react";
import { useTranslation } from 'react-i18next';
import communityIllustration from "../../assets/illustrations/community.svg";

const CommunitySection = () => {
    const { t } = useTranslation();

    return (
        <div className="h-screen bg-black-20">
            <img src={communityIllustration} alt="Community illustration" className=" mx-auto"/>
        </div>
    )
}

export default CommunitySection;