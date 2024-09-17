"use client";

import { SidebarLinks } from "../nav-links";
import SidebarLink from "./link";

function SidebarLinkList() {
  return (
    <menu className="mt-6 pr-[26px] h-full">
      <div>
        {SidebarLinks.map((link) => (
          <SidebarLink
            key={link.title}
            title={link.title}
            link={link.link}
            Icon={link.Icon}
          />
        ))}
      </div>
    </menu>
  );
}

export default SidebarLinkList;
