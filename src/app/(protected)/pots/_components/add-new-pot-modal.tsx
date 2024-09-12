"use client";

import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import AddNewPotForm from "./add-new-pot-form";

function AddNewPotModal() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mb-8">
          <PlusIcon className="size-4 mr-2" />
          Add New Pot
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Typography variant="preset1">Add New Pot</Typography>
          </DialogTitle>
        </DialogHeader>
        <AddNewPotForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default AddNewPotModal;
