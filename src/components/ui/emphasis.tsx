import { cn } from "@/lib/cn";

/**
 * Подсвечивает фрагменты, обёрнутые в `**…**`.
 * Так в моках хранятся акценты, размеченные в макете.
 */
export function withEmphasis(text: string, className = "text-white") {
  return text.split(/\*\*(.+?)\*\*/g).map((chunk, index) =>
    index % 2 === 1 ? (
      <strong key={index} className={cn("font-semibold", className)}>
        {chunk}
      </strong>
    ) : (
      chunk
    ),
  );
}
