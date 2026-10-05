import Link from "next/link";

interface DestinationRuleRow {
  intent: string;
  destination: string;
  rule: React.ReactNode;
  href: string;
}

const destinationRows: DestinationRuleRow[] = [
  {
    intent: "Need exact API contracts",
    destination: "API Documentation",
    rule: "Approved and locked destination",
    href: "/documentation",
  },
  {
    intent: "Need event delivery",
    destination: "Webhooks",
    rule: "Link only — the detailed page remains a future item",
    href: "/developers-webhooks",
  },
  {
    intent: "Need a safe test environment",
    destination: "Developer Sandbox",
    rule: (
      <>
        Link only —{" "}
        <span className="font-bold text-slate-900">
          do not describe unsupported sandbox behavior
        </span>
      </>
    ),
    href: "/developer-sandbox",
  },
  {
    intent: "Need code accelerators",
    destination: "SDKs & Examples",
    rule: (
      <>
        Link only —{" "}
        <span className="font-bold text-slate-900">
          do not claim languages or packages
        </span>
      </>
    ),
    href: "/sdks-and-examples",
  },
  {
    intent: "Need implementation help",
    destination: "Build an Integration",
    rule: "Commercial and support behavior must be approved separately",
    href: "/developers-build-an-integration",
  },
];

export default function FiveDestinationsNextStepsSection() {
  return (
    <section
      className="w-full border-t border-slate-100 bg-slate-50/60 py-16 lg:py-24"
      id="next-steps"
    >
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 text-center sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          BUILD &amp; TEST NEXT STEPS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 max-w-3xl !font-[family-name:var(--font-jakarta)] !text-xl !font-extrabold !leading-tight !tracking-tight text-slate-900 sm:!text-3xl lg:!text-4xl">
          Five destinations, linked without describing them.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs font-normal leading-relaxed text-slate-600 sm:text-base">
          Each link routes to the destination that owns the topic; none of them
          is characterized here.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white text-left shadow-sm lg:mt-14">
          <div className="overflow-x-auto">
            <table className="min-w-[620px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200/80 bg-slate-50/80">
                  <th
                    scope="col"
                    className="w-1/4 px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 sm:px-8"
                  >
                    DEVELOPER INTENT
                  </th>

                  <th
                    scope="col"
                    className="w-1/4 px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 sm:px-8"
                  >
                    DESTINATION
                  </th>

                  <th
                    scope="col"
                    className="w-1/2 px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 sm:px-8"
                  >
                    RULE
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {destinationRows.map((row) => (
                  <tr
                    key={row.intent}
                    className="transition hover:bg-slate-50/40"
                  >
                    <td className="px-6 py-4 align-top text-xs font-bold text-slate-900 sm:px-8 sm:text-sm">
                      {row.intent}
                    </td>

                    <td className="px-6 py-4 align-top sm:px-8">
                      <Link
                        href={row.href}
                        className="
                          text-xs
                          font-bold
                          !text-blue-600
                          underline-offset-4
                          transition
                          !hover:text-blue-800
                          hover:underline
                          sm:text-sm
                        "
                      >
                        {row.destination}
                      </Link>
                    </td>

                    <td className="px-6 py-4 align-top text-xs font-normal leading-relaxed text-slate-600 sm:px-8 sm:text-sm">
                      {row.rule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}