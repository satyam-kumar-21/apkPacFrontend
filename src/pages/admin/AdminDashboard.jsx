import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AppManager from './AppManager';
import BlogManager from './BlogManager';
import TopicManager from './TopicManager';

const AdminDashboard = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('apkpac_admin_token');
    setIsAuth(!!token);
  }, []);

  if (!isAuth) return <Navigate to="/admin/login" />;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <nav className="flex gap-4 mb-6">
        <Link to="apps" className="text-blue-600">Manage Apps</Link>
        <Link to="blogs" className="text-blue-600">Manage Blogs</Link>
        <Link to="topics" className="text-blue-600">Manage Topics</Link>
      </nav>
      <Routes>
        <Route index element={<AppManager />} />
        <Route path="apps/*" element={<AppManager />} />
        <Route path="blogs/*" element={<BlogManager />} />
        <Route path="topics/*" element={<TopicManager />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
