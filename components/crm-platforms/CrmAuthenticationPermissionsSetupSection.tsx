interface SecurityRequirementItem {
  title: string;
  detail: string;
}

const securityRequirementItems: SecurityRequirementItem[] = [
  { title: "Authentication method", detail: "— the exact registered CRM integration method." },
  { title: "Service principal", detail: "— a named owner and purpose; broad human admin credentials are not reused." },
  { title: "Scopes", detail: "— least-necessary objects, actions and fields." },
  { title: "Tenant mapping", detail: "— the CRM organization maps to the correct Billing tenant and entity, server-controlled." },
  { title: "Secrets", detail: "— an approved secret service; never in logs, analytics, URLs or support notes." },
  { title: "Webhook verification", detail: "— a registered authenticity or signature method." },
  { title: "Field filtering", detail: "— a server-side allowlist before any outbound CRM payload." },
  { title: "Audit", detail: "— connection, mapping, scope, field-map, credential and lifecycle changes historically attributable." },
];

export default function CrmAuthenticationPermissionsSetupSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="security-setup">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          AUTHENTICATION, PERMISSIONS, SETUP &amp; SECURITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Integration identity is a technical connection, not a Billing permission.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          CRM authentication, single sign-on, owner mapping and group membership never satisfy
          Billing authorization. Those permissions stay governed separately.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:grid)                             */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid mt-14 w-full max-w-[1240px] grid-cols-2 gap-10 items-center text-left">
          
          {/* Left Column: Requirements List */}
          <div className="flex flex-col gap-3">
            {securityRequirementItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">{item.title}</span>{" "}
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Image Container crm6.png */}
          <div className="w-full overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
            <img
              src="/images/crm-platforms/crm6.png"
              alt="Integration identity is a technical connection, not a Billing permission"
              className="w-full h-auto object-cover rounded-3xl block"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787711411297.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Requirements List for Mobile */}
          <div className="flex flex-col gap-3 mb-6">
            {securityRequirementItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-normal text-slate-600 leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">{item.title}</span>{" "}
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Illustrated Step Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm">
            
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
              Identity is not permission, illustrated
            </h3>
            <p className="text-[10px] text-slate-400 font-normal mb-4">
              Synthetic scenario on Example CRM A.
            </p>

            <div className="divide-y divide-slate-100">
              
              {/* Step 1 */}
              <div className="py-3 flex items-start gap-3">
                <div className="w-6 h-6 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0">
                  1
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    CRM account owner opens the linked billing account
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500 font-normal leading-relaxed">
                    <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-emerald-200/60 inline-block mr-1.5">
                      Permitted
                    </span>
                    — read access granted by a mapped Billing role
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="py-3 flex items-start gap-3">
                <div className="w-6 h-6 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0">
                  2
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Same owner edits payment terms
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500 font-normal leading-relaxed">
                    <span className="bg-red-50 text-red-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-red-200/60 inline-block mr-1.5">
                      Blocked
                    </span>
                    — CRM ownership grants no Billing permission
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="py-3 flex items-start gap-3">
                <div className="w-6 h-6 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0">
                  3
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    CRM admin group is added
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500 font-normal leading-relaxed">
                    <span className="bg-amber-50 text-amber-800 font-semibold text-[10px] px-2 py-0.5 rounded border border-amber-200/60 inline-block mr-1.5">
                      No effect
                    </span>
                    — group membership does not union with Billing rights
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="py-3 flex items-start gap-3">
                <div className="w-6 h-6 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0">
                  4
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Outbound payload assembled
                  </div>
                  <p className="mt-0.5 text-[11px] text-slate-500 font-normal leading-relaxed">
                    A server-side allowlist filters fields before anything leaves Billing
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
