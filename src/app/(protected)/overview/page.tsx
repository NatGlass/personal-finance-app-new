import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";
import BalanceSummary from "./_components/balance/balance-summary";
import BudgetSummary from "./_components/budget/budget-summary";
import PotsSummary from "./_components/pots/pots-summary";
import RecurringBillsSummary from "./_components/recurring-bills/recurring-bills-summary";
import TransactionsSummary from "./_components/transactions/transactions-summary";

function OverviewPage() {
  return (
    <PageContainer>
      <div className="col-span-full row-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1" className="mb-8">
          Overview
        </Typography>
      </div>
      <BalanceSummary />
      <div className="col-span-full grid grid-cols-8 lg:grid-cols-12 lg:grid-rows-[repeat(12,100px)]">
        <PotsSummary />
        <BudgetSummary />
        <TransactionsSummary />
        <RecurringBillsSummary />
      </div>
    </PageContainer>
  );
}

export default OverviewPage;
