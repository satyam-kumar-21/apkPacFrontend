import React from "react";
import { Link } from "react-router-dom";
import AppCard from './AppCard';
import { useGetAppsQuery } from '../services/api';

const PopularGamesSection = () => {
  const { data: apps = [], isLoading } = useGetAppsQuery();
  // Filter apps for games category
  const gamesApps = apps.filter(app => (app.category || '').toLowerCase().includes('games'));

  return (
    <section className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Games</h2>
        <Link
          to="/games"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg font-bold shadow hover:scale-105 transition"
        >
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-3 text-center text-gray-500">Loading...</div>
        ) : gamesApps.map((app, idx) => {
          // Extract category from description1 table for display
          let categoryValue = app.category;
          if (app.description1) {
            const match = app.description1.match(/<td[^>]*>\s*Category\s*<\/td>\s*<td[^>]*>(.*?)<\/td>/i);
            if (match) categoryValue = match[1];
          }
          return (
            <Link
              to={`/app/${encodeURIComponent(app.name.toLowerCase().replace(/\s+/g, '-'))}`}
              key={app._id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition border border-gray-100 flex items-center gap-4 cursor-pointer no-underline"
              style={{ textDecoration: 'none' }}
            >
              <img src={app.icon} alt={app.name} className="w-14 h-14 rounded-xl object-cover border border-gray-200 bg-gray-100" loading="lazy" />
              <div className="flex-1 min-w-0">
                <span className="font-semibold text-lg text-gray-800 truncate block mb-1">
                  {idx + 1}. {app.name}
                </span>
                <span className="inline-block px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 font-medium mb-2">
                  {categoryValue}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-yellow-500 font-bold text-base">★</span>
                  <span className="text-gray-700 text-sm font-medium">{app.rating}</span>
                  {app.downloads && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded bg-green-100 text-green-700 font-medium">{app.downloads} downloads</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PopularGamesSection;
