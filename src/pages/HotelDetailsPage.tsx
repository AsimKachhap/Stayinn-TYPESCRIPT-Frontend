import { FunctionComponent } from "react";
import PhotoGrid from "../components/PhotoGrid";
import photoArray from "../dummydatas/photoArray";

const HotelDetailsPage: FunctionComponent = () => {
  return (
    <div>
      <h1>HotelDetailsPage</h1>
      <PhotoGrid photos={photoArray} />
    </div>
  );
};

export default HotelDetailsPage;
