"use client";

import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";
import { useEffect, useState } from "react";
import BillCard from "./_components/bill-card";
import BillTable from "./_components/bill-table";
import SummaryCard from "./_components/summary-card";

function RecurringBillsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <PageContainer>
      <div className="col-span-full row-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1" className="mb-8">
          Recurring Bills
        </Typography>
      </div>
      <div className="col-span-full lg:col-span-4 flex flex-col gap-y-3 lg:gap-y-6">
        <BillCard />
        <SummaryCard />
      </div>
      <BillTable />
    </PageContainer>
  );
}

export default RecurringBillsPage;
