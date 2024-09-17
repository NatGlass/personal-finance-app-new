import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PotsInnerContainer from "./pots-inner-container";

function PotsSummary() {
  return (
    <div className="col-span-8 lg:col-span-7 bg-white mt-8 py-6 px-5 md:p-8 rounded-[12px] lg:row-span-3">
      <div className="w-full flex justify-between items-center">
        <Typography as="h2" variant="preset2">
          Pots
        </Typography>
        <Button variant="tertiary" asChild>
          <Link href="/pots">See Details</Link>
        </Button>
      </div>
      <PotsInnerContainer />
    </div>
  );
}

export default PotsSummary;
