import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Enhanced Red R Logo */}
              <svg width="35" height="45" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#DC2626", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#B91C1C", stopOpacity:1}} />
                  </linearGradient>
                </defs>
                <path d="M10 10 L10 60 L20 60 L20 38 L28 38 L38 60 L50 60 L38 35 Q 45 32, 45 23 Q 45 10, 32 10 Z M20 20 L32 20 Q 35 20, 35 23 Q 35 26, 32 26 L20 26 Z" 
                  fill="url(#footerLogoGradient)" 
                  stroke="#B91C1C" 
                  strokeWidth="0.5"/>
                <rect x="10" y="65" width="40" height="2" fill="#D97706" rx="1"/>
              </svg>
              <div>
                <h3 className="text-white font-bold text-lg leading-none">REDDY HOTELS</h3>
                <p className="text-xs text-orange-500 uppercase tracking-wider leading-none font-medium">& Management Group</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Building exceptional hotels across Texas for over 20 years. Committed to bringing quality hospitality to communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">About Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/who" className="hover:text-white transition-colors text-sm">
                  Who We Are?
                </Link>
              </li>
              <li>
                <Link to="/what" className="hover:text-white transition-colors text-sm">
                  What We Do?
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors text-sm">
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:gk@reddyhotels.com" className="hover:text-white transition-colors text-sm">
                  Email Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=3001+Dimmitt+Road+Plainview+TX+79072" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  3001 Dimmitt Road Plainview, TX 79072
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+18062926676" className="text-sm hover:text-white transition-colors">
                  +1 806-292-6676
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:gk@reddyhotels.com" className="text-sm hover:text-white transition-colors">
                  gk@reddyhotels.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-4">
              <a 
                href="https://www.facebook.com/reddyhotels" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-500 transition-colors p-2 hover:bg-gray-800 rounded-full" 
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/reddy-hotels" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-500 transition-colors p-2 hover:bg-gray-800 rounded-full" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/reddyhotels" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-500 transition-colors p-2 hover:bg-gray-800 rounded-full" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@reddyhotels" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-500 transition-colors p-2 hover:bg-gray-800 rounded-full" 
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} Reddy Hotels & Management Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

