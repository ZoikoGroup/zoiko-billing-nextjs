interface PrivacyRuleRow {
  area: string;
  requiredRule: string;
}

const privacyRuleRows: PrivacyRuleRow[] = [
  {
    area: "Purpose",
    requiredRule:
      "Billing, service, sales and marketing purposes stay explicit — synchronization does not expand purpose",
  },
  {
    area: "Marketing consent",
    requiredRule:
      "Separate, optional and source-specific. A billing relationship or invoice delivery is not consent",
  },
  {
    area: "Contact roles",
    requiredRule:
      "Billing, delivery, finance, admin, sales and marketing contact roles remain distinct",
  },
  {
    area: "Data minimization",
    requiredRule:
      "Only fields needed for the defined use case cross systems",
  },
  {
    area: "Sensitive data",
    requiredRule:
      "Tax IDs, payment and bank data, dispute text and restricted notes are not exported unless purpose and authority require it",
  },
  {
    area: "Profiling",
    requiredRule:
      "No hidden customer-value, payment-propensity, churn, renewal, fraud, sentiment, urgency or willingness-to-pay scoring from billing data",
  },
  {
    area: "Lead scoring",
    requiredRule:
      "Outside the integration contract unless separately governed — no automatic scoring from overdue behavior",
  },
  {
    area: "Sales routing",
    requiredRule:
      "May use declared owner and workflow state; no sensitive inference",
  },
  {
    area: "Analytics",
    requiredRule:
      "CRM operational events stay separate from website analytics and marketing audiences",
  },
  {
    area: "Retention & deletion",
    requiredRule:
      "Downstream copies follow governed responsibility; no promise that every external CRM copy shares the Billing lifecycle",
  },
];

export default function PrivacyConsentMarketingProfilingSection() {
  return (
    <section
      id="privacy-consent"
      className="w-full bg-[#f7f8fa]"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[820px]
              flex-col
              items-center
              gap-3
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
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Privacy, Consent, Marketing &amp; Profiling Boundaries
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              Billing operations must not become an invisible sales ranking
              system.
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
              Synchronization moves data. It does not expand the purpose that
              data was collected for.
            </p>
          </div>

          {/* PRIVACY RULES CARD */}
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
                border-[#edf0f4]
                bg-[#fafbfc]
                px-5
                py-3.5
                text-sm
                leading-6
                text-[#5d7192]
              "
            >
              Ten privacy areas and their required rule.
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[280px_minmax(0,1fr)]">
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Area
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Required Rule
                  </span>
                </div>
              </div>

              {privacyRuleRows.map((row, index) => (
                <div
                  key={row.area}
                  className={`grid grid-cols-[280px_minmax(0,1fr)] ${
                    index !== privacyRuleRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.area}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span
                      className={`text-sm leading-6 ${
                        row.area === "Marketing consent"
                          ? "font-semibold text-[#091127]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {row.requiredRule}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {privacyRuleRows.map((row, index) => (
                <div
                  key={row.area}
                  className={`p-5 ${
                    index !== privacyRuleRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Area
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.area}
                  </p>

                  <p className="!m-0 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Required Rule
                  </p>

                  <p
                    className={`!m-0 mt-1.5 text-sm leading-6 ${
                      row.area === "Marketing consent"
                        ? "font-semibold text-[#091127]"
                        : "text-[#5d7192]"
                    }`}
                  >
                    {row.requiredRule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SCOPE CALLOUT */}
          <div
            className="
              w-full
              max-w-[1240px]
              rounded-xl
              border
              border-red-200/80
              bg-red-50/70
              px-5
              py-4
              text-sm
              leading-6
              text-red-950
            "
          >
            <span className="font-bold text-red-900">
              Any advanced scoring or AI model is out of scope here.
            </span>{" "}
            It would require separate intended-use, data, governance, privacy
            and human-decision controls before it could exist at all.
          </div>
        </div>
      </div>
    </section>
  );
}