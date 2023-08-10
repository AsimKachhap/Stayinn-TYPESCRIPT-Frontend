import { FunctionComponent } from "react";

interface PhotoGridProps {
  photos: {
    id: number;
    url: string;
  }[];
}

const PhotoGrid: FunctionComponent<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="min-h-[400px] md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-2 relative ">
      {photos.slice(0, 5).map((photo, index) => (
        <div className={index === 0 ? "row-span-2 col-span-2 " : ""}>
          <img
            key={index}
            className="object-center h-full w-full"
            src={photo.url}
            alt=""
          />
        </div>
      ))}

      <button className="bg-slate-300 opacity-80 px-4 py-2 border-2 border-black rounded-md absolute bottom-5 right-5 font-bold">
        Show all Photos
      </button>
    </div>
  );
};

export default PhotoGrid;
