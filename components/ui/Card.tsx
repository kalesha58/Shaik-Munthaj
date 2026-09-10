import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = true,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: "primary" | "teal";
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border bg-surface p-6 overflow-hidden",
        "shadow-[0_2px_8px_rgba(15,23,42,0.06)]",
        hover && "card-modern",
        className
      )}
    >
      {/* Subtle top-edge accent stripe */}
      {accent && (
        <span
          className={cn(
            "absolute top-0 left-6 right-6 h-[2px] rounded-b-full",
            accent === "primary" ? "bg-primary" : "bg-teal"
          )}
        />
      )}
      {children}
    </div>
  );
}
