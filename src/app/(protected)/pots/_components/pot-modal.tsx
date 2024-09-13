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
import type { PotFormSchemaType } from "../validators";
import PotForm from "./pot-form";
import PotTransactionForm from "./pot-transaction-form"; // Import the transaction form

interface BaseProps {
  triggerButton?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  operation: "create" | "edit" | "add" | "withdraw";
}

interface CreateProps extends BaseProps {
  operation: "create";
}

interface EditProps extends BaseProps {
  operation: "edit";
  pot: PotFormSchemaType & { id: string };
}

interface AddProps extends BaseProps {
  operation: "add";
  pot: { id: string };
}

interface WithdrawProps extends BaseProps {
  operation: "withdraw";
  pot: { id: string };
}

type PotModalProps = CreateProps | EditProps | AddProps | WithdrawProps;

function PotModal(props: PotModalProps) {
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
    title = "Add New Pot";
    content = <PotForm setOpen={handleOpenChange} />;
  } else if (operation === "edit") {
    const { pot } = props as EditProps;
    title = "Edit Pot";
    content = <PotForm setOpen={handleOpenChange} pot={pot} />;
  } else if (operation === "add") {
    const { pot } = props as AddProps;
    title = "Add Money";
    content = (
      <PotTransactionForm
        setOpen={handleOpenChange}
        potId={pot.id}
        transactionType="add"
      />
    );
  } else if (operation === "withdraw") {
    const { pot } = props as WithdrawProps;
    title = "Withdraw Money";
    content = (
      <PotTransactionForm
        setOpen={handleOpenChange}
        potId={pot.id}
        transactionType="withdraw"
      />
    );
  } else {
    // Handle default case if needed
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

export default PotModal;
