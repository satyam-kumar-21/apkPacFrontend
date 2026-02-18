import React from "react";
import AdsSection from "../components/AdsSection";
import PopularGamesSection from "../components/PopularGamesSection";

const GamesPage = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4 w-full max-w-6xl px-4 mx-auto">Games</h1>
      <div className="my-8">
        <AdsSection />
      </div>
      <PopularGamesSection />
      <div className="my-8">
        <AdsSection />
      </div>
    </>
  );
};

export default GamesPage;
