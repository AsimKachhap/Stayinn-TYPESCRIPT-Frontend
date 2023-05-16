import { FunctionComponent } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {}

const LeafletMap: FunctionComponent<LeafletMapProps> = () => {
  const AccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  const mapboxId = import.meta.env.VITE_MAPBOX_STYLE_ID;
  const mapboxUrl = `https://api.mapbox.com/styles/v1/${mapboxId}/tiles/{z}/{x}/{y}@2x?access_token=${AccessToken}`;

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
        <Marker position={[28.6304, 77.2177]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
