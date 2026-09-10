import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  className,
  action,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div>
        <h2 className="text-[28px] font-extrabold tracking-tight text-dark sm:text-[32px] sm:leading-tight">
          {title}
        </h2>
        {/* Decorative accent bar */}
        <span className="mt-2 block h-[3px] w-12 rounded-full bg-primary" />
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

