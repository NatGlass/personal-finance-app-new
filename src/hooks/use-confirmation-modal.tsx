"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface ConfirmationModalProps {
  title: string;
  message: string;
}

function useConfirmationModal({
  title,
  message,
}: ConfirmationModalProps): [() => JSX.Element, () => Promise<boolean>] {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirmation = () => {
    return new Promise<boolean>((resolve) => {
      setPromise({ resolve });
    })
  }

  const handleClose = () => {
    setPromise(null);
  };

  const handleCancel = () => {
      promise?.resolve(false);
      handleClose()
  }

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose()
  }

  const ConfirmDialog = () => (
    <Dialog open={promise !== null}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="pt-2">
          <Button onClick={handleCancel} variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant="destructive">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return [ConfirmDialog, confirmation];
}

export default useConfirmationModal;
