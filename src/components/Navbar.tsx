import { FunctionComponent } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="navbar bg-[#00296B] py-4 px-24">
      <div className="container flex justify-between items-center ">
        <div className="text-[#FFD500] text-3xl  font-lobster">Stayinn</div>
        <div className="profileContainer bg-neutral-200 rounded-full py-2 px-4 hover:translate-y-1 hover:scale-90 duration-200 ease-in-out cursor-pointer">
          <div className="flex gap-4">
            <GiHamburgerMenu size={20} className="mt-[2px]" />
            <HiUserCircle size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
