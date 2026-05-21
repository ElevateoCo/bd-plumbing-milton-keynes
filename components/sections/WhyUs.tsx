import Image from "next/image";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { values } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="why" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/bathroom-light.jpeg"
              alt="Quality bathroom and plumbing work by a Milton Keynes plumber"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 540px"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            title={
              <>
                The Milton Keynes Plumber Homeowners{" "}
                <span className="text-accent">Recommend</span>
              </>
            }
            intro="Friendly, fully qualified and properly insured. Here is why people across MK trust us with their plumbing and heating."
          />

          <div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-3.5">
                <Icon
                  name={value.icon}
                  className="h-6 w-6 shrink-0 text-accent"
                  strokeWidth={2}
                />
                <div>
                  <h3 className="font-heading text-[15.5px] font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
