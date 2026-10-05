import Link from "next/link";

interface TopicAudienceCard {
  title: string;
  description: React.ReactNode;
  href: string;
}

const topicAudienceCards: TopicAudienceCard[] = [
  {
    title: "Invoicing & documents",
    description: "Document lifecycle, corrections, delivery and evidence.",
    href: "/invoices",
  },
  {
    title: "Accounts receivable",
    description:
      "Aging, reminders, disputes, ownership and exception handling.",
    href: "/accounts-receivable",
  },
  {
    title: "Payments & reconciliation",
    description:
      "Allocation, matching, exceptions and unknown outcomes.",
    href: "/payments-and-reconcilliation",
  },
  {
    title: "Reporting & analytics",
    description:
      "Metric definition, interpretation and management reporting.",
    href: "/reporting-and-analytics",
  },
  {
    title: "Integrations & implementation",
    description:
      "Integration scope, status, governance and readiness.",
    href: "/integrations",
  },
  {
    title: "Product walkthroughs",
    description: (
      <>
        Capability sessions tied to current Documentation,{" "}
        <span className="font-bold text-slate-900">
          with no roadmap claims
        </span>
        .
      </>
    ),
    href: "/documentation",
  },
];

export default function BrowseByTopicAudienceSection() {
  return (
    <section
      className="w-full border-t border-slate-100 bg-slate-50/60 py-16 lg:py-24"
      id="browse-topics"
    >
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 text-center sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          BROWSE BY TOPIC &amp; AUDIENCE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 max-w-3xl !font-[family-name:var(--font-jakarta)] !text-2xl !font-bold !leading-[1.2] !tracking-[-0.02em] text-slate-900 sm:!text-3xl lg:!text-[36px] xl:!text-[38px]">
          Facets that exist only when events fill them.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-sm font-normal leading-relaxed text-slate-500 sm:text-[15px]">
          A topic or audience with no approved event behind it is not rendered
          as an empty promise.
        </p>

        {/* 6 Grid Cards */}
        <div className="mt-10 grid w-full max-w-[1240px] grid-cols-1 gap-6 text-left md:grid-cols-3 lg:mt-14">
          {topicAudienceCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="
                group
                rounded-2xl
                border
                border-slate-200/90
                bg-white
                p-6
                text-left
                shadow-sm
                transition
                duration-200
                hover:-translate-y-0.5
                hover:border-slate-300
                hover:shadow-md
                focus:outline-none
                focus:ring-2
                focus:ring-slate-300
                focus:ring-offset-2
                sm:p-7
              "
            >
              <h3
                className="
                  mb-2
                  !font-[family-name:var(--font-jakarta)]
                  !text-base
                  !font-bold
                  text-slate-900
                  transition-colors
                  group-hover:text-[#5279b4]
                  sm:!text-lg
                "
              >
                {card.title}
              </h3>

              <p className="text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}