interface CrmLifecycleRow {
  crmEvent: string;
  billingTreatment: string;
}

const crmLifecycleRows: CrmLifecycleRow[] = [
  {
    crmEvent: "Account created",
    billingTreatment:
      "May create or link a Billing draft or reference only if configured and validated",
  },
  {
    crmEvent: "Account updated",
    billingTreatment:
      "Apply only mapped fields according to field authority and version",
  },
  {
    crmEvent: "Account closed or lost",
    billingTreatment:
      "Does not automatically close the Billing account — creates context or review per mapping",
  },
  {
    crmEvent: "Account reactivated",
    billingTreatment:
      "Does not automatically reactivate the Billing account",
  },
  {
    crmEvent: "Account merged",
    billingTreatment:
      "Review and remap external IDs; Billing customer records are not silently merged",
  },
  {
    crmEvent: "Account deleted",
    billingTreatment:
      "Unlink, restrict or reference per Billing retention — no automatic financial-record deletion",
  },
  {
    crmEvent: "Parent changed",
    billingTreatment:
      "Relationship mapping review; no automatic permission, balance or tax inheritance",
  },
  {
    crmEvent: "Contact removed",
    billingTreatment:
      "Update the mapped relation only if purpose and retention allow; issued-document evidence remains",
  },
  {
    crmEvent: "Opportunity closed",
    billingTreatment:
      "A sales context update only; no automatic financial finality",
  },
  {
    crmEvent: "Billing customer archived",
    billingTreatment:
      "Outbound CRM status may update if configured; the CRM record can remain for sales purposes",
  },
];

export default function LifecycleCreateUpdateCloseMergeSection() {
  return (
    <section
      id="lifecycle-events"
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
              max-w-[800px]
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
                Lifecycle: Create, Update, Close, Merge, Delete &amp; Reparent
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
              One system&apos;s close state is not authoritative everywhere.
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
              Sales lifecycle, CRM data lifecycle and financial-record
              lifecycle are different things. Integration coordinates them
              without pretending otherwise.
            </p>
          </div>

          {/* LIFECYCLE CARD */}
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
              <div className="grid grid-cols-[280px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    CRM Event
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Billing Treatment
                  </span>
                </div>
              </div>

              {crmLifecycleRows.map((row, index) => (
                <div
                  key={row.crmEvent}
                  className={`grid grid-cols-[280px_minmax(0,1fr)] ${
                    index !== crmLifecycleRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.crmEvent}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span
                      className={`text-sm leading-6 ${
                        row.crmEvent === "Account closed or lost" ||
                        row.crmEvent === "Account deleted"
                          ? "font-semibold text-[#091127]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {row.billingTreatment}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {crmLifecycleRows.map((row, index) => (
                <div
                  key={row.crmEvent}
                  className={`p-5 ${
                    index !== crmLifecycleRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    CRM Event
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.crmEvent}
                  </p>

                  <p className="!m-0 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Billing Treatment
                  </p>

                  <p
                    className={`!m-0 mt-1.5 text-sm leading-6 ${
                      row.crmEvent === "Account closed or lost" ||
                      row.crmEvent === "Account deleted"
                        ? "font-semibold text-[#091127]"
                        : "text-[#5d7192]"
                    }`}
                  >
                    {row.billingTreatment}
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