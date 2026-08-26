export default function BankReconModel() {
  const rows = [
    {
      layer: "Bank / financial institution",
      role: "Source account and transaction records per its own services.",
      authority:
        "Zoiko does not create or verify bank ownership by implication",
    },
    {
      layer: "Banking / feed provider",
      role: "Connects or supplies approved source transactions and metadata.",
      authority: "Provider scope and currentness stay attributable",
    },
    {
      layer: "Bank account reference",
      role: "A masked or opaque reference used to scope source data.",
      authority: "No account-opening, custody or ownership claim",
    },
    {
      layer: "Bank transaction evidence",
      role: "An external source transaction record and its provenance.",
      authority:
        "Not automatically a Billing payment or a reconciled item",
    },
    {
      layer: "Billing payment / allocation",
      role: "The Billing operational record for payments and allocations.",
      authority: "Payments & Reconciliation remains authoritative",
    },
    {
      layer: "Match candidate",
      role: "A potential relation between a source transaction and Billing objects.",
      authority: "A suggestion is not reconciliation",
    },
    {
      layer: "Reconciliation decision",
      role: "An authorized reviewed relationship and evidence state.",
      authority:
        "Does not itself create an accounting journal or posting",
    },
    {
      layer: "Accounting handoff",
      role: "An optional external accounting process.",
      authority: (
        <>
          <span className="font-semibold text-blue-600">
            Accounting &amp; ERP
          </span>{" "}
          owns target posting evidence
        </>
      ),
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
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
                Banking &amp; reconciliation operating model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[1000px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              The integration coordinates evidence
              without collapsing authority.
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
              Source transaction truth stays attributable to the bank or feed
              provider. Billing owns its payment and reconciliation record.
              Accounting truth stays external.
            </p>
          </div>

          {/* TABLE CARD */}
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
            {/* RESPONSIVE TABLE */}
            <div className="w-full overflow-x-auto">
              <div
                className="
                  min-w-[1040px]
                "
              >
                {/* TABLE HEADER */}
                <div className="grid grid-cols-[224px_1fr_1fr]">
                  <div
                    className="
                      border-b
                      border-[#dfe5ee]
                      bg-[#fafbfc]
                      px-4
                      py-3.5
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Layer
                  </div>

                  <div
                    className="
                      border-b
                      border-[#dfe5ee]
                      bg-[#fafbfc]
                      px-4
                      py-3.5
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Role
                  </div>

                  <div
                    className="
                      border-b
                      border-[#dfe5ee]
                      bg-[#fafbfc]
                      px-4
                      py-3.5
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Authority boundary
                  </div>
                </div>

                {/* TABLE ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.layer}
                    className={`
                      grid
                      grid-cols-[224px_1fr_1fr]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* LAYER */}
                    <div className="px-4 py-3.5">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {row.layer}
                      </p>
                    </div>

                    {/* ROLE */}
                    <div className="px-4 py-3.5">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.role}
                      </p>
                    </div>

                    {/* AUTHORITY */}
                    <div className="px-4 py-3.5">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.authority}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE SCROLL TEXT */}
          <p
            className="
              -mt-5
              text-xs
              font-normal
              text-[#7890b2]

              sm:hidden
            "
          >
            Swipe to view the full table
          </p>
        </div>
      </div>
    </section>
  );
}