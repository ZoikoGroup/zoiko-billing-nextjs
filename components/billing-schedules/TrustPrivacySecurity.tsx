import Link from "next/link";

const trustItems = [
  {
    title: "Role-based schedule actions",
    description:
      "Create, activate, pause, revise, backfill and retire are separately permissioned.",
  },
  {
    title: "Full audit evidence",
    description:
      "Definition, version, approval, run, exception and next occurrence all leave evidence.",
  },
  {
    title: "Operational data protection",
    description:
      "Contract, customer and operational timing data is protected in access and handling.",
  },
  {
    title: "Least-privilege scheduler",
    description:
      "The scheduler and its downstream actions run under a minimum-scope service identity.",
  },
  {
    title: "Retention and incidents",
    description:
      "Defined retention treatment, and a defined path when something goes wrong.",
  },
  {
    title: "Nothing sensitive in analytics",
    description:
      "No sensitive schedule, customer or financial data in ordinary analytics or logs.",
  },
];

export default function TrustPrivacySecurity() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1220px] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-9">
          {/* Hero */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">
            <div className="flex-1 pb-5">
              <div className="mb-5 flex h-4 items-center gap-2.5">
                <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

                <span className="text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                  Trust, privacy and security
                </span>
              </div>

              <h2 className="max-w-[638px] text-4xl font-medium leading-tight text-sky-950 sm:text-5xl sm:leading-[53.82px]">
                Timing controls are
                <br />
                operational controls.
              </h2>
            </div>

            <div className="flex-1 lg:max-w-[529px]">
              <p className="text-base font-normal leading-8 text-color-azure-35">
                Who may activate, pause, backfill or retire a schedule is as
                consequential as any amount decision, and it is governed the
                same way.
              </p>
            </div>
          </div>

          {/* Trust controls */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[180px] flex-col bg-white px-6 py-6"
              >
                <h3 className="text-base font-semibold leading-6 text-sky-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-normal leading-6 text-color-azure-35">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Scope boundary */}
          <div className="rounded-tr-2xl rounded-br-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-7 py-8">
            <div className="text-[9.9px] font-normal uppercase leading-4 tracking-wide text-color-azure-44">
              Scope boundary
            </div>

            <p className="mt-2 max-w-[900px] text-base font-normal leading-7 text-sky-950">
              Internal queue, scheduler and security architecture are never
              published. Scheduling controls do not replace contractual, tax
              or accounting review.
            </p>
          </div>

          {/* CTA */}
          <div className="flex min-h-11 flex-wrap items-center justify-center gap-3">
            <Link
              href="/security"
              className="inline-flex min-h-11 items-center justify-center rounded-lg !bg-sky-950 px-5 py-2.5 text-base font-normal leading-6 !text-white no-underline outline-none transition-opacity hover:!bg-sky-950 hover:!text-white hover:opacity-90 focus:!bg-sky-950 focus:!text-white"
            >
              Review security and trust
            </Link>

            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 text-base font-normal leading-6 !text-color-azure-44 no-underline outline-none hover:!text-color-azure-44"
            >
              <span>Read the privacy notice</span>

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