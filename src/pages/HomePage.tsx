import { FunctionComponent } from "react";
// import MapComponent from "../components/MapComponent";
import LeafletMap from "../components/LeafletMap";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div className="homePage">
      <div className="map-container max-h-[400px] w-full">
        <LeafletMap />
        {/* <MapComponent /> */}
      </div>
    </div>
  );
};

export default HomePage;
