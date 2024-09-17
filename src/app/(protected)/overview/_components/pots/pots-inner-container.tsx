import { Typography } from "@/components/typography/typography";
import { PiggyBank } from "lucide-react";
import Pot from "./pot";
import { getUsersPots } from "@/db/getUsersPots";
import { formatCurrency } from "@/utils/format-currency";

async function PotsInnerContainer() {
  const potsData = await getUsersPots()

  const sortedPots = potsData?.sort((a, b) => {
    const dateA = new Date(a.updatedAt || a.createdAt).getTime();
    const dateB = new Date(b.updatedAt || b.createdAt).getTime();
    return dateB - dateA; // Newest first
  });

  const totalBalance =
    potsData?.reduce((total, pot) => total + pot.total, 0) || 0;

  const displayedPots = sortedPots?.slice(0, 4);

  return (
    <div className="mt-5 flex flex-col lg:flex-row gap-5">
      <div className="rounded-[12px] bg-beige-100 px-4 py-5 flex gap-x-4 overflow-hidden min-w-[45%]">
        <div className="flex items-center">
          <PiggyBank className="size-10 text-green" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <Typography variant="preset4" className="text-grey-500">
            Total Saved
          </Typography>
          <Typography variant="preset1" className="mt-[11px] truncate">
            {formatCurrency(totalBalance)}
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 w-full">
        {displayedPots?.map((pot) => {
          return (
            <Pot
              key={pot.id}
              title={pot.name}
              colour={pot.theme}
              value={pot.total || 0}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PotsInnerContainer;
