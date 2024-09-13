"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import PotModal from "./pot-modal";

function AddPotButton() {
  return (
    <PotModal
      operation="create"
      triggerButton={
        <Button className="mb-8">
          <PlusIcon className="size-4 mr-2" />
          Add New Pot
        </Button>
      }
    />
  );
}

export default AddPotButton;
