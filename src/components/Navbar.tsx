import logo from "../assets/logo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-6xl mx-auto">
      {/* navigation for mobile */}
      <nav className=" p-3 flex justify-between items-center md:hidden">
        {/* logo div */}
        <div className="logo">
          <div className="flex space-x-1 items-center">
            {/* logo image  */}

            <img src={logo} alt="" className="w-[24px]" />
            <div className="flex flex-col font-bold leading-[1rem] text-sm">
              <h1>type</h1>
              <div className="flex space-x-1 items-center">
                <h1 className="">hero</h1>
                <span className="uppercase font-bold bg-gray-700 text-gray-300 text-xs px-1 py-0 tracking-widest">
                  beta
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* search and hamburger */}
        <div className="flex space-x-4 items-center">
          <FiSearch color="white" size={20} />
          <div onClick={() => setOpen(!open)}>
            {!open ? (
              <HiOutlineMenuAlt4 color="white" size={25} />
            ) : (
              <IoClose color="white" size={25} />
            )}
          </div>
        </div>
      </nav>
      { open && <div className="p-5 w-full h-full flex flex-col space-x-0 space-y-2 bg-gray-600 font-semibold hover:font-bold">
        <span>Explore</span>
        <span>Tracks</span>
        <span>Advent of Typescript</span>
      </div>}
    </div>
  );
};
export default Navbar;
