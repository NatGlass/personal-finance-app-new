import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BillItem from "./bill-item";

function RecurringBillsSummary() {
  return (
    <div className="col-span-8 lg:col-span-5 bg-white mt-8 py-6 px-5 md:p-8 rounded-[12px] lg:row-span-4 lg:ml-6">
      <div className="w-full flex justify-between items-center">
        <Typography as="h2" variant="preset2">
          Recurring Bills
        </Typography>
        <Button variant="tertiary" asChild>
          <Link href="/recurring-bills">View All</Link>
        </Button>
      </div>
      <div className="my-8 flex flex-col gap-y-3">
        <BillItem name="Paid Bills" amount={190} colour="green" />
        <BillItem name="Total Upcoming" amount={194.98} colour="yellow" />
        <BillItem name="Due Soon" amount={59.98} colour="cyan" />
      </div>
    </div>
  );
}

export default RecurringBillsSummary;
