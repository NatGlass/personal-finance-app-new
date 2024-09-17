export const dynamic = "force-dynamic";

import { colourMap } from "@/components/common/colour-map";
import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";
import { getUsersPots } from "@/db/getUsersPots";
import AddPotButton from "./_components/add-pot-button";
import PotCard from "./_components/pot-card";

async function PotsPage() {
  const potsData = await getUsersPots();

  if (!potsData) return null;

  const sortedPots = potsData?.sort((a, b) => {
    const dateA = new Date(a.updatedAt || a.createdAt).getTime();
    const dateB = new Date(b.updatedAt || b.createdAt).getTime();
    return dateB - dateA; // Newest first
  });

  return (
    <PageContainer>
      <div className="col-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1" className="mb-8">
          Pots
        </Typography>
        <AddPotButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 col-span-full">
        {sortedPots?.map((pot) => {
          const validColour = colourMap[pot.theme as keyof typeof colourMap]
            ? (pot.theme as keyof typeof colourMap)
            : "green";

          const potValues = {
            ...pot,
            theme: validColour,
          };

          return <PotCard key={pot.id} pot={potValues} />;
        })}
      </div>
    </PageContainer>
  );
}

export default PotsPage;
