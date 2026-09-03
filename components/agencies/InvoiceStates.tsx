const invoiceStates = [
  {
    state: "Draft",
    type: "neutral",
    meaning: "Client, fee basis, source and review state visible.",
    notMean: "Not visible to the client",
  },
  {
    state: "Pending approval",
    type: "approval",
    meaning: "Approver and blocking reason shown.",
    notMean: "Not approved",
  },
  {
    state: "Approved",
    type: "approval",
    meaning: "Approval evidence recorded.",
    notMean: "Not issued",
  },
  {
    state: "Issued",
    type: "green",
    meaning:
      "Authoritative issue state and time, with the fee basis attached.",
    notMean: "Not generated or sent by itself",
  },
  {
    state: "Document generated",
    type: "green",
    meaning:
      "The client-facing artifact exists, with the engagement reference where approved.",
    notMean: "Not sent",
  },
  {
    state: "Sent",
    type: "approval",
    meaning: "A delivery attempt was recorded.",
    notMean: "Not confirmed delivered",
  },
  {
    state: "Delivered",
    type: "green",
    meaning: "Confirmed where the route supports confirmation.",
    notMean: "Not a payment, and not client acceptance",
  },
  {
    state: "Failed",
    type: "orange",
    meaning: "Explicit failure with attempts and reason.",
    notMean: "Not a client refusal to pay",
  },
  {
    state: "Unknown",
    type: "blue",
    meaning: "The route cannot confirm the outcome.",
    notMean: "Never converted to Delivered",
  },
  {
    state: "Corrected or credited",
    type: "orange",
    meaning: "A linked correction with reason and approver.",
    notMean: "Not an overwrite of the original",
  },
];

const stateStyles = {
  neutral: {
    wrapper: "border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]",
    dot: "bg-[#7890b2]",
  },
  approval: {
    wrapper: "border-[#dfe5ee] bg-[#f1f3f6] text-[#5d7192]",
    dot: "border-2 border-[#7890b2] bg-transparent",
  },
  green: {
    wrapper: "border-[#cfe8d5] bg-[#f1faf3] text-[#3b7a4a]",
    dot: "bg-[#4d9960]",
  },
  orange: {
    wrapper: "border-[#f1dfc7] bg-[#fff8ed] text-[#9a681f]",
    dot: "bg-[#c58a38]",
  },
  blue: {
    wrapper: "border-[#dce6f5] bg-[#f4f8fd] text-[#58759d]",
    dot: "bg-[#58759d]",
  },
};

export default function InvoiceStates() {
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
            items-start
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
              max-w-[900px]
              flex-col
              items-start
              gap-3
            "
          >
            {/* EYEBROW */}
            <div className="flex h-4 items-center gap-3">
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
                Invoices, documents &amp; client delivery
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
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
              A generated invoice is not sent, and sent is not delivered.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[686px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Client-service teams need the actual state before they discuss
              an invoice with a client — not a single &quot;billed&quot; badge.
            </p>
          </div>

          {/* TABLE */}
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[220px_minmax(0,1fr)_300px]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    State
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Meaning
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    What it does not mean
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {invoiceStates.map((item, index) => {
                const styles =
                  stateStyles[item.type as keyof typeof stateStyles];

                return (
                  <div
                    key={item.state}
                    className={`
                      grid
                      grid-cols-[220px_minmax(0,1fr)_300px]
                      ${
                        index !== invoiceStates.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* STATE */}
                    <div className="px-4 py-3.5">
                      <span
                        className={`
                          inline-flex
                          min-h-6
                          items-center
                          rounded-md
                          border
                          px-2.5
                          py-0.5
                          text-xs
                          font-semibold
                          leading-4
                          ${styles.wrapper}
                        `}
                      >
                        <span
                          className={`
                            mr-2
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-sm
                            ${styles.dot}
                          `}
                        />

                        {item.state}
                      </span>
                    </div>

                    {/* MEANING */}
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {item.meaning}
                      </span>
                    </div>

                    {/* WHAT IT DOES NOT MEAN */}
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {item.notMean}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {invoiceStates.map((item, index) => {
                const styles =
                  stateStyles[item.type as keyof typeof stateStyles];

                return (
                  <div
                    key={item.state}
                    className={`
                      p-5
                      ${
                        index !== invoiceStates.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* STATE */}
                    <div className="mb-4">
                      <p
                        className="
                          !m-0
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#7890b2]
                        "
                      >
                        State
                      </p>

                      <div className="mt-1.5">
                        <span
                          className={`
                            inline-flex
                            min-h-6
                            items-center
                            rounded-md
                            border
                            px-2.5
                            py-0.5
                            text-xs
                            font-semibold
                            leading-4
                            ${styles.wrapper}
                          `}
                        >
                          <span
                            className={`
                              mr-2
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-sm
                              ${styles.dot}
                            `}
                          />

                          {item.state}
                        </span>
                      </div>
                    </div>

                    {/* MEANING */}
                    <div className="mb-4">
                      <p
                        className="
                          !m-0
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#7890b2]
                        "
                      >
                        Meaning
                      </p>

                      <p
                        className="
                          !m-0
                          mt-1.5
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.meaning}
                      </p>
                    </div>

                    {/* WHAT IT DOES NOT MEAN */}
                    <div>
                      <p
                        className="
                          !m-0
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#7890b2]
                        "
                      >
                        What it does not mean
                      </p>

                      <p
                        className="
                          !m-0
                          mt-1.5
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.notMean}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}