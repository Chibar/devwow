import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-900 text-white shadow-[0_10px_15px_-3px_rgba(0,98,112,0.25),0_4px_6px_-4px_rgba(0,98,112,0.25)] hover:bg-brand-700",
  outline:
    "border border-brand-700 text-brand-900 hover:bg-brand-900 hover:text-white",
  "outline-dark":
    "border border-brand-700 text-brand-400 hover:bg-brand-900 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}

export function buttonClasses(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}
