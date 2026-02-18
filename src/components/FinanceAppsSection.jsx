import React from "react";
import { Link } from "react-router-dom";
import financeApps from "../data/financeApps";

const FinanceAppsSection = () => (
  <section className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Finance</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {financeApps.map((app, idx) => (
        <Link
          to={`/apps/${app.id}`}
          key={app.id}
          className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition group border border-gray-100 cursor-pointer no-underline"
          style={{ textDecoration: 'none' }}
        >
          <div className="flex-shrink-0">
            <img
              src={app.image}
              alt={app.name}
              className="w-14 h-14 rounded-xl object-contain border border-gray-200 bg-gray-100"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg text-gray-800 truncate">
                {idx + 1}. {app.name}
              </span>
              <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 font-medium">
                {app.category}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-500 font-bold text-base">★</span>
              <span className="text-gray-700 text-sm font-medium">{app.rating}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default FinanceAppsSection;
