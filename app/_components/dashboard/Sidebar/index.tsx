"use client";

import { FaBook, FaChartLine, FaCog, FaEnvelope } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";

import SidebarGroup from "@/app/_components/dashboard/Sidebar/SidebarGroup";
import SidebarHeader from "@/app/_components/dashboard/Sidebar/SidebarHeader";
import SidebarItem from "@/app/_components/dashboard/Sidebar/SidebarItem";
import SidebarLogoutButton from "@/app/_components/dashboard/Sidebar/SidebarLogoutButton";
import { useSidebar } from "@/app/_components/dashboard/Sidebar/SidebarProvider";

function Sidebar() {
  const { showIconsOnly } = useSidebar();
  return (
    <div
      className={`h-full bg-midnight-950 text-white rounded-md p-6 ${
        showIconsOnly ? "w-fit" : "w-72"
      } grid grid-rows-[auto_1fr_auto] transition-all duration-300`}
    >
      <SidebarHeader />
      {/* sidebar content */}
      <div>
        <SidebarGroup>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </SidebarGroup>
        <SidebarGroup>
          {sidebarItems2.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </SidebarGroup>
      </div>
      {/* sidebar footer */}

      <SidebarLogoutButton />
    </div>
  );
}

export default Sidebar;

//vary this data based on pathname
const sidebarItems = [
  {
    label: "Dashboard",
    icon: <MdSpaceDashboard />,
    href: "/dashboard/admin",
  },
  {
    label: "Books",
    icon: <FaBook />,
    href: "/dashboard/admin/books",
  },
  {
    label: "Settings",
    icon: <FaCog />,
    href: "/settings",
  },
];

const sidebarItems2 = [
  {
    label: "Analytics",
    icon: <FaChartLine />,
    href: "/analytics",
  },
  {
    label: "Messages",
    icon: <FaEnvelope />,
    href: "/messages",
  },
  {
    label: "Library",
    icon: <GiBookCover />,
    href: "/library",
  },
];
