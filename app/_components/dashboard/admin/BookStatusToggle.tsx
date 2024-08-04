"use client";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

type Props = {
  status: boolean;
};

function BookStatusToggle({ status }: Props) {
  const [active, setActive] = useState(status);

  return (
    <div
      className={`px-2 py-1 ${
        active ? "bg-green-200" : "bg-red-200"
      } flex w-[9rem] items-center gap-3 rounded-2xl justify-center transition-colors duration-500`}
    >
      <p
        className={`${
          active ? `text-green-600` : "text-red-500"
        } flex items-center gap-1`}
      >
        <span>{active ? <IoCheckmark /> : "x"}</span>{" "}
        {active ? "Active" : "Inactive"}
      </p>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={`relative after:absolute after:size-4 rounded-2xl after:rounded-full  w-[2.5rem] h-3 cursor-pointer hover:after:shadow-2xl hover:after:shadow-red-400 hover:before:block before:hidden transition-all duration-500 before:size-6 before:content-[""] before:absolute  before:z-10 after:z-20 before:rounded-full ${
          active
            ? "bg-green-500 before:bg-green-500/40 after:bg-green-600 after:right-0 after:-top-[2px] before:-right-1 before:-top-[6px]"
            : "bg-red-500 before:bg-red-500/40 after:bg-red-600 after:left-0 after:-top-[2px] before:-left-1 before:-top-[6px]"
        }`}
      ></div>
    </div>
  );
}

//active after:right-0 after:-top-[2px] before:-right-1 before:-top-[6px]
//active after:left-0 after:-top-[2px] before:-left-1 before:-top-[6px]

export default BookStatusToggle;
