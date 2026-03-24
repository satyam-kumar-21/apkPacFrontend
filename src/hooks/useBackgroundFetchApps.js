import { useEffect } from 'react';
import { useGetAppsQuery } from '../services/api';

/**
 * Hook to background fetch all apps and cache them in Redux
 * This makes app details load instantly from cache
 * Runs automatically on app mount (in App.jsx)
 */
export const useBackgroundFetchApps = () => {
  // Fetch all apps in background (10,000 limit should get everything)
  const { data, isLoading, error } = useGetAppsQuery({ 
    page: 1, 
    limit: 10000 
  }, { 
    // Skip initial fetch, only fetch in background
    skip: false,
    // Keep this data in cache permanently
    refetchOnMountOrArgChange: false,
    // Only fetch once
    refetchOnFocus: false,
    refetchOnReconnect: false
  });

  useEffect(() => {
    if (data && !isLoading) {
      // Apps are now cached in Redux store
      // Every app detail page will find the data instantly
      console.log(`✓ Background loaded ${data.apps?.length || 0} apps into Redux cache`);
    }
  }, [data, isLoading]);

  return { data, isLoading, error };
};

export default useBackgroundFetchApps;
