import ColourBadge from "@/components/common/colour-badge";
import { Typography } from "@/components/typography/typography";
import Values from "./values";
import PotActionsButton from "./pot-actions-button";
import type { PotFormSchemaType } from "../validators";

interface PotCardProps {
  pot: PotFormSchemaType & { id: string };
}

function PotCard({pot}: PotCardProps) {
  return (
    <div className="w-full bg-white rounded-[12px] px-6 py-5 md:p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <ColourBadge colour={pot.theme} />
          <Typography variant="preset2">{pot.name}</Typography>
        </div>
        <PotActionsButton pot={pot} />
      </div>
      <Values total={pot.total || 0} colour={pot.theme} target={pot.target} />
    </div>
  );
}

export default PotCard;
