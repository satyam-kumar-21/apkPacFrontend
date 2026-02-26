  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('apkpac_admin_token');
    navigate('/admin/login');
  };

import React, { useState, useRef, useEffect } from 'react';
import { useGetAppsQuery } from '../services/api';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineViewGrid, HiOutlinePuzzle, HiOutlineDocumentText, HiOutlineCog, HiOutlineSearch } from 'react-icons/hi';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: apps = [] } = useGetAppsQuery();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const searchResults = search.trim()
    ? apps.filter(app => {
        const keyword = search.toLowerCase();
        let descCat = app.category || '';
        if (app.description1) {
          const match = app.description1.match(/<td[^>]*>\s*Category\s*<\/td>\s*<td[^>]*>(.*?)<\/td>/i);
          if (match) descCat += ' ' + match[1];
        }
        return (
          app.name.toLowerCase().includes(keyword) ||
          (app.category && app.category.toLowerCase().includes(keyword)) ||
          descCat.toLowerCase().includes(keyword)
        );
      }).slice(0, 8)
    : [];
  const [mobileMenu, setMobileMenu] = useState(false);

  // Close dropdowns when mobile menu closes
  useEffect(() => {
    if (!mobileMenu) setOpenDropdown(null);
  }, [mobileMenu]);

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenu(false);
  }, [location.pathname]);

  // Close mobile dropdowns on outside click (mobile only)
  useEffect(() => {
    if (!mobileMenu) return;
    const handleClick = (e) => {
      const postsBtn = document.getElementById('mobile-posts-btn');
      const postsDropdown = document.getElementById('mobile-posts-dropdown');
      if (
        openDropdown === 'posts' &&
        postsBtn && !postsBtn.contains(e.target) &&
        postsDropdown && !postsDropdown.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openDropdown, mobileMenu]);
  const postsDropdownRef = useRef();
  const toolsDropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        (openDropdown === 'posts' && postsDropdownRef.current && !postsDropdownRef.current.contains(e.target)) ||
        (openDropdown === 'tools' && toolsDropdownRef.current && !toolsDropdownRef.current.contains(e.target))
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openDropdown]);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
      setSearch('');
      setShowDropdown(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="flex items-center">
            <img src="/smartAppInfoLogo.png" alt="SmartAppInfo.com Logo" className="h-14 w-auto" />
          </Link>
        </div>
        {/* Center: Search */}
        <form onSubmit={handleSearch} className="flex-1 flex justify-center mx-2">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              name="q"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
              placeholder="Search apps, games, posts..."
              className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900 bg-white shadow placeholder:text-gray-400 font-medium text-base md:text-lg"
              autoComplete="off"
            />
                        {showDropdown && searchResults.length > 0 && (
                          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
                            {searchResults.map((app, idx) => {
                              let descCat = app.category;
                              if (app.description1) {
                                const match = app.description1.match(/<td[^>]*>\s*Category\s*<\/td>\s*<td[^>]*>(.*?)<\/td>/i);
                                if (match) descCat = match[1];
                              }
                              const slug = app.name ? app.name.toLowerCase().replace(/\s+/g, '-') : '';
                              return (
                                <Link
                                  to={`/app/${encodeURIComponent(slug)}`}
                                  key={app._id}
                                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 transition no-underline"
                                  onClick={() => setShowDropdown(false)}
                                >
                                  <img src={app.icon} alt={app.name} className="w-8 h-8 rounded-lg object-cover border bg-gray-100" />
                                  <div className="flex-1 min-w-0">
                                    <span className="font-semibold text-sm text-gray-800 truncate block">{app.name}</span>
                                    <span className="text-xs rounded bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">{descCat}</span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        )}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><HiOutlineSearch size={22} /></span>
          </div>
        </form>
        {/* Right: Nav */}
        <nav className="hidden lg:flex gap-2 xl:gap-6 items-center text-gray-800 font-semibold text-base md:text-lg">
                    {/* Show logout only on admin routes if admin token exists */}
                    {isAdminRoute && localStorage.getItem('apkpac_admin_token') && (
                      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-xl ml-4 font-bold hover:bg-red-700 transition">
                        Logout
                      </button>
                    )}
          <NavLink to="/apps" className={({isActive}) => isActive ? 'bg-gray-200 text-blue-700 rounded-xl px-3 py-1 shadow font-bold flex items-center gap-2' : 'hover:bg-gray-100 hover:text-blue-700 rounded-xl px-3 py-1 transition flex items-center gap-2'}><HiOutlineViewGrid size={20}/> Apps</NavLink>
          <NavLink to="/games" className={({isActive}) => isActive ? 'bg-gray-200 text-blue-700 rounded-xl px-3 py-1 shadow font-bold flex items-center gap-2' : 'hover:bg-gray-100 hover:text-blue-700 rounded-xl px-3 py-1 transition flex items-center gap-2'}><HiOutlinePuzzle size={20}/> Games</NavLink>
          <div className="relative" ref={postsDropdownRef}>
            <button onClick={() => handleDropdown('posts')} className="hover:bg-gray-100 hover:text-blue-700 rounded-xl px-3 py-1 flex items-center gap-2 transition focus:outline-none">
              <HiOutlineDocumentText size={20}/> Posts <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            {openDropdown === 'posts' && (
              <div className="absolute right-0 mt-2 w-40 bg-white/95 text-blue-900 border border-blue-100 rounded-xl shadow-xl animate-fade-in z-50 backdrop-blur">
                <NavLink to="/posts/topics" className="block px-4 py-2 hover:bg-blue-50 rounded-xl flex items-center gap-2" onClick={() => setOpenDropdown(null)}><HiOutlineDocumentText size={18}/> Topics</NavLink>
                <NavLink to="/posts/blogs" className="block px-4 py-2 hover:bg-blue-50 rounded-xl flex items-center gap-2" onClick={() => setOpenDropdown(null)}><HiOutlineDocumentText size={18}/> Blogs</NavLink>
              </div>
            )}
          </div>
          <div className="relative" ref={toolsDropdownRef}>
            <button onClick={() => handleDropdown('tools')} className="hover:bg-gray-100 hover:text-blue-700 rounded-xl px-3 py-1 flex items-center gap-2 transition focus:outline-none">
              <HiOutlineCog size={20}/> Tools <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            {openDropdown === 'tools' && (
              <div className="absolute right-0 mt-2 w-52 bg-white/95 text-blue-900 border border-blue-100 rounded-xl shadow-xl animate-fade-in z-50 backdrop-blur">
                <NavLink to="/tools/zip-unzip" className="block px-4 py-2 hover:bg-blue-50 rounded-xl flex items-center gap-2" onClick={() => setOpenDropdown(null)}><HiOutlineCog size={18}/> Zip & Unzip</NavLink>
                <NavLink to="/tools/qr-tool" className="block px-4 py-2 hover:bg-blue-50 rounded-xl flex items-center gap-2" onClick={() => setOpenDropdown(null)}><HiOutlineCog size={18}/> QR Code Tool</NavLink>
              </div>
            )}
          </div>
        </nav>
        {/* Mobile menu icon */}
        <button className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none" onClick={() => setMobileMenu((prev) => !prev)} aria-label="Open menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile nav menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white/95 text-blue-900 border-t border-gray-200 shadow-xl animate-fade-in z-50 backdrop-blur px-4 pb-4">
          <div className="flex flex-col gap-2 pt-4">
            <NavLink to="/apps" className={({isActive}) => isActive ? 'bg-gray-200 text-blue-700 rounded-xl px-3 py-2 shadow font-bold flex items-center gap-2' : 'hover:bg-gray-100 hover:text-blue-700 rounded-xl px-3 py-2 transition flex items-center gap-2'} onClick={() => setMobileMenu(false)}><HiOutlineViewGrid size={20}/> Apps</NavLink>
            <NavLink to="/games" className={({isActive}) => isActive ? 'bg-gray-200 text-blue-700 rounded-xl px-3 py-2 shadow font-bold flex items-center gap-2' : 'hover:bg-gray-100 hover:text-blue-700 rounded-xl px-3 py-2 transition flex items-center gap-2'} onClick={() => setMobileMenu(false)}><HiOutlinePuzzle size={20}/> Games</NavLink>
            <button
              id="mobile-posts-btn"
              onClick={() => setOpenDropdown(openDropdown === 'posts' ? null : 'posts')}
              className="hover:bg-gray-100 hover:text-blue-700 rounded-xl px-3 py-2 flex items-center gap-2 transition focus:outline-none"
              type="button"
              aria-expanded={openDropdown === 'posts'}
              aria-controls="mobile-posts-dropdown"
            >
              <HiOutlineDocumentText size={20}/> Posts <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            {openDropdown === 'posts' && (
              <div id="mobile-posts-dropdown" className="ml-4 flex flex-col gap-1">
                <NavLink
                  to="/posts/topics"
                  className="block text-left w-full px-4 py-2 hover:bg-blue-50 rounded-xl flex items-center gap-2"
                  onClick={() => {
                    setOpenDropdown(null);
                    setMobileMenu(false);
                  }}
                >
                  <HiOutlineDocumentText size={18}/> Topics
                </NavLink>
                <NavLink
                  to="/posts/blogs"
                  className="block text-left w-full px-4 py-2 hover:bg-blue-50 rounded-xl flex items-center gap-2"
                  onClick={() => {
                    setOpenDropdown(null);
                    setMobileMenu(false);
                  }}
                >
                  <HiOutlineDocumentText size={18}/> Blogs
                </NavLink>
              </div>
            )}
            <button
              onClick={() => setOpenDropdown(openDropdown === 'tools' ? null : 'tools')}
              className="hover:bg-gray-100 hover:text-blue-700 rounded-xl px-3 py-2 flex items-center gap-2 transition focus:outline-none"
              type="button"
              aria-expanded={openDropdown === 'tools'}
              aria-controls="mobile-tools-dropdown"
            >
              <HiOutlineCog size={20}/> Tools <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            {openDropdown === 'tools' && (
              <div id="mobile-tools-dropdown" className="ml-4 flex flex-col gap-1">
                <NavLink
                  to="/tools/zip-unzip"
                  className="block text-left w-full px-4 py-2 hover:bg-blue-50 rounded-xl flex items-center gap-2"
                  onClick={() => {
                    setOpenDropdown(null);
                    setMobileMenu(false);
                  }}
                >
                  <HiOutlineCog size={18}/> Zip & Unzip
                </NavLink>
                <NavLink
                  to="/tools/qr-tool"
                  className="block text-left w-full px-4 py-2 hover:bg-blue-50 rounded-xl flex items-center gap-2"
                  onClick={() => {
                    setOpenDropdown(null);
                    setMobileMenu(false);
                  }}
                >
                  <HiOutlineCog size={18}/> QR Code Tool
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
