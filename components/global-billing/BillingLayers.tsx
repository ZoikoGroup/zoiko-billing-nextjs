const layers = [
  {
    number: "01",
    title: "Jurisdiction",
    description:
      "Where a capability may be offered, and under what current status.",
    authority: "Jurisdiction Availability registry",
    note: "— never inferred from visitor IP",
  },
  {
    number: "02",
    title: "Billing entity",
    description:
      "Which organization or entity issues or owns defined billing activity.",
    authority: "Multi-Entity configuration",
    note: "— not corporate-law proof",
  },
  {
    number: "03",
    title: "Customer & account context",
    description:
      "Which customer record and billing profile applies.",
    authority: "Customer Records",
    note: "— no CRM master-data overclaim",
  },
  {
    number: "04",
    title: "Currency context",
    description:
      "What currency applies to configured billing, document and payment contexts.",
    authority: "Multi-Currency",
    note: "— not automatic FX or settlement",
  },
  {
    number: "05",
    title: "Document locale",
    description:
      "Which approved language, format and template applies.",
    authority: "Localized Documents + language registry",
    note: "",
  },
  {
    number: "06",
    title: "Entity control",
    description:
      "Who can view, change or approve within entity and action scope.",
    authority: "Entity-Level Controls + Roles & Approvals",
    note: "",
  },
  {
    number: "07",
    title: "Provider & integration",
    description:
      "Which external provider or system participates in the workflow.",
    authority: "Integration and provider registry",
    note: "— status-dependent",
  },
  {
    number: "08",
    title: "Evidence",
    description:
      "What configuration, version and source was effective when an action occurred.",
    authority: "Audit and change records",
    note: "",
  },
];

export default function BillingLayers() {
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
          {/* ================= SECTION INTRO ================= */}
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
                Global billing operating model
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
              Eight layers, resolved in order.
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
              Jurisdiction, then entity, then customer, then currency, then
              document locale, then provider, then evidence. Country never
              silently infers currency, tax, language, provider, hosting,
              support or commercial terms.
            </p>
          </div>

          {/* ================= LAYER CARDS ================= */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {layers.map((layer) => (
              <div
                key={layer.number}
                className="
                  flex
                  min-h-[250px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-4
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* LAYER NUMBER */}
                <div
                  className="
                    text-xs
                    font-extrabold
                    leading-4
                    tracking-wide
                    text-blue-600
                  "
                >
                  LAYER {layer.number}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    pt-1
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {layer.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    pb-5
                    pt-1
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {layer.description}
                </p>

                {/* AUTHORITY */}
                <div
                  className="
                    mt-auto
                    border-t
                    border-[#edf0f4]
                    pt-2.5
                    text-xs
                    leading-5
                  "
                >
                  <span className="font-normal text-[#7890b2]">
                    Authority:{" "}
                  </span>

                  <span className="font-semibold text-[#091127]">
                    {layer.authority}
                  </span>

                  {layer.note && (
                    <span className="font-normal text-[#7890b2]">
                      {" "}
                      {layer.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}