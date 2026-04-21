"use client";

import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type BeamButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  icon?: boolean;
  className?: string;
  href?: string;
};

export function BeamButton({
  children,
  onClick,
  variant = "primary",
  icon = true,
  className,
  href,
}: BeamButtonProps) {
  const inner = (
    <button
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors",
        variant === "primary"
          ? "bg-obsidian text-white hover:text-cyan"
          : "bg-transparent text-chrome hover:bg-white/5",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight
          className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      )}
    </button>
  );

  if (variant === "primary") {
    return (
      <Magnetic strength={0.3}>
        <div className="group beam-border">
          {href ? (
            <a
              href={href}
              className="relative flex items-center gap-2 rounded-full bg-obsidian px-6 py-3 text-sm font-medium tracking-tight text-white transition-colors hover:text-cyan"
            >
              <span className="relative z-10">{children}</span>
              {icon && (
                <ArrowUpRight
                  className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              )}
            </a>
          ) : (
            inner
          )}
        </div>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.2}>
      <div className="group rounded-full border border-white/10 transition-colors hover:border-cyan/40">
        {href ? (
          <a
            href={href}
            className="relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight text-chrome transition-colors hover:bg-white/5"
          >
            <span className="relative z-10">{children}</span>
            {icon && <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />}
          </a>
        ) : (
          inner
        )}
      </div>
    </Magnetic>
  );
}
