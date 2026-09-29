interface ObjectClassRow {
  objectClass: string;
  potentialActions: string;
  boundary: string;
}

const objectClassRows: ObjectClassRow[] = [
  {
    objectClass: "Account / customer",
    potentialActions:
      "Create, link, read or update selected fields; lifecycle and reference mapping.",
    boundary: "Customer Records authority remains field-specific",
  },
  {
    objectClass: "Contact",
    potentialActions:
      "Create, link, read or update approved purpose-specific contact fields.",
    boundary:
      "Marketing, billing, delivery and finance contact purposes are not collapsed",
  },
  {
    objectClass: "Opportunity / deal",
    potentialActions:
      "Read or import selected commercial context; status references.",
    boundary: "Does not create an invoice or terms automatically",
  },
  {
    objectClass: "Quote / order reference",
    potentialActions:
      "Link, read or import approved references where the architecture supports it.",
    boundary:
      "Not a binding contract or price source unless separately authorized",
  },
  {
    objectClass: "Product / service reference",
    potentialActions:
      "Map external SKU or service references if registered.",
    boundary:
      "Does not create product catalog capability by implication",
  },
  {
    objectClass: "Invoice / document summary",
    potentialActions:
      "Outbound link, status or amount summary only where approved.",
    boundary: "CRM is not the document system of record",
  },
  {
    objectClass: "AR / outstanding summary",
    potentialActions:
      "Outbound high-level status only if purpose and permission allow.",
    boundary: "No sensitive collections detail exposed by default",
  },
  {
    objectClass: "Payment status summary",
    potentialActions:
      "Minimal paid, unpaid or partial state only if approved.",
    boundary: "Provider and payment details stay in Billing",
  },
  {
    objectClass: "Activity / event",
    potentialActions:
      "Created, updated, issued, paid or closed events where registered.",
    boundary: "Event receipt is not business-finality proof",
  },
];

export default function SupportedObjectsActionsDirectionSection() {
  return (
    <section
      id="objects-direction"
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
                Supported Objects, Actions &amp; Direction
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
              Importing accounts and exporting invoice status is not two-way
              customer sync.
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
              Nine object classes, each declaring its direction in words
              rather than as an unlabeled arrow.
            </p>
          </div>

          {/* OBJECT CLASSES CARD */}
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
              Object classes, registered actions and boundaries.
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-[240px_minmax(0,1.4fr)_minmax(220px,1fr)]">
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Object Class
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Potential Registered Actions
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Boundary
                  </span>
                </div>
              </div>

              {objectClassRows.map((row, index) => (
                <div
                  key={row.objectClass}
                  className={`grid grid-cols-[240px_minmax(0,1.4fr)_minmax(220px,1fr)] ${
                    index !== objectClassRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.objectClass}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span className="text-sm leading-6 text-[#5d7192]">
                      {row.potentialActions}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span
                      className={`text-sm leading-6 ${
                        row.objectClass === "Contact"
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

            {/* TABLET + MOBILE */}
            <div className="flex flex-col lg:hidden">
              {objectClassRows.map((row, index) => (
                <div
                  key={row.objectClass}
                  className={`p-5 ${
                    index !== objectClassRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Object Class
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.objectClass}
                  </p>

                  <p className="!m-0 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Potential Registered Actions
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {row.potentialActions}
                  </p>

                  <p className="!m-0 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Boundary
                  </p>

                  <p
                    className={`!m-0 mt-1.5 text-sm leading-6 ${
                      row.objectClass === "Contact"
                        ? "font-semibold text-[#091127]"
                        : "text-[#5d7192]"
                    }`}
                  >
                    {row.boundary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}