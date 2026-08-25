const correctionTypes = [
  {
    title: "Credit",
    description:
      "Reduces the amount owed on an issued document through a related credit document.",
  },
  {
    title: "Void",
    description:
      "Marks an issued document as having no effect, where the configuration and jurisdiction support it.",
  },
  {
    title: "Cancellation",
    description:
      "Ends a document's effect through the supported cancellation pathway for that market.",
  },
  {
    title: "Write-off",
    description:
      "An operational decision to stop pursuing a balance. It is not a document correction.",
  },
  {
    title: "Refund",
    description:
      "Actual movement of money back to the customer, handled in payments — not by a credit note.",
  },
];

const correctionPaths = [
  {
    situation: "Draft error before issue",
    direction: "Edit or replace the draft version.",
    control: "Permission, source and change history.",
  },
  {
    situation: "Approved but not issued",
    direction: "Return, revise and reapprove according to policy.",
    control: "Version and approval invalidation or renewal.",
  },
  {
    situation: "Issued amount or line error",
    direction: "Prepare a credit note or supported legal correction.",
    control:
      "Original relation, reason, approval, numbering and issue evidence.",
  },
  {
    situation: "Recipient or delivery error",
    direction:
      "Correct the endpoint and resend where permitted. Issued content stays governed.",
    control: "Recipient permission, delivery evidence and privacy review.",
  },
  {
    situation: "Payment allocation error",
    direction:
      "Correct or reverse the allocation in Payments & Reconciliation.",
    control:
      "Payment evidence and balance update. Document content is not rewritten.",
  },
  {
    situation: "Accounting posting error",
    direction:
      "Resolve in the connected accounting system or approved integration.",
    control: "Zoiko Billing is not the accounting ledger.",
  },
];

const creditStates = [
  {
    state: "Draft",
    symbol: "–",
    tone: "neutral",
    meaning: "Being prepared, with no issued effect.",
    evidence:
      "Original context, reason, amount and affected lines.",
  },
  {
    state: "Validation failed",
    symbol: "!",
    tone: "error",
    meaning:
      "Required relation, amount, tax or configuration is invalid.",
    evidence: "Block issue and identify the exact issue.",
  },
  {
    state: "Pending approval",
    symbol: "•",
    tone: "pending",
    meaning: "Configured review is required.",
    evidence: "Reviewer, policy, due time and evidence.",
  },
  {
    state: "Approved / scheduled",
    symbol: "i",
    tone: "info",
    meaning: "The version may proceed according to configuration.",
    evidence: "Preserve version and effective context.",
  },
  {
    state: "Issued",
    symbol: "✓",
    tone: "success",
    meaning: "An accountable credit document exists.",
    evidence:
      "Number, issue time, original-document relation and totals.",
  },
  {
    state: "Applied / partially applied",
    symbol: "✓",
    tone: "success",
    meaning: "The credit affects a document or balance relationship.",
    evidence:
      "Applied amount, currency, target and remaining credit.",
  },
  {
    state: "Void / canceled where supported",
    symbol: "–",
    tone: "neutral",
    meaning: "A supported exceptional state ends further use.",
    evidence:
      "Reason, authority and effect on prior relationships.",
  },
  {
    state: "Issue / delivery failed",
    symbol: "!",
    tone: "error",
    meaning: "The document or its transport did not complete.",
    evidence: "Retry or manual recovery without duplicate issue.",
  },
];

const stateToneClasses = {
  neutral: "border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]",
  error: "border-[#e4caca] bg-[#f8f3f3] text-[#b34848]",
  pending: "border-[#eadbc2] bg-[#faf6ef] text-[#a56a20]",
  info: "border-[#d4dce8] bg-[#f4f6f9] text-[#4d6f9a]",
  success: "border-[#d4e1dc] bg-[#f3f7f5] text-[#527f73]",
};

export default function CreditNotes() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1220px]
            flex-col
            items-start
            gap-8

            sm:gap-9

            md:gap-11
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8

              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2
                pb-2

                lg:pb-5
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27c7d9]
                    to-[#5c83aa]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#5c83aa]

                    sm:text-xs
                  "
                >
                  Credit notes
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[34px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#091127]

                  sm:text-[40px]

                  md:text-[44px]

                  lg:text-[48px]
                "
              >
                Correct issued documents without erasing history.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                  sm:leading-8
                "
              >
                An issued document is evidence. Correcting it means creating a
                governed relationship, not rewriting what was already sent.
              </p>
            </div>
          </div>

          {/* CORRECTION TYPES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#e5e7eb]

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-5
            "
          >
            {correctionTypes.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[170px]
                  flex-col
                  items-start
                  gap-2
                  bg-white
                  p-5
                "
              >
                <h3
                  className="
                    !m-0
                    text-sm
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CORRECTION PATHS */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
            "
          >
            {/* TABLE TITLE */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#f7f8fa]
                px-5
                py-4

                sm:px-6
              "
            >
              <span
                className="
                  text-[10px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  text-[#5d7192]
                "
              >
                Correction paths · what to do when something is wrong
              </span>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden overflow-x-auto md:block">
              <div className="min-w-[850px]">
                <div className="grid grid-cols-[176px_minmax(0,1.3fr)_minmax(0,1fr)] bg-[#fafbfc]">
                  {["Situation", "Permitted direction", "Control"].map(
                    (heading) => (
                      <div
                        key={heading}
                        className="
                          border-b
                          border-[#dfe5ee]
                          px-3.5
                          py-2
                          text-[10px]
                          font-medium
                          uppercase
                          leading-4
                          tracking-[0.08em]
                          text-[#527f73]
                        "
                      >
                        {heading}
                      </div>
                    )
                  )}
                </div>

                {correctionPaths.map((row, index) => (
                  <div
                    key={row.situation}
                    className={`
                      grid
                      grid-cols-[176px_minmax(0,1.3fr)_minmax(0,1fr)]
                      ${
                        index !== correctionPaths.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-3.5 py-3 text-sm leading-5 text-[#091127]">
                      {row.situation}
                    </div>

                    <div className="px-3.5 py-3 text-sm leading-5 text-[#091127]">
                      {row.direction}
                    </div>

                    <div className="px-3.5 py-3 text-sm leading-5 text-[#091127]">
                      {row.control}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {correctionPaths.map((row, index) => (
                <div
                  key={row.situation}
                  className={`
                    p-5
                    ${
                      index !== correctionPaths.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#527f73]">
                    Situation
                  </span>

                  <p className="!m-0 mt-1 text-sm font-semibold leading-5 text-[#091127]">
                    {row.situation}
                  </p>

                  <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.08em] text-[#527f73]">
                    Permitted direction
                  </span>

                  <p className="!m-0 mt-1 text-sm leading-5 text-[#5d7192]">
                    {row.direction}
                  </p>

                  <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.08em] text-[#527f73]">
                    Control
                  </span>

                  <p className="!m-0 mt-1 text-sm leading-5 text-[#5d7192]">
                    {row.control}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CREDIT NOTE STATES */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
            "
          >
            {/* TABLE TITLE */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#f7f8fa]
                px-5
                py-4

                sm:px-6
              "
            >
              <span
                className="
                  text-[10px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  text-[#5d7192]
                "
              >
                Credit-note states and required evidence
              </span>
            </div>

            {/* DESKTOP */}
            <div className="hidden overflow-x-auto md:block">
              <div className="min-w-[900px]">
                <div className="grid grid-cols-[280px_minmax(0,1fr)_minmax(0,1fr)] bg-[#fafbfc]">
                  {["State", "Meaning", "Evidence or recovery"].map(
                    (heading) => (
                      <div
                        key={heading}
                        className="
                          border-b
                          border-[#dfe5ee]
                          px-3.5
                          py-2
                          text-[10px]
                          font-medium
                          uppercase
                          leading-4
                          tracking-[0.08em]
                          text-[#527f73]
                        "
                      >
                        {heading}
                      </div>
                    )
                  )}
                </div>

                {creditStates.map((row, index) => (
                  <div
                    key={row.state}
                    className={`
                      grid
                      grid-cols-[280px_minmax(0,1fr)_minmax(0,1fr)]
                      ${
                        index !== creditStates.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-3.5 py-3">
                      <span
                        className={`
                          inline-flex
                          items-center
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          uppercase
                          leading-4
                          tracking-[0.06em]
                          ${
                            stateToneClasses[
                              row.tone as keyof typeof stateToneClasses
                            ]
                          }
                        `}
                      >
                        <span className="mr-2">{row.symbol}</span>
                        {row.state}
                      </span>
                    </div>

                    <div className="px-3.5 py-3 text-sm leading-5 text-[#091127]">
                      {row.meaning}
                    </div>

                    <div className="px-3.5 py-3 text-sm leading-5 text-[#091127]">
                      {row.evidence}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {creditStates.map((row, index) => (
                <div
                  key={row.state}
                  className={`
                    p-5
                    ${
                      index !== creditStates.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <span
                    className={`
                      inline-flex
                      items-center
                      rounded-full
                      border
                      px-3
                      py-1.5
                      text-[10px]
                      font-medium
                      uppercase
                      leading-4
                      tracking-[0.06em]
                      ${
                        stateToneClasses[
                          row.tone as keyof typeof stateToneClasses
                        ]
                      }
                    `}
                  >
                    <span className="mr-2">{row.symbol}</span>
                    {row.state}
                  </span>

                  <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.08em] text-[#527f73]">
                    Meaning
                  </span>

                  <p className="!m-0 mt-1 text-sm leading-5 text-[#091127]">
                    {row.meaning}
                  </p>

                  <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.08em] text-[#527f73]">
                    Evidence or recovery
                  </span>

                  <p className="!m-0 mt-1 text-sm leading-5 text-[#5d7192]">
                    {row.evidence}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CORRECTION BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#5c83aa]
              bg-[#f7f8fa]
              px-5
              py-7

              sm:px-6

              md:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-normal
                uppercase
                leading-4
                tracking-[0.08em]
                text-[#5c83aa]
              "
            >
              Correction boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-6
                text-[#091127]

                sm:text-base
                sm:leading-7
              "
            >
              Credit, void, cancellation, write-off and refund are distinct
              concepts. A credit note changes the billing relationship and the
              remaining balance; it does not automatically create a cash
              refund or an accounting journal entry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}