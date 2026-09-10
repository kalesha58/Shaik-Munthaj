import { cn } from "@/lib/utils";

type TimelineItem = {
  title: string;
  subtitle?: string;
  period: string;
  location?: string;
  highlights?: string[];
};

export function Timeline({
  items,
  className,
}: {
  items: TimelineItem[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-7", className)}>
      {items.map((item, index) => (
        <div key={index} className="relative pl-6">
          {/* Vertical track line between items */}
          {index < items.length - 1 && (
            <span className="timeline-track" />
          )}

          {/* Dot indicator */}
          <span className="absolute left-0 top-[5px] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary bg-surface shadow-sm" />

          {/* Period pill */}
          <span className="mb-1.5 inline-flex items-center rounded-full bg-primary/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
            {item.period}
          </span>

          {/* Title */}
          <h3 className="mt-1 text-[15px] font-bold leading-snug text-dark">
            {item.title}
          </h3>

          {/* Subtitle (degree / role) */}
          {item.subtitle && (
            <p className="mt-0.5 text-sm font-medium text-slate">
              {item.subtitle}
            </p>
          )}

          {/* Location */}
          {item.location && (
            <p className="mt-0.5 flex items-center gap-1 text-xs text-slate/80">
              <svg className="h-3 w-3 shrink-0 text-slate/60" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5zm0 6.5A1.5 1.5 0 1 1 8 4a1.5 1.5 0 0 1 0 3z" />
              </svg>
              {item.location}
            </p>
          )}

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <ul className="mt-2.5 space-y-1.5">
              {item.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-slate">
                  <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

