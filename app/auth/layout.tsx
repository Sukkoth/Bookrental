import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  console.log("Layout");
  return (
    <div className='h-[100dvh] w-full flex'>
      <div className='hidden w-1/2 bg-midnight-950 md:flex items-center justify-center'>
        <div className='relative object-cover size-[30rem]'>
          <Image src='/storeLogo.png' alt='store icon' fill />
        </div>
      </div>
      <div className='md:w-1/2 w-full'>{children}</div>
    </div>
  );
}

export default Layout;
