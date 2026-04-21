"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text?: string;
  className?: string;
  /** Base font-size clamp css string, without the "font-size:" prefix */
  sizeClamp?: string;
};

/**
 * Premium multi-layer glitch wordmark.
 * Layers (back → front):
 *   1. Blurred cyan halo (mg-shadow)
 *   2. Hairline stroke ghost offset (mg-ghost)
 *   3. Main liquid-chrome gradient (mg-main)
 *   4. RGB split layers (mg-r / mg-g / mg-b) — periodic glitch bursts
 *   5. Horizontal tear bands (mg-tear)
 *
 * On mount + on periodic interval, we add the `trigger` class to produce
 * a sharper, higher-intensity glitch burst, then remove it.
 */
export function MrsadGlitch({
  text = "MRSAD",
  className,
  sizeClamp = "clamp(4.5rem, 13vw, 11rem)",
}: Props) {
  const rootRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let timeout: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const fire = () => {
      if (cancelled || !el) return;
      el.classList.add("trigger");
      // remove after 900ms (matches burst animation)
      timeout = setTimeout(() => {
        el.classList.remove("trigger");
        // schedule next random burst between 4.5s and 9s
        const next = 4500 + Math.random() * 4500;
        timeout = setTimeout(fire, next);
      }, 900);
    };

    // First burst after short delay to let entrance play
    timeout = setTimeout(fire, 1800);

    return () => {
      cancelled = true;
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <span
      ref={rootRef}
      className={cn("mrsad-glitch", className)}
      style={{
        fontSize: sizeClamp,
        direction: "ltr",
      }}
      aria-label={text}
    >
      <span className="mg-shadow" aria-hidden>
        {text}
      </span>
      <span className="mg-ghost" aria-hidden>
        {text}
      </span>
      <span className="mg-r" aria-hidden>
        {text}
      </span>
      <span className="mg-g" aria-hidden>
        {text}
      </span>
      <span className="mg-b" aria-hidden>
        {text}
      </span>
      <span className="mg-main">{text}</span>
      <span className="mg-tear" aria-hidden>
        <span className="mg-tear-band" />
      </span>
    </span>
  );
}
