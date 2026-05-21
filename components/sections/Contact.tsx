"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { business, hours, serviceOptions } from "@/lib/content";

const fieldClass =
  "w-full border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

const labelClass = "mb-1.5 block text-[13.5px] font-semibold text-ink";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            title={
              <>
                Book Your <span className="text-accent">Milton Keynes</span>{" "}
                Plumber
              </>
            }
            intro="Call now for emergencies and same-day help, or send a few details and we will get straight back to you."
          />

          <div className="mt-8 space-y-3">
            <a
              href={business.phoneHref}
              className="flex items-center gap-4 border border-line bg-white p-5 transition-colors hover:border-accent"
            >
              <Icon
                name="Phone"
                className="h-7 w-7 shrink-0 text-accent"
                strokeWidth={2}
              />
              <span>
                <span className="block text-[13px] text-muted">
                  Call us direct
                </span>
                <span className="block font-heading text-[19px] font-extrabold text-ink">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-4 border border-line bg-white p-5 transition-colors hover:border-accent"
            >
              <Icon
                name="Mail"
                className="h-7 w-7 shrink-0 text-accent"
                strokeWidth={2}
              />
              <span>
                <span className="block text-[13px] text-muted">Email us</span>
                <span className="block font-heading text-[16px] font-bold text-ink">
                  {business.email}
                </span>
              </span>
            </a>

            <div className="border border-line bg-white p-5">
              <div className="flex items-center gap-3">
                <Icon
                  name="Clock"
                  className="h-6 w-6 shrink-0 text-accent"
                  strokeWidth={2}
                />
                <span className="font-heading text-[16px] font-bold text-ink">
                  Opening Hours
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-[14px]">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-4 border-b border-line pb-2 text-muted last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-ink">{h.day}</span>
                    <span className="text-right">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-line bg-paper p-7 sm:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <Icon
                name="CheckCircle"
                className="h-14 w-14 text-accent"
                strokeWidth={2}
              />
              <h3 className="mt-5 font-heading text-[22px] font-extrabold text-ink">
                Request received, thank you
              </h3>
              <p className="mt-2 max-w-sm text-[15px] text-muted">
                A member of the team will call you back shortly. For anything
                urgent, call us now on{" "}
                <a
                  href={business.phoneHref}
                  className="font-semibold text-accent hover:underline"
                >
                  {business.phoneDisplay}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 font-heading text-[13px] font-bold uppercase tracking-wide text-accent hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h3 className="font-heading text-[20px] font-extrabold text-ink">
                Request a Callback
              </h3>
              <p className="mt-1 text-[14px] text-muted">
                Tell us what you need and we usually reply the same day.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className={fieldClass}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="07000 000000"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe the job and your area in Milton Keynes."
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-accent px-6 py-3.5 font-heading text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark"
              >
                Request a Callback
              </button>
              <p className="mt-3 text-center text-[12.5px] text-muted">
                No obligation. We will never share your details.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
