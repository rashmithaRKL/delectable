
import { useEffect, useRef } from 'react';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = [titleRef, descriptionRef, infoRef, mapRef, formRef];
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
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl font-serif font-bold mb-4 opacity-0 translate-y-10 transition-all duration-700"
          >
            Contact Us
          </h1>
          <p 
            ref={descriptionRef}
            className="max-w-2xl mx-auto text-muted-foreground opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            We'd love to hear from you. Reach out for reservations, inquiries, or to provide feedback on your dining experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div 
            ref={infoRef}
            className="space-y-8 opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 bg-restaurant-burgundy/10 rounded-full">
                <MapPin className="h-6 w-6 text-restaurant-burgundy" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-muted-foreground">123 Gourmet Street</p>
                <p className="text-muted-foreground">Culinary District, Foodville</p>
                <p className="text-muted-foreground">NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 bg-restaurant-burgundy/10 rounded-full">
                <Phone className="h-6 w-6 text-restaurant-burgundy" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-muted-foreground">Reservations: (123) 456-7890</p>
                <p className="text-muted-foreground">General Inquiries: (123) 456-7891</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 bg-restaurant-burgundy/10 rounded-full">
                <Mail className="h-6 w-6 text-restaurant-burgundy" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-muted-foreground">Reservations: reservations@delectable.com</p>
                <p className="text-muted-foreground">General Inquiries: info@delectable.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 bg-restaurant-burgundy/10 rounded-full">
                <Clock className="h-6 w-6 text-restaurant-burgundy" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <span>Monday - Friday:</span>
                  <span>11:00 AM - 10:00 PM</span>
                  <span>Saturday:</span>
                  <span>10:00 AM - 11:00 PM</span>
                  <span>Sunday:</span>
                  <span>10:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={mapRef}
            className="opacity-0 translate-y-10 transition-all duration-700 delay-500"
          >
            <Map />
          </div>
        </div>
        
        <div 
          ref={formRef}
          className="max-w-2xl mx-auto opacity-0 translate-y-10 transition-all duration-700 delay-700"
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
