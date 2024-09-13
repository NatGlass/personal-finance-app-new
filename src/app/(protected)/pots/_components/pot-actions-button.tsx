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
import type { PotFormSchemaType } from "../validators";
import PotModal from "./pot-modal";

interface PotActionsModalProps {
  pot: PotFormSchemaType & { id: string };
}

function PotActionsModal({ pot }: PotActionsModalProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [ConfirmDialog, confirmation] = useConfirmationModal({
    title: "Are you sure you want to delete this pot?",
    message: "This action cannot be undone.",
  });

  const deletePot = async (id: string) => {
    const confirmed = await confirmation();

    if (!confirmed) return;

    await deletePotAction(id);
  };

  return (
    <>
      <ConfirmDialog />
      <PotModal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        pot={pot}
        operation="edit"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="link">
            <Ellipsis className="size-4 text-grey-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setIsEditModalOpen(true)}>Edit Pot</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red"
            onSelect={deletePot.bind(null, pot.id)}
          >
            Delete Pot
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default PotActionsModal;
