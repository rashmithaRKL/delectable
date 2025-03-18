
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttonContainer = buttonRef.current;
    
    if (title && subtitle && buttonContainer) {
      setTimeout(() => {
        title.classList.add('opacity-100', 'translate-y-0');
      }, 300);
      
      setTimeout(() => {
        subtitle.classList.add('opacity-100', 'translate-y-0');
      }, 600);
      
      setTimeout(() => {
        buttonContainer.classList.add('opacity-100', 'translate-y-0');
      }, 900);
    }
  }, []);
  
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-serving-tray-with-sandwiches-10517-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 
          ref={titleRef}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-700"
        >
          <span className="block">Experience Culinary</span>
          <span className="block text-restaurant-gold mt-2">Excellence</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="max-w-2xl text-lg md:text-xl opacity-0 translate-y-10 transition-all duration-700 delay-300 mb-8"
        >
          Indulge in a symphony of flavors crafted with passion, precision and the finest seasonal ingredients.
        </p>
        
        <div 
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-10 transition-all duration-700 delay-600"
        >
          <Link to="/menu" className="btn-primary">
            Explore Our Menu
          </Link>
          <Link to="/contact" className="btn-secondary">
            Book a Table
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
