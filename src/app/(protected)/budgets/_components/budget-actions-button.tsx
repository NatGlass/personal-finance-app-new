"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useConfirmationModal from "@/hooks/use-confirmation-modal";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import { deletePotAction } from "../actions/delete-pot-action";
import type { BudgetSchemaType, PotFormSchemaType } from "../validators";
import PotModal from "./pot-modal";
import BudgetModal from "./budget-modal";
import { deleteBudgetAction } from "../actions/delete-budget-action";

interface BudgetActionsModalProps {
  budget: BudgetSchemaType & { id: string };
}

function BudgetActionsModal({ budget }: BudgetActionsModalProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [ConfirmDialog, confirmation] = useConfirmationModal({
    title: "Are you sure you want to delete this budget?",
    message: "This action cannot be undone.",
  });

  const deleteBudget = async (id: string) => {
    const confirmed = await confirmation();

    if (!confirmed) return;

    await deleteBudgetAction(id);
  };

  return (
    <>
      <ConfirmDialog />
      <BudgetModal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        budget={budget}
        operation="edit"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="link">
            <Ellipsis className="size-4 text-grey-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setIsEditModalOpen(true)}>Edit Budget</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red"
            onSelect={deleteBudget.bind(null, budget.id)}
          >
            Delete Budget
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default BudgetActionsModal;
