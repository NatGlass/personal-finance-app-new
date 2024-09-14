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

function TransactionsHeader() {
  const isSmallDevice = useMediaQuery("only screen and (max-width:768px)");

  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <Input
          placeholder="Search transaction"
          className="lg:w-[320px] bg-white"
        />
      </div>
      <div className="flex gap-x-6 w-fit items-center">
        <div className="flex gap-x-2">
          <Select>
            <SelectTrigger className="bg-white">
              {isSmallDevice ? <SortDescIcon className="size-5" /> : "Latest"}
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="pl-2" value="latest">
                Latest
              </SelectItem>
              <SelectItem className="pl-2" value="oldest">
                Oldest
              </SelectItem>
              <SelectItem className="pl-2" value="atoz">
                A to |
              </SelectItem>
              <SelectItem className="pl-2" value="ztoa">
                Z to A
              </SelectItem>
              <SelectItem className="pl-2" value="highest">
                Highest
              </SelectItem>
              <SelectItem className="pl-2" value="lowest">
                Lowest
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Select>
          <SelectTrigger className="bg-white">
            {isSmallDevice ? (
              <FilterIcon className="size-5" />
            ) : (
              "All Transactions"
            )}
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="p-2" value="all">
              All Transactions
            </SelectItem>
            <SelectItem className="p-2" value="entertainment">
              Entertainment
            </SelectItem>
            <SelectItem className="p-2" value="bills">
              Bills
            </SelectItem>
            <SelectItem className="p-2" value="groceries">
              Groceries
            </SelectItem>
            <SelectItem className="p-2" value="dining-out">
              Dining Out
            </SelectItem>
            <SelectItem className="p-2" value="transportation">
              Transportation
            </SelectItem>
            <SelectItem className="p-2" value="personal-care">
              Personal Care
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default TransactionsHeader;
