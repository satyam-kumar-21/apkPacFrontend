import React from "react";
import AdsSection from "../components/AdsSection";
import PopularGamesSection from "../components/PopularGamesSection";
import ActionGameSection from "../components/ActionGameSection";
import AdventureGameSection from "../components/AdventureGameSection";
import BoardGameSection from "../components/BoardGameSection";
import CardGameSection from "../components/CardGameSection";
import CasualGameSection from "../components/CasualGameSection";
import DemoGameSection from "../components/DemoGameSection";
import MusicGameSection from "../components/MusicGameSection";
import PuzzleGameSection from "../components/PuzzleGameSection";
import RolePlayingGameSection from "../components/RolePlayingGameSection";
import SimulationGameSection from "../components/SimulationGameSection";
import SportsGameSection from "../components/SportsGameSection";
import WordGameSection from "../components/WordGameSection";

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

      <ActionGameSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <AdventureGameSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <BoardGameSection />
      <div className="my-8">
        <AdsSection />
      </div>
      <CardGameSection />
      <div className="my-8">
        <AdsSection />
      </div>
      <CasualGameSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <DemoGameSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <MusicGameSection />

      <div className="my-8">
        <AdsSection />
      </div>

      <PuzzleGameSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <RolePlayingGameSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <SimulationGameSection />
      <div className="my-8">
        <AdsSection />
      </div>

      <SportsGameSection />

      <div className="my-8">
        <AdsSection />
      </div>
      <WordGameSection />

      <div className="my-8">
        <AdsSection />
      </div>

      <div className="my-8">
        <AdsSection />
      </div>


      <div className="my-8">
        <AdsSection />
      </div>
    </>
  );
};

export default GamesPage;
