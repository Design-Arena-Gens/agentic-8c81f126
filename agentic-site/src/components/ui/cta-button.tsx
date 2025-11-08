import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CTAButtonProps = ComponentProps<typeof Link> & {
  glow?: boolean;
};

export function CTAButton({ className, glow = false, ...props }: CTAButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-twilight transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
        glow
          ? "bg-gradient-sunrise shadow-spotlight"
          : "bg-white text-twilight hover:bg-sunrise-yellow/90",
        className
      )}
    />
  );
}
