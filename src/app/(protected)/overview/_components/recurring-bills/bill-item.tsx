import { Typography } from "@/components/typography/typography";
import { formatCurrency } from "@/utils/format-currency";

interface BillItemProps {
  name: string;
  amount: number;
  colour: string;
}

function BillItem({ name, amount, colour }: BillItemProps) {
  return (
    <div
      className={`flex justify-between items-center px-4 py-5 border-l-4 bg-beige-100 rounded-[8px] border-${colour}`}
    >
      <Typography variant="preset4" className="text-gray-500 font-normal">
        {name}
      </Typography>
      <Typography variant="preset4_bold">{formatCurrency(amount)}</Typography>
    </div>
  );
}

export default BillItem;
