import { Typography } from "@/components/typography/typography";
import { formatCurrency } from "@/utils/format-currency";
import { ReceiptPoundSterlingIcon } from "lucide-react";

function BillCard() {
  return (
    <div className="flex bg-grey-900 py-6 px-5 rounded-[12px] md:flex-col md:items-start text-white items-center gap-x-5 lg:p-6 w-full">
      <ReceiptPoundSterlingIcon className="size-10" />
      <div className="md:mt-8">
        <Typography variant="preset4" className="font-normal">Total Bills</Typography>
        <Typography variant="preset1" className="mt-[11px]">
            {formatCurrency(384.98)}
        </Typography>
      </div>
    </div>
  );
}

export default BillCard;
