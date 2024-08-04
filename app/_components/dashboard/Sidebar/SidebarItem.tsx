import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSidebar } from "./SidebarProvider";

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

function SidebarItem({ label, icon, href }: Props) {
  const pathname = usePathname();
  const { showIconsOnly } = useSidebar();

  let testActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${
        testActive ? "bg-picton-400 hover:bg-picton-500" : "hover:bg-picton-950"
      } text-white py-2 rounded-md px-4 flex items-center gap-4 cursor-pointer h-12`}
    >
      {icon}
      <span className={!showIconsOnly ? "block" : "hidden"}>{label}</span>
    </Link>
  );
}

export default SidebarItem;
