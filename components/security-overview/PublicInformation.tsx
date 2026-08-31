export default function PublicInformation() {
  const rows = [
    {
      className: "Public-safe summary",
      examples:
        "Control-domain purpose, ownership category, whether evidence exists, reviewed date, shared responsibility.",
      treatment: (
        <>
          Published and indexable where approved.{" "}
          <strong>This page is almost entirely this class.</strong>
        </>
      ),
    },
    {
      className: "Public scoped evidence",
      examples:
        "An approved trust record with explicit scope, status and date.",
      treatment: (
        <>
          Linked or summarized exactly.{" "}
          <strong>Trust Center remains the authority</strong> — the summary
          never becomes the claim.
        </>
      ),
    },
    {
      className: "Controlled assurance",
      examples:
        "Detailed reports, completed questionnaires, customer-specific evidence.",
      treatment: (
        <>
          Authenticated or request-gated per Trust Center policy.{" "}
          <strong>Gated is not hidden</strong> — the existence and route are
          public.
        </>
      ),
    },
    {
      className: "Restricted security",
      examples:
        "Internal architecture diagrams, detection logic, secrets, exploit detail, key material, incident-sensitive data.",
      restricted: true,
      treatment: (
        <>
          <strong>Never public — and never in analytics or page source.</strong>{" "}
          Not gated, not summarized, not hinted at.
        </>
      ),
    },
    {
      className: "Not established",
      examples: "A fact no current approved source supports.",
      treatment: (
        <>
          Stated as not established by this public source where useful.{" "}
          <strong>Never guessed, and never given an optimistic fallback.</strong>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14
          sm:px-8 sm:py-16
          md:px-10 md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col items-center
            gap-5 px-0
            sm:px-4
            md:px-7
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[662px] flex-col items-center
              gap-3 pt-2 text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Public vs controlled information
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold
                !leading-[1.2] !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Five classes, and one never appears anywhere.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              A reviewer asking why something is missing deserves to know
              which class it falls into — that answer is itself informative.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full overflow-hidden rounded-2xl border border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div className="grid grid-cols-[176px_minmax(0,1fr)_minmax(0,1fr)] bg-[#243b5a]">
                <div className="border-r border-white/15 px-3.5 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Class
                  </span>
                </div>

                <div className="border-r border-white/15 px-3.5 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Examples
                  </span>
                </div>

                <div className="px-3.5 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Treatment
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.className}
                  className={`
                    grid grid-cols-[176px_minmax(0,1fr)_minmax(0,1fr)]
                    ${index !== rows.length - 1 ? "border-b border-[#edf0f4]" : ""}
                  `}
                >
                  <div
                    className={`
                      border-r border-[#edf0f4] px-3.5 py-3
                      ${
                        row.restricted
                          ? "bg-[#f1f2f4]"
                          : "bg-[#fafbfc]"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-xs font-bold leading-5
                        ${
                          row.restricted
                            ? "text-[#c2413b]"
                            : "text-[#091127]"
                        }
                      `}
                    >
                      {row.className}
                    </span>
                  </div>

                  <div className="border-r border-[#edf0f4] px-3.5 py-3">
                    <span className="text-xs font-normal leading-5 text-[#091127]">
                      {row.examples}
                    </span>
                  </div>

                  <div className="px-3.5 py-3">
                    <span className="text-xs font-normal leading-5 text-[#091127]">
                      {row.treatment}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.className}
                  className={`
                    p-5
                    ${index !== rows.length - 1 ? "border-b border-[#edf0f4]" : ""}
                  `}
                >
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Class
                    </p>

                    <p
                      className={`
                        !m-0 mt-1.5 text-sm font-bold leading-5
                        ${
                          row.restricted
                            ? "text-[#c2413b]"
                            : "text-[#091127]"
                        }
                      `}
                    >
                      {row.className}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Examples
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.examples}
                    </p>
                  </div>

                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Treatment
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.treatment}
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