import React from "react";
import { useGetAppsQuery } from '../services/api';
import AdsSection from '../components/AdsSection';
import AppCard from '../components/AppCard';
import { Link } from 'react-router-dom';

const FinanceAppsPage = () => {
  const { data: apps = [], isLoading } = useGetAppsQuery();
  // Filter apps for finance category
  const financeApps = apps.filter(app => (app.category || '').toLowerCase().includes('finance'));

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 mb-8 px-4">
      <div className="mb-8">
        <AdsSection />
      </div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Finance Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading ? (
          <div className="col-span-2 text-center text-gray-500">Loading...</div>
        ) : financeApps.map((app, idx) => (
          <Link
            to={`/apps/${encodeURIComponent(app.name.toLowerCase().replace(/\s+/g, '-'))}`}
            key={app._id}
            className="no-underline"
            style={{ textDecoration: 'none' }}
          >
            <AppCard app={app} idx={idx} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FinanceAppsPage;
