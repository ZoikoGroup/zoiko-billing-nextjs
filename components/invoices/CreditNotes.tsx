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
    evidence: "Original context, reason, amount and affected lines.",
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
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Credit notes
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Correct issued documents without erasing history.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              An issued document is evidence. Correcting it means creating a
              governed relationship, not rewriting what was already sent.
            </p>
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
              bg-[#dfe5ee]

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
                    leading-5
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
                    leading-6
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
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* TABLE TITLE */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4

                sm:px-6
              "
            >
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.12em]
                  text-[#7890b2]
                "
              >
                Correction paths · what to do when something is wrong
              </span>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[176px_minmax(0,1.3fr)_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Situation
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Permitted direction
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Control
                  </span>
                </div>
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
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.situation}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.direction}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.control}
                    </span>
                  </div>
                </div>
              ))}
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
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Situation
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.situation}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Permitted direction
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.direction}
                    </p>
                  </div>

                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Control
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.control}
                    </p>
                  </div>
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
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* TABLE TITLE */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4

                sm:px-6
              "
            >
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.12em]
                  text-[#7890b2]
                "
              >
                Credit-note states and required evidence
              </span>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    State
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Meaning
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Evidence or recovery
                  </span>
                </div>
              </div>

              {creditStates.map((row, index) => (
                <div
                  key={row.state}
                  className={`
                    grid
                    grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)]
                    ${
                      index !== creditStates.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
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

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.meaning}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.evidence}
                    </span>
                  </div>
                </div>
              ))}
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

                  <div className="mt-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Meaning
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.meaning}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Evidence or recovery
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.evidence}
                    </p>
                  </div>
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
              border-[#7890b2]
              bg-white
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Correction boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
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