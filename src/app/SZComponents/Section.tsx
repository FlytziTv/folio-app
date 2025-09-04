import { cn } from "../../lib/utils";
import type { PropsWithChildren } from "react";

export function Section({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={cn("max-w-7xl px-4 m-auto", className)}>
      {children}
    </section>
  );
}
