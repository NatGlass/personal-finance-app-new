import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";
import BalanceSummary from "./_components/balance/balance-summary";
import BudgetSummary from "./_components/budget/budget-summary";
import PotsSummary from "./_components/pots/pots-summary";

function OverviewPage() {
  return (
    <PageContainer>
      <div className="col-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1" className="mb-8">
          Overview
        </Typography>
      </div>
      <BalanceSummary />
      <PotsSummary />
      <BudgetSummary />
    </PageContainer>
  );
}

export default OverviewPage;
