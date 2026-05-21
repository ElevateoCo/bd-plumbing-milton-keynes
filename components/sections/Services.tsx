import Image from "next/image";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { services, business } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6">
        <SectionHeading
          title={
            <>
              Plumbing &amp; Heating Services in{" "}
              <span className="text-accent">Milton Keynes</span>
            </>
          }
          intro="From emergency leaks to full boiler and bathroom installations, we cover every job, big or small, for homes and landlords across Milton Keynes."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex h-full flex-col border border-line bg-white transition-colors duration-200 hover:border-accent"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Icon
                  name={service.icon}
                  className="h-7 w-7 text-accent"
                  strokeWidth={2}
                />
                <h3 className="mt-3 font-heading text-[19px] font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted">
                  {service.description}
                </p>
                <a
                  href={business.phoneHref}
                  className="mt-4 inline-flex items-center gap-1.5 font-heading text-[13px] font-bold uppercase tracking-wide text-accent"
                >
                  Book Now
                  <Icon
                    name="ArrowRight"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
