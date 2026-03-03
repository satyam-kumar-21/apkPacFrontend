import React from "react";
import TopFreeAppsList from "../components/TopFreeAppsList";
import AdsSection from "../components/AdsSection";
import PopularGamesSection from "../components/PopularGamesSection";
import PopularAppsSection from "../components/PopularAppsSection";
import PopularDesktopSoftwares from "../components/PopularDesktopSoftwares";
import FinanceAppsSection from "../components/FinanceAppsSection";
import EntertainmentAppsSection from "../components/EntertainmentAppsSection";
import CommunicationAppsSection from "../components/CommunicationAppsSection";
import ToolsAppsSection from "../components/ToolsAppsSection";
import ShoppingAppsSection from "../components/ShoppingAppsSection";
import ProductivityAppsSection from "../components/ProductivityAppsSection";
import FoodAppsSection from "../components/FoodAppsSection";
import AudioAppsSection from "../components/AudioAppsSection";
import BusinessAppsSection from "../components/BusinessAppsSection";
import SocialAppsSection from "../components/SocialAppsSection";

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

      <PopularAppsSection />
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

      <CommunicationAppsSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <ToolsAppsSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <ShoppingAppsSection />
        <div className="my-8">
          <AdsSection />
        </div>
        <FoodAppsSection />
          <div className="my-8">
            <AdsSection />
          </div>
          <AudioAppsSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <ProductivityAppsSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <BusinessAppsSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <SocialAppsSection />
      <div className="my-8">
        <AdsSection />
      </div>
    </>
  );
};

export default AppsPage;
