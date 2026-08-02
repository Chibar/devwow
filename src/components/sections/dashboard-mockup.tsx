import { cn } from "@/lib/cn";
import type { Hero } from "@/lib/types";

/** Декоративный мокап «окна дашборда» из hero-секции макета. */
export function DashboardMockup({ data }: { data: Hero["dashboard"] }) {
  return (
    <div className="w-full max-w-[520px] overflow-hidden rounded-2xl border border-brand-700/35 bg-ink shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
      {/* Заголовок окна */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-ink-soft px-4 py-3">
        <span className="size-3 rounded-full bg-[#FF5F57]" />
        <span className="size-3 rounded-full bg-[#FEBC2E]" />
        <span className="size-3 rounded-full bg-[#28C840]" />
        <span className="pl-4 text-xs text-muted-500">{data.domain}</span>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="grid grid-cols-3 gap-3">
          {data.metrics.map((metric) => (
            <div key={metric.label} className="rounded-[10px] bg-ink-card p-3">
              <p className="font-display text-lg font-extrabold leading-none text-white">
                {metric.value}
              </p>
              <p className="mt-1.5 text-[10px] leading-4 text-muted-500">
                {metric.label}
              </p>
              <p className="mt-1.5 text-[10px] font-semibold leading-4 text-brand-400">
                {metric.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-[10px] bg-ink-card p-4">
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs text-white/50">{data.trafficTitle}</span>
            <span className="text-xs text-brand-400">{data.trafficDelta}</span>
          </div>

          <div className="flex h-16 items-end gap-1.5">
            {data.traffic.map((point) => (
              <div
                key={point.day}
                style={{ height: `${Math.round(point.value * 100)}%` }}
                className={cn(
                  "flex-1 rounded-md",
                  point.highlighted ? "bg-brand-400" : "bg-brand-900/60",
                )}
              />
            ))}
          </div>

          <div className="mt-3 flex justify-between">
            {data.traffic.map((point) => (
              <span key={point.day} className="text-[9px] text-muted-600">
                {point.day}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[10px] bg-ink-card p-4">
          <p className="pb-1 text-xs text-white/50">{data.eventsTitle}</p>
          <ul className="flex flex-col gap-2">
            {data.events.map((event) => (
              <li key={event.title} className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "size-1.5 shrink-0 rounded-full",
                      event.accent ? "bg-brand-400" : "bg-[#333333]",
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs",
                      event.accent ? "text-white" : "text-muted-400",
                    )}
                  >
                    {event.title}
                  </span>
                </span>
                <span className="shrink-0 text-[10px] text-muted-600">
                  {event.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
