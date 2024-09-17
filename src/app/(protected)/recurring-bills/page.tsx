import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";
import BillCard from "./_components/bill-card";
import SummaryCard from "./_components/summary-card";

function RecurringBillsPage() {
  return (
    <PageContainer>
      <div className="col-span-full row-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1" className="mb-8">
          Recurring Bills
        </Typography>
      </div>
      <div className="col-span-full md:col-span-6 lg:col-span-4 flex flex-col gap-y-3 lg:gap-y-6">
        <BillCard />
        <SummaryCard />
      </div>
    </PageContainer>
  );
}

export default RecurringBillsPage;
