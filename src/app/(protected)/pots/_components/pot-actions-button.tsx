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

function PotActionsModal({ id }: { id: string }) {
  const [ConfirmDialog, confirmation] = useConfirmationModal({
    title: "Are you sure you want to delete this pot?",
    message: "This action cannot be undone.",
  });

  const deletePot = async (id: string) => {
    const confirmed = await confirmation();

    if (!confirmed) return;

    await deletePotById(id);
  };

  return (
    <>
      <ConfirmDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="link">
            <Ellipsis className="size-4 text-grey-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit Pot</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red"
            onClick={deletePot.bind(null, id)}
          >
            Delete Pot
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default PotActionsModal;
