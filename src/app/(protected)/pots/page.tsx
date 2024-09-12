import { colourMap } from "@/components/common/colour-map";
import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";
import { getUsersPots } from "@/db/getUsersPots";
import PotCard from "./_components/pot-card";
import AddNewPotModal from "./_components/add-new-pot-modal";

async function PotsPage() {
  const potsData = await getUsersPots();

  return (
    <PageContainer>
      <div className="col-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1" className="mb-8">
          Pots
        </Typography>
        <AddNewPotModal />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 col-span-full">
        {potsData?.map((pot) => {
          const validColour = colourMap[pot.theme as keyof typeof colourMap]
            ? (pot.theme as keyof typeof colourMap)
            : "green";

          return (
            <PotCard
              key={pot.id}
              title={pot.name}
              colour={validColour}
              total={pot.total || 0}
              target={pot.target}
            />
          );
        })}
      </div>
    </PageContainer>
  );
}

export default PotsPage;
