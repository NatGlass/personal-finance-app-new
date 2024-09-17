import { cn } from "@/lib/utils";

function ColourBadge({
  colour,
  className,
}: {
  colour: string;
  className?: string;
}) {
  return <div className={cn(`size-4 rounded-full bg-${colour}`, className)} />;
}

export default ColourBadge;
