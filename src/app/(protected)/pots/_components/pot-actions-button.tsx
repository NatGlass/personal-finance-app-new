"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { deletePotById } from "../actions/deletePotById";

function PotActionsModal({ id }: { id: string }) {
  const deletePot = async (id: string) => {
    await deletePotById(id);
  };

  return (
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
  );
}

export default PotActionsModal;
