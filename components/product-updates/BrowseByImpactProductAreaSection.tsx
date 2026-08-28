interface ImpactAreaCard {
  title: string;
  description: React.ReactNode;
}

const impactAreaCards: ImpactAreaCard[] = [
  {
    title: "User impact",
    description: "Changes to what an operator sees or does in day-to-day billing work.",
  },
  {
    title: "Admin impact",
    description: "Roles, approvals, settings and governance controls.",
  },
  {
    title: "Developer & integration",
    description: "Business summary of changes affecting integrations, with Developers as authority.",
  },
  {
    title: "Reporting impact",
    description: "Metric, filter, export and reporting behavior changes.",
  },
  {
    title: "Accessibility",
    description: "Improvements to keyboard, screen-reader and contrast behavior.",
  },
  {
    title: "Deprecations & migrations",
    description: "Changes requiring a move to a replacement, with the migration contract applied.",
  },
];

export default function BrowseByImpactProductAreaSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="browse-impact">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          BROWSE BY IMPACT &amp; PRODUCT AREA
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Facets populated by inventory, not by aspiration.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Impact and area filters render only where current updates support them.
        </p>

        {/* 6 Grid Cards */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {impactAreaCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
