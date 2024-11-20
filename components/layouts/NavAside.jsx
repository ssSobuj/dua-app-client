import Image from "next/image";
import React from "react";
import { IoHome, IoBulbOutline, IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineWidgets } from "react-icons/md";
import { PiBookmarkSimple } from "react-icons/pi";
import { TbMedicineSyrup } from "react-icons/tb";
import { IoMdBook } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";

const NavAside = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-thin bg-white rounded-3xl">
      <div className="lg:w-[6.25rem] w-[5rem] flex flex-col items-center justify-between text-2xl pb-8 pt-8">
        {/* Logo */}
        <div className="mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24">
          <Image
            src="https://i.ibb.co/W6HsS9n/f49d5cb63d9a02588cddba5d7357d8ab.png"
            alt="Logo"
            width={65}
            height={65}
            className="lg:w-16 w-9"
          />
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col gap-y-5 lg:gap-y-9 text-[#868686]">
          <div className="bg-[#E8F0F5] rounded-full lg:w-10 w-7 h-7 lg:h-10 text-lg lg:text-xl flex items-center justify-center">
            <IoHome />
          </div>
          <div className="bg-[#E8F0F5] rounded-full lg:w-10 w-7 h-7 lg:h-10 text-lg lg:text-xl flex items-center justify-center">
            <MdOutlineWidgets />
          </div>
          <div className="bg-[#E8F0F5] rounded-full lg:w-10 w-7 h-7 lg:h-10 text-lg lg:text-xl flex items-center justify-center">
            <IoBulbOutline />
          </div>
          <div className="bg-[#E8F0F5] rounded-full lg:w-10 w-7 h-7 lg:h-10 text-lg lg:text-xl flex items-center justify-center">
            <PiBookmarkSimple />
          </div>
          <div className="bg-[#E8F0F5] rounded-full lg:w-10 w-7 h-7 lg:h-10 text-lg lg:text-xl flex items-center justify-center">
            <TbMedicineSyrup />
          </div>
          <div className="bg-[#E8F0F5] rounded-full lg:w-10 w-7 h-7 lg:h-10 text-lg lg:text-xl flex items-center justify-center">
            <IoChatbubblesOutline />
          </div>
          <div className="bg-[#E8F0F5] rounded-full lg:w-10 w-7 h-7 lg:h-10 text-lg lg:text-xl flex items-center justify-center">
            <IoMdBook />
          </div>
        </div>

        {/* Donate Button */}
        <div className="pt-6 xl:pt-16 2xl:pt-16 3xl:pt-24 pb-2 text-center">
          <div className="bg-[#1FA45B] lg:w-14 w-10 lg:h-14 h-10 text-white p-4 rounded-lg text-base lg:text-2xl">
            <BiSolidDonateHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavAside;
