"use client";

import { Typography } from "@/components/typography/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarLinkListProps } from "../nav-links";

function SidebarLink({ title, link, Icon }: SidebarLinkListProps) {
  const path = usePathname();

  const isActive = path === link;

  return (
    <Link
      href={link}
      className={cn("flex w-full pl-8 py-4 rounded-r-[12px]", {
        "bg-white": isActive,
        "hover:bg-white/10": !isActive,
        "border-l-4 border-green": isActive,
      })}
    >
      <Icon
        className={cn("size-6 mr-4 text-grey-300", {
          "text-green": isActive,
        })}
      />
      <Typography
        variant="preset3"
        as="span"
        className={cn("text-grey-300", {
          "text-grey-900 font-bold": isActive,
        })}
      >
        {title}
      </Typography>
    </Link>
  );
}

export default SidebarLink;
