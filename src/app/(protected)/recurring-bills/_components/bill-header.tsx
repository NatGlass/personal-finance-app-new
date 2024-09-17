"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useMediaQuery } from "@uidotdev/usehooks";
import { SortDescIcon } from "lucide-react";

const sortOptions = [
  { label: "Latest", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "atoz" },
  { label: "Z to A", value: "ztoa" },
  { label: "Highest", value: "highest" },
  { label: "Lowest", value: "lowest" },
];

interface BillsHeaderProps {
  search: string;
  setSearch: (search: string) => void;
}

function BillsHeader({
  search,
  setSearch,
}: BillsHeaderProps) {
  const isSmallDevice = useMediaQuery("only screen and (max-width:768px)");

  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <Input
          placeholder="Search bill"
          className="lg:w-[320px] bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex gap-x-6 w-fit items-center">
        <div className="flex gap-x-2">
          <Select>
            <SelectTrigger className="bg-white">
              {isSmallDevice ? <SortDescIcon className="size-5" /> : "Latest"}
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem
                  className="pl-2"
                  value={option.value}
                  key={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default BillsHeader;
