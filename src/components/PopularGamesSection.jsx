import React from "react";

const popularGames = [
  {
    id: 1,
    name: "Block Blast!",
    category: "Puzzle",
    rating: 4.8,
    image: "https://static1.squarespace.com/static/58af450eb3db2b0582612f1d/58af55d29a6bf733a4093aaa/696ddcaf0ae86111e4612195/1768910912305/block-blast-online1.jpeg?format=1500w"
  },
  {
    id: 2,
    name: "Disney Solitaire",
    category: "Card",
    rating: 4.8,
    image: "https://static1.squarespace.com/static/58af450eb3db2b0582612f1d/58af55d29a6bf733a4093aaa/696ddcaf0ae86111e4612195/1768910912305/block-blast-online1.jpeg?format=1500w"
  },
  {
    id: 3,
    name: "Tile Explorer - Triple Match",
    category: "Puzzle",
    rating: 4.9,
    image: "https://static1.squarespace.com/static/58af450eb3db2b0582612f1d/58af55d29a6bf733a4093aaa/696ddcaf0ae86111e4612195/1768910912305/block-blast-online1.jpeg?format=1500w"
  },
  {
    id: 4,
    name: "Roblox",
    category: "Adventure",
    rating: 4.3,
    image: "https://static1.squarespace.com/static/58af450eb3db2b0582612f1d/58af55d29a6bf733a4093aaa/696ddcaf0ae86111e4612195/1768910912305/block-blast-online1.jpeg?format=1500w"
  },
  {
    id: 5,
    name: "Vita Mahjong",
    category: "Board",
    rating: 4.8,
    image: "https://static1.squarespace.com/static/58af450eb3db2b0582612f1d/58af55d29a6bf733a4093aaa/696ddcaf0ae86111e4612195/1768910912305/block-blast-online1.jpeg?format=1500w"
  },
  {
    id: 6,
    name: "Arrows – Puzzle Escape",
    category: "Puzzle",
    rating: 4.7,
    image: "https://static1.squarespace.com/static/58af450eb3db2b0582612f1d/58af55d29a6bf733a4093aaa/696ddcaf0ae86111e4612195/1768910912305/block-blast-online1.jpeg?format=1500w"
  }
];


const PopularGamesSection = () => (
  <section className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Popular Games</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {popularGames.map((game) => (
        <div
          key={game.id}
          className="bg-white rounded-2xl shadow-lg p-0 overflow-hidden flex flex-col hover:shadow-xl transition border border-gray-100"
        >
          <img
            src={game.image}
            alt={game.name}
            className="w-full h-32 object-cover"
            loading="lazy"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-1 truncate">{game.name}</h3>
              <span className="inline-block px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 font-medium mb-2">
                {game.category}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500 font-bold text-base">★</span>
              <span className="text-gray-700 text-sm font-medium">{game.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PopularGamesSection;
