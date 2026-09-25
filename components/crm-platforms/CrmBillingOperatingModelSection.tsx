interface OperatingModelRow {
  layer: string;
  role: string;
  authorityBoundary: string;
}

const operatingModelRows: OperatingModelRow[] = [
  {
    layer: "CRM platform",
    role: "Customer relationship and pipeline context per its own configuration.",
    authorityBoundary: "Not financial authority by default",
  },
  {
    layer: "Customer Records",
    role: "Billing account, purpose-specific contacts, billing profile, history and controls.",
    authorityBoundary:
      "Billing-record authority unless a field mapping explicitly delegates",
  },
  {
    layer: "Sales / commercial context",
    role: "Opportunity, deal, quote and order metadata if registered.",
    authorityBoundary:
      "Input only — does not auto-create binding billing terms",
  },
  {
    layer: "Billing objects",
    role: "Invoices, credits, charges, schedules and AR status where approved.",
    authorityBoundary: "The owning Billing domain remains authoritative",
  },
  {
    layer: "Integration layer",
    role: "Maps IDs, fields, actions, direction, transforms, versions and events.",
    authorityBoundary: "Does not create business authority",
  },
  {
    layer: "Identity & permissions",
    role: "CRM user, group and owner context may be mapped for routing.",
    authorityBoundary: "Does not grant Billing permissions by default",
  },
  {
    layer: "Consent & purpose",
    role: "Marketing, sales, service and billing purposes remain distinct.",
    authorityBoundary: "No purpose expansion from synchronization",
  },
  {
    layer: "Evidence",
    role: "External IDs, source, versions, events, conflicts, effective dates and currentness.",
    authorityBoundary: "Supports explainability and recovery",
  },
];

export default function CrmBillingOperatingModelSection() {
  return (
    <section
      id="operating-model"
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
                  tracking-[0.16em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                CRM-Billing Integration Operating Model
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
              There is no single-master shortcut.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[700px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              The same customer may carry CRM-owned sales fields,
              Billing-owned financial fields, external identity fields and
              controlled tax fields simultaneously.
            </p>
          </div>

          {/* OPERATING MODEL TABLE */}
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
            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Layer
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Role
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Authority Boundary
                  </span>
                </div>
              </div>

              {operatingModelRows.map((row, index) => (
                <div
                  key={row.layer}
                  className={`grid grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)] ${
                    index !== operatingModelRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.layer}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span className="text-sm leading-6 text-[#5d7192]">
                      {row.role}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span
                      className={`text-sm leading-6 ${
                        row.layer === "CRM platform"
                          ? "font-semibold text-[#091127]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {row.authorityBoundary}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {operatingModelRows.map((row, index) => (
                <div
                  key={row.layer}
                  className={`p-5 ${
                    index !== operatingModelRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Layer
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.layer}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Role
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.role}
                    </p>
                  </div>

                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Authority Boundary
                    </p>

                    <p
                      className={`!m-0 mt-1.5 text-sm leading-6 ${
                        row.layer === "CRM platform"
                          ? "font-semibold text-[#091127]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {row.authorityBoundary}
                    </p>
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