interface CrmFilterRow {
  filter: string;
  requiredBehavior: string;
}

const crmFilterRows: CrmFilterRow[] = [
  {
    filter: "CRM / provider",
    requiredBehavior:
      "Canonical registry-backed name and approved aliases",
  },
  {
    filter: "Object",
    requiredBehavior:
      "Account or customer, contact, opportunity or deal, quote reference, invoice status summary or approved object",
  },
  {
    filter: "Action",
    requiredBehavior:
      "Create, read, update, link, status update, event, or import and export where registered",
  },
  {
    filter: "Direction",
    requiredBehavior:
      "CRM to Billing, Billing to CRM, bidirectional only for the exact action, event-only, or reference-only",
  },
  {
    filter: "Authentication",
    requiredBehavior:
      "Registered OAuth, API, service, file or webhook method",
  },
  {
    filter: "Region & plan",
    requiredBehavior: "Current integration applicability",
  },
  {
    filter: "Availability",
    requiredBehavior:
      "Available, Limited, Partner-supported, Planned only where publication is approved",
  },
  {
    filter: "Operational status",
    requiredBehavior:
      "Normal, degraded, incident, maintenance, unavailable or stale",
  },
  {
    filter: "Lifecycle",
    requiredBehavior:
      "Current, deprecated, sunset, withdrawn or replaced",
  },
  {
    filter: "Certification / review",
    requiredBehavior:
      "Named current evidence only; otherwise Not published",
  },
  {
    filter: "Last verified",
    requiredBehavior:
      "Current verification date — a stale record cannot remain silently positive",
  },
];

export default function FindCrmConnectionsSection() {
  return (
    <section
      id="crm-catalog"
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
              max-w-[760px]
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
                  tracking-[0.15em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Find CRM Connections &amp; Check Availability
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
              Eleven filters, all registry-backed.
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
              A CRM appears in this category only with a governed current
              integration record.
            </p>
          </div>

          {/* FILTER CARD */}
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
              Discovery filters and required behavior.
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[280px_minmax(0,1fr)]">
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Filter
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Required Behavior
                  </span>
                </div>
              </div>

              {crmFilterRows.map((row, index) => (
                <div
                  key={row.filter}
                  className={`grid grid-cols-[280px_minmax(0,1fr)] ${
                    index !== crmFilterRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.filter}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span className="text-sm leading-6 text-[#5d7192]">
                      {row.requiredBehavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {crmFilterRows.map((row, index) => (
                <div
                  key={row.filter}
                  className={`p-5 ${
                    index !== crmFilterRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Filter
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.filter}
                  </p>

                  <p className="!m-0 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Required Behavior
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {row.requiredBehavior}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DIRECTORY DISCIPLINE */}
          <div
            className="
              w-full
              rounded-xl
              border
              border-amber-200/80
              bg-amber-50/70
              px-4
              py-3.5
              text-sm
              leading-6
              text-amber-950
            "
          >
            <span className="font-bold text-amber-900">
              Directory discipline.
            </span>{" "}
            A proposal, sales request, prototype, private script, roadmap
            item or customer-specific custom work does not equal public
            support.
          </div>
        </div>
      </div>
    </section>
  );
}