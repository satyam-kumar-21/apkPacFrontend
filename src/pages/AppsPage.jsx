import React from "react";
import TopFreeAppsList from "../components/TopFreeAppsList";
import AdsSection from "../components/AdsSection";
import PopularGamesSection from "../components/PopularGamesSection";
import PopularDesktopSoftwares from "../components/PopularDesktopSoftwares";
import FinanceAppsSection from "../components/FinanceAppsSection";
import EntertainmentAppsSection from "../components/EntertainmentAppsSection";
import ToolsAppsSection from "../components/ToolsAppsSection";

const AppsPage = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4 w-full max-w-6xl px-4 mx-auto">Apps</h1>
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

export default AppsPage;
