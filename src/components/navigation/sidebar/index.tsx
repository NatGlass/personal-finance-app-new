"use client";

import Logo from "@/assets/logo.png";
import Image from "next/image";
import SidebarLinkList from "./link-list";
import MinimiseSidebar from "./minimise-sidebar";

function Sidebar() {
  return (
    <aside
      className="
        min-h-screen w-[300px] top-0 left-0 fixed bg-grey-900 flex-col rounded-r-[16px] hidden md:flex"
    >
      <div className="px-8 py-10">
        <Image src={Logo} width={120} height={20} alt="Finance logo" />
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <SidebarLinkList />
        </div>
        <MinimiseSidebar />
      </div>
    </aside>
  );
}

export default Sidebar;
