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
    <section className="w-full bg-[#F7F8FA]">
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
          lg:py-20
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
          "
        >
          {/* Header */}
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
            {/* Left */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2
                lg:pb-5
              "
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27C7D9]
                    to-[#5C83AA]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#5C83AA]
                    sm:text-xs
                  "
                >
                  Document anatomy
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  !m-0
                  w-full
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
                Keep every document connected to the billing context behind
                it.
              </h2>
            </div>

            {/* Right Description */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5D7192]
                  sm:text-base
                  sm:leading-8
                "
              >
                The information and relationships that make up a billing
                document. Not every field or relationship is supported in
                every market or plan.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-10
              pt-3
              lg:flex-row
              lg:gap-12
              xl:gap-16
            "
          >
            {/* Left: Illustrative Product View */}
            <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-3">
              {/* Label */}
              <div
                className="
                  flex
                  items-center
                  rounded-full
                  border
                  border-[#D8E9E3]
                  bg-white/70
                  px-3
                  py-1
                "
              >
                <span className="mr-2 h-[5px] w-[5px] shrink-0 rounded-full bg-[#527F73]" />

                <span
                  className="
                    text-[10px]
                    font-normal
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#527F73]
                  "
                >
                  Illustrative product view
                </span>
              </div>

              {/* Invoice Card */}
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#DFE5EE]
                  bg-white
                  shadow-[0_22px_50px_-20px_rgba(14,33,27,0.24),0_2px_6px_rgba(14,33,27,0.06)]
                "
              >
                {/* Invoice Header */}
                <div
                  className="
                    flex
                    flex-col
                    gap-6
                    border-b
                    border-[#DFE5EE]
                    px-5
                    py-5
                    sm:px-6
                    md:flex-row
                    md:justify-between
                    md:gap-8
                  "
                >
                  {/* Issuer / Customer */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5C83AA] text-[10px] font-semibold leading-5 text-white">
                        1
                      </span>

                      <div>
                        <p className="!m-0 text-base font-bold leading-7 text-[#091127]">
                          Zoiko Ltd
                        </p>

                        <p className="!m-0 text-sm leading-5 text-[#5D7192]">
                          United Kingdom · VAT GB000000000
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5C83AA] text-[10px] font-semibold leading-5 text-white">
                        2
                      </span>

                      <div>
                        <p className="!m-0 text-xs leading-5 text-[#5D7192]">
                          Northlane Consulting Ltd
                        </p>

                        <p className="!m-0 text-xs leading-5 text-[#5D7192]">
                          Billing profile CUS-8Kd21
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Document Details */}
                  <div
                    className="
                      flex
                      flex-col
                      items-start
                      gap-1
                      md:items-end
                    "
                  >
                    <p className="!m-0 text-xs font-semibold leading-5 text-[#091127]">
                      Tax invoice
                    </p>

                    <p className="!m-0 text-xs leading-5 text-[#5D7192]">
                      ZB-UK-2026-0418
                    </p>

                    <p className="!m-0 text-xs leading-5 text-[#5D7192]">
                      Series UK-STD · v3
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div
                  className="
                    grid
                    grid-cols-1
                    border-b
                    border-[#DFE5EE]
                    sm:grid-cols-2
                    lg:grid-cols-4
                  "
                >
                  {invoiceMeta.map(([label, value]) => (
                    <div
                      key={label}
                      className="
                        border-b
                        border-[#DFE5EE]
                        bg-white
                        px-5
                        py-3
                        last:border-b-0
                        sm:px-6
                        lg:border-b-0
                        lg:border-r
                        lg:last:border-r-0
                      "
                    >
                      <p
                        className="
                          !m-0
                          text-[9px]
                          uppercase
                          leading-4
                          tracking-[0.08em]
                          text-[#527F73]
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

                {/* Line Items */}
                <div className="overflow-x-auto">
                  <div className="min-w-[560px]">
                    <div className="grid grid-cols-[minmax(0,2fr)_64px_120px_120px] border-b border-[#DFE5EE] bg-[#FAFBFC]">
                      {["Line", "Qty", "Unit", "Amount"].map((heading) => (
                        <div
                          key={heading}
                          className="
                            px-3.5
                            py-2
                            text-[10px]
                            font-medium
                            uppercase
                            leading-4
                            tracking-[0.08em]
                            text-[#527F73]
                          "
                        >
                          {heading}
                        </div>
                      ))}
                    </div>

                    {invoiceLines.map((line) => (
                      <div
                        key={line.description}
                        className="
                          grid
                          grid-cols-[minmax(0,2fr)_64px_120px_120px]
                          border-b
                          border-[#EDF0F4]
                        "
                      >
                        <div className="px-3.5 py-2.5 text-sm leading-5 text-[#091127]">
                          {line.description}
                        </div>

                        <div className="px-3.5 py-2.5 text-right text-xs leading-5 text-[#091127]">
                          {line.qty}
                        </div>

                        <div className="px-3.5 py-2.5 text-right text-xs leading-5 text-[#091127]">
                          {line.unit}
                        </div>

                        <div className="px-3.5 py-2.5 text-right text-xs leading-5 text-[#091127]">
                          {line.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totals */}
                <div className="border-t border-[#DFE5EE] bg-[#FAFBFC] px-5 py-4 sm:px-6">
                  {invoiceTotals.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-6"
                    >
                      <p className="!m-0 text-sm leading-6 text-[#091127]">
                        {label}
                      </p>

                      <p className="!m-0 shrink-0 text-sm leading-6 text-[#091127]">
                        {value}
                      </p>
                    </div>
                  ))}

                  <div className="mt-2 flex items-start justify-between gap-6 border-t-2 border-[#091127] pt-2">
                    <p className="!m-0 text-base leading-6 text-[#091127]">
                      Remaining balance
                    </p>

                    <p className="!m-0 shrink-0 text-base font-semibold leading-6 text-[#091127]">
                      £3,952.00
                    </p>
                  </div>
                </div>

                {/* Relationship Tags */}
                <div className="flex flex-wrap gap-2 border-t border-[#DFE5EE] px-5 py-4 sm:px-6">
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
                        border-[#DFE5EE]
                        bg-[#F7F8FA]
                        px-2.5
                        py-1.5
                        text-[10px]
                        leading-4
                        text-[#5D7192]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Anatomy List */}
            <div className="w-full shrink-0 lg:max-w-[384px]">
              {anatomyItems.map((item, index) => (
                <div
                  key={item.number}
                  className={`
                    relative
                    flex
                    items-start
                    gap-3
                    py-4
                    sm:py-5
                    ${
                      index !== anatomyItems.length - 1
                        ? "border-b border-[#DFE5EE]"
                        : ""
                    }
                  `}
                >
                  {/* Number */}
                  <div
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#5C83AA]
                      text-[10px]
                      font-semibold
                      leading-5
                      text-white
                    "
                  >
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                      {item.title}
                    </h3>

                    <p className="!m-0 text-sm font-normal leading-5 text-[#5D7192]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Field Boundary */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#5C83AA]
              bg-[#F7F8FA]
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
                text-[#5C83AA]
              "
            >
              Field boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[850px]
                text-sm
                font-normal
                leading-6
                text-[#091127]
                sm:text-base
                sm:leading-7
              "
            >
              Displayed fields describe configured billing context. They do
              not constitute tax or legal advice, and not every field or
              relationship is available in every market or plan.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full items-center">
            <Link
              href="#"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-sm
                font-normal
                leading-6
                !text-white
                no-underline
                transition-opacity
                hover:opacity-90
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