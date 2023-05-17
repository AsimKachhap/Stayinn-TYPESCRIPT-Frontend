import { FunctionComponent, useRef } from "react";
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

interface LeafletMapProps {}

const LeafletMap: FunctionComponent<LeafletMapProps> = () => {
  const AccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  const mapboxId = import.meta.env.VITE_MAPBOX_STYLE_ID;
  const mapboxUrl = `https://api.mapbox.com/styles/v1/${mapboxId}/tiles/{z}/{x}/{y}@2x?access_token=${AccessToken}`;

  const hotelMarker = new Icon({
    iconUrl: "/images/hotel2.png",
    iconSize: [40, 40],
  });

  const popupRef = useRef();

  console.log(popupRef);

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
        <Marker position={[28.6304, 77.2177]} icon={hotelMarker}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
          <Tooltip permanent direction="top" offset={[0, -20]}>
            17500
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
