import React from "react";
import Sidebar from "@/app/_components/dashboard/Sidebar";
import { SidebarProvider } from "@/app/_components/dashboard/Sidebar/SidebarProvider";
import Breadcrumb from "@/app/_components/dashboard/Breadcrumb";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className='bg-dashboard-bg h-[100dvh] p-4 grid grid-cols-[auto_1fr] gap-4'>
      {/* sidebar */}
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
      {/* content */}
      <div className='w-full h-full grid grid-rows-[auto_1fr]'>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* main content */}
        <div className='pt-5'>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
