
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-islamic-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/fcc3c128-e50e-4ffd-a653-e60b95aca2b1.png" 
                  alt="TCD MSA Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-serif text-xl font-semibold">
                TCD MSA
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Building a strong Muslim community through faith, knowledge, and service. 
              Join us in our mission to support Muslim students and foster Islamic values 
              on campus.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@tcdmsa"
                className="text-gray-400 hover:text-islamic-gold transition-colors"
                aria-label="TCD MSA on TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M16.75 3c.58.99 1.54 1.72 2.74 1.92v2.3a6.13 6.13 0 0 1-2.74-.84v6.43a5.2 5.2 0 1 1-5.2-5.2c.23 0 .46.02.69.05v2.48a2.76 2.76 0 1 0 1.78 2.67V3h1.73Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tcdmsa/"
                className="text-gray-400 hover:text-islamic-gold transition-colors"
                aria-label="TCD MSA on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contact@universityisoc.com" className="text-gray-400 hover:text-islamic-gold transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-islamic-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/charity" className="text-gray-300 hover:text-white transition-colors">Charity</Link></li>
              <li><Link to="/prayer" className="text-gray-300 hover:text-white transition-colors">Prayer</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Groups & Contacts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-islamic-gold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-islamic-gold mt-0.5" />
                <div className="text-gray-300">
                  <p>Goldsmith Hall</p>
                  <p>Trinity College Dublin</p>
                  <p>2 Westland Row</p>
                  <p>Dublin 2</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-islamic-gold" />
                <a href="mailto:muslim@csc.tcd.ie" className="text-gray-300 hover:text-white transition-colors">
                  muslim@csc.tcd.ie
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TCD MSA. All rights reserved. 
            Built with ❤️ for the Ummah.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
