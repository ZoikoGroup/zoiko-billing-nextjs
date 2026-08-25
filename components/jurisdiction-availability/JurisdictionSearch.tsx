"use client";

const points = [
  {
    title: "Accepted terms",
    description:
      "canonical name, approved common name, code and approved alias.",
  },
  {
    title: "Normalization",
    description:
      "case, spacing and punctuation normalized, with the user's visible language preserved.",
  },
  {
    title: "Fuzzy match",
    description:
      "suggestions may appear, but the user confirms before any status is treated as authoritative.",
  },
  {
    title: "Subnational search",
    description:
      "only where authoritative subnational records exist; otherwise routed to the parent jurisdiction with the scope explained.",
  },
  {
    title: "Browser or IP location",
    description:
      "may never silently choose availability or commercial state.",
  },
  {
    title: "Recent selection",
    description:
      "persisted only under privacy-safe preference rules, and never used as legal or commercial evidence.",
  },
];

export default function JurisdictionSearch() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Left content */}
        <div className="flex w-full min-w-0 flex-col items-start gap-3 sm:gap-3.5">
          {/* Eyebrow */}
          <div className="flex w-full items-center gap-2 sm:gap-3">
            <span className="h-px w-5 shrink-0 bg-sky-600/75 sm:w-6" />

            <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Search, canonicalization &amp; disambiguation
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[610px] text-[28px] font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
            An ambiguous name is never auto-resolved.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[610px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Every selection resolves to an immutable jurisdiction identifier.
            Where a name could mean more than one place, the page asks rather
            than guesses — because a wrong match becomes a wrong financial
            decision.
          </p>

          {/* Points */}
          <div className="mt-1 w-full">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-3 border-b border-slate-100 py-3 last:border-b-0 sm:py-4"
              >
                {/* Bullet */}
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-sky-600" />

                {/* Text */}
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-3">
                  <span className="w-full shrink-0 text-sm font-bold leading-6 text-slate-700 sm:w-[145px]">
                    {point.title}
                  </span>

                  <span className="min-w-0 text-sm leading-6 text-slate-600">
                    <span className="hidden sm:inline">— </span>
                    {point.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="w-full min-w-0">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
            <img
              src="/images/jurisdiction-availability/jurisdiction-search.png"
              alt="Jurisdiction search, canonicalization and disambiguation"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}