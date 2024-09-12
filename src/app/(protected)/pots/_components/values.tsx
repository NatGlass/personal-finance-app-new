"use client";

import type { colourMap } from "@/components/common/colour-map";
import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/utils/format-currency";
import { PlusIcon } from "lucide-react";

interface ValuesProps {
  total: number;
  colour: keyof typeof colourMap;
  target: number;
}

function Values({ total, colour, target }: ValuesProps) {
  const percentageSaved = (total / target) * 100;

  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        <Typography variant="preset4" className="text-grey-500">
          Total Saved
        </Typography>
        <Typography variant="preset1">{formatCurrency(total)}</Typography>
      </div>
      <Progress value={percentageSaved} className="h-2 mt-4" fillColour={colour} />
      <div className="mt-[13px] flex justify-between items-center">
        <Typography variant="preset5_bold" className="text-grey-500">
          {percentageSaved.toFixed(2)}%
        </Typography>
        <Typography variant="preset5" className="text-grey-500">
          Target of {formatCurrency(target)}
        </Typography>
      </div>
      <div className="my-8 flex justify-between gap-x-4">
        <Button variant="secondary" className="w-full py-[26.5px]">
          <PlusIcon className="size-4 mr-2" /> Add Money
        </Button>
        <Button variant="secondary" className="w-full py-[26.5px]">
          Withdraw Money
        </Button>
      </div>
    </div>
  );
}

export default Values;
