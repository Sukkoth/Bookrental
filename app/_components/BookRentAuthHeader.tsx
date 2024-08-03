import Image from "next/image";
import React from "react";
import storeLogoBlue from "@/public/storeLogoBlue.png";

function BookRentAuthHeader() {
  return (
    <div className='flex items-end justify-center gap-3 mx-auto md:m-0 md:w-fit'>
      <div className='relative w-[3rem] h-[2rem] md:w-[4rem] md:h-[3rem]'>
        <Image src={storeLogoBlue} alt='store icon' fill placeholder='blur' />
      </div>
      <h1 className='text-2xl md:text-4xl'>Book Rent</h1>
    </div>
  );
}

export default BookRentAuthHeader;
