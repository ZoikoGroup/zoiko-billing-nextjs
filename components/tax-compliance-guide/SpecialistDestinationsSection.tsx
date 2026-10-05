import Link from "next/link";

interface SpecialistDestinationItem {
  category: string;
  linkText: string;
  href: string;
  detail: string;
  status: string;
}

const destinations: SpecialistDestinationItem[] = [
  {
    category: "Availability truth",
    linkText: "Supported Countries",
    href: "/supported-countries",
    detail: "the phase 2 route, and the only source for capability-scoped coverage.",
    status: "Route pending.",
  },
  {
    category: "Requirement context",
    linkText: "Local Compliance",
    href: "/local-compliance",
    detail: "sourcing, scoping and currentness of requirements.",
    status: "Route pending.",
  },
  {
    category: "Tax-domain inputs",
    linkText: "Indirect Tax",
    href: "/indirect-tax",
    detail: "the questions to resolve before reliance.",
    status: "Route pending.",
  },
  {
    category: "Configuration governance",
    linkText: "Tax Configuration",
    href: "/tax-configuration",
    detail: "the phase 5 route. Approval is not effectiveness.",
    status: "Route pending.",
  },
  {
    category: "Cross-domain routing",
    linkText: "Tax and Compliance",
    href: "/tax-compliance",
    detail: "separate columns for source, review, currentness and coverage.",
    status: "Route pending.",
  },
  {
    category: "Program sequencing",
    linkText: "Global Billing Guide",
    href: "/global-billing-guide",
    detail: "the wider program sequence this one nests inside.",
    status: "Route pending.",
  },
];

export default function SpecialistDestinationsSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Specialist Destinations
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[42px]">
          Where each phase hands off.
        </h2>

        {/* SUBTITLE */}
        <p className="!mt-3 text-center text-sm font-normal text-[#5d7192] sm:text-base">
          Every route below is pending in the governed registry.
        </p>

        {/* 6-CARD GRID */}
        <div className="mt-8 grid w-full max-w-[1240px] grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item) => (
            <div
              key={item.category}
              className="flex flex-col justify-between rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition hover:shadow-md sm:p-6"
            >
              <div>
                <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-xs font-bold uppercase tracking-wider text-[#091127] sm:text-[13px]">
                  {item.category}
                </h3>

                <p className="!m-0 mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                  <Link
                    href={item.href}
                    className="font-bold text-[#091127] transition hover:text-[#1D70F5]"
                  >
                    {item.linkText}
                  </Link>{" "}
                  — {item.detail}{" "}
                  <span className="font-semibold text-[#091127]">
                    {item.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
