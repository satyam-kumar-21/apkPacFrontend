import React from "react";
import { Link } from "react-router-dom";
import AppCard from "./AppCard";
import { useGetAppsQuery } from "../services/api";

const PersonalizationAppsSection = () => {
  const { data: apps = [], isLoading } = useGetAppsQuery();
  // Filter apps for description1 category 'Personalization' or direct category 'personalization'
  const personalizationApps = apps.filter((app) => {
    let isPersonalization = false;
    if (app.description1) {
      const match = app.description1.match(/<td[^>]*>\s*Category\s*<\/td>\s*<td[^>]*>(.*?)<\/td>/i);
      if (match && match[1].toLowerCase() === "personalization") {
        isPersonalization = true;
      }
    }
    if (app.category && app.category.toLowerCase() === "personalization") {
      isPersonalization = true;
    }
    return isPersonalization;
  });
  const showApps = personalizationApps.slice(0, 9);

  return (
    <section className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Personalization</h2>
        <Link
          to="/apps/personalization"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-lg font-bold shadow hover:scale-105 transition"
        >
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-3 text-center text-gray-500">Loading...</div>
        ) : showApps.map((app, idx) => (
          <AppCard key={app._id} app={app} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default PersonalizationAppsSection;
