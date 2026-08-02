import { cn } from "@/lib/cn";

/** Контентный контейнер: 1600px по макету + внутренние отступы. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}
