import { typographyPresets } from "@/components/typography/typographyVariants";
import { ArrowLeft } from "lucide-react";

function MinimiseSidebar() {

  return (
    <div className="pr-[26px]">
      <button
        type="button"
        className={`flex mb-[58px] w-full py-4 justify-self-start pl-8 text-grey-300 rounded-r-[12px] ${typographyPresets.preset3} hover:bg-white/10`}
      >
        <ArrowLeft className="size-6 mr-4" />
        Minimise Menu
      </button>
    </div>
  );
}

export default MinimiseSidebar;
