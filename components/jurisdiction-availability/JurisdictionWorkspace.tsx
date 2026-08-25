import Image from "next/image";

const dependencyRows = [
  {
    title: "Dependency",
    description:
      "The approved partner or provider category, or name where disclosure is authorized",
  },
  {
    title: "Responsibility boundary",
    description:
      "What Zoiko Billing controls versus what the partner or provider controls",
  },
  {
    title: "Commercial boundary",
    description:
      "Pricing, contract and support are not assumed to be included",
  },
  {
    title: "Data & process boundary",
    description:
      "Only approved data and process sharing statements",
  },
  {
    title: "Operational status",
    description:
      "Partner availability can become stale or unavailable independently",
  },
  {
    title: "Support route",
    description:
      "The correct operational or commercial route — with no invented response time or service level",
  },
];

export default function PartnerDependency() {
  return (
    <section className="w-full bg-[#F7F8FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 lg:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-[#4387A8] sm:text-xs sm:tracking-[0.2em]">
              Limited &amp; partner-supported availability
            </span>

            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />
          </div>

          {/* Title */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#102A43] sm:text-[38px] lg:text-[42px]">
            Partner dependency is a first-class state, not small print.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#60758A] sm:text-base sm:leading-7">
            It is never hidden inside wording like &quot;powered by
            partners,&quot; because it can affect procurement, operations and
            responsibility.
          </p>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-stretch gap-5 lg:flex-row lg:items-stretch">
          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-xl border border-[#E2E6EA] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl lg:flex-1">
            <div className="relative aspect-[581/492] w-full">
              <Image
                src="/images/jurisdiction-availability/partner-dependency.png"
                alt="Partner dependency availability"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-hidden rounded-xl border border-[#E2E6EA] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl lg:flex-1">
            {/* Table Header */}
            <div className="border-b border-[#E2E6EA] bg-[#FAFBFC] px-4 py-4 sm:px-5">
              <p className="text-sm font-normal leading-5 text-[#60758A]">
                Every Partner-supported statement must name six things.
              </p>
            </div>

            {/* Rows */}
            <div className="w-full">
              {dependencyRows.map((row, index) => (
                <div
                  key={row.title}
                  className={`grid grid-cols-1 sm:grid-cols-[150px_minmax(0,1fr)] ${
                    index !== dependencyRows.length - 1
                      ? "border-b border-[#EEF0F2]"
                      : ""
                  }`}
                >
                  {/* Label */}
                  <div className="px-4 pb-1 pt-4 sm:py-4">
                    <p className="text-sm font-semibold leading-5 text-[#102A43]">
                      {row.title}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="px-4 pb-4 pt-1 sm:py-4">
                    <p className="text-sm font-normal leading-5 text-[#60758A]">
                      {row.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}