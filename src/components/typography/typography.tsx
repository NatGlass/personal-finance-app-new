import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import { typographyPresets } from "./typographyVariants";

// Define the typography variants with cva
const typographyVariants = cva("", {
  variants: {
    variant: {
      preset1: `${typographyPresets.preset1}`,
      preset2: `${typographyPresets.preset2}`,
      preset3: `${typographyPresets.preset3}`,
      preset4: `${typographyPresets.preset4}`,
      preset4_bold: `${typographyPresets.preset4Bold}`,
      preset5: `${typographyPresets.preset5}`,
      preset5_bold: `${typographyPresets.preset5Bold}`,
    },
  },
  defaultVariants: {
    variant: "preset4",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as: Component = "p", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";
