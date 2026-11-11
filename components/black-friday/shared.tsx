import Link from "next/link";

/** Condensed display face (Barlow Condensed) — variable is set on the page <main>. */
export const DISPLAY = "font-[family-name:var(--font-barlow)]";

export const EXPLORE_HREF = "/platform-overview";

/** Offer window: 27–30 Nov 2026 (UTC). */
export const OFFER_START = Date.UTC(2026, 10, 27);
export const OFFER_END = Date.UTC(2026, 11, 1);

type Tone = "cyan" | "navy";

const toneClass: Record<Tone, string> = {
  cyan: "bg-[#00b8d6] text-[#082f49] hover:bg-[#19c6e2]",
  navy: "bg-[#082f49] text-white hover:bg-[#0b3c5d]",
};

export function ExploreButton({
  tone = "cyan",
  href = EXPLORE_HREF,
  children = "Explore Zoiko Billing",
  className = "",
}: {
  tone?: Tone;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-6 py-4 text-center text-base font-semibold leading-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${toneClass[tone]} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Section heading + intro used by the dark content sections. */
export function SectionIntro({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="!mb-0 !text-[28px] !font-semibold !leading-tight !tracking-normal text-white sm:!text-4xl sm:!leading-10">
        {title}
      </h2>
      <p className="!mb-0 max-w-[612px] text-base !leading-7 !text-[#a9bfdc]">{intro}</p>
    </div>
  );
}
