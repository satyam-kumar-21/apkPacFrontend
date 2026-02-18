import React from "react";
import EditorsChoiceSection from "../components/EditorsChoiceSection";
import AdsSection from "../components/AdsSection";
import TopFreeAppsList from "../components/TopFreeAppsList";
import PopularDesktopSoftwares from "../components/PopularDesktopSoftwares";
import PopularGamesSection from "../components/PopularGamesSection";

const TopicsPage = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4 w-full max-w-6xl px-4 mx-auto">Topics</h1>
      <div className="my-8">
        <AdsSection />
      </div>
      <EditorsChoiceSection />
      <div className="my-8">
        <AdsSection />
      </div>
      <TopFreeAppsList />
      <div className="my-8">
        <AdsSection />
      </div>
      <PopularDesktopSoftwares />
       <div className="my-8">
        <AdsSection />
      </div>
      <PopularGamesSection/>
      <div className="my-8">
        <AdsSection />
      </div>
    </>
  );
};

export default TopicsPage;
