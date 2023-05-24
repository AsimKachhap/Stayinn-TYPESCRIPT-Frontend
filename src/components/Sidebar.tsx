import { FunctionComponent } from "react";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div>
      <div className="flex gap-2 justify-between items-center">
        <div></div>
        <div>Home</div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div></div>
        <div>Properties</div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div></div>
        <div>Bookings</div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div></div>
        <div>Notifications</div>
      </div>
    </div>
  );
};

export default Sidebar;
