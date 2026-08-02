import { Fragment } from "react";

/**
 * Инлайн-разметка текстов из моков: `**жирный**` и `` `код` ``.
 * Формат выбран так, чтобы его же мог отдавать бэкенд.
 */
export function richText(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((chunk, index) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-surface-dark">
          {chunk.slice(2, -2)}
        </strong>
      );
    }

    if (chunk.startsWith("`") && chunk.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-[#E8F0F2] px-1.5 py-0.5 font-mono text-[0.9em] text-[#333333]"
        >
          {chunk.slice(1, -1)}
        </code>
      );
    }

    return <Fragment key={index}>{chunk}</Fragment>;
  });
}
