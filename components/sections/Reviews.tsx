import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews, business } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6">
        <SectionHeading
          title={
            <>
              What Milton Keynes{" "}
              <span className="text-accent">Homeowners Say</span>
            </>
          }
          intro="We are proud of our reputation across MK. Here is what local customers say about working with BD Plumbing & Heating Services."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col border border-line bg-white p-7"
            >
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Icon
                    key={s}
                    name="Star"
                    className="h-[18px] w-[18px] fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center bg-accent font-heading text-[14px] font-bold text-white">
                  {initials(review.name)}
                </span>
                <span>
                  <span className="block font-heading text-[15px] font-bold text-ink">
                    {review.name}
                  </span>
                  <span className="block text-[13px] text-muted">
                    {review.area}, Milton Keynes
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-9 text-center text-[14.5px] text-muted">
          Rated{" "}
          <span className="font-bold text-ink">{business.rating} out of 5</span>{" "}
          from {business.reviewCount} reviews across Milton Keynes.
        </p>
      </div>
    </section>
  );
}
