import React, { Suspense }  from "react";
import Hero from "../components/Hero/hero";

const LandingPage = () => {
const ServicesPresentation = React.lazy(() => import("../Sections/ServicesPresentation/servicesPresentation"));
const DiscoverySection = React.lazy(() => import("../Sections/DiscoverySection/discoverySection"));
const ActorsSection = React.lazy(() => import("../Sections/ActorsSection/ActorsSection"));
const SubscriptionPlansSection = React.lazy(() => import("../Sections/SubscriptionPlansSection/subscriptionPlansSection"));
const CommunitySection = React.lazy(() => import("../Sections/CommunitySection/communitySection"));
const IncomeSection = React.lazy(() => import("../Sections/IncomeSection/incomeSection"));
    return (
    <>
        <Hero/> 
        <Suspense fallback={<p>Chargement...</p>}>
            <ServicesPresentation/>
            <DiscoverySection/>
            <ActorsSection/>
            <SubscriptionPlansSection/>
            <CommunitySection/>
            <IncomeSection/>
        </Suspense>
    </>

    )
}

export default LandingPage;