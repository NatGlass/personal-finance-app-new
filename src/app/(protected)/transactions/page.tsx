"use client";

import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";
import TransactionsContainer from "./_components/transactions-container";
import TransactionTable from "./_components/transactions-table";
import { useState, useEffect } from "react";

function TransactionsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <PageContainer>
      <div className="col-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1" className="mb-8">
          Transactions
        </Typography>
      </div>
      <TransactionsContainer>
        <TransactionTable />
      </TransactionsContainer>
    </PageContainer>
  );
}

export default TransactionsPage;
