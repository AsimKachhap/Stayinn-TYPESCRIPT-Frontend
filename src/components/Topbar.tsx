import { FunctionComponent } from "react";

interface TopbarProps {}

const Topbar: FunctionComponent<TopbarProps> = () => {
  return (
    <div className="topbarContainer flex justify-between items-center px-20 bg-[#00296B] h-[70px] rounded-lg">
      <div className="font-lobster text-[#FFD500] text-3xl">Stayinn</div>
      <div></div>
    </div>
  );
};

export default Topbar;
