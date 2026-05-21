export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="inline-flex items-baseline gap-1.5"
      aria-label="BD Plumbing & Heating Services, Milton Keynes"
    >
      <span
        className={`font-heading text-[19px] font-extrabold uppercase tracking-tight ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        BD Plumbing
      </span>
      <span className="font-heading text-[19px] font-extrabold uppercase tracking-tight text-accent">
        &amp; Heating
      </span>
    </a>
  );
}
