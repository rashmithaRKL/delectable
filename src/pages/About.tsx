
import { useEffect, useRef } from 'react';

const chefTeam = [
  {
    name: 'Chef Michel Laurent',
    role: 'Executive Chef',
    bio: 'With over 20 years of experience in fine dining, Chef Michel brings his passion for French cuisine and innovative techniques to create unforgettable culinary experiences.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Maria Gonzalez',
    role: 'Pastry Chef',
    bio: 'Specializing in exquisite desserts, Maria combines traditional methods with modern presentations to create sweet masterpieces that complete your dining experience.',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'James Chen',
    role: 'Sous Chef',
    bio: 'James brings his unique perspective and attention to detail to every dish. His expertise in Asian fusion adds a distinctive flavor profile to our seasonal menu.',
    image: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  }
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = [heroRef, historyRef, valuesRef, teamRef];
    elements.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      elements.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 bg-restaurant-burgundy text-white opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Our Story</h1>
          <p className="max-w-3xl mx-auto text-lg">
            A journey of passion, flavor, and culinary excellence
          </p>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-20">
        <div 
          ref={historyRef}
          className="container mx-auto px-4 md:px-6 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title">Our Journey</h2>
              <div className="space-y-4">
                <p>
                  Delectable was founded in 2010 by Chef Michel Laurent with a simple mission: to create extraordinary dining experiences that celebrate the art of gastronomy. What began as a small bistro has evolved into one of the city's most beloved culinary destinations.
                </p>
                <p>
                  Our journey has been marked by a relentless pursuit of excellence, a deep respect for ingredients, and a commitment to honoring both traditional techniques and innovative approaches to cooking.
                </p>
                <p>
                  Over the years, we've been fortunate to receive recognition for our culinary creations, including three Michelin stars and numerous industry accolades. However, our greatest achievement remains the satisfaction of our guests who return time and again to experience the magic of Delectable.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-restaurant-gold/20 rounded-sm z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Restaurant History" 
                className="w-full h-[400px] object-cover rounded-md shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div 
          ref={valuesRef}
          className="container mx-auto px-4 md:px-6 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="section-title text-center mx-auto">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-restaurant-burgundy/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-restaurant-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-center mb-4">Quality & Excellence</h3>
              <p className="text-center text-muted-foreground">
                We are committed to sourcing the finest ingredients and upholding the highest standards in every aspect of our restaurant, from food preparation to service.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-restaurant-burgundy/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-restaurant-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-center mb-4">Creativity & Innovation</h3>
              <p className="text-center text-muted-foreground">
                We encourage culinary exploration and creative expression while respecting traditional techniques that have stood the test of time.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-restaurant-burgundy/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-restaurant-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-center mb-4">Sustainability</h3>
              <p className="text-center text-muted-foreground">
                We are dedicated to environmental responsibility through sustainable sourcing, minimizing waste, and reducing our ecological footprint.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div 
          ref={teamRef}
          className="container mx-auto px-4 md:px-6 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="section-title text-center mx-auto">Our Culinary Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {chefTeam.map((chef, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={chef.image} 
                    alt={chef.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-1">{chef.name}</h3>
                  <p className="text-restaurant-gold mb-4">{chef.role}</p>
                  <p className="text-muted-foreground">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
