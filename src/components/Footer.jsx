
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-t from-gray-100 to-white border-t mt-12 pt-8 pb-4 text-gray-700">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-2xl font-bold text-blue-700 tracking-tight mb-1">APKPAC</span>
        <span className="text-sm">&copy; {new Date().getFullYear()} APKPAC. All rights reserved.</span>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium">
        <a href="/about-us" className="hover:text-blue-700 transition">About Us</a>
        <a href="/privacy-policy" className="hover:text-blue-700 transition">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:text-blue-700 transition">Terms of Service</a>
        <a href="/disclaimer" className="hover:text-blue-700 transition">Disclaimer</a>
      </nav>
      <div className="flex justify-center gap-4 text-xl mt-2 md:mt-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition"><FaInstagram /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition"><FaGithub /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
