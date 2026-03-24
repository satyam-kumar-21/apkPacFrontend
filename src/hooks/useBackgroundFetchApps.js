import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetAppsQuery } from '../services/api';
import { setAllApps, setAppsLoading } from '../store';

/**
 * Hook to background fetch all apps and cache them in Redux
 * This makes app details load INSTANTLY from cache
 * Runs automatically on app mount (in App.jsx)
 */
const useBackgroundFetchApps = () => {
  const dispatch = useDispatch();

  // Fetch all apps in background with large limit
  const { data, isLoading, error } = useGetAppsQuery(
    { page: 1, limit: 10000 },
    {
      skip: false,
      refetchOnMountOrArgChange: false,
      refetchOnFocus: false,
      refetchOnReconnect: false,
    }
  );

  useEffect(() => {
    if (isLoading) {
      dispatch(setAppsLoading());
    } else if (data?.apps) {
      // Store all apps in Redux for instant access in app details pages
      dispatch(setAllApps(data.apps));
      console.log(`✓ Background loaded ${data.apps.length} apps into Redux cache`);
    }
  }, [data, isLoading, dispatch]);

  return { data, isLoading, error };
};

export default useBackgroundFetchApps;
