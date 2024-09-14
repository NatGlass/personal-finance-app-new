import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

function TransactionsHeader() {
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <Input
          placeholder="Search transaction"
          className="w-[320px] bg-white"
        />
      </div>
      <div className="flex gap-x-6 w-fit items-center">
        <div className="flex gap-x-2">
          <Select>
            <SelectTrigger className="bg-white">Latest</SelectTrigger>
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
          <SelectTrigger className="bg-white">All Transactions</SelectTrigger>
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
