import DecorativeBar from "@/components/common/decorative-bar";
import { Typography } from "@/components/typography/typography";
import { formatCurrency } from "@/utils/format-currency";

interface PotProps {
  title: string;
  colour: string;
  value: number;
}

function Pot({ title, colour, value }: PotProps) {

  return (
    <div className="w-full flex">
      <DecorativeBar bgColour={colour} />
      <div className="h-[43px]">
        <Typography variant="preset5" as="p" className="text-grey-500">
          {title}
        </Typography>
        <Typography variant="preset4_bold" as="p" className="text-grey-900">
          {formatCurrency(value)}
        </Typography>
      </div>
    </div>
  );
}

export default Pot;
