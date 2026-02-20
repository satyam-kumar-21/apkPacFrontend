import React from "react";
import { Link } from "react-router-dom";
import { useGetAppsQuery } from "../services/api";
import AppCard from "./AppCard";

const FinanceAppsSection = () => {
  const { data: apps = [], isLoading } = useGetAppsQuery();

  // Filter apps for finance category
  const financeApps = apps.filter((app) => (app.category || "").toLowerCase().includes("finance"));

  return (
    <section className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Finance</h2>
        <Link
          to="/apps/finance"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg font-bold shadow hover:scale-105 transition"
        >
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-3 text-center text-gray-500">Loading...</div>
        ) : financeApps.map((app, idx) => (
          <Link
            to={`/apps/${encodeURIComponent(app.name.toLowerCase().replace(/\s+/g, '-'))}`}
            key={app._id}
            className="no-underline"
            style={{ textDecoration: "none" }}
          >
            <AppCard app={app} idx={idx} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FinanceAppsSection;
