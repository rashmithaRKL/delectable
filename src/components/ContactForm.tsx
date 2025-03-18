
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Reservation Request Sent",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-serif font-bold mb-6">Make a Reservation</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div>
            <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7+">7+ People</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-2">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
            />
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-2">Preferred Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Special Requests</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-gold"
            placeholder="Any dietary restrictions or special occasions?"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="w-full btn-primary"
        >
          Request Reservation
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
