import { FunctionComponent, useEffect, useState } from "react";
// import MapComponent from "../components/MapComponent";
import LeafletMap from "../components/LeafletMap";
import axios from "axios";
import FilterSort from "../components/FilterSort";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    try {
      const hotelData = await axios
        .get("http://localhost:8080/hotels")
        .then((response) => response.data);
      setHotels(hotelData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className="homePage">
      <div className="map-container max-h-[400px] w-full">
        <div className="sticky top-3">
          <FilterSort />
        </div>
        <LeafletMap hotels={hotels} />
        {/* <MapComponent /> */}
      </div>
    </div>
  );
};

export default HomePage;
