
import { useState, useEffect, useRef } from 'react';
import MenuCard from '@/components/MenuCard';

// Menu data
const menuItems = {
  starters: [
    {
      id: 1,
      name: 'Seared Scallops',
      description: 'Fresh scallops seared to perfection, served with carrot purée and microgreens.',
      price: '$18',
      imageUrl: 'https://images.unsplash.com/photo-1585935238141-3bc4de2d812f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Starter'
    },
    {
      id: 2,
      name: 'Artisanal Cheese Platter',
      description: 'Selection of artisanal cheeses with honey, nuts, and artisan bread.',
      price: '$22',
      imageUrl: 'https://images.unsplash.com/photo-1631379678795-512ef669c75a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Starter'
    },
    {
      id: 3,
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls with black truffle and mozzarella center.',
      price: '$16',
      imageUrl: 'https://images.unsplash.com/photo-1605728936036-3b8fa0862cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
      category: 'Starter'
    }
  ],
  mains: [
    {
      id: 4,
      name: 'Filet Mignon',
      description: 'Prime beef tenderloin with red wine reduction, served with truffle mashed potatoes.',
      price: '$42',
      imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      category: 'Main Course'
    },
    {
      id: 5,
      name: 'Pan-Seared Salmon',
      description: 'Atlantic salmon with lemon butter sauce, served with seasonal vegetables.',
      price: '$28',
      imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Main Course'
    },
    {
      id: 6,
      name: 'Truffle Risotto',
      description: 'Creamy Arborio rice with wild mushrooms, black truffle and Parmesan cheese.',
      price: '$24',
      imageUrl: 'https://images.unsplash.com/photo-1633436375153-d7045cb93e37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Vegetarian'
    }
  ],
  desserts: [
    {
      id: 7,
      name: 'Chocolate Souffle',
      description: 'Warm chocolate souffle with a molten center, served with vanilla bean ice cream.',
      price: '$12',
      imageUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Dessert'
    },
    {
      id: 8,
      name: 'Crème Brûlée',
      description: 'Classic vanilla custard with a caramelized sugar crust.',
      price: '$10',
      imageUrl: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Dessert'
    },
    {
      id: 9,
      name: 'Seasonal Fruit Tart',
      description: 'Buttery pastry filled with vanilla pastry cream and topped with seasonal fruits.',
      price: '$11',
      imageUrl: 'https://images.unsplash.com/photo-1621236378699-8597faf6a11a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Dessert'
    }
  ],
  drinks: [
    {
      id: 10,
      name: 'Signature Martini',
      description: 'House-infused cucumber gin with elderflower liqueur and fresh lime.',
      price: '$14',
      imageUrl: 'https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2027&q=80',
      category: 'Cocktail'
    },
    {
      id: 11,
      name: 'Sommelier's Red Wine Selection',
      description: 'Ask your server about our rotating premium red wine selection.',
      price: '$16',
      imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Wine'
    },
    {
      id: 12,
      name: 'Craft Beer Flight',
      description: 'Selection of four local craft beers, 4oz each.',
      price: '$15',
      imageUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: 'Beer'
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (categoriesRef.current) observer.observe(categoriesRef.current);
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (categoriesRef.current) observer.unobserve(categoriesRef.current);
    };
  }, []);
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl font-serif font-bold mb-4 opacity-0 translate-y-10 transition-all duration-700"
          >
            Our Menu
          </h1>
          <p 
            ref={descriptionRef}
            className="max-w-2xl mx-auto text-muted-foreground opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            Explore our seasonal offerings crafted with the finest ingredients and culinary expertise.
          </p>
        </div>
        
        <div 
          ref={categoriesRef}
          className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 translate-y-10 transition-all duration-700 delay-500"
        >
          <button
            onClick={() => setActiveCategory('starters')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === 'starters'
                ? 'bg-restaurant-burgundy text-white'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Starters
          </button>
          <button
            onClick={() => setActiveCategory('mains')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === 'mains'
                ? 'bg-restaurant-burgundy text-white'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Main Courses
          </button>
          <button
            onClick={() => setActiveCategory('desserts')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === 'desserts'
                ? 'bg-restaurant-burgundy text-white'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Desserts
          </button>
          <button
            onClick={() => setActiveCategory('drinks')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === 'drinks'
                ? 'bg-restaurant-burgundy text-white'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Drinks
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
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
      </div>
    </div>
  );
};

export default Menu;
