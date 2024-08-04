"use client";

import React from "react";
import { ScaleLoader } from "react-spinners";

function Loading() {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <ScaleLoader />
    </div>
  );
}

export default Loading;
