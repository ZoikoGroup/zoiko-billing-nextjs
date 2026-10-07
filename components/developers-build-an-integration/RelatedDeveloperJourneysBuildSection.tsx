import Link from "next/link";

interface JourneyCard {
  title: string;
  description: string;
  href: string;
}

const journeyCards: JourneyCard[] = [
  {
    title: "API Overview",
    description: "Orientation, the exposure distinction, and lifecycle.",
    href: "/developers-api-overview",
  },
  {
    title: "API Documentation",
    description: "Canonical endpoint, schema, state, error and version authority.",
    href: "/developers-api-documentation",
  },
  {
    title: "Authentication",
    description: "Credential, access and permission lifecycle.",
    href: "/developers-authentication",
  },
  {
    title: "Webhooks",
    description: "Delivery and verification contract.",
    href: "/developers-webhooks",
  },
  {
    title: "Developer Sandbox",
    description: "Non-production fidelity and test evidence.",
    href: "/developer-sandbox",
  },
  {
    title: "SDKs & Examples",
    description: "Supported SDK guidance and compatibility.",
    href: "/sdks-and-examples",
  },
];

export default function RelatedDeveloperJourneysBuildSection() {
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
        <h2 className="!font-[family-name:var(--font-jakarta)] mt-3.5 !text-2xl sm:!text-3xl lg:!text-[36px] xl:!text-[38px] !font-bold !leading-[1.2] !tracking-[-0.02em] text-slate-900 max-w-3xl">
          Seven destinations, one authority each.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-sm sm:text-[15px] font-normal leading-relaxed text-slate-500">
          This page composes them. It does not restate or override any of their contracts.
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
                <h3 className="!font-[family-name:var(--font-jakarta)] !text-base sm:!text-lg !font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
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
