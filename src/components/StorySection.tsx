
import { useEffect, useRef } from 'react';

const StorySection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);
  
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              ref={titleRef}
              className="section-title opacity-0 translate-y-10 transition-all duration-700"
            >
              Our Story
            </h2>
            
            <div 
              ref={textRef}
              className="opacity-0 translate-y-10 transition-all duration-700 delay-300 space-y-4"
            >
              <p>
                Founded in 2010, Delectable started as a small family-owned bistro with a passion for creating memorable dining experiences. Our founder, Chef Michel Laurent, brought his culinary expertise from years of training in Paris to create a menu that celebrates both traditional techniques and innovative flavors.
              </p>
              <p>
                Over the years, we've grown into one of the city's most beloved dining destinations, known for our commitment to sourcing the finest local and seasonal ingredients. Each dish tells a story of tradition, innovation, and the vibrant cultural tapestry that influences our cuisine.
              </p>
              <p>
                At Delectable, we believe that extraordinary food should be complemented by impeccable service and an inviting atmosphere. Our team works tirelessly to ensure that every aspect of your dining experience exceeds expectations.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-restaurant-gold rounded-sm z-0"></div>
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Restaurant Interior" 
              className="w-full h-[400px] md:h-[500px] object-cover rounded-md shadow-xl relative z-10 opacity-0 translate-y-10 transition-all duration-700 delay-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
