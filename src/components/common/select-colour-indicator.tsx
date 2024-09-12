import { cn } from "@/lib/utils";
import { colourMap } from "./colour-map";

interface SelectColourIndicatorProps {
  colour: keyof typeof colourMap;
}

function SelectColourIndicator({ colour }: SelectColourIndicatorProps) {
  return (
    <span
      className={cn(
        "inline-block w-4 h-4 rounded-full mr-3",
        colourMap[colour] || "bg-transparent"
      )}
    />
  );
}

export default SelectColourIndicator;
