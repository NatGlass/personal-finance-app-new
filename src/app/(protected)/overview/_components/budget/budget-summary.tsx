import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Chart from "./chart";

function BudgetSummary() {
  return (
    <div className="col-span-8 lg:col-span-5 bg-white mt-8 lg:ml-6 py-6 px-5 md:p-8 rounded-[12px] lg:row-span-5">
      <div className="w-full flex justify-between items-center">
        <Typography as="h2" variant="preset2">
          My Budgets
        </Typography>
        <Button variant="tertiary" asChild>
          <Link href="/budgets">See Details</Link>
        </Button>
      </div>
      <Chart />
    </div>
  );
}

export default BudgetSummary;
