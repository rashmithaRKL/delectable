
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md py-2 shadow-md' : 'bg-white py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-restaurant-burgundy font-serif text-2xl md:text-3xl font-bold">
            Delectable
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-restaurant-burgundy ${isActive('/') ? 'text-restaurant-burgundy' : 'text-foreground'
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-restaurant-burgundy ${isActive('/about') ? 'text-restaurant-burgundy' : 'text-foreground'
                }`}
            >
              About
            </Link>
            <Link
              to="/menu"
              className={`font-medium transition-colors hover:text-restaurant-burgundy ${isActive('/menu') ? 'text-restaurant-burgundy' : 'text-foreground'
                }`}
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-restaurant-burgundy ${isActive('/contact') ? 'text-restaurant-burgundy' : 'text-foreground'
                }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Reservations
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-restaurant-burgundy"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } pt-20`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-6 items-center">
          <Link
            to="/"
            className={`text-xl font-medium ${isActive('/') ? 'text-restaurant-burgundy' : 'text-foreground'}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-xl font-medium ${isActive('/about') ? 'text-restaurant-burgundy' : 'text-foreground'}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/menu"
            className={`text-xl font-medium ${isActive('/menu') ? 'text-restaurant-burgundy' : 'text-foreground'}`}
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="/contact"
            className={`text-xl font-medium ${isActive('/contact') ? 'text-restaurant-burgundy' : 'text-foreground'}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="btn-primary w-full text-center"
            onClick={closeMenu}
          >
            Reservations
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
