import List from "@/app/_components/dashboard/admin/List";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { BiSearch } from "react-icons/bi";
import { ScaleLoader } from "react-spinners";

// const List = dynamic(() => import("@/app/_components/dashboard/admin/List"));
// const List = dynamic(() => import("@/app/_components/dashboard/admin/List"));

function page() {
  return (
    <div className='bg-white w-full p-5 rounded-xl shadow-lg shadow-gray-100 pt-10 overflow-hidden'>
      {/* top options */}
      <div className='flex items-center justify-end gap-3'>
        <BiSearch />
        <BiSearch />
        <BiSearch />
        <BiSearch />
        <BiSearch />
      </div>
      {/* <Suspense fallback={<ScaleLoader />}> */}
      <List />
      {/* </Suspense> */}
    </div>
  );
}

export default page;
