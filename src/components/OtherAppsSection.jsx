import React from "react";
import { topFreeApps } from "../data/topFreeApps";
import { Link } from "react-router-dom";

const OtherAppsSection = ({ excludeId }) => {
  const otherApps = topFreeApps.filter((app) => app.id !== Number(excludeId)).slice(0, 6);
  return (
    <div className="my-10">
      <h3 className="text-lg font-bold mb-4 text-gray-900">Other Popular Apps</h3>
      <div className="flex flex-col gap-3">
        {otherApps.map((app) => (
          <Link
            to={`/apps/${app.id}`}
            key={app.id}
            className="flex items-center gap-3 bg-white rounded-xl shadow p-3 hover:shadow-md transition border border-gray-100 no-underline"
          >
            <img
              src={app.image}
              alt={app.name}
              className="w-10 h-10 rounded-lg object-cover border bg-gray-100"
              loading="lazy"
            />
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-sm text-gray-800 truncate block">
                {app.name}
              </span>
              <span className="text-xs rounded bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">
                {app.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherAppsSection;
