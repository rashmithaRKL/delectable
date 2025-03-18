
import { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real application, we would integrate with Google Maps API
    // For this demo, we'll use a static image map
    if (mapRef.current) {
      const mapImage = document.createElement('img');
      mapImage.src = 'https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=13&size=600x400&markers=color:red%7C40.7128,-74.0060&key=YOUR_API_KEY';
      mapImage.alt = 'Restaurant Location Map';
      mapImage.className = 'w-full h-full object-cover rounded-lg';
      
      const mapPlaceholder = document.createElement('div');
      mapPlaceholder.className = 'w-full h-full bg-gray-200 rounded-lg flex items-center justify-center';
      mapPlaceholder.innerHTML = `
        <div class="text-center p-4">
          <div class="flex justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-restaurant-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-1">Delectable Restaurant</h3>
          <p class="text-gray-600">123 Gourmet Street, Culinary District</p>
          <p class="text-gray-600">Foodville, NY 10001</p>
        </div>
      `;
      
      mapRef.current.appendChild(mapPlaceholder);
    }
  }, []);
  
  return (
    <div className="h-[400px] rounded-lg shadow-lg overflow-hidden" ref={mapRef}></div>
  );
};

export default Map;
