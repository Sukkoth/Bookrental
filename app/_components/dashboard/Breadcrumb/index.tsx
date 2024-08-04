"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Breadcrumb() {
  const pathname = usePathname();
  const endPoint = pathname.split("/").at(-1); //the last segment of the current page

  const paths = pathname.slice(1).split("/").slice(0, -1); //you do not need the last path since path is already there

  //construct links for all the segments
  const links = paths.map((path, index) => {
    return { name: path, link: `/${paths.slice(0, index + 1).join("/")} ` };
  });

  return (
    <div className='bg-white rounded-md p-5 uppercase text-xl'>
      {/* no /dashboard route for now */}
      {links.map((link, index) =>
        index === 0 ? (
          <span className='cursor-pointer' key={index}>
            {link.name}/
          </span>
        ) : (
          <Link
            href={link.link}
            key={index}
            className='cursor-pointer hover:text-midnight-900'
          >
            {link.name}/
          </Link>
        )
      )}
      <span className='font-semibold cursor-pointer'>{endPoint}</span>
    </div>
  );
}

export default Breadcrumb;
