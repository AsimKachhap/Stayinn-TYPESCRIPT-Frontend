import { FunctionComponent, useState } from "react";
import Map, { Marker } from "react-map-gl";

interface MapComponentProps {}

const MapComponent: FunctionComponent<MapComponentProps> = () => {
  const [viewport, setViewport] = useState({
    latitude: 28.6304,
    longitude: 77.2177,
    zoom: 10,
  });

  const AccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  console.log(AccessToken);
  return (
    <Map
      {...viewport}
      mapboxAccessToken={AccessToken}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      onMove={(e) => setViewport(e.viewState)}
      attributionControl={false}
    >
      <Marker
        latitude={28.6304}
        longitude={77.2177}
        anchor="center"
        color="#FFD500"
      >
        <div className="bg-red h-4 w-4 rounded-full">I'm here.</div>
      </Marker>
    </Map>
  );
};

export default MapComponent;
