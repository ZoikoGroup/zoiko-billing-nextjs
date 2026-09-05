import Link from "next/link";

export default function GlobalBillingReadiness() {
  const rows = [
    {
      confirm: "Is each market you operate in currently in scope?",
      authority: "Jurisdiction Availability",
      authorityLink: "/jurisdiction-availability",
      why: "Market scope changes independently of capability",
      boldWhy: false,
    },
    {
      confirm: "Are the currencies you invoice in supported?",
      authority: "Currency registry, via Availability",
      authorityLink: "/integration-availability",
      why: "Currency support is a registry record, not a capability statement",
      boldWhy: true,
    },
    {
      confirm: "Are your document languages supported?",
      authority: "Supported Languages",
      authorityLink: "/supported-languages",
      why: "Current support only; and language is not compliance",
      boldWhy: true,
    },
    {
      confirm: "Do your payment providers cover those markets?",
      authority: "Payment providers",
      authorityLink: "/payments-and-reconcilliation",
      why: "Provider coverage is theirs to establish, not ours to assert",
      boldWhy: false,
    },
    {
      confirm: (
        <>
          What tax configuration does your context
          <br className="hidden lg:block" /> require?
        </>
      ),
      authority: (
        <>
          Product · Global Billing authority · your own
          <br className="hidden lg:block" /> advisors
        </>
      ),
      authorityLink: null,
      why: "Tax treatment depends on facts a billing platform does not hold",
      boldWhy: true,
    },
    {
      confirm: "What does this cost on your plan?",
      authority: "Pricing",
      authorityLink: "/pricing-and-plans",
      why: "Commercial state is owned by Pricing",
      boldWhy: false,
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20
          lg:px-14 xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col
            items-center gap-8 sm:gap-10 md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[662px] flex-col
              items-center gap-3 pt-2 text-center
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
                Global billing readiness
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold !leading-[1.2]
                !tracking-[-0.035em] !text-[#091127]
                sm:!text-[34px] md:!text-[36px] lg:!text-[40px]
              "
            >
              Six things to confirm before you
              <br className="hidden sm:block" /> commit.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              A checklist of questions with their owners — not a scored
              assessment.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden w-full overflow-hidden rounded-2xl
              border border-[#dfe5ee] bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              md:block
            "
          >
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[1fr_1fr_1.2fr] bg-[#fafbfc]">
              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Confirm
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Authority
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Why not here
                </span>
              </div>
            </div>

            {/* TABLE ROWS */}
            {rows.map((row, index) => (
              <div
                key={index}
                className={`
                  grid grid-cols-[1fr_1fr_1.2fr]
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* CONFIRM */}
                <div className="px-4 py-3.5">
                  <p className="!m-0 text-sm font-semibold leading-5 text-[#091127]">
                    {row.confirm}
                  </p>
                </div>

                {/* AUTHORITY */}
                <div className="px-4 py-3.5">
                  {row.authorityLink ? (
                    <Link
                      href={row.authorityLink}
                      className="
                        text-sm font-semibold leading-6
                        text-blue-600
                        transition-colors
                        hover:text-blue-800
                        hover:underline
                      "
                    >
                      {row.authority}
                    </Link>
                  ) : (
                    <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
                      {row.authority}
                    </p>
                  )}
                </div>

                {/* WHY NOT HERE */}
                <div className="px-4 py-3.5">
                  <p className="!m-0 text-sm leading-5 text-[#5d7192]">
                    {row.boldWhy ? (
                      <strong className="font-bold">{row.why}</strong>
                    ) : (
                      row.why
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CARDS */}
          <div
            className="
              flex w-full flex-col overflow-hidden rounded-2xl
              border border-[#dfe5ee] bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              md:hidden
            "
          >
            {rows.map((row, index) => (
              <div
                key={index}
                className={`
                  p-5
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* CONFIRM */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Confirm
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.confirm}
                  </p>
                </div>

                {/* AUTHORITY */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Authority
                  </p>

                  {row.authorityLink ? (
                    <Link
                      href={row.authorityLink}
                      className="
                        mt-1.5 block text-sm font-semibold
                        leading-6 text-blue-600
                        transition-colors
                        hover:text-blue-800
                        hover:underline
                      "
                    >
                      {row.authority}
                    </Link>
                  ) : (
                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.authority}
                    </p>
                  )}
                </div>

                {/* WHY NOT HERE */}
                <div>
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Why not here
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {row.boldWhy ? (
                      <strong className="font-bold">{row.why}</strong>
                    ) : (
                      row.why
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}