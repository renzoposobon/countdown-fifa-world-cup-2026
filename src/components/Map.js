import React, { useEffect, useState } from 'react';

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (typeof window.google === 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      // script.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&callback=initMap&v=weekly`;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD7o58OW5pRmrIqUKuLxJavQYcGyt2_sQA&callback=initMap&v=weekly`;
      script.onload = () => {
        setMapLoaded(true);
      };
      document.head.appendChild(script);
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      const uluru = { lat: 19.3029794, lng: -99.1504699525862 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
      });
  
      const  marker = new window.google.maps.Marker({
        position: uluru,
        map: map,
      });
    }
  }, [mapLoaded]);

  return (
    <div>
      <h2 className='sedes'>Sedes</h2>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default Map;