
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Charity', path: '/charity' },
    { name: 'Prayer', path: '/prayer' },
    { name: 'Groups & Contacts', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-islamic-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-scale">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-islamic-gold/20">
              <img 
                src="/lovable-uploads/fcc3c128-e50e-4ffd-a653-e60b95aca2b1.png" 
                alt="TCD MSA Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-serif text-xl font-semibold text-islamic-black">
              TCD MSA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-islamic-gold ${
                  isActive(item.path)
                    ? 'text-islamic-gold border-b-2 border-islamic-gold'
                    : 'text-islamic-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="border-islamic-gold text-islamic-gold hover:bg-islamic-gold hover:text-islamic-black transition-all duration-200"
            >
              <a href="https://trinitysocietieshub.com/products/muslim-students-association?_pos=1&_sid=fcc8178eb&_ss=r">
                Join Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-lg font-medium transition-colors duration-200 hover:text-islamic-gold ${
                      isActive(item.path) ? 'text-islamic-gold' : 'text-islamic-black'
                    }`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 mt-8">
                  <Button
                    asChild
                    variant="outline"
                    className="border-islamic-gold text-islamic-gold hover:bg-islamic-gold hover:text-islamic-black"
                  >
                    <a href="https://trinitysocietieshub.com/products/muslim-students-association?_pos=1&_sid=fcc8178eb&_ss=r">
                      Join Us
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
