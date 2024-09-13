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
import { deletePotById } from "../actions/deletePotById";
import { useState } from "react";
import PotModal from "./pot-modal";
import type { PotFormSchemaType } from "../validators";

interface PotActionsModalProps {
  pot: PotFormSchemaType & { id: string };
}

function PotActionsModal({ pot }: PotActionsModalProps) {
  const [ConfirmDialog, confirmation] = useConfirmationModal({
    title: "Are you sure you want to delete this pot?",
    message: "This action cannot be undone.",
  });

  const [openEditModal, setOpenEditModal] = useState(false);

  const deletePot = async (id: string) => {
    const confirmed = await confirmation();

    if (!confirmed) return;

    await deletePotById(id);
  };

  return (
    <>
      <ConfirmDialog />
      <PotModal pot={pot} open={openEditModal} onOpenChange={setOpenEditModal} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="link">
            <Ellipsis className="size-4 text-grey-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setOpenEditModal(true)}>Edit Pot</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red"
            onClick={deletePot.bind(null, pot.id)}
          >
            Delete Pot
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default PotActionsModal;
