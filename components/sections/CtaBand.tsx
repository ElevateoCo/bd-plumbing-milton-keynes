import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { business } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="bg-accent">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-16 text-center sm:px-6">
        <h2 className="mx-auto max-w-2xl text-[clamp(1.8rem,3.4vw,2.4rem)] font-extrabold text-white">
          Need a Plumber in Milton Keynes?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[16px] text-white/85">
          From a dripping tap to a full boiler replacement, friendly local help
          is one call away.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Button href={business.phoneHref} variant="light">
            <Icon name="Phone" className="h-4 w-4" strokeWidth={2.5} />
            Book Now
          </Button>
          <span className="text-[15px] font-semibold text-white">
            {business.phoneDisplay}
          </span>
        </div>
      </div>
    </section>
  );
}
