import PageContainer from "@/components/common/page-container";
import { Typography } from "@/components/typography/typography";

function OverviewPage() {
  return (
    <PageContainer>
      <div className="col-span-full flex justify-between items-center">
        <Typography variant="preset1" as="h1">
          Overview
        </Typography>
      </div>
    </PageContainer>
  );
}

export default OverviewPage;
