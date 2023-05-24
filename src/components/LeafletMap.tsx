import { FunctionComponent, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import useLocation from "../hooks/useLocation";

interface LeafletMapProps {
  hotels: Array<{
    name: string;
    location: {
      lat: number;
      long: number;
    };
  }>;
}

const LeafletMap: FunctionComponent<LeafletMapProps> = ({ hotels }) => {
  const AccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  const mapboxId = import.meta.env.VITE_MAPBOX_STYLE_ID;
  const mapboxUrl = `https://api.mapbox.com/styles/v1/${mapboxId}/tiles/{z}/{x}/{y}@2x?access_token=${AccessToken}`;

  const hotelMarker = new Icon({
    iconUrl: "/images/hotel2.png",
    iconSize: [40, 40],
  });

  const greenpinMarker = new Icon({
    iconUrl: "/images/greenpin.png",
    iconSize: [40, 40],
  });

  const userLocation = useLocation();

  const [center, setCenter] = useState<[number, number] | null>(null);

  useEffect(() => {
    const setMapCenter = () => {
      if (userLocation.latitude !== null && userLocation.longitude !== null) {
        setCenter([userLocation.latitude, userLocation.longitude]);
        console.log("This code is executed");
        console.log("userLocation:", userLocation);
        console.log("center:", center);
      }
    };

    setMapCenter();
  }, [userLocation]);

  useEffect(() => {
    console.log("Center updated:", center);
  }, [center]);

  if (center == null) {
    return null;
  }

  const lat = center ? center[0] : 28.6304;
  const long = center ? center[1] : 77.2177;

  return (
    <div>
      <MapContainer
        center={[lat, long]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: 400 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
          url={mapboxUrl}
          id={mapboxId}
          accessToken={AccessToken}
        />

        {hotels.map((hotel) => {
          return (
            <Marker
              position={[hotel.location.lat, hotel.location.long]}
              icon={hotelMarker}
            >
              <Popup>{hotel.name}</Popup>
              <Tooltip permanent direction="top" offset={[0, -20]}>
                17500
              </Tooltip>
            </Marker>
          );
        })}

        {userLocation.latitude === null ||
        userLocation.longitude === null ? null : (
          <Marker
            position={[userLocation.latitude, userLocation.longitude]}
            icon={greenpinMarker}
          >
            <Tooltip permanent direction="top" offset={[0, -20]}>
              You are Here
            </Tooltip>
          </Marker>
        )}

        <Circle center={[lat, long]} radius={7500} stroke={false} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
