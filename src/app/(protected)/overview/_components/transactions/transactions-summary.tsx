import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TransactionItem from "./transaction-item";

import DanielImage from "@/assets/images/avatars/daniel-carter.jpg";
import EmmaImage from "@/assets/images/avatars/emma-richardson.jpg";
import SavoryBitesImage from "@/assets/images/avatars/savory-bites-bistro.jpg";
import SunImage from "@/assets/images/avatars/sun-park.jpg";
import UrbanImage from "@/assets/images/avatars/urban-services-hub.jpg";

import { Separator } from "@/components/ui/separator";

function TransactionsSummary() {
  return (
    <div className="col-span-8 lg:col-span-7 bg-white mt-8 py-6 px-5 md:p-8 rounded-[12px] lg:row-span-6">
      <div className="w-full flex justify-between items-center">
        <Typography as="h2" variant="preset2">
          Transactions
        </Typography>
        <Button variant="tertiary" asChild>
          <Link href="/transactions">View All</Link>
        </Button>
      </div>
      <div className="my-8 flex flex-col gap-y-6">
        <TransactionItem
          avatar={EmmaImage}
          name="Emma Richardson"
          amount={75.5}
          date="19 Aug 2024"
        />
        <Separator />
        <TransactionItem
          avatar={SavoryBitesImage}
          name="Savory Bites Bistro"
          amount={-55.5}
          date="19 Aug 2024"
        />
        <Separator />
        <TransactionItem
          avatar={DanielImage}
          name="Daniel Carter"
          amount={-42.3}
          date="18 Aug 2024"
        />
        <Separator />
        <TransactionItem
          avatar={SunImage}
          name="Sun Park"
          amount={120}
          date="17 Aug 2024"
        />
        <Separator />
        <TransactionItem
          avatar={UrbanImage}
          name="Urban Services Hub"
          amount={-65}
          date="18 Aug 2024"
        />
      </div>
    </div>
  );
}

export default TransactionsSummary;
