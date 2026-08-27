interface CapabilityRuleRow {
  capability: string;
  rule: React.ReactNode;
}

interface AdminEventRow {
  event: string;
  evidence: React.ReactNode;
}

const capabilityRuleRows: CapabilityRuleRow[] = [
  {
    capability: "View subscriptions",
    rule: "Role-based, masking sensitive destination and verification metadata",
  },
  {
    capability: "Create / update",
    rule: "Explicit permission, with owner and environment context required",
  },
  {
    capability: "Change event selection",
    rule: "Permissioned, impact-aware and audit recorded",
  },
  {
    capability: "Rotate verification material",
    rule: "Security-sensitive permission, separate from basic read",
  },
  {
    capability: "Send test / replay",
    rule: (
      <>
        Permissioned{" "}
        <span className="font-bold text-slate-900">
          because of external side effects
        </span>
      </>
    ),
  },
  {
    capability: "Pause / disable / delete",
    rule: "High-impact confirmation, reason if required, and audit",
  },
  {
    capability: "View payload detail",
    rule: (
      <>
        <span className="font-bold text-slate-900">
          More restrictive than metadata view
        </span>{" "}
        where data sensitivity warrants
      </>
    ),
  },
  {
    capability: "Export logs",
    rule: "Separate permission and purpose gate",
  },
];

const adminEventRows: AdminEventRow[] = [
  {
    event: "Subscription created",
    evidence: "Actor, object ID, environment, owner, event summary, timestamp",
  },
  {
    event: "Verification configured or rotated",
    evidence: (
      <>
        Actor, method, safe material ID, timestamp —{" "}
        <span className="font-bold text-slate-900">no secret</span>
      </>
    ),
  },
  {
    event: "Event selection changed",
    evidence: "Actor, before and after summary, timestamp",
  },
  {
    event: "Endpoint URL changed",
    evidence: "Actor, safe masked before and after, timestamp",
  },
  {
    event: "Test or replay initiated",
    evidence: "Actor, source event, target, environment, timestamp, result",
  },
  {
    event: "Paused, disabled or deleted",
    evidence: "Actor, reason if required, effective time, impact evidence",
  },
];

export default function RolesPermissionsAuditWebhooksSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="roles-permissions">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ROLES, PERMISSIONS &amp; AUDIT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Viewing payload detail is more restricted than viewing metadata.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Eight capabilities with distinct permission requirements, and six administrative
          events that leave evidence.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:grid)                             */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid mt-14 w-full max-w-[1240px] grid-cols-2 gap-8 items-center text-left">
          
          {/* Left Column: Table Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Capability and permission rule.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {capabilityRuleRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-2.5 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.capability}
                      </td>
                      <td className="py-2.5 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.rule}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Graphic Image dw8.png */}
          <div className="w-full overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
            <img
              src="/images/devolpers-webhooks/dw8.png"
              alt="Viewing payload detail is more restricted than viewing metadata"
              className="w-full h-auto object-cover rounded-3xl block"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787665886173.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Card 1: Capability and permission rule */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full mb-4">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Capability and permission rule.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {capabilityRuleRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-2.5 px-4 text-xs font-bold text-slate-900 align-top w-2/5">
                        {row.capability}
                      </td>
                      <td className="py-2.5 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.rule}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card 2: Administrative events and their evidence */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Administrative events and their evidence.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {adminEventRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-2.5 px-4 text-xs font-bold text-slate-900 align-top w-2/5">
                        {row.event}
                      </td>
                      <td className="py-2.5 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.evidence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
