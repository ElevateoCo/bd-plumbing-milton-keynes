import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import { business, services, areas, hours, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr_1fr_1.3fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-paper/60">
              Your local plumber in Milton Keynes for boiler repairs and
              installations, central heating, bathrooms and 24/7 emergency
              plumbing.
            </p>
            <a
              href={business.phoneHref}
              className="mt-6 inline-flex items-center gap-2.5 font-heading text-[20px] font-extrabold text-accent transition-colors hover:text-white"
            >
              <Icon name="Phone" className="h-5 w-5" strokeWidth={2.5} />
              {business.phoneDisplay}
            </a>
          </div>

          <div>
            <h3 className="font-heading text-[13px] font-bold uppercase tracking-wide text-paper/45">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14.5px]">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-paper/70 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-[13px] font-bold uppercase tracking-wide text-paper/45">
              Service Areas
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14.5px]">
              {areas.slice(0, 9).map((area) => (
                <li key={area} className="text-paper/70">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-[13px] font-bold uppercase tracking-wide text-paper/45">
              Opening Hours
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14.5px]">
              {hours.map((h) => (
                <li key={h.day} className="text-paper/70">
                  <span className="block text-paper">{h.day}</span>
                  {h.time}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13.5px]">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-paper/50 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-7 text-[13px] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Plumbing &amp; heating
            services in Milton Keynes &amp; surrounding areas.
          </p>
          <p>Demo website</p>
        </div>
      </div>
    </footer>
  );
}
