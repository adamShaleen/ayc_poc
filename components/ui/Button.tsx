"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types";

const buttonVariants = {
  primary:
    "bg-brass-500 text-white hover:bg-brass-600 focus:ring-brass-500 shadow-md hover:shadow-lg",
  secondary:
    "bg-ocean-500 text-white hover:bg-ocean-600 focus:ring-ocean-500 shadow-md hover:shadow-lg",
  outline:
    "border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white focus:ring-navy-700",
  ghost: "text-navy-700 hover:bg-navy-100 focus:ring-navy-500",
};

const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
