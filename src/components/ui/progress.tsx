"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";
import { colourMap } from "../common/colour-map";

import { cn } from "@/lib/utils";

type FillColour = keyof typeof colourMap;

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    fillColour?: FillColour;
  }
>(({ className, value, fillColour = "blue", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-beige-100",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 transition-all",
        colourMap[fillColour]
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
