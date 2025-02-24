import React  from "react";
import Hero from "../components/Hero/hero";
import ServicesPresentation from "../Sections/ServicesPresentation/servicesPresentation";
import DiscoverySection from "../Sections/DiscoverySection/discoverySection";
import ActorsSection from "../Sections/ActorsSection/ActorsSection";
import SubscriptionPlansSection from "../Sections/SubscriptionPlansSection/subscriptionPlansSection";
import CommunitySection from "../Sections/CommunitySection/communitySection";


const LandingPage = () => {

    return (
    <>
        <Hero/> 
        <ServicesPresentation/>
        <DiscoverySection/>
        <ActorsSection/>
        <SubscriptionPlansSection/>
        <CommunitySection/>
    </>

    )
}

export default LandingPage;