import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="bg-ink">
      <div className="mx-auto grid w-full max-w-[1180px] gap-y-10 px-5 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-2 text-center ${
              i > 0 ? "sm:border-l sm:border-white/10" : ""
            } ${i === 2 ? "border-l-0 lg:border-l" : ""}`}
          >
            <p className="font-heading text-[clamp(2.4rem,4.2vw,3rem)] font-extrabold text-accent">
              {stat.value}
            </p>
            <p className="mt-1 text-[13.5px] font-medium text-paper/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
