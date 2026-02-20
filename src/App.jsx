import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { HiOutlineViewGrid, HiOutlineDocumentText, HiOutlineCog, HiOutlineCalendar } from 'react-icons/hi';
import { MdApps } from "react-icons/md";

import { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import AppsPage from './pages/AppsPage';
import HomePage from './pages/HomePage';
import AppDetailsPage from './pages/AppDetailsPage';
import GamesPage from './pages/GamesPage';
import TopicsPage from './pages/TopicsPage';
import TopicDetailsPage from './pages/TopicDetailsPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ZipUnzipPage from './pages/ZipUnzipPage';
import QRToolPage from './pages/QRToolPage';
import SearchPage from './pages/SearchPage';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import TopAppsPage from './pages/TopAppsPage';
import FinanceAppsPage from './pages/FinanceAppsPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/admin/dashboard/*" element={<AdminDashboardLayout />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* Public routes with header/footer */}
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </div>
  );
}

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/apps/:id" element={<AppDetailsPage />} />
          <Route path="/apps/top-apps" element={<TopAppsPage />} />
          <Route path="/apps/finance" element={<FinanceAppsPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/posts/topics" element={<TopicsPage />} />
          <Route path="/posts/topics/:id" element={<TopicDetailsPage />} />
          <Route path="/posts/blogs" element={<BlogsPage />} />
          <Route path="/posts/blogs/:id" element={<BlogDetailsPage />} />
          <Route path="/tools/zip-unzip" element={<ZipUnzipPage />} />
          <Route path="/tools/qr-tool" element={<QRToolPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function AdminDashboardLayout() {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 text-white flex flex-col p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <HiOutlineCog size={32} className="text-yellow-400" />
          <h2 className="text-2xl font-extrabold tracking-wide">Admin Panel</h2>
        </div>
       <hr />
        <nav className="flex flex-col gap-3 pt-10">
          <Link to="/admin/dashboard" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-800 transition font-medium text-lg">
            <MdApps size={22} className="text-pink-400" /> Home
          </Link>
          <Link to="categories" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-800 transition font-medium text-lg">
            <HiOutlineViewGrid size={22} className="text-yellow-400" /> Categories
          </Link>
          <Link to="apps" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-800 transition font-medium text-lg">
            <HiOutlineViewGrid size={22} className="text-orange-400" /> Apps
          </Link>
          <Link to="blogs" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-800 transition font-medium text-lg">
            <HiOutlineDocumentText size={22} className="text-green-400" /> Blogs
          </Link>
          <Link to="topics" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-800 transition font-medium text-lg">
            <HiOutlineCog size={22} className="text-blue-400" /> Topics
          </Link>
          
        </nav>
      </aside>
      <main className="flex-1 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 p-8 min-h-screen">
        <AdminDashboard />
      </main>
    </div>
  );
}

export default App;
