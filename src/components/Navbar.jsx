import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X as XIcon, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Syncify.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-primary/10 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Container */}
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <img
                src={logo}
                alt="Syncify Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Branding */}
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl text-darkGreen tracking-tight leading-none hover:text-primary transition-colors">
                Syncify
              </span>
              <span className="text-[10px] text-[#6B7280] font-semibold hidden sm:block mt-1 uppercase tracking-widest">
                A Shopify to Salesforce Connector App
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-bold transition-colors relative group ${isActive ? 'text-primary' : 'text-[#6B7280] hover:text-primary'}`}
                  >
                    {link.name}
                    {isActive && <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />}
                  </Link>
                );
              })}
            </div>
            <Link to="/contact" className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
              Book a Demo
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-[#6B7280]">
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#F9FAFB] absolute w-full left-0 top-full shadow-2xl pb-6">
          <div className="flex flex-col px-6 pt-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-bold py-2 ${isActive ? 'text-primary' : 'text-[#6B7280]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link to="/contact" className="bg-primary text-white px-6 py-4 rounded-xl text-base font-bold w-full mt-4 text-center shadow-lg shadow-primary/20" onClick={() => setIsMobileMenuOpen(false)}>
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
