
import React from "react";
import { Link } from "react-router-dom";
import AppCard from "./AppCard";
import { useGetAppsQuery } from "../services/api";
import { useSelector } from "react-redux";


const AppsSection = ({ category, batchApps }) => {
  // Priority 1: Direct batch data from parent (single API call)
  // Priority 2: Redux cache
  // Priority 3: Individual API call (fallback)
  const allApps = useSelector((state) => state.apps.allApps);
  const cachedApps = React.useMemo(() => {
    if (batchApps && batchApps.length > 0) return batchApps;
    if (!allApps || allApps.length === 0) return null;
    const cat = category.toLowerCase();
    return allApps
      .filter(a => a.category?.toLowerCase() === cat)
      .slice(0, 9);
  }, [allApps, category, batchApps]);

  const hasData = cachedApps && cachedApps.length > 0;

  // Only fetch from API if no cached/batch data
  const { data, isLoading } = useGetAppsQuery(
    { page: 1, limit: 9, category },
    { skip: hasData }
  );
  const apps = hasData ? cachedApps : (data?.apps || []);

  return (
    <section className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category}</h2>
        <Link
          to={`/apps/${category.toLowerCase()}`}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg font-bold shadow hover:scale-105 transition"
        >
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(!hasData && isLoading) ? (
          <div className="col-span-3 text-center text-gray-500">Loading...</div>
        ) : apps.map((app, idx) => (
          <AppCard key={app._id} app={app} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default AppsSection;
