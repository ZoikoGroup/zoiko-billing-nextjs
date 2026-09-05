import Link from "next/link";

const anatomyItems = [
  {
    number: "1",
    title: "Issuer and legal entity",
    description:
      "The entity that issues the document, with its establishment and tax-identifier context.",
  },
  {
    number: "2",
    title: "Customer and billing profile",
    description:
      "The customer reference, plus registered, billing, service or delivery address context where supported.",
  },
  {
    number: "3",
    title: "Type, ID, number and series",
    description:
      "Document type, stable internal ID, issued number and the numbering series it came from.",
  },
  {
    number: "4",
    title: "Dates",
    description:
      "Issue, supply or service, due and effective dates where supported.",
  },
  {
    number: "5",
    title: "Currency, terms and references",
    description:
      "Billing currency, payment terms and any purchase-order or contract reference context.",
  },
  {
    number: "6",
    title: "Lines",
    description:
      "Descriptions, quantities, units, prices, fees, discounts and adjustments.",
  },
  {
    number: "7",
    title: "Tax context",
    description:
      "Configured rates, identifiers, and exemption or evidence context where supported.",
  },
  {
    number: "8",
    title: "Totals and balance",
    description:
      "Subtotal, tax, total, credited, allocated, paid and remaining balance context.",
  },
  {
    number: "9",
    title: "Delivery preference",
    description:
      "Recipient and channel configured for this document.",
  },
  {
    number: "10",
    title: "Relationships",
    description:
      "Source, owner, approval, version and every related document.",
  },
];

const invoiceLines = [
  {
    description: "Advisory retainer · Aug 2026",
    qty: "1",
    unit: "14,000.00",
    amount: "14,000.00",
  },
  {
    description: "Implementation hours",
    qty: "32",
    unit: "120.00",
    amount: "3,840.00",
  },
  {
    description: "Contract discount −5%",
    qty: "—",
    unit: "—",
    amount: "−700.00",
  },
];

const invoiceMeta = [
  ["Issue date", "18 Jul 2026"],
  ["Supply date", "01–31 Jul 2026"],
  ["Due date", "17 Aug 2026"],
  ["Currency · terms", "GBP · Net 30"],
];

const invoiceTotals = [
  ["Subtotal", "£17,140.00"],
  ["VAT 20% · standard rate", "£3,428.00"],
  ["Credited · CN-UK-2026-0061", "−£4,120.00"],
  ["Allocated · PMT-88A41C", "−£12,496.00"],
];

export default function DocumentAnatomy() {
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
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-gradient-to-r
                  from-[#27c7d9]
                  to-[#5c83aa]
                  opacity-70
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#5c83aa]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Document anatomy
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-gradient-to-r
                  from-[#27c7d9]
                  to-[#5c83aa]
                  opacity-70
                "
              />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[800px]
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
              Keep every document connected to the billing context behind it.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              The information and relationships that make up a billing
              document. Not every field or relationship is supported in every
              market or plan.
            </p>
          </div>

          {/* =========================================================
              MAIN CONTENT
          ========================================================= */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8

              lg:flex-row
              lg:items-start
              lg:gap-10

              xl:gap-12
            "
          >
            {/* =======================================================
                INVOICE / PRODUCT VIEW
            ======================================================= */}
            <div
              className="
                flex
                w-full
                min-w-0
                flex-1
                flex-col
                items-start
                gap-3
              "
            >
              {/* LABEL */}
              <div
                className="
                  flex
                  items-center
                  rounded-full
                  border
                  border-[#d8e9e3]
                  bg-white
                  px-3
                  py-1
                "
              >
                <span className="mr-2 h-[5px] w-[5px] shrink-0 rounded-full bg-[#527f73]" />

                <span
                  className="
                    text-[10px]
                    font-normal
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#527f73]
                  "
                >
                  Illustrative product view
                </span>
              </div>

              {/* INVOICE CARD */}
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
                {/* INVOICE HEADER */}
                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    border-b
                    border-[#dfe5ee]
                    px-5
                    py-5

                    sm:px-6

                    md:flex-row
                    md:items-start
                    md:justify-between
                    md:gap-8
                  "
                >
                  {/* ISSUER / CUSTOMER */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-2">
                      <span
                        className="
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#5c83aa]
                          text-[10px]
                          font-semibold
                          leading-5
                          text-white
                        "
                      >
                        1
                      </span>

                      <div>
                        <p className="!m-0 text-base font-bold leading-6 text-[#091127]">
                          Zoiko Ltd
                        </p>

                        <p className="!m-0 text-sm leading-5 text-[#5d7192]">
                          United Kingdom · VAT GB000000000
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-start gap-2">
                      <span
                        className="
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#5c83aa]
                          text-[10px]
                          font-semibold
                          leading-5
                          text-white
                        "
                      >
                        2
                      </span>

                      <div>
                        <p className="!m-0 text-xs leading-5 text-[#5d7192]">
                          Northlane Consulting Ltd
                        </p>

                        <p className="!m-0 text-xs leading-5 text-[#5d7192]">
                          Billing profile CUS-8Kd21
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* DOCUMENT DETAILS */}
                  <div
                    className="
                      flex
                      flex-col
                      items-start
                      gap-0.5

                      md:items-end
                    "
                  >
                    <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                      Tax invoice
                    </p>

                    <p className="!m-0 text-xs leading-5 text-[#5d7192]">
                      ZB-UK-2026-0418
                    </p>

                    <p className="!m-0 text-xs leading-5 text-[#5d7192]">
                      Series UK-STD · v3
                    </p>
                  </div>
                </div>

                {/* =================================================
                    META
                ================================================= */}
                <div
                  className="
                    grid
                    grid-cols-1
                    border-b
                    border-[#dfe5ee]

                    sm:grid-cols-2

                    lg:grid-cols-4
                  "
                >
                  {invoiceMeta.map(([label, value], index) => (
                    <div
                      key={label}
                      className={`
                        bg-white
                        px-5
                        py-3

                        sm:px-6

                        ${
                          index !== invoiceMeta.length - 1
                            ? "border-b border-[#dfe5ee] lg:border-b-0 lg:border-r"
                            : ""
                        }
                      `}
                    >
                      <p
                        className="
                          !m-0
                          text-[9px]
                          uppercase
                          leading-4
                          tracking-[0.08em]
                          text-[#527f73]
                        "
                      >
                        {label}
                      </p>

                      <p className="!m-0 mt-1 text-sm leading-6 text-[#091127]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* =================================================
                    LINE ITEMS
                ================================================= */}
                <div className="overflow-x-auto">
                  <div className="min-w-[560px]">
                    {/* TABLE HEADER */}
                    <div
                      className="
                        grid
                        grid-cols-[minmax(0,2fr)_64px_120px_120px]
                        border-b
                        border-[#dfe5ee]
                        bg-[#fafbfc]
                      "
                    >
                      {["Line", "Qty", "Unit", "Amount"].map((heading) => (
                        <div
                          key={heading}
                          className="
                            px-3.5
                            py-2.5
                            text-[10px]
                            font-bold
                            uppercase
                            leading-4
                            tracking-[0.08em]
                            text-[#7890b2]
                          "
                        >
                          {heading}
                        </div>
                      ))}
                    </div>

                    {/* TABLE ROWS */}
                    {invoiceLines.map((line, index) => (
                      <div
                        key={line.description}
                        className={`
                          grid
                          grid-cols-[minmax(0,2fr)_64px_120px_120px]
                          ${
                            index !== invoiceLines.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        <div className="px-3.5 py-3 text-sm leading-5 text-[#091127]">
                          {line.description}
                        </div>

                        <div className="px-3.5 py-3 text-right text-sm leading-5 text-[#5d7192]">
                          {line.qty}
                        </div>

                        <div className="px-3.5 py-3 text-right text-sm leading-5 text-[#5d7192]">
                          {line.unit}
                        </div>

                        <div className="px-3.5 py-3 text-right text-sm leading-5 text-[#091127]">
                          {line.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    TOTALS
                ================================================= */}
                <div className="border-t border-[#dfe5ee] bg-[#fafbfc] px-5 py-4 sm:px-6">
                  {invoiceTotals.map(([label, value]) => (
                    <div
                      key={label}
                      className="
                        flex
                        items-start
                        justify-between
                        gap-6
                      "
                    >
                      <p className="!m-0 text-sm leading-6 text-[#5d7192]">
                        {label}
                      </p>

                      <p className="!m-0 shrink-0 text-sm leading-6 text-[#091127]">
                        {value}
                      </p>
                    </div>
                  ))}

                  <div
                    className="
                      mt-2
                      flex
                      items-start
                      justify-between
                      gap-6
                      border-t-2
                      border-[#091127]
                      pt-2
                    "
                  >
                    <p className="!m-0 text-base font-semibold leading-6 text-[#091127]">
                      Remaining balance
                    </p>

                    <p className="!m-0 shrink-0 text-base font-semibold leading-6 text-[#091127]">
                      £3,952.00
                    </p>
                  </div>
                </div>

                {/* =================================================
                    RELATIONSHIPS
                ================================================= */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    border-t
                    border-[#dfe5ee]
                    px-5
                    py-4

                    sm:px-6
                  "
                >
                  {[
                    "Source: billing schedule",
                    "Owner: j.okafor",
                    "Approved: a.mensah",
                    "Credit note CN-0061",
                    "Delivery record",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-[#dfe5ee]
                        bg-[#f7f8fa]
                        px-2.5
                        py-1.5
                        text-[10px]
                        leading-4
                        text-[#5d7192]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* =======================================================
                ANATOMY LIST
            ======================================================= */}
            <div
              className="
                w-full
                shrink-0

                lg:max-w-[390px]
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.03)]
                "
              >
                {/* HEADER */}
                <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-3.5">
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
                    Document fields
                  </span>
                </div>

                {/* ITEMS */}
                <div className="px-5">
                  {anatomyItems.map((item, index) => (
                    <div
                      key={item.number}
                      className={`
                        flex
                        items-start
                        gap-3
                        py-4

                        sm:py-4.5

                        ${
                          index !== anatomyItems.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      {/* NUMBER */}
                      <div
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-gradient-to-br
                          from-[#27c7d9]
                          to-[#5c83aa]
                        "
                      >
                        <span className="text-[9px] font-semibold leading-4 text-white">
                          {item.number}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="min-w-0 flex-1">
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
                            mt-1
                            text-sm
                            font-normal
                            leading-6
                            text-[#5d7192]
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              FIELD BOUNDARY
          ========================================================= */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#5c83aa]
              bg-[#eef1f4]
              px-5
              py-7

              sm:px-6
              sm:py-8
            "
          >
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#5c83aa]
              "
            >
              Field boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                w-full
                max-w-[850px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Displayed fields describe configured billing context. They do
              not constitute tax or legal advice, and not every field or
              relationship is available in every market or plan.
            </p>
          </div>

          {/* =========================================================
              CTA
          ========================================================= */}
          <div className="flex w-full items-center justify-center">
            <Link
              href="charges-and-adjustments"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2
                text-base
                font-normal
                leading-6
                !text-white
                no-underline
                transition-opacity
                hover:opacity-90

                max-sm:w-full
              "
            >
              Explore Charges &amp; Adjustments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}