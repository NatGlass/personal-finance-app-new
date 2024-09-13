"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import PotModal from "./pot-modal";

function PotTransactionButtons({ potId }: { potId: string }) {
  return (
    <div className="my-8 flex justify-between gap-x-4">
      <PotModal
        operation="add"
        pot={{ id: potId }}
        triggerButton={
          <Button variant="secondary" className="w-full py-[26.5px]">
            <PlusIcon className="size-4 mr-2" /> Add Money
          </Button>
        }
      />
      <PotModal
        operation="withdraw"
        pot={{ id: potId }}
        triggerButton={
          <Button variant="secondary" className="w-full py-[26.5px]">
            Withdraw Money
          </Button>
        }
      />
    </div>
  );
}

export default PotTransactionButtons;
