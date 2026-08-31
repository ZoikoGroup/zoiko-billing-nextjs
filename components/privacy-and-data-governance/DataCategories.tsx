type Category = {
  category: string;
  covers: React.ReactNode;
  consideration: React.ReactNode;
};

const CATEGORIES: Category[] = [
  {
    category: "Billing identity",
    covers: <>Customer and contact records used to issue and collect.</>,
    consideration: (
      <>
        <span className="font-bold">
          Often subject to financial-record retention
        </span>{" "}
        alongside privacy rights
      </>
    ),
  },
  {
    category: "Billing documents",
    covers: <>Invoices, credit notes and their content.</>,
    consideration: (
      <>
        Issued documents carry evidence obligations —{" "}
        <span className="font-bold">correction trail, not overwrite</span>
      </>
    ),
  },
  {
    category: "Payment records",
    covers: (
      <>
        Payment and allocation records.{" "}
        <span className="font-bold">
          Card and bank credentials are not in scope of this page&apos;s
          examples.
        </span>
      </>
    ),
    consideration: <>Provider and reconciliation obligations may apply</>,
  },
  {
    category: "Account & user data",
    covers: <>Your organization&apos;s users, roles and access.</>,
    consideration: <>Customer-administered in significant part</>,
  },
  {
    category: "Support content",
    covers: <>What you send when you contact support.</>,
    consideration: (
      <>
        Minimized at intake;{" "}
        <span className="font-bold">
          secrets are refused rather than stored
        </span>
      </>
    ),
  },
  {
    category: "Website & product telemetry",
    covers: <>Usage and site interaction data.</>,
    consideration: (
      <>Cookie and analytics behavior governed by the approved source</>
    ),
  },
];

export default function DataCategories() {
  return (
    <section
      id="data-categories"
      className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Data categories &amp; domains
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 !text-2xl !tracking-normal font-extrabold !leading-8 text-balance font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Categories, not examples.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Normalized category identifiers are used throughout. No actual
            personal data appears in page content or analytics beyond
            example-safe illustration.
          </p>
        </div>

        {/* Stacked cards — small screens */}
        <div className="flex w-full flex-col gap-3 lg:hidden">
          {CATEGORIES.map((row) => (
            <div
              key={row.category}
              className="flex w-full flex-col gap-3 rounded-2xl border border-[#dfe5ee] bg-white p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
            >
              <h3 className="!m-0 text-sm font-bold !leading-5 !text-[#091127] font-[family-name:var(--font-jakarta)]">
                {row.category}
              </h3>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Covers
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.covers}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Governing consideration
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.consideration}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Table — md and up */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] lg:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fafbfc]">
                  <th className="w-48 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Category
                  </th>

                  <th className="border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Covers
                  </th>

                  <th className="border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Governing consideration
                  </th>
                </tr>
              </thead>

              <tbody>
                {CATEGORIES.map((row, index) => (
                  <tr
                    key={row.category}
                    className={
                      index === CATEGORIES.length - 1
                        ? ""
                        : "border-b border-[#edf0f4]"
                    }
                  >
                    <td className="w-48 px-4 py-4 align-top text-sm font-semibold !leading-5 !text-[#091127]">
                      {row.category}
                    </td>

                    <td className="px-4 py-4 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.covers}
                    </td>

                    <td className="px-4 py-4 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.consideration}
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
