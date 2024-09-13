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

interface PotModalProps {
  pot?: PotFormSchemaType & { id: string };
  triggerButton?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function PotModal({ pot, triggerButton, open, onOpenChange }: PotModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = open !== undefined && onOpenChange !== undefined;

  const isEditing = pot != null;

  const actualOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (openState: React.SetStateAction<boolean>) => {
    const newOpenState =
      typeof openState === "function" ? openState(actualOpen) : openState;

    if (isControlled && onOpenChange) {
      onOpenChange(newOpenState);
    } else {
      setInternalOpen(openState);
    }
  };

  return (
    <Dialog open={actualOpen} onOpenChange={handleOpenChange}>
      {triggerButton && <DialogTrigger asChild>{triggerButton}</DialogTrigger>}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Typography variant="preset1">
              {isEditing ? "Edit Pot" : "Add New Pot"}
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <PotForm setOpen={handleOpenChange} pot={pot} />
      </DialogContent>
    </Dialog>
  );
}

export default PotModal;
