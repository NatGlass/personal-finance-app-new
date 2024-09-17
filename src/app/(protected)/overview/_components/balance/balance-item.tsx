import { Typography } from "@/components/typography/typography";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/format-currency";

interface BalanceItemProps {
  title: string;
  value: number;
  inverted?: boolean;
}

function BalanceItem({ title, value, inverted = false }: BalanceItemProps) {
  return (
    <div
      className={cn(
        "p-6 w-full bg-white rounded-[12px] overflow-hidden",
        inverted && "bg-grey-900"
      )}
    >
      <Typography
        as="h2"
        variant="preset5"
        className={cn(inverted && "text-white")}
      >
        {title}
      </Typography>
      <Typography
        as="p"
        variant="preset1"
        className={cn("mt-3 text-grey-900 truncate", inverted && "text-white")}
      >
        {formatCurrency(value)}
      </Typography>
    </div>
  );
}

export default BalanceItem;
