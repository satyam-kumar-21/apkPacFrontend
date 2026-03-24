import { configureStore, createSlice } from '@reduxjs/toolkit';
import { api } from './services/api';

// Create a slice to store background-fetched apps
const appsSlice = createSlice({
  name: 'apps',
  initialState: {
    allApps: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setAllApps: (state, action) => {
      state.allApps = action.payload;
      state.isLoading = false;
    },
    setAppsLoading: (state) => {
      state.isLoading = true;
    },
    setAppsError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setAllApps, setAppsLoading, setAppsError } = appsSlice.actions;

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    apps: appsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
