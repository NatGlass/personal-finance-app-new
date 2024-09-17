export const dynamic = "force-dynamic";

import { colourMap } from "@/components/common/colour-map";
import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";
import { getUsersBudgets } from "@/db/getUsersBudgets";
import AddBudgetButton from "./_components/add-budget-button";
import BudgetCard from "./_components/budget-card";
import { Categories } from "./categories";
async function BudgetsPage() {
  const budgets = await getUsersBudgets();
  return (
    <PageContainer>
      <div className="col-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1" className="mb-8">
          Budgets
        </Typography>
        <AddBudgetButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 col-span-full">
        {budgets?.map((budget) => {
          const validColour = colourMap[budget.theme as keyof typeof colourMap]
            ? (budget.theme as keyof typeof colourMap)
            : "green";

          const validCategory = Object.values(Categories).includes(
            budget.category.name as Categories
          )
            ? (budget.category.name as Categories)
            : Categories.Bills;

          const budgetValues = {
            ...budget,
            theme: validColour as keyof typeof colourMap,
            maxSpend: budget.maximum,
            category: validCategory,
          };

          return <BudgetCard key={budget.id} budget={budgetValues} />;
        })}
      </div>
    </PageContainer>
  );
}

export default BudgetsPage;
