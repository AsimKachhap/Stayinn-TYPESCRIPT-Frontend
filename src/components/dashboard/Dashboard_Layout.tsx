import { FunctionComponent } from "react";
import Topbar from "../Topbar";
import Sidebar from "../Sidebar";
import Main_Area from "../Main_Area";

interface Dashboard_Layout {}

const Dashboard_Layout: FunctionComponent<Dashboard_Layout> = () => {
  return (
    <div className="container px-4 py-2">
      <div>
        <Topbar />
      </div>
      <div className="flex gap-4">
        <div className="flex-1 bg-lime-300">
          <Sidebar />
        </div>
        <div className="flex-4 bg-amber-300">
          <Main_Area />
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Layout;
