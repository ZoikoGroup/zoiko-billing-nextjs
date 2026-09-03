"use client";

const capabilities = [
  {
    capability: "Core billing & customer records",
    scopedBy: "Entity, plan, jurisdiction, configuration",
    authority: "Customer Records",
  },
  {
    capability: "Invoices & credit notes",
    scopedBy: "Entity, document configuration, currency, jurisdiction",
    authority: "Invoices & Credit Notes",
  },
  {
    capability: "Multi-currency billing",
    scopedBy: "Currency, operation, entity, provider, jurisdiction",
    authority: "Multi-Currency Billing",
  },
  {
    capability: "Multi-entity billing",
    scopedBy: "Entity capability, jurisdiction, commercial state",
    authority: "Multi-Entity Billing",
  },
  {
    capability: "Localized documents",
    scopedBy:
      "Language, locale, surface, template, entity and jurisdiction",
    authority: "Localized Documents",
  },
  {
    capability: "Entity-level controls",
    scopedBy: "Entity capability plus role and action policy",
    authority: "Entity-Level Controls",
  },
  {
    capability: "Payment provider operations",
    scopedBy: "Provider, operation, currency, entity, market",
    authority: "Payments & Reconciliation",
  },
  {
    capability: "Accounting, ERP & CRM integrations",
    scopedBy: "Connector, plan, region and operational state",
    authority: "Integration Availability",
  },
  {
    capability: "Supported languages",
    scopedBy: "Language, surface, current state",
    authority: "Supported Languages",
  },
];

const highlightedAuthorities = new Set([
  "Customer Records",
  "Multi-Currency Billing",
  "Localized Documents",
  "Entity-Level Controls",
]);

export default function CapabilityMatrix() {
  return (
    <section className="w-full bg-white">
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
                Capability availability matrix
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
              Nine capability rows, each with its own authority.
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
              Each cell carries a text status and its limitations. No
              checkmark or color alone conveys meaning, and a selected
              jurisdiction is fully understandable without a map.
            </p>
          </div>

          {/* MATRIX */}
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
                  grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
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
                    Capability
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
                    Scoped by
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
                    Detail authority
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {capabilities.map((item, index) => {
                const isHighlighted = highlightedAuthorities.has(
                  item.authority
                );

                return (
                  <div
                    key={item.capability}
                    className={`
                      grid
                      grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                      ${
                        index !== capabilities.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* CAPABILITY */}
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {item.capability}
                      </span>
                    </div>

                    {/* SCOPED BY */}
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {item.scopedBy}
                      </span>
                    </div>

                    {/* AUTHORITY */}
                    <div className="px-4 py-3.5">
                      <span
                        className={`
                          text-sm
                          leading-5
                          ${
                            isHighlighted
                              ? "font-semibold text-sky-600"
                              : "font-normal text-[#5d7192]"
                          }
                        `}
                      >
                        {item.authority}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {capabilities.map((item, index) => {
                const isHighlighted = highlightedAuthorities.has(
                  item.authority
                );

                return (
                  <div
                    key={item.capability}
                    className={`
                      p-5
                      ${
                        index !== capabilities.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* CAPABILITY */}
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
                        Capability
                      </p>

                      <p
                        className="
                          !m-0
                          mt-1.5
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {item.capability}
                      </p>
                    </div>

                    {/* SCOPED BY */}
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
                        Scoped by
                      </p>

                      <p
                        className="
                          !m-0
                          mt-1.5
                          text-sm
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.scopedBy}
                      </p>
                    </div>

                    {/* AUTHORITY */}
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
                        Detail authority
                      </p>

                      <p
                        className={`
                          !m-0
                          mt-1.5
                          text-sm
                          leading-6
                          ${
                            isHighlighted
                              ? "font-semibold text-sky-600"
                              : "font-normal text-[#5d7192]"
                          }
                        `}
                      >
                        {item.authority}
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