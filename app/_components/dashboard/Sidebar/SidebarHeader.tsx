import React from "react";
import storeLogoBlue from "@/public/storeLogoBlue.png";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { useSidebar } from "./SidebarProvider";

function SidebarHeader() {
  const { toggleShowIconsOnly, showIconsOnly } = useSidebar();
  return (
    <div className='flex gap-4 items-center h-10'>
      <BiMenu
        size={24}
        className='hover:text-gray-400 cursor-pointer'
        onClick={toggleShowIconsOnly}
      />
      {!showIconsOnly && (
        <div className='flex items-center justify-center gap-3 mx-auto md:m-0 md:w-fit'>
          <div className='relative w-[2.5rem] h-[1.5rem]'>
            <Image
              src={storeLogoBlue}
              alt='store icon'
              fill
              placeholder='blur'
            />
          </div>
          <h1 className='text-2xl text-picton-500'>Book Rent</h1>
        </div>
      )}
    </div>
  );
}

export default SidebarHeader;
