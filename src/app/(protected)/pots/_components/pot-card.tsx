import ColourBadge from "@/components/common/colour-badge";
import type { colourMap } from "@/components/common/colour-map";
import { Typography } from "@/components/typography/typography";
import Values from "./values";
import PotActionsButton from "./pot-actions-button";

interface PotCardProps {
  id: string;
  title: string;
  colour: keyof typeof colourMap;
  total: number;
  target: number;
}

function PotCard({ id, title, colour, total, target }: PotCardProps) {
  return (
    <div className="w-full bg-white rounded-[12px] px-6 py-5 md:p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <ColourBadge colour={colour} />
          <Typography variant="preset2">{title}</Typography>
        </div>
        <PotActionsButton id={id} />
      </div>
      <Values total={total} colour={colour} target={target} />
    </div>
  );
}

export default PotCard;
