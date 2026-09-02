interface TopicAudienceCard {
  title: string;
  description: React.ReactNode;
}

const topicAudienceCards: TopicAudienceCard[] = [
  {
    title: "Invoicing & documents",
    description: "Document lifecycle, corrections, delivery and evidence.",
  },
  {
    title: "Accounts receivable",
    description: "Aging, reminders, disputes, ownership and exception handling.",
  },
  {
    title: "Payments & reconciliation",
    description: "Allocation, matching, exceptions and unknown outcomes.",
  },
  {
    title: "Reporting & analytics",
    description: "Metric definition, interpretation and management reporting.",
  },
  {
    title: "Integrations & implementation",
    description: "Integration scope, status, governance and readiness.",
  },
  {
    title: "Product walkthroughs",
    description: (
      <>
        Capability sessions tied to current Documentation,{" "}
        <span className="font-bold text-slate-900">with no roadmap claims</span>.
      </>
    ),
  },
];

export default function BrowseByTopicAudienceSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="browse-topics">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          BROWSE BY TOPIC &amp; AUDIENCE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Facets that exist only when events fill them.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A topic or audience with no approved event behind it is not rendered as an empty promise.
        </p>

        {/* 6 Grid Cards */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {topicAudienceCards.map((card, idx) => (
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
