"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useMediaQuery } from "@uidotdev/usehooks";
import { FilterIcon, SortDescIcon } from "lucide-react";

const sortOptions = [
  { label: "Latest", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "atoz" },
  { label: "Z to A", value: "ztoa" },
  { label: "Highest", value: "highest" },
  { label: "Lowest", value: "lowest" },
];

const filterOptions = [
  { label: "All Transactions", value: "all" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Bills", value: "bills" },
  { label: "Groceries", value: "groceries" },
  { label: "Dining Out", value: "dining out" },
  { label: "Transportation", value: "transportation" },
  { label: "Personal Care", value: "personal care" },
];

interface TransactionsHeaderProps {
  search: string;
  setSearch: (search: string) => void;
  sort: string;
  setSort: (sort: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

function TransactionsHeader({
  search,
  setSearch,
  sort,
  setSort,
  filter,
  setFilter,
}: TransactionsHeaderProps) {
  const isSmallDevice = useMediaQuery("only screen and (max-width:768px)");

  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <Input
          placeholder="Search transaction"
          className="lg:w-[320px] bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex gap-x-6 w-fit items-center">
        <div className="flex gap-x-2">
          <Select value={sort} onValueChange={setSort}>
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
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="bg-white">
            {isSmallDevice ? (
              <FilterIcon className="size-5" />
            ) : (
              "All Transactions"
            )}
          </SelectTrigger>
          <SelectContent>
            {filterOptions.map((option) => (
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
  );
}

export default TransactionsHeader;
