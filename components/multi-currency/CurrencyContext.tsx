"use client";

const contexts = [
  {
    name: "Contract / commercial",
    value: "GBP",
    description:
      "Currency agreed in authoritative commercial terms, where applicable",
    authority:
      "Quote, order or contract system — never inferred from page locale",
  },
  {
    name: "Billing / profile",
    value: "GBP",
    description: "Configured for the customer, account or billing profile",
    authority: "Billing profile plus entity and commercial rules",
  },
  {
    name: "Document / invoice",
    value: "GBP 12,480.00",
    description: "The currency and amount as issued",
    authority: "Issued document record — immutable",
    badge: "Authoritative",
    badgeType: "authoritative",
  },
  {
    name: "Display",
    value: "USD 16,023.41",
    description: "Optional presentation conversion for convenience",
    authority: "Reference-only unless explicitly authorized otherwise",
    badge: "Reference only",
    badgeType: "reference",
  },
  {
    name: "Payment-presented",
    value: "GBP",
    description: "The currency the payer is asked or allowed to pay in",
    authority: "Payment configuration and provider capability",
  },
  {
    name: "Payment-received",
    value: "GBP 12,480.00",
    description: "What the provider or bank reports as received",
    authority: "Payment provider or bank source",
  },
  {
    name: "Settlement",
    value: "USD 15,984.02",
    description: "The currency in which the provider settles funds",
    authority: "Provider, merchant account or bank agreement",
  },
  {
    name: "Accounting / reporting",
    value: "Not configured",
    description: "Reporting or ledger context where integrated",
    authority: "Accounting or ERP authority — not Billing by assumption",
  },
  {
    name: "FX reference",
    value: "GBP/USD",
    description: "Base and quote pair used for rate observation",
    authority: "Rate provider and conversion policy",
  },
];

export default function CurrencyContext() {
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
              max-w-[900px]
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
                Currency context model
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
              One event can legitimately carry several currencies.
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
              The same invoice may have a GBP document currency, a USD
              reference display, payment accepted only in GBP, and settlement
              in a provider currency. Collapsing that into &quot;Currency:
              GBP&quot; is how financial meaning gets lost.
            </p>
          </div>

          {/* CONTEXT CARD */}
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
            {/* CARD HEADER */}
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
              <h3
                className="
                  !m-0
                  text-base
                  font-bold
                  leading-7
                  text-[#091127]

                  sm:text-lg
                "
              >
                Nine contexts on one synthetic transaction
              </h3>

              <p
                className="
                  !m-0
                  mt-1
                  text-xs
                  font-normal
                  leading-5
                  text-[#5d7192]

                  sm:text-sm
                "
              >
                Each context names what it governs and who is authoritative
                for it. A bare currency code is never shown without that.
              </p>
            </div>

            {/* DESKTOP TABLE HEADER */}
            <div
              className="
                hidden
                border-b
                border-[#dfe5ee]
                bg-white
                px-5
                py-3.5

                lg:grid
                lg:grid-cols-[208px_minmax(0,1fr)_220px]
                lg:gap-4
              "
            >
              <div>
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
                  Context
                </span>
              </div>

              <div>
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
                  Value
                </span>
              </div>

              <div className="text-right">
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
                  Authority
                </span>
              </div>
            </div>

            {/* ROWS */}
            <div>
              {contexts.map((context, index) => (
                <div
                  key={context.name}
                  className={`
                    px-5
                    py-4

                    sm:px-6
                    sm:py-5

                    ${
                      index !== contexts.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* DESKTOP */}
                  <div
                    className="
                      hidden
                      lg:grid
                      lg:grid-cols-[208px_minmax(0,1fr)_220px]
                      lg:items-start
                      lg:gap-4
                    "
                  >
                    {/* CONTEXT */}
                    <div className="pt-1">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {context.name}
                      </p>
                    </div>

                    {/* VALUE */}
                    <div className="min-w-0">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-bold
                          leading-6
                          text-[#091127]

                          sm:text-base
                        "
                      >
                        {context.value}
                      </p>

                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <p
                          className="
                            !m-0
                            text-xs
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {context.description}
                        </p>

                        {context.badge && (
                          <span
                            className={`
                              inline-flex
                              shrink-0
                              items-center
                              rounded-md
                              border
                              px-2.5
                              py-1
                              text-xs
                              font-semibold
                              leading-4
                              ${
                                context.badgeType === "authoritative"
                                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                  : "border-orange-200 bg-orange-50 text-orange-700"
                              }
                            `}
                          >
                            {context.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* AUTHORITY */}
                    <div className="text-right">
                      <p
                        className="
                          !m-0
                          text-xs
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {context.authority}
                      </p>
                    </div>
                  </div>

                  {/* MOBILE / TABLET */}
                  <div className="flex flex-col gap-3 lg:hidden">
                    {/* CONTEXT */}
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {context.name}
                    </p>

                    {/* VALUE */}
                    <div>
                      <p
                        className="
                          !m-0
                          text-sm
                          font-bold
                          leading-6
                          text-[#091127]

                          sm:text-base
                        "
                      >
                        {context.value}
                      </p>

                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <p
                          className="
                            !m-0
                            text-xs
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {context.description}
                        </p>

                        {context.badge && (
                          <span
                            className={`
                              inline-flex
                              shrink-0
                              items-center
                              rounded-md
                              border
                              px-2.5
                              py-1
                              text-xs
                              font-semibold
                              leading-4
                              ${
                                context.badgeType === "authoritative"
                                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                  : "border-orange-200 bg-orange-50 text-orange-700"
                              }
                            `}
                          >
                            {context.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* AUTHORITY */}
                    <div className="border-t border-[#edf0f4] pt-3">
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
                        Authority
                      </p>

                      <p
                        className="
                          !m-0
                          mt-1
                          text-xs
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {context.authority}
                      </p>
                    </div>
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