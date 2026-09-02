interface PathCard {
  title: string;
  description: React.ReactNode;
}

const pathCards: PathCard[] = [
  {
    title: "Escalation",
    description: (
      <>
        The process and route are described only as approved.{" "}
        <span className="font-bold text-slate-900">
          No named executive response and no escalation timeframe
        </span>{" "}
        without a source that owns it.
      </>
    ),
  },
  {
    title: "Live incidents",
    description: (
      <>
        System Status owns current service state and incident communications.{" "}
        <span className="font-bold text-slate-900">Policy never infers live health.</span>
      </>
    ),
  },
  {
    title: "Vulnerabilities",
    description: (
      <>
        Responsible Disclosure.{" "}
        <span className="font-bold text-slate-900">
          A vulnerability report does not travel through ordinary support channels.
        </span>
      </>
    ),
  },
  {
    title: "Security & privacy terms",
    description: "Trust, Security and Privacy own their documents. This policy links rather than replacing them.",
  },
  {
    title: "Sensitive data in a case",
    description: "Handled per privacy and security policy. Secrets are not requested, and defeated secrets are not echoed back.",
  },
  {
    title: "Commercial remedies",
    description: (
      <>
        Service credits and remedies are{" "}
        <span className="font-bold text-slate-900">never invented here</span> — authoritative commercial terms govern where they exist.
      </>
    ),
  },
];

export default function EscalationIncidentsVulnerabilitiesSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="escalation-incidents">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ESCALATION, INCIDENTS &amp; VULNERABILITIES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Three paths that leave ordinary support entirely.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Each has its own authority, and none of them promises a named person or a timeframe without a source.
        </p>

        {/* 6 Grid Cards (3 Cols) */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {pathCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md transition text-left"
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
