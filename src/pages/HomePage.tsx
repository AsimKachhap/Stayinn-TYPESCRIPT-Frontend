import { FunctionComponent } from "react";
// import MapComponent from "../components/MapComponent";
import LeafletMap from "../components/LeafletMap";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div className="homePage">
      <div className="container flex gap-4 min-w-full ">
        <div className="bg-emerald-300 h-[400px] w-1/2"></div>
        <div className="border border-red-400 max-h-[400px] w-[680px]">
          <LeafletMap />
          {/* <MapComponent /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
