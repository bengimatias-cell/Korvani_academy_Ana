import { ReactNode } from "react";

type Tone = "signal" | "radar" | "positive" | "caution" | "negative" | "neutral";

const TONE_CLASSES: Record<Tone, string> = {
  signal: "bg-signal/10 text-signal border-signal/30",
  radar: "bg-radar/10 text-radar border-radar/30",
  positive: "bg-positive/10 text-positive border-positive/30",
  caution: "bg-caution/10 text-caution border-caution/30",
  negative: "bg-negative/10 text-negative border-negative/30",
  neutral: "bg-surface text-text-muted border-border",
};

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium font-mono-data tracking-wide ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  );
}
