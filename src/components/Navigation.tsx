import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, MapPin, Phone, Mail, Search, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/who", label: "Who We Are?" },
    { to: "/what", label: "What We Do?" },
    { to: "/projects", label: "Our Projects" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Top Header Bar - Compact */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1.5 px-4 text-xs">
        <div className="container mx-auto flex items-center justify-between">
          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <a href="tel:+18062926676" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span>+1 806-292-6676</span>
            </a>
            <a href="mailto:gk@reddyhotels.com" className="hidden sm:flex items-center gap-1.5 hover:text-gray-300 transition-colors">
              <Mail className="w-3 h-3" />
              <span>gk@reddyhotels.com</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/reddyhotels" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.linkedin.com/company/reddy-hotels" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.instagram.com/reddyhotels" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.youtube.com/@reddyhotels" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="YouTube">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Cleaner */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-7 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <Link to="/" className="flex items-center gap-3">
                {/* Enhanced Red R Logo */}
                <div className="relative">
                  <svg width="45" height="55" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#DC2626", stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:"#B91C1C", stopOpacity:1}} />
                      </linearGradient>
                    </defs>
                    <path d="M10 10 L10 60 L20 60 L20 38 L28 38 L38 60 L50 60 L38 35 Q 45 32, 45 23 Q 45 10, 32 10 Z M20 20 L32 20 Q 35 20, 35 23 Q 35 26, 32 26 L20 26 Z" 
                      fill="url(#logoGradient)" 
                      stroke="#B91C1C" 
                      strokeWidth="0.5"/>
                    <rect x="10" y="65" width="40" height="2" fill="#D97706" rx="1"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900 leading-none tracking-tight">REDDY HOTELS</span>
                  <span className="text-xs text-orange-600 uppercase tracking-widest leading-none font-medium">& Management Group</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.to;
                return (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                  >
                    <Link
                      to={item.to}
                      className={`text-sm font-medium px-3 py-2 transition-colors duration-200 hover:text-gray-900 ${
                        isActive ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Search Icon - Optional */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-1"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-gray-600" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full text-left px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? "text-gray-900 bg-gray-100" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
