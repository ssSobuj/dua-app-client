import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiSettings5Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";

const NavTop = () => {
  return (
    <div className="flex justify-between  items-center max-h-14 mt-2 ml-10 lg:ml-4 mb-4">
      <h1 className="text-2xl dark:text-dark-text">Duas Page</h1>
      <div className="flex lg:ml-[100px] lg:gap-x-36">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="border text-sm mx-2 lg:text-base lg:min-w-96 w-52 border-gray-300 rounded-lg lg:px-4 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <div className="absolute inset-y-0 text-[#7E7E7E] text-xl right-0 lg:right-2 m-1 mr-3 lg:m-1 py-[9px] px-[12px] rounded flex items-center pointer-events-none bg-[#F3F4F6] ">
            <GoSearch size={24} />
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-600 gap-5">
          <div className="flex items-center gap-2">
            <img src="/profile.svg" alt="" />
            <BiSolidDownArrow size={10} />
          </div>

          <RiSettings5Fill size={22} style={{ color: "#1FA45B" }} />
        </div>
      </div>
    </div>
  );
};

export default NavTop;
