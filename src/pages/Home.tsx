
import { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import MenuCard from '@/components/MenuCard';
import { Link } from 'react-router-dom';

const featuredMenuItems = [
  {
    id: 1,
    name: 'Pan-Seared Salmon',
    description: 'Atlantic salmon with lemon butter sauce, served with seasonal vegetables and herb-roasted potatoes.',
    price: '$28',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    category: 'Main Course'
  },
  {
    id: 2,
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with wild mushrooms, finished with black truffle and Parmesan cheese.',
    price: '$24',
    imageUrl: 'https://images.unsplash.com/photo-1633436375153-d7045cb93e37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    category: 'Vegetarian'
  },
  {
    id: 3,
    name: 'Chocolate Souffle',
    description: 'Warm chocolate souffle with a molten center, served with vanilla bean ice cream.',
    price: '$12',
    imageUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    category: 'Dessert'
  }
];

const Home = () => {
  const menuSectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (menuSectionRef.current) {
      observer.observe(menuSectionRef.current);
    }
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (menuSectionRef.current) observer.unobserve(menuSectionRef.current);
      if (testimonialRef.current) observer.unobserve(testimonialRef.current);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      <StorySection />
      
      {/* Featured Menu */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={menuSectionRef}
            className="text-center mb-12 opacity-0 translate-y-10 transition-all duration-700"
          >
            <h2 className="section-title mx-auto">Featured Menu</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our chef's selections showcase the finest seasonal ingredients and culinary craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMenuItems.map((item, index) => (
              <MenuCard 
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
                category={item.category}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-secondary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-20 bg-restaurant-burgundy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={testimonialRef}
            className="max-w-4xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-700"
          >
            <svg className="w-12 h-12 mx-auto mb-6 text-restaurant-gold" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
            </svg>
            <p className="text-xl md:text-2xl font-serif italic mb-6">
              An extraordinary culinary journey that delights all the senses. The attention to detail in both food and service is unparalleled.
            </p>
            <div>
              <h4 className="font-medium text-restaurant-gold">Catherine Moore</h4>
              <p className="text-white/70">Food Critic, Culinary Review</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-restaurant-gold/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Experience the Magic</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Join us for an unforgettable dining experience. Make your reservation today.
          </p>
          <Link to="/contact" className="btn-primary inline-block animate-glow">
            Book Your Table
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
