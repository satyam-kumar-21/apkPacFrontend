import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/apps/:id" element={<AppDetailsPage />} />
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
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
