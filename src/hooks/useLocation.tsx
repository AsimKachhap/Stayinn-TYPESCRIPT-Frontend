import { useState, useEffect } from "react";

interface userLocation {
  latitude: number | null;
  longitude: number | null;
}

const useLocation = (): userLocation => {
  const [location, setLocation] = useState<userLocation>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error while getting the location:", error);
          }
        );
      }
    };

    if (navigator.geolocation) {
      fetchUserLocation();
    } else {
      console.error("Geolocation is not supported by Browser.");
    }
  }, []);

  return location;
};

export default useLocation;
