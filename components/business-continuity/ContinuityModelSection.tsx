interface ModelCard {
  title: string;
  description: React.ReactNode;
}

const modelCards: ModelCard[] = [
  {
    title: "Service criticality governance",
    description: "Services and processes are classified so restoration order is a decision made in advance rather than under pressure.",
  },
  {
    title: "Recovery objective governance",
    description: (
      <>
        Where objectives exist, they are owned, scoped and reviewed — and{" "}
        <span className="font-bold text-slate-900">
          invalidated immediately when they change
        </span>
        .
      </>
    ),
  },
  {
    title: "Dependency governance",
    description: "Platform and third-party dependencies are identified, so a continuity claim does not quietly assume a provider's behavior.",
  },
  {
    title: "Validation posture",
    description: (
      <>
        Exercises and tests validate specific scopes.{" "}
        <span className="font-bold text-slate-900">
          A passing exercise is evidence about what it covered
        </span>
        , nothing more.
      </>
    ),
  },
  {
    title: "Change invalidation",
    description: "Architecture, scope, objective, plan, supplier or contract changes trigger revalidation of the affected public claims.",
  },
  {
    title: "Shared responsibility",
    description: "What we govern, what remains joint, and what belongs to a third party — stated explicitly rather than implied.",
  },
];

export default function ContinuityModelSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="model">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CONTINUITY MODEL
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Six governance components, described as process.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A described practice is not a measured outcome. These are commitments about how continuity is
          governed — not claims about what would happen in a specific disruption.
        </p>

        {/* 6 Grid Cards */}
        <div className="mt-8 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          {modelCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE-ONLY AMBER CALLOUT BOX (block lg:hidden)                           */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-4 w-full max-w-[1240px] text-left">
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-950 font-normal leading-relaxed">
            <span className="font-bold text-amber-900">Why this page separates governance from performance.</span> &quot;We maintain recovery objectives&quot; and &quot;we will restore your service within a stated time&quot; are different claims, and a continuity page that blurs them reads as a guarantee to a procurement reviewer. The governance description tells you the discipline exists; only approved evidence with a stated scope tells you what it achieved.
          </div>
        </div>

      </div>
    </section>
  );
}
