import React, { useMemo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAppsQuery, useGetAppBySlugQuery } from "../services/api";
import { useSelector } from 'react-redux';
import AppsSection from "../components/AppsSection";
import AdsSection from "../components/AdsSection";

import RatingsBar from "../components/RatingsBar";
import DownloadButtons from "../components/DownloadButtons";

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaTag, FaCodeBranch, FaCalendarAlt, FaUserTie, FaShieldAlt, FaDollarSign } from 'react-icons/fa';
import AppCard from '../components/AppCard';

const AppDetailsPage = () => {
  const { id } = useParams();
  const slug = id.toLowerCase();
  const [cachedApp, setCachedApp] = useState(null);

  // First, get the full cache of all apps that was pre-loaded in background
  const { data: allAppsData } = useGetAppsQuery({ 
    page: 1, 
    limit: 10000 
  }, { 
    skip: false,
    refetchOnMountOrArgChange: false,
    refetchOnFocus: false,
    refetchOnReconnect: false
  });

  // Search for the app in the cached data FIRST (instant, before any backend call)
  useEffect(() => {
    if (allAppsData?.apps?.length > 0) {
      const foundApp = allAppsData.apps.find(app =>
        app.name.toLowerCase().replace(/\s+/g, '-') === slug ||
        app.slug?.toLowerCase() === slug ||
        app.name.toLowerCase() === slug.replace(/-/g, ' ')
      );
      if (foundApp) {
        setCachedApp(foundApp);
      }
    }
  }, [allAppsData, slug]);

  // Only fetch from backend if NOT found in cache
  const shouldFetchFromBackend = !cachedApp;
  const { data: appFromBackend, isLoading: backendLoading, error: backendError } = useGetAppBySlugQuery(slug, {
    skip: !shouldFetchFromBackend // Skip if we found it in cache
  });

  // Use cache first, fall back to backend
  const app = cachedApp || appFromBackend;
  const isLoading = !cachedApp && backendLoading;
  const error = !cachedApp && backendError;

  // Get similar apps - try from cache first, then backend
  let desc1Category = undefined;
  if (app) {
    desc1Category = app.category;
    if (app.description1) {
      const match = app.description1.match(/<td[^>]*>\s*Category\s*<\/td>\s*<td[^>]*>(.*?)<\/td>/i);
      if (match) desc1Category = match[1];
    }
  }

  // Try to get similar apps from cache first
  const cachedSimilarApps = useMemo(() => {
    if (!allAppsData?.apps || !desc1Category) return [];
    return allAppsData.apps
      .filter(a => a.category === desc1Category && app && a._id !== app._id)
      .slice(0, 6);
  }, [allAppsData, desc1Category, app]);

  // Only fetch from backend if cache doesn't have similar apps
  const { data: similarData, isLoading: loadingSimilar } = useGetAppsQuery(
    { category: desc1Category, limit: 6 },
    { skip: cachedSimilarApps.length > 0 }
  );
  const desc1MatchedApps = cachedSimilarApps.length > 0 
    ? cachedSimilarApps 
    : (similarData?.apps || []).filter(a => app && a._id !== app._id);

  if (isLoading) return <div className="p-8 text-center text-lg">Loading...</div>;
  if (error || !app) return <div className="p-8 text-center text-lg">App not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-2 md:px-0 mt-8 mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-5 mb-4">
            <img src={app.icon} alt={app.name} className="w-20 h-20 rounded-xl object-cover border bg-gray-100" />
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-1">{app.name}</h1>
              <div className="flex items-center gap-2 text-gray-700 text-base">
                <span className="font-semibold text-xl text-yellow-500">★</span>
                <span className="font-medium text-lg">{app.rating}</span>
                {/* Show category value from description1 table */}
                {(() => {
                  let categoryValue = app.category;
                  if (app.description1) {
                    const match = app.description1.match(/<td[^>]*>\s*Category\s*<\/td>\s*<td[^>]*>(.*?)<\/td>/i);
                    if (match) categoryValue = match[1];
                  }
                  return (
                    <span className="ml-3 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 font-medium">{categoryValue}</span>
                  );
                })()}
                {/* Show downloads */}
                {app.downloads && (
                  <span className="ml-3 px-2 py-0.5 text-xs rounded bg-green-100 text-green-700 font-medium">{app.downloads} downloads</span>
                )}
              </div>
            </div>
          </div>
          {/* Ads Section (taller) */}
          <div className="my-8">
            <AdsSection />
          </div>
          {/* App Info Table (description1 as HTML, styled with icons) */}
          {app.description1 && (
            <div className="overflow-x-auto mb-8">
              <div className="min-w-[320px] w-full rounded-xl bg-white text-sm text-gray-800 p-0">
                <table className="w-full border border-gray-200 rounded-xl bg-white text-sm text-gray-800" style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    {(() => {
                      // Extract rows from description1 HTML
                      const rows = [];
                      const regex = /<tr[^>]*>(.*?)<\/tr>/gi;
                      let match;
                      while ((match = regex.exec(app.description1))) {
                        const cells = match[1].match(/<td[^>]*>(.*?)<\/td>/g);
                        if (cells && cells.length === 2) {
                          const key = cells[0].replace(/<td[^>]*>|<\/td>/g, '').trim();
                          const value = cells[1].replace(/<td[^>]*>|<\/td>/g, '').trim();
                          let icon = null;
                          if (/category/i.test(key)) icon = <FaTag className="inline mr-2 text-blue-500" />;
                          else if (/latest version/i.test(key)) icon = <FaCodeBranch className="inline mr-2 text-purple-500" />;
                          else if (/publish date/i.test(key)) icon = <FaCalendarAlt className="inline mr-2 text-green-500" />;
                          else if (/developer/i.test(key)) icon = <FaUserTie className="inline mr-2 text-indigo-500" />;
                          else if (/security/i.test(key)) icon = <FaShieldAlt className="inline mr-2 text-yellow-500" />;
                          else if (/price/i.test(key)) icon = <FaDollarSign className="inline mr-2 text-gray-500" />;
                          rows.push(
                            <tr className="border-b" key={key}>
                              <td className="py-2 px-4 font-semibold w-40 flex items-center">{icon}{key}</td>
                              <td className="py-2 px-4">{value}</td>
                            </tr>
                          );
                        }
                      }
                      return rows;
                    })()}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <AdsSection />
          {/* Features (description2 as HTML) */}
          {app.description2 && (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-3">Features of {app.name}</h2>
              <div className="prose prose-indigo max-w-none mb-4" dangerouslySetInnerHTML={{ __html: app.description2 }} />
            </>
          )}
          {/* Ads after features */}
          <div className="my-8">
            <AdsSection />
          </div>
          {/* FAQ (description3 as HTML) */}
          {app.description3 && (
            <>
              
              <div className="prose prose-indigo max-w-none mb-4" dangerouslySetInnerHTML={{ __html: app.description3 }} />
            </>
          )}
          {/* Custom App image scroller and download buttons */}
          {Array.isArray(app.images) && app.images.length > 0 && (
            <div className="my-8">
              <h3 className="text-lg font-bold mb-2">Screenshots</h3>
              <div className="relative">
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-indigo-700 z-10"
                  style={{ left: 0 }}
                  onClick={() => {
                    const scroller = document.getElementById('app-image-scroller');
                    if (scroller) scroller.scrollBy({ left: -320, behavior: 'smooth' });
                  }}
                  aria-label="Scroll left"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-indigo-700 z-10"
                  style={{ right: 0 }}
                  onClick={() => {
                    const scroller = document.getElementById('app-image-scroller');
                    if (scroller) scroller.scrollBy({ left: 320, behavior: 'smooth' });
                  }}
                  aria-label="Scroll right"
                >
                  <FaChevronRight />
                </button>
                <div
                  id="app-image-scroller"
                  className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar"
                  style={{ maxHeight: 220 }}
                >
                  {app.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Screenshot ${idx + 1}`}
                      className="rounded-lg border border-gray-200 flex-shrink-0 bg-gray-50"
                      style={{
                        width: 'auto',
                        height: '200px',
                        maxWidth: '320px',
                        objectFit: 'scale-down',
                        background: '#f3f4f6',
                      }}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* If category is desktop, show Microsoft Store icon instead of Play Store */}
          {(() => {
            let isDesktop = false;
            let cat1 = (app.category || '').toLowerCase();
            let cat2 = '';
            if (app.description1) {
              const match = app.description1.match(/<td[^>]*>\s*Category\s*<\/td>\s*<td[^>]*>(.*?)<\/td>/i);
              if (match) cat2 = match[1].toLowerCase();
            }
            if (cat1.includes('desktop') || cat1.includes('windows') || cat2.includes('desktop') || cat2.includes('windows')) isDesktop = true;
            return (
              <DownloadButtons playUrl={app.playStoreUrl} appStoreUrl={app.appStoreUrl} isDesktop={isDesktop} />
            );
          })()}
          {/* Ratings bar */}
          <RatingsBar rating={app.rating} votes={app.votes} />


          {/* Ads Section (taller) */}
          <div className="my-8">
            <AdsSection />
          </div>
          {/* Other Popular Apps section using AppsSection */}
          <AppsSection category="Popular Apps" />
        </div>
        {/* Sidebar */}
        <div className="w-full md:w-72 flex-shrink-0 flex flex-col">
          <AdsSection />
          {loadingSimilar ? (
            <div className="my-10 text-center text-gray-500">Loading similar apps...</div>
          ) : desc1MatchedApps.length > 0 && (
            <div className="my-10">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Similar Apps</h3>
              <div className="flex flex-col gap-3">
                {desc1MatchedApps.map((a, idx) => (
                  <AppCard app={a} idx={idx} key={a._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
