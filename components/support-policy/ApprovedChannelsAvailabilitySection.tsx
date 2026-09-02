interface ChannelContractRow {
  field: string;
  value: React.ReactNode;
}

const channelContractRows: ChannelContractRow[] = [
  {
    field: "Which channels",
    value: (
      <>
        Only those <span className="font-bold text-slate-900">currently approved and available for the stated context</span>
      </>
    ),
  },
  {
    field: "Eligibility",
    value: "May depend on plan, region, language, issue type or contract — resolved, not assumed",
  },
  {
    field: "Availability",
    value: (
      <>
        A runtime value; <span className="font-bold text-slate-900">no static promise written into policy copy</span>
      </>
    ),
  },
  {
    field: "Accessibility",
    value: "An accessible alternative or accommodation path where required",
  },
  {
    field: "Unavailable channel",
    value: (
      <>
        Another eligible route shown <span className="font-bold text-slate-900">without implying service failure</span>
      </>
    ),
  },
  {
    field: "Not offered",
    value: (
      <>
        A channel the registry does not define <span className="font-bold text-slate-900">is simply absent</span> — not grayed out, not &quot;coming soon&quot;
      </>
    ),
  },
];

interface AvailabilityContractRow {
  field: string;
  value: React.ReactNode;
}

const availabilityContractRows: AvailabilityContractRow[] = [
  {
    field: "Hours",
    value: (
      <>
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          [approved_value]
        </span>{" "}
        — omitted if not approved
      </>
    ),
  },
  {
    field: "Timezone",
    value: <span className="font-bold text-slate-900">Always stated where hours are published</span>,
  },
  {
    field: "Calendar basis",
    value: "Business days or elapsed time, stated explicitly",
  },
  {
    field: "Holidays",
    value: (
      <>
        Approved treatment only; <span className="font-bold text-slate-900">never inferred from a region</span>
      </>
    ),
  },
  {
    field: "Regional variation",
    value: "Shown only where the source defines it per region",
  },
  {
    field: "Out-of-hours",
    value: "What happens to a request received outside hours, if approved",
  },
];

export default function ApprovedChannelsAvailabilitySection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="channels-availability">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          APPROVED CHANNELS &amp; AVAILABILITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          A channel appears only if it exists and applies to you.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Availability is a runtime value from the authoritative support system, not a sentence written
          into policy text.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:grid)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid mt-14 w-full max-w-[1240px] grid-cols-2 gap-8 text-left items-start">
          
          {/* Left Table: Channel contract */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Channel contract.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[320px]">
                <tbody className="divide-y divide-slate-100">
                  {channelContractRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3.5 px-6 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3.5 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Table: Availability contract */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Availability contract.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[320px]">
                <tbody className="divide-y divide-slate-100">
                  {availabilityContractRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3.5 px-6 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3.5 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788177889948.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left space-y-6">
          
          {/* Card 1: Channel contract */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Channel contract.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {channelContractRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 2: Availability contract */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Availability contract.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {availabilityContractRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Red Operating Hours Callout Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-red-900">Operating hours without a timezone are not a commitment.</span> &quot;9 to 5&quot; describes nothing a customer in another region can rely on, and it is the single most common way a support policy becomes unenforceable. Where hours publish, the timezone and calendar basis publish with them.
          </div>

        </div>

      </div>
    </section>
  );
}
