import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useGetAppsQuery } from '../services/api';

const AppCard = ({ app, idx }) => {
  // Extract category from description1 table
  let categoryValue = app.category;
  if (app.description1) {
    const match = app.description1.match(/<td[^>]*>\s*Category\s*<\/td>\s*<td[^>]*>(.*?)<\/td>/i);
    if (match) categoryValue = match[1];
  }
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition border border-gray-100">
      <div className="flex items-center gap-4">
        <img src={app.icon} alt={app.name} className="w-14 h-14 rounded-xl object-cover border border-gray-200 bg-gray-100" loading="lazy" />
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-lg text-gray-800 truncate block mb-1">
            {idx + 1}. {app.name}
          </span>
          <span className="inline-block px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 font-medium mb-2">
            {categoryValue}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <FaStar className="text-yellow-500 font-bold text-base" />
            <span className="text-gray-700 text-sm font-medium">{app.rating}</span>
            {app.downloads && (
              <span className="ml-2 px-2 py-0.5 text-xs rounded bg-green-100 text-green-700 font-medium">{app.downloads} downloads</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;