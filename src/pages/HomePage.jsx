import React from "react";
import HeroSection from "../components/HeroSection";
import TopFreeAppsList from "../components/TopFreeAppsList";
import AdsSection from "../components/AdsSection";
import PopularGamesSection from "../components/PopularGamesSection";
import PopularDesktopSoftwares from "../components/PopularDesktopSoftwares";
import FinanceAppsSection from "../components/FinanceAppsSection";
import EntertainmentAppsSection from "../components/EntertainmentAppsSection";
import ToolsAppsSection from "../components/ToolsAppsSection";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <div className="my-8">
                <AdsSection />
            </div>



            <TopFreeAppsList />
            <div className="my-8">
                <AdsSection />
            </div>

            <PopularGamesSection />
            <div className="my-8">
                <AdsSection />
            </div>
            <PopularDesktopSoftwares />

            <div className="my-8">
                <AdsSection />
            </div>
            <FinanceAppsSection />

            <div className="my-8">
                <AdsSection />
            </div>
            <EntertainmentAppsSection />
            <div className="my-8">
                <AdsSection />
            </div>
            <ToolsAppsSection />

            <div className="my-8">
                <AdsSection />
            </div>
        </>
    );
};

export default HomePage;
