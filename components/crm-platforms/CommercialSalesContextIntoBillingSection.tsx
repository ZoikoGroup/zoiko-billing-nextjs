interface CommercialContextRow {
  crmContext: string;
  allowedRole: string;
  boundary: string;
}

const commercialContextRows: CommercialContextRow[] = [
  {
    crmContext: "Opportunity / deal ID",
    allowedRole:
      "Reference and declared commercial context if supported.",
    boundary: "Not a binding billing authorization",
  },
  {
    crmContext: "Deal stage / status",
    allowedRole:
      "Read-only context for readiness or routing where approved.",
    boundary:
      "Closed Won does not automatically create an invoice or contract",
  },
  {
    crmContext: "Quote / order reference",
    allowedRole:
      "Import or reference only where a defined handoff exists.",
    boundary: "Price and terms authority must be named",
  },
  {
    crmContext: "Product / service lines",
    allowedRole:
      "Map only through approved SKU or service mapping.",
    boundary:
      "No product catalog, usage or subscription capability implied",
  },
  {
    crmContext: "Commercial owner",
    allowedRole: "Routing and context only.",
    boundary: "Does not grant Billing permissions",
  },
  {
    crmContext: "Expected start date",
    allowedRole:
      "A potential schedule input only after Billing validation.",
    boundary:
      "Billing is never scheduled from an unapproved sales date",
  },
  {
    crmContext: "Currency / terms",
    allowedRole:
      "May be proposed context; Billing and contract authority validates first.",
    boundary:
      "A CRM field does not override Multi-Currency or profile rules",
  },
  {
    crmContext: "PO / customer metadata",
    allowedRole:
      "May populate a mapped field if authority and validation permit.",
    boundary: "No blind import of free text or secrets",
  },
];

export default function CommercialSalesContextIntoBillingSection() {
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
              max-w-[700px]
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
                Commercial &amp; Sales Context Into Billing
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
              Closed Won is a sales stage, not a billing authorization.
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
              CRM context can prefill or propose billing setup only when the
              receiving workflow validates entity, customer relationship,
              billing profile, currency, terms, approvals, availability and
              required authoritative fields.
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
            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[220px_minmax(0,1.05fr)_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    CRM Context
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Allowed Role in Billing
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Boundary
                  </span>
                </div>
              </div>

              {commercialContextRows.map((row, index) => (
                <div
                  key={row.crmContext}
                  className={`grid grid-cols-[220px_minmax(0,1.05fr)_minmax(0,1fr)] ${
                    index !== commercialContextRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.crmContext}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm leading-5 text-[#5d7192]">
                      {row.allowedRole}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span
                      className={`text-sm leading-5 ${
                        row.crmContext === "Deal stage / status"
                          ? "font-semibold text-[#091127]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {row.boundary}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {commercialContextRows.map((row, index) => (
                <div
                  key={row.crmContext}
                  className={`p-5 ${
                    index !== commercialContextRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      CRM Context
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold text-[#091127]">
                      {row.crmContext}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Allowed Role in Billing
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.allowedRole}
                    </p>
                  </div>

                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Boundary
                    </p>

                    <p
                      className={`!m-0 mt-1.5 text-sm leading-6 ${
                        row.crmContext === "Deal stage / status"
                          ? "font-semibold text-[#091127]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {row.boundary}
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