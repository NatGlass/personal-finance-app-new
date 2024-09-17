import type { colourMap } from "@/components/common/colour-map";
import DecorativeBar from "@/components/common/decorative-bar";
import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/utils/format-currency";

function BudgetSpendBar({
  spent,
  maxSpend,
  fillColour,
}: {
  spent: number;
  maxSpend: number;
  fillColour: string;
}) {
  const percentage = (spent / maxSpend) * 100;
  return (
    <div className="my-5">
      <Typography variant="preset4" className="text-grey-500 font-normal">
        Maximum of {formatCurrency(maxSpend)}
      </Typography>
      <Progress
        value={percentage}
        fillColour={fillColour as keyof typeof colourMap}
        className="h-6 rounded-[4px] my-4"
      />
      <div className="flex gap-x-4 items-center">
        <div className="flex-1 flex items-center">
          <div>
            <DecorativeBar bgColour={fillColour} />
          </div>
          <div>
            <Typography variant="preset4" className="text-grey-500 font-normal">
              Spent
            </Typography>
            <Typography variant="preset4_bold">
              {formatCurrency(spent)}
            </Typography>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div>
            <DecorativeBar bgColour="beige-100" />
          </div>
          <div>
            <Typography variant="preset4" className="text-grey-500 font-normal">
              Remaining
            </Typography>
            <Typography variant="preset4_bold">
              {formatCurrency(maxSpend - spent)}
            </Typography>
          </div>
        </div>
      </div>
      <div className="my-5 bg-beige-100 rounded-[12px] p-5">
        <div className="flex justify-between items-center">
          <Typography variant="preset3" className="text-grey-900 font-bold">
            Latest Spending
          </Typography>
          <Button variant="tertiary">See All</Button>
        </div>
      </div>
    </div>
  );
}

export default BudgetSpendBar;
