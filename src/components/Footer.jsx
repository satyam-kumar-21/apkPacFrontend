
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
  <footer className="bg-gradient-to-t from-gray-100 to-white border-t mt-12 pt-8 pb-4 text-gray-700">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
      <div className="w-full md:w-[30%] flex flex-col items-start text-left mb-6 md:mb-0">
        <img src="/smartAppInfoLogo.png" alt="SmartAppInfo.com Logo" className="h-14 w-auto mb-2" />
        <span className="text-xs">&copy; {new Date().getFullYear()} SmartAppInfo.com. All rights reserved.</span>
      </div>
      <div className="w-full md:w-[30%] flex flex-col mb-6 md:mb-0">
        <span className="font-semibold text-gray-800 mb-2 block text-base">Company</span>
        <ul className="flex flex-wrap gap-4 md:flex-col md:gap-2 text-sm">
          <li><Link to="/about-us" className="hover:text-blue-700 transition">About Us</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/contact-us" className="hover:text-blue-700 transition">Contact Us</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/privacy-policy" className="hover:text-blue-700 transition">Privacy Policy</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/cookie-policy" className="hover:text-blue-700 transition">Cookie Policy</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/terms-of-service" className="hover:text-blue-700 transition">Terms of Service</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/disclaimer" className="hover:text-blue-700 transition">Disclaimer</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/accessibility-statement" className="hover:text-blue-700 transition">Accessibility</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/dmca-policy" className="hover:text-blue-700 transition">DMCA Policy</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/editorial-transparency" className="hover:text-blue-700 transition">Editorial Transparency</Link></li>
        </ul>
      </div>
      <div className="w-full md:w-[30%] flex flex-col">
        <span className="font-semibold text-gray-800 mb-2 block text-base">Quick Links</span>
        <ul className="flex flex-wrap gap-4 md:flex-col md:gap-2 text-sm">
          <li><Link to="/apps/entertainment" className="hover:text-blue-700 transition">Entertainment Apps</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/apps/finance" className="hover:text-blue-700 transition">Finance Apps</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/apps/tools" className="hover:text-blue-700 transition">Tools Apps</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/apps/games" className="hover:text-blue-700 transition">Games</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/tools/zip-unzip" className="hover:text-blue-700 transition">Zip & Unzip</Link></li>
          <span className="block md:hidden text-gray-400">|</span>
          <li><Link to="/tools/qr-tool" className="hover:text-blue-700 transition">QR Code Scanner & Generator</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
