
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-restaurant-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-restaurant-gold">Delectable</h3>
            <p className="text-gray-300 mb-4">
              Exquisite dining experience with a focus on seasonal ingredients and innovative cuisine.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-restaurant-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-restaurant-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-restaurant-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-restaurant-gold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-restaurant-gold" />
                <span>123 Gourmet Street, Culinary District, Foodville</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-restaurant-gold" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-restaurant-gold" />
                <span>info@delectable.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-restaurant-gold">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-restaurant-gold" />
                <div>
                  <p className="font-medium">Mon - Fri</p>
                  <p className="text-gray-300">11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-restaurant-gold" />
                <div>
                  <p className="font-medium">Sat - Sun</p>
                  <p className="text-gray-300">10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-restaurant-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-restaurant-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-restaurant-gold transition-colors">About</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-restaurant-gold transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-restaurant-gold transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-restaurant-gold transition-colors">Reservations</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Delectable Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
