import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppCard from "./AppCard";
import { useGetAppsQuery } from "../services/api";

const BusinessAppsSection = () => {
  const [page, setPage] = useState(0);
  const limit = 9;
  const { data, isLoading, isFetching } = useGetAppsQuery({ category: "Business", limit, skip: page * limit });
  const apps = data?.apps || [];
  const total = data?.total || 0;
  const canLoadMore = (page + 1) * limit < total;

  return (
    <section className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Business</h2>
        <Link
          to="/apps/business"
          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-lg font-bold shadow hover:scale-105 transition"
        >
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(isLoading || isFetching) && apps.length === 0 ? (
          Array.from({ length: limit }).map((_, i) => (
            <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-xl col-span-1 md:col-span-1" />
          ))
        ) : (
          apps.map((app, idx) => (
            <AppCard key={app._id} app={app} idx={page * limit + idx} />
          ))
        )}
      </div>
      {canLoadMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold shadow hover:scale-105 transition disabled:opacity-50"
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default BusinessAppsSection;