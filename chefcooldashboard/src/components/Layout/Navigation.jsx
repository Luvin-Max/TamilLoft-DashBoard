import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { chefcoollogo } from '../../assets/assets';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/services', label: 'Service' },
    { path: '/about', label: 'AboutMe' },
    { path: '/jobs', label: 'Job' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-gradient-to-r from-amber-50 to-rose-50 min-h-[120px] flex items-start">
      <nav className="w-full max-w-5xl mx-auto px-4 py-6">
        <div className="relative">
          <div
            className="mx-auto flex items-center justify-between gap-6 rounded-full bg-white px-3  shadow-2xl nav-pill"
            style={{ alignItems: 'center' }}
          >
            <Link to="/" className="flex items-center shrink-0">
              <div className="h-20 w-20 flex items-center justify-center">
                <img
                  src={chefcoollogo}
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>

            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex gap-5 items-center">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                        isActive(link.path)
                          ? 'text-orange-600 bg-orange-50 shadow-sm'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                      }`}
                      aria-current={isActive(link.path) ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="hidden lg:inline-flex items-center px-5 py-2 rounded-full text-white font-semibold shadow-md login-pill"
              >
                Login
              </Link>

              <button
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
                onClick={() => setIsMenuOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="mt-3 lg:hidden mx-auto max-w-3xl bg-[#FFF4E9] rounded-xl shadow-lg p-3">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive(link.path)
                          ? 'text-orange-600 bg-orange-50'
                          : 'text-[#2B2B2B] hover:text-orange-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center mt-2 px-4 py-2 rounded-full text-white font-semibold bg-orange-500"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
