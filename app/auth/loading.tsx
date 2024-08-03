"use client";
import React from "react";
import { ScaleLoader } from "react-spinners";

function Loading() {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <ScaleLoader color='#171b36' />
    </div>
  );
}

export default Loading;
