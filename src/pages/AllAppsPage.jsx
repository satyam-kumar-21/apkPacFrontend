import React from "react";
import { useParams } from "react-router-dom";
import { useGetAppsQuery } from '../services/api';
import AdsSection from '../components/AdsSection';
import AppCard from '../components/AppCard';

const categoryMap = {
  "top-apps": "top app",
  "desktop": "desktop",
  "popular-apps": "popular",
  "games": "game",
  "finance": "finance",
  "tools": "tool",
  "entertainment": "entertainment"
};

const AllAppsPage = () => {
  const { slug } = useParams();
  const { data: apps = [], isLoading } = useGetAppsQuery();
  const categoryKey = categoryMap[slug] || slug;
  let filteredApps = [];
  // For entertainment, tools, productivity: filter by description1 category
  if (["entertainment", "tools", "productivity"].includes(slug)) {
    filteredApps = apps.filter(app => {
      if (app.description1) {
        const match = app.description1.match(/<td[^>]*>\s*Category\s*<\/td>\s*<td[^>]*>(.*?)<\/td>/i);
        if (match && match[1].toLowerCase() === slug) {
          return true;
        }
      }
      return false;
    });
  } else {
    filteredApps = apps.filter(app => (app.category || '').toLowerCase().includes(categoryKey));
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
      <div className="mb-8">
        <AdsSection />
      </div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900">{slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading ? (
          <div className="col-span-2 text-center text-gray-500">Loading...</div>
        ) : filteredApps.map((app, idx) => (
          <AppCard app={app} idx={idx} key={app._id} />
        ))}
      </div>
    </div>
  );
};

export default AllAppsPage;
