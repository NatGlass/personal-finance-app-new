"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import BudgetModal from "./budget-modal";

function AddBudgetButton() {
  return (
    <BudgetModal
      operation="create"
      triggerButton={
        <Button className="mb-8">
          <PlusIcon className="size-4 mr-2" />
          Add New Budget
        </Button>
      }
    />
  );
}

export default AddBudgetButton;
