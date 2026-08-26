import Link from "next/link";

interface JourneyCard {
  title: string;
  description: string;
  href: string;
}

const journeyCards: JourneyCard[] = [
  {
    title: "API Overview",
    description: "Understand the broader API model and object boundaries.",
    href: "/developers-api-documentation",
  },
  {
    title: "API Documentation",
    description: "Inspect resource and operation definitions related to webhook objects.",
    href: "/developers-api-documentation",
  },
  {
    title: "Authentication",
    description: "Understand API credentials and access governance — not the same as webhook verification.",
    href: "/developers-authentication",
  },
  {
    title: "Developer Sandbox",
    description: "Test approved integration behavior in a safe environment when available.",
    href: "#sandbox",
  },
  {
    title: "SDKs & Examples",
    description: "Use source-approved consumer and verification examples.",
    href: "#sdks",
  },
  {
    title: "Build an Integration",
    description: "Move from reference knowledge to a governed implementation journey.",
    href: "#build",
  },
];

export default function RelatedDeveloperJourneysSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="related-journeys">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          RELATED DEVELOPER JOURNEYS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Six destinations, each with a contextual reason.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          API authentication and webhook verification are different mechanisms, and this page
          does not conflate them.
        </p>

        {/* 6 Destination Cards Grid */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {journeyCards.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-slate-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1D70F5] transition mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
