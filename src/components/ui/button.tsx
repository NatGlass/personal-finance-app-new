import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { typographyPresets } from "../typography/typographyVariants";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: `bg-grey-900 hover:bg-grey-500 ${typographyPresets.preset4Bold} text-white`,
        secondary: `bg-beige-100 ${typographyPresets.preset4Bold} text-grey-900 hover:bg-white hover:border hover:border-beige-500`,
        tertiary: `text-grey-500 ${typographyPresets.preset4} hover:text-grey-900`,
        destructive: `bg-red text-white ${typographyPresets.preset4Bold} hover:bg-red/80`,
        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-10 px-4 py-[26.5px]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, showIcon = true, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="inline-flex items-center">
          {props.children}
          {variant === "tertiary" && showIcon && (
            <ChevronRight className="ml-2 size-4" aria-hidden="true" />
          )}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
