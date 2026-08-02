import { cn } from "@/lib/cn";

/** Пара «надзаголовок + H2» — повторяется во всех секциях макета. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  /** light — тёмный текст на светлом фоне, dark — наоборот */
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "flex flex-col items-center text-center",
        className,
      )}
    >
      <p className="eyebrow text-brand-700">{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 font-display text-4xl font-extrabold tracking-tight lg:text-5xl",
          tone === "light" ? "text-surface-dark" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-6",
            tone === "light" ? "text-muted-500" : "text-muted-300",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
