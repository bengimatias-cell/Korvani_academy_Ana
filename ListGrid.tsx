import { LucideIcon } from "lucide-react";

type Tone = "positive" | "caution" | "negative" | "neutral";

const TONE_CLASSES: Record<Tone, string> = {
  positive: "border-positive/25 text-text",
  caution: "border-caution/25 text-text",
  negative: "border-negative/25 text-text",
  neutral: "border-border text-text",
};

const ICON_TONE: Record<Tone, string> = {
  positive: "text-positive",
  caution: "text-caution",
  negative: "text-negative",
  neutral: "text-text-muted",
};

export function ListGrid({
  items,
  tone = "neutral",
  icon: Icon,
}: {
  items: string[];
  tone?: Tone;
  icon: LucideIcon;
}) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-2.5 rounded-xl border bg-surface px-4 py-3 text-sm leading-relaxed ${TONE_CLASSES[tone]}`}
        >
          <Icon size={16} className={`shrink-0 mt-0.5 ${ICON_TONE[tone]}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
