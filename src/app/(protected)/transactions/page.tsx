import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";
import TransactionsContainer from "./_components/transactions-container";
import TransactionsHeader from "./_components/transactions-header";
import TransactionTable from "./_components/transactions-table";

function OverviewPage() {
  return (
    <PageContainer>
      <div className="col-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1" className="mb-8">
          Transactions
        </Typography>
      </div>
      <TransactionsContainer>
        <TransactionsHeader />
        <TransactionTable />
      </TransactionsContainer>
    </PageContainer>
  );
}

export default OverviewPage;
