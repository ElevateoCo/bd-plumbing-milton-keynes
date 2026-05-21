import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  outline: "border border-ink/25 text-ink hover:border-accent hover:text-accent",
  light: "bg-white text-ink hover:bg-ink hover:text-white",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 font-heading text-[14px] font-bold uppercase tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
