import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { areas, business } from "@/lib/content";

export default function ServiceArea() {
  return (
    <section id="areas" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6">
        <SectionHeading
          title={
            <>
              Covering <span className="text-accent">Milton Keynes</span> &amp;
              Surrounding Areas
            </>
          }
          intro="A genuinely local plumber covering the whole of Milton Keynes and the towns and villages around it. If your area is not listed, get in touch, we very likely still cover you."
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 border border-line bg-white px-4 py-3 text-[14px] font-medium text-ink transition-colors hover:border-accent"
            >
              <Icon
                name="MapPin"
                className="h-4 w-4 shrink-0 text-accent"
                strokeWidth={2}
              />
              {area}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[14.5px] text-muted">
          Not sure if we reach you?{" "}
          <a
            href={business.phoneHref}
            className="font-semibold text-accent hover:underline"
          >
            Call {business.phoneDisplay}
          </a>{" "}
          and we will let you know.
        </p>
      </div>
    </section>
  );
}
