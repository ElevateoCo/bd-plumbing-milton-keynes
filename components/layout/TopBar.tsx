import Icon from "@/components/ui/Icon";
import { business } from "@/lib/content";

export default function TopBar() {
  return (
    <div className="bg-ink text-paper/75">
      <div className="mx-auto flex h-9 w-full max-w-[1180px] items-center justify-between px-5 text-[12.5px] sm:px-6">
        <p className="hidden sm:block">
          Plumbing &amp; heating across Milton Keynes &amp; surrounding areas
        </p>
        <p className="sm:hidden">Milton Keynes plumber</p>
        <a
          href={business.phoneHref}
          className="flex items-center gap-1.5 font-semibold text-paper transition-colors hover:text-accent"
        >
          <Icon name="Phone" className="h-3.5 w-3.5" strokeWidth={2.5} />
          {business.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
