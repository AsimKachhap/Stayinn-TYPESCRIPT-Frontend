import { FunctionComponent } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

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

  console.log(hotels);

  return (
    <div>
      <MapContainer
        center={[28.6304, 77.2177]}
        zoom={13}
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
          console.log(hotel.location.lat, hotel.location.long);
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
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
