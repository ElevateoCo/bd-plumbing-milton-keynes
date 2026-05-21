"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import { nav, business } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-[68px] w-full max-w-[1180px] items-center justify-between px-5 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 bg-accent px-5 py-2.5 font-heading text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark sm:inline-flex"
          >
            <Icon name="Phone" className="h-4 w-4" strokeWidth={2.5} />
            Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <Icon name={open ? "X" : "Menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1180px] flex-col px-5 py-2 sm:px-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-[15px] font-medium text-ink last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={business.phoneHref}
              className="my-3 inline-flex items-center justify-center gap-2 bg-accent px-5 py-3.5 font-heading text-[14px] font-bold uppercase tracking-wide text-white"
            >
              <Icon name="Phone" className="h-4 w-4" strokeWidth={2.5} />
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
