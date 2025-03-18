
import { useEffect, useRef } from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  index: number;
}

const MenuCard = ({ name, description, price, imageUrl, category, index }: MenuItemProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl opacity-0 translate-y-10"
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
        <div className="absolute top-4 left-4 bg-restaurant-burgundy text-white text-sm py-1 px-3 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-serif font-bold">{name}</h3>
          <span className="text-restaurant-gold font-medium">{price}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
