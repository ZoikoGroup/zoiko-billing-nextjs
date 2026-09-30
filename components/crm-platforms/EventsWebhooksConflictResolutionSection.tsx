interface ConflictControlRow {
  control: string;
  requiredBehavior: string;
}

const conflictControlRows: ConflictControlRow[] = [
  {
    control: "CRM events",
    requiredBehavior:
      "Verify authenticity; map provider, object, action, version, account and tenant",
  },
  {
    control: "Duplicate events",
    requiredBehavior:
      "Deduplicate by provider event, version or reference",
  },
  {
    control: "Out-of-order events",
    requiredBehavior:
      "Use version where reliable; otherwise fetch and reconcile current source state",
  },
  {
    control: "Batch import / export",
    requiredBehavior:
      "Manifest, object counts, per-record status, partial failure and replay-safety",
  },
  {
    control: "Idempotent create / link",
    requiredBehavior:
      "Stable keys prevent duplicate customer, contact or mapping creation",
  },
  {
    control: "Optimistic concurrency",
    requiredBehavior:
      "Version check on material shared fields; conflict if the source changed since load",
  },
  {
    control: "Unknown outcome",
    requiredBehavior:
      "Reconcile the mapping or object before repeating a create, update or link action",
  },
  {
    control: "Conflict queue",
    requiredBehavior:
      "Object, field, source, versions, current values, authority and recommended resolution",
  },
  {
    control: "Replay",
    requiredBehavior:
      "Safe replay must not duplicate records or overwrite newer authority",
  },
  {
    control: "Dead-letter",
    requiredBehavior:
      "A recoverable exception with owner, safe payload reference and review path",
  },
];

export default function EventsWebhooksConflictResolutionSection() {
  return (
    <section
      id="conflict-resolution"
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

<<<<<<< HEAD
        {/* Heading */}
        <h2 className="mt-3.5 !font-[family-name:var(--font-jakarta)] !text-2xl sm:!text-3xl lg:!text-[36px] xl:!text-[38px] !font-bold !leading-[1.2] !tracking-[-0.02em] text-slate-900 max-w-3xl">
          Conflict first, arrival order never.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-sm sm:text-[15px] font-normal leading-relaxed text-slate-500">
          If CRM and Billing both changed the same mapped field, the system evaluates current
          authority, versions, effective dates and workflow state — not whichever event landed last.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/crm-platforms/crm5.png"
            alt="Conflict first, arrival order never"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787711347845.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Controls and required behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      CONTROL
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      REQUIRED BEHAVIOR
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {conflictControlRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.control}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.requiredBehavior}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
=======
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
                Events, Webhooks, Batches, Idempotency &amp; Conflict Resolution
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
>>>>>>> b0c820b (Update pages and add navigation links)
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
              Conflict first, arrival order never.
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
              If CRM and Billing both changed the same mapped field, the
              system evaluates current authority, versions, effective dates
              and workflow state — not whichever event landed last.
            </p>
          </div>

          {/* CONTROLS CARD */}
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
              Controls and required behavior.
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[280px_minmax(0,1fr)]">
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Control
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Required Behavior
                  </span>
                </div>
              </div>

              {conflictControlRows.map((row, index) => (
                <div
                  key={row.control}
                  className={`grid grid-cols-[280px_minmax(0,1fr)] ${
                    index !== conflictControlRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.control}
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
              {conflictControlRows.map((row, index) => (
                <div
                  key={row.control}
                  className={`p-5 ${
                    index !== conflictControlRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Control
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.control}
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
        </div>
      </div>
    </section>
  );
}