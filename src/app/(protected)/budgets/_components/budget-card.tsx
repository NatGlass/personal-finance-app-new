import ColourBadge from "@/components/common/colour-badge";
import { Typography } from "@/components/typography/typography";
import type { BudgetSchemaType} from "../validators";
import BudgetActionsButton from "./budget-actions-button";

interface BudgetCardProps {
  budget: BudgetSchemaType & { id: string };
}

function BudgetCard({budget}: BudgetCardProps) {
  return (
    <div className="w-full bg-white rounded-[12px] px-6 py-5 md:p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <ColourBadge colour={budget.theme} />
          <Typography variant="preset2">{budget.category || "Bills"}</Typography>
        </div>
        <BudgetActionsButton budget={budget} />
      </div>
    </div>
  );
}

export default BudgetCard;
