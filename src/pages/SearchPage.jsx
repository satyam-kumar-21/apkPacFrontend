import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetAppsQuery } from '../services/api';
import AppCard from '../components/AppCard';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const trimmedQuery = searchQuery.trim();

  // Use backend search only when search query exists
  const searchQueryParams = trimmedQuery ? { 
    page: 1, 
    limit: 10000,
    search: trimmedQuery
  } : { 
    page: 1, 
    limit: 10000
  };

  const { data, isLoading } = useGetAppsQuery(searchQueryParams);
  const filteredApps = data?.apps || [];

  // Get random app suggestions (top-rated or recently added)
  const suggestions = useMemo(() => {
    if (filteredApps.length === 0) {
      return [];
    }
    
    // Show top-rated apps from search results
    return [...filteredApps]
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(5, 10); // Skip first 5 (main results) and get next 5
  }, [filteredApps]);

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-2">Search Results</h1>
      {searchQuery && (
        <p className="text-gray-600 mb-6">
          Found {filteredApps.length} result{filteredApps.length !== 1 ? 's' : ''} for "<strong>{searchQuery}</strong>"
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Search Results - 3 columns on large screens */}
        <div className="lg:col-span-3">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredApps.map((app, idx) => (
                <AppCard key={app._id} app={app} idx={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-lg">
                {searchQuery ? 'No apps found matching your search.' : 'Enter a search term to find apps.'}
              </p>
            </div>
          )}
        </div>

        {/* App Suggestions - 1 column on large screens */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 sticky top-24">
            <h2 className="text-xl font-bold mb-4 text-gray-900">App Suggestions</h2>
            {isLoading ? (
              <p className="text-gray-500">Loading suggestions...</p>
            ) : suggestions.length > 0 ? (
              <div className="space-y-3">
                {suggestions.map((app, idx) => {
                  const slug = app.name ? app.name.toLowerCase().replace(/\s+/g, '-') : '';
                  return (
                    <a
                      href={`/app/${encodeURIComponent(slug)}`}
                      key={app._id}
                      className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200 no-underline"
                    >
                      <div className="flex gap-2">
                        <img
                          src={app.icon}
                          alt={app.name}
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-gray-800 truncate">
                            {app.name}
                          </p>
                          <p className="text-xs text-yellow-600 font-bold">
                            ⭐ {app.rating || 'N/A'}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No suggestions available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
