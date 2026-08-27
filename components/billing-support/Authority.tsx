export default function Authority() {
  const rows = [
    {
      intent: "How do I create or correct an invoice for my customer?",
      authority: "Documentation · Help Center",
      treatment: (
        <>
          Not routed here{" "}
          <strong className="font-bold">
            unless the issue is a Zoiko account charge
          </strong>
        </>
      ),
    },
    {
      intent: "Why is my customer payment unreconciled?",
      authority: "Help Center · Documentation",
      treatment: "Product-use support, not account billing",
    },
    {
      intent: "Question about my Zoiko subscription invoice or charge",
      authority: "Billing Support",
      treatment:
        "Secure specialized intake where account-specific evidence is needed",
      authorityStrong: true,
    },
    {
      intent:
        "What does the product cost, or which plan includes a capability?",
      authority: "Pricing",
      treatment: (
        <>
          May help with an account-specific commercial issue, but{" "}
          <strong className="font-bold">
            publishes no pricing truth
          </strong>
        </>
      ),
      authorityStrong: true,
    },
    {
      intent: "I cannot sign in to view billing information",
      authority: "Account Access",
      treatment: (
        <>
          Resolve access first —{" "}
          <strong className="font-bold">
            Billing Support does not bypass identity controls
          </strong>
        </>
      ),
      authorityStrong: true,
    },
    {
      intent: "I need general assisted support",
      authority: "Contact Support",
      treatment:
        "Routed here only when commercial account billing is the real intent",
    },
    {
      intent: "What support response do I receive?",
      authority: "Support Policy",
      treatment: (
        <>
          <strong className="font-bold">
            No SLA, response target, hours or channel promise copied here
          </strong>
        </>
      ),
    },
    {
      intent: "I suspect an outage affected a transaction",
      authority: "System Status · Help",
      treatment:
        "Current service state stays in Status; charge review may follow only if applicable",
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
            gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[1000px] flex-col items-center
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
                Authority boundary
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold !leading-[1.2]
                !tracking-[-0.035em] !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Eight intents, and only one belongs
              here.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              &quot;Billing issue&quot; is ambiguous in a billing product. Each
              intent has an owner, and this page routes rather than absorbing.
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
            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[384px_224px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    User intent
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Correct authority
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Billing Support treatment
                  </span>
                </div>
              </div>

              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    grid grid-cols-[384px_224px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.intent}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span
                      className={`text-sm leading-5 ${
                        row.authorityStrong
                          ? "font-semibold text-[#527aa8]"
                          : "font-normal text-[#5d7192]"
                      }`}
                    >
                      {row.authority}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm leading-5 text-[#5d7192]">
                      {row.treatment}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
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
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      User intent
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.intent}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Correct authority
                    </p>

                    <p
                      className={`!m-0 mt-1.5 text-sm leading-6 ${
                        row.authorityStrong
                          ? "font-semibold text-[#527aa8]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {row.authority}
                    </p>
                  </div>

                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Billing Support treatment
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