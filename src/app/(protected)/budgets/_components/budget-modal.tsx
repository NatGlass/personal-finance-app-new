"use client";

import { Typography } from "@/components/typography/typography";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import BudgetForm from "./budget-form";
import type { BudgetSchemaType } from "../validators";

interface BaseProps {
  triggerButton?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  operation: "create" | "edit";
}

interface CreateProps extends BaseProps {
  operation: "create";
}

interface EditProps extends BaseProps {
  operation: "edit";
  budget: BudgetSchemaType & { id: string };
}

type BudgetModalProps = CreateProps | EditProps;

function BudgetModal(props: BudgetModalProps) {
  const { triggerButton, open, onOpenChange, operation } = props;

  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = open !== undefined && onOpenChange !== undefined;

  const actualOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (openState: React.SetStateAction<boolean>) => {
    const newOpenState =
      typeof openState === "function" ? openState(actualOpen) : openState;

    if (isControlled && onOpenChange) {
      onOpenChange(newOpenState);
    } else {
      setInternalOpen(newOpenState);
    }
  };

  let title = "";
  let content = null;

  if (operation === "create") {
    title = "Add New Budget";
    content = <BudgetForm setOpen={handleOpenChange} />;
  } else if (operation === "edit") {
    const { budget } = props as EditProps;
    title = "Edit Budget";
    content = <BudgetForm setOpen={handleOpenChange} budget={budget} />;
  } else {
    title = "";
    content = null;
  }

  return (
    <Dialog open={actualOpen} onOpenChange={handleOpenChange}>
      {triggerButton && <DialogTrigger asChild>{triggerButton}</DialogTrigger>}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Typography variant="preset1">{title}</Typography>
          </DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
}

export default BudgetModal;
