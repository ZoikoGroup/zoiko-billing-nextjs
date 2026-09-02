interface TimeRuleRow {
  rule: string;
  requirement: React.ReactNode;
}

const timeRuleRows: TimeRuleRow[] = [
  {
    rule: "Canonical storage",
    requirement: "A zone-aware authoritative timestamp from the approved event source",
  },
  {
    rule: "Public display",
    requirement: (
      <>
        Always date plus time plus time-zone label.{" "}
        <span className="font-bold text-slate-900">
          Never only &quot;tomorrow&quot;, &quot;this afternoon&quot; or &quot;10 AM&quot;
        </span>
      </>
    ),
  },
  {
    rule: "Localized display",
    requirement: "Attendee local time may supplement the source time, clearly labeled as local",
  },
  {
    rule: "Daylight saving",
    requirement: (
      <>
        <span className="font-bold text-slate-900">
          Do not calculate manually in CMS text
        </span>{" "}
        — rely on time-zone-aware rendering
      </>
    ),
  },
  {
    rule: "All-day & multi-day",
    requirement: "Explicit date range and daily schedule behavior; no assumptions",
  },
  {
    rule: "Change",
    requirement: "Any schedule change updates the last-changed timestamp and triggers a rescheduled treatment",
  },
  {
    rule: "Post transition",
    requirement: (
      <>
        At event end the state transitions through the approved workflow —{" "}
        <span className="font-bold text-slate-900">
          do not instantly promise a recording
        </span>
      </>
    ),
  },
];

export default function DateTimeZoneContractSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="time-zone-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DATE, TIME &amp; TIME-ZONE CONTRACT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Never display only &quot;10 AM.&quot;
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Seven rules, because an event page is read from time zones its author never considered.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    RULE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {timeRuleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.rule}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requirement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
