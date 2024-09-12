import ColourBadge from "@/components/common/colour-badge";
import type { colourMap } from "@/components/common/colour-map";
import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import Values from "./values";

interface PotCardProps {
  title: string;
  colour: keyof typeof colourMap;
  total: number;
  target: number;
}

function PotCard({ title, colour, total, target }: PotCardProps) {
  return (
    <div className="w-full bg-white rounded-[12px] px-6 py-5 md:p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <ColourBadge colour={colour} />
          <Typography variant="preset2">{title}</Typography>
        </div>
        <div>
          <Button size="icon" variant="link">
            <Ellipsis className="size-4 text-grey-500" />
          </Button>
        </div>
      </div>
      <Values total={total} colour={colour} target={target} />
    </div>
  );
}

export default PotCard;
