"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function AnimatedSection({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const { ref, isInView } = useInView(0.08);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
    >
      {children}
    </section>
  );
}
