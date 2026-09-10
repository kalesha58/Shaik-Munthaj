import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "badge-shimmer inline-flex items-center rounded-full",
        "border border-primary/20 bg-primary/8",
        "px-3 py-1 text-xs font-semibold tracking-wide text-primary",
        "cursor-default select-none",
        className
      )}
    >
      {children}
    </span>
  );
}

