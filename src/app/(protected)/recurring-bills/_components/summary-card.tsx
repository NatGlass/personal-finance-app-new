import { Typography } from "@/components/typography/typography";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/format-currency";

function BillCard() {
  return (
    <div className="flex bg-white p-5 rounded-[12px] flex-col gap-y-5 w-full">
      <Typography variant="preset3" className="font-bold">
        Summary
      </Typography>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <Typography variant="preset5" className="font-normal text-grey-500">
            Paid Bills
          </Typography>
          <Typography variant="preset5_bold">
            4 {formatCurrency(190)}
          </Typography>
        </div>
        <Separator className="my-5" />
        <div className="flex justify-between items-center">
          <Typography variant="preset5" className="font-normal text-grey-500">
            Total Upcoming
          </Typography>
          <Typography variant="preset5_bold">
            4 {formatCurrency(194.98)}
          </Typography>
        </div>
        <Separator className="my-5" />
        <div className="flex justify-between items-center">
          <Typography variant="preset5" className="font-normal text-red">
            Due Soon
          </Typography>
          <Typography variant="preset5_bold" className="text-red">
            2 {formatCurrency(59.98)}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default BillCard;
