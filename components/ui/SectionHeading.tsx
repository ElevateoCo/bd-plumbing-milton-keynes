import type { ReactNode } from "react";

export default function SectionHeading({
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2
        className={`text-[clamp(1.9rem,3.6vw,2.7rem)] font-extrabold ${
          isLight ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-5 block h-[5px] w-14 bg-accent ${isCentered ? "mx-auto" : ""}`}
      />
      {intro && (
        <p
          className={`mt-5 text-[16px] leading-relaxed ${
            isLight ? "text-paper/70" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
