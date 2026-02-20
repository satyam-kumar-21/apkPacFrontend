import React from "react";
import { useGetAppsQuery } from '../services/api';
import AdsSection from '../components/AdsSection';
import AppCard from '../components/AppCard';

const DesktopAppsPage = () => {
  const { data: apps = [], isLoading } = useGetAppsQuery();
  // Filter apps for desktop category
  const desktopApps = apps.filter(app => (app.category || '').toLowerCase().includes('desktop'));

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
      <div className="mb-8">
        <AdsSection />
      </div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Desktop Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading ? (
          <div className="col-span-2 text-center text-gray-500">Loading...</div>
        ) : desktopApps.map((app, idx) => (
          <AppCard app={app} idx={idx} key={app._id} />
        ))}
      </div>
    </div>
  );
};

export default DesktopAppsPage;
