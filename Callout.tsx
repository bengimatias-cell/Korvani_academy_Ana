import { ReactNode } from "react";

type Tone = "signal" | "positive" | "caution" | "negative" | "radar";

const TONE_STYLES: Record<Tone, { border: string; bg: string; text: string }> = {
  signal: { border: "var(--signal-border)", bg: "var(--signal-soft)", text: "var(--signal)" },
  positive: { border: "rgba(95,191,139,0.35)", bg: "var(--positive-soft)", text: "var(--positive)" },
  caution: { border: "rgba(224,178,74,0.35)", bg: "var(--caution-soft)", text: "var(--caution)" },
  negative: { border: "rgba(226,105,90,0.35)", bg: "var(--negative-soft)", text: "var(--negative)" },
  radar: { border: "rgba(76,144,166,0.35)", bg: "var(--radar-soft)", text: "var(--radar)" },
};

export function Callout({
  children,
  tone = "signal",
  eyebrow,
}: {
  children: ReactNode;
  tone?: Tone;
  eyebrow?: string;
}) {
  const s = TONE_STYLES[tone];
  return (
    <div
      className="rounded-2xl border p-6 sm:p-7"
      style={{ borderColor: s.border, background: s.bg }}
    >
      {eyebrow && (
        <p
          className="font-mono-data text-xs tracking-widest uppercase mb-2"
          style={{ color: s.text }}
        >
          {eyebrow}
        </p>
      )}
      <p className="font-display text-xl sm:text-2xl leading-snug text-text">
        {children}
      </p>
    </div>
  );
}
