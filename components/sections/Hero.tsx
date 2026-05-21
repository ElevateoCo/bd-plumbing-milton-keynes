import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { business } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[600px] flex-col lg:min-h-[700px]">
      <Image
        src="/images/bathroom-grey.jpeg"
        alt="Plumber in Milton Keynes carrying out bathroom and heating work"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/55" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-16 text-center">
        <h1 className="max-w-[620px] border-2 border-white/90 px-6 py-8 sm:px-14 sm:py-12">
          <span className="block font-heading text-[clamp(0.9rem,1.9vw,1.35rem)] font-semibold uppercase tracking-[0.22em] text-white">
            Your Local
          </span>
          <span className="mt-2 block text-balance font-heading text-[clamp(2.1rem,6vw,4.4rem)] font-extrabold uppercase leading-[0.98] text-white">
            Milton Keynes Plumber
          </span>
        </h1>

        <Button href={business.phoneHref} variant="light" className="mt-8">
          <Icon name="Phone" className="h-4 w-4" strokeWidth={2.5} />
          Book Now
        </Button>
      </div>

      <div className="relative z-10 bg-accent text-white">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3 px-5 py-3.5 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
          <p className="text-[14px] font-semibold">
            Your plumbing &amp; heating experts in Milton Keynes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px]">
            <span className="flex items-center gap-2 border border-white/35 px-3 py-1">
              <span className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon
                    key={i}
                    name="Star"
                    className="h-3.5 w-3.5 fill-white text-white"
                    strokeWidth={0}
                  />
                ))}
              </span>
              <span className="font-semibold">
                {business.rating} ({business.reviewCount})
              </span>
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-white/70" />
              9+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-white/70" />
              1,000+ Jobs Completed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
