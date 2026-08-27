import Link from "next/link";

const integrationItems = [
  {
    title: "Verified categories only",
    description:
      "CRM, commerce, contract, order, usage, ERP, payment and custom integrations, described only where verified.",
  },
  {
    title: "Inbound definitions and events",
    description:
      "Schedule definitions or source events arriving from an approved system.",
  },
  {
    title: "Outbound events",
    description:
      "Run, document and exception events emitted to connected systems.",
  },
  {
    title: "Duplicate and ordering",
    description:
      "Duplicate handling, event ordering and retry behaviour are all defined.",
  },
  {
    title: "Source ownership",
    description:
      "Which system owns a schedule field, and what happens when sources disagree.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Identity, approved records or cross-product handoffs where enabled.",
  },
];

export default function SourcesAndHandoffs() {
  return (
    <section className="w-full bg-color-grey-97-2">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-9 px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="flex w-full flex-col justify-center gap-10 lg:flex-row lg:items-end lg:gap-16">
          {/* Left */}
          <div className="flex-1 pt-2.5 pb-6">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                Sources and handoffs
              </span>
            </div>

            <h2 className="max-w-[638px] text-4xl font-medium leading-tight text-sky-950 sm:text-5xl sm:leading-[53.82px]">
              Where schedules come
              <br />
              from, and what they
              <br />
              emit.
            </h2>
          </div>

          {/* Right */}
          <div className="flex-1 lg:max-w-[529px]">
            <p className="text-base font-normal leading-8 text-color-azure-35">
              Approved systems can define schedules or supply the events behind
              <br className="hidden sm:block" />
              them, and can receive run, document and exception events in
              return.
            </p>
          </div>
        </div>

        {/* Integration Items */}
        <div className="w-full overflow-hidden rounded-2xl bg-zinc-200 outline outline-1 outline-offset-[-1px] outline-zinc-200">
          {integrationItems.map((item, index) => (
            <div
              key={item.title}
              className={`w-full bg-color-white-solid px-6 py-6 ${
                index === 0 ? "pt-6" : ""
              }`}
            >
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-base font-semibold leading-6 text-sky-950">
                  {item.title}
                </h3>

                <p className="text-sm font-normal leading-6 text-color-azure-35">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Connector Boundary */}
        <div className="w-full rounded-tr-2xl rounded-br-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-7 py-7">
          <div className="mb-2 text-[9.9px] font-normal uppercase leading-4 tracking-wide text-color-azure-44">
            Connector boundary
          </div>

          <p className="max-w-[761px] text-base font-normal leading-7 text-sky-950">
            Not every connector creates, updates or executes schedules, and
            not in real time. Behaviour is stated per connector in the governed
            integration registry. Zoiko Billing remains independently
            deployable.
          </p>
        </div>

        {/* CTA */}
        <div className="flex w-full justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Primary CTA */}
            <Link
              href="#integrations"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sky-950 px-5 py-2.5 text-white outline outline-1 outline-offset-[-1px] outline-sky-950 transition-opacity hover:opacity-90"
            >
              <span className="text-base font-normal leading-6 text-white">
                Browse integrations
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#deployment-options"
              className="inline-flex min-h-11 items-center gap-2 px-0 py-2.5"
            >
              <span className="text-base font-normal leading-6 text-color-azure-44">
                Compare deployment options
              </span>

              <span className="text-base font-bold leading-6 text-color-azure-44">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}