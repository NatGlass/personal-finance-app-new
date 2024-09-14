import { Typography } from "@/components/typography/typography";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/format-currency";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TransactionItemProps {
  avatar: StaticImport;
  name: string;
  amount: number;
  date: string;
}

function TransactionItem({ avatar, name, amount, date }: TransactionItemProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-x-4 items-center">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          loading="lazy"
          className="rounded-full object-cover"
        />
        <Typography variant="preset4_bold">{name}</Typography>
      </div>
      <div className="flex flex-col gap-y-2">
        <Typography
          variant="preset4_bold"
          className={cn("", {
            "text-green": amount > 0,
          })}
        >
          {amount > 0 && "+"} {formatCurrency(amount)}
        </Typography>
        <Typography variant="preset5" className="text-grey-500 font-normal">
          {date}
        </Typography>
      </div>
    </div>
  );
}

export default TransactionItem;
