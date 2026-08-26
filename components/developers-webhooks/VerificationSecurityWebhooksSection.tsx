interface VerificationUiStateRow {
  badge: React.ReactNode;
  treatment: React.ReactNode;
}

const verificationUiStateRows: VerificationUiStateRow[] = [
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
        Not configured
      </span>
    ),
    treatment: (
      <>
        Explain the required next step{" "}
        <span className="font-bold text-slate-900">
          without displaying a fake secret
        </span>
      </>
    ),
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-amber-50 border border-amber-200 text-amber-800 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        Pending verification
      </span>
    ),
    treatment: "Persistent state, with a safe check action if supported",
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Verified
      </span>
    ),
    treatment: "Text label plus last verification evidence if canonical",
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-red-50 border border-red-200 text-red-700 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        Verification failed
      </span>
    ),
    treatment: (
      <>
        Safe reason category and remediation —{" "}
        <span className="font-bold text-slate-900">
          never echo secret or header material
        </span>
      </>
    ),
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-amber-50 border border-amber-200 text-amber-800 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        Rotation required
      </span>
    ),
    treatment: "Rendered only from canonical policy, with owner and deadline if available",
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-purple-50 border border-purple-200 text-purple-700 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
        Permission denied
      </span>
    ),
    treatment: "Explain the role boundary",
  },
];

export default function VerificationSecurityWebhooksSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="verification-security">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          VERIFICATION &amp; SECURITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          No verification code sample ships without security sign-off.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A method card renders for each verification method that is actually supported. This
          wireframe prescribes none.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/devolpers-webhooks/dw3.png"
            alt="No verification code sample ships without security sign-off"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787665628648.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Top Method & Steps Cards (2-Column Mobile Grid) */}
          <div className="grid grid-cols-2 gap-3.5 mb-3">
            
            {/* Card 1: Method placeholders */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm text-xs">
              <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-2 py-0.5 rounded border border-purple-200/60 inline-block mb-2">
                {`{approved_method_name}`}
              </span>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div>What it proves:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block mt-0.5">
                  {`{authenticity_integrity_replay}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 mb-1.5">
                <div>Material:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block mt-0.5">
                  {`{secret_key_or_reference}`}
                </span>
              </div>
              <div className="text-[11px] text-slate-600">
                <div>Evidence location:</div>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block mt-0.5">
                  {`{canonical_header_or_metadata}`}
                </span>
              </div>
            </div>

            {/* Card 2: Verification steps */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm text-xs">
              <h3 className="text-xs font-bold text-slate-900 mb-1.5">
                Verification steps
              </h3>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Language-agnostic algorithm steps, or the official helper path — published only after Security and API Engineering approve the exact algorithm, byte construction, encoding, header names, timestamp behavior and tolerance policy.
              </p>
            </div>

          </div>

          {/* Card 3: Rotation & failure (Full-width card) */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm text-xs mb-4">
            <h3 className="text-xs font-bold text-slate-900 mb-1.5">
              Rotation &amp; failure
            </h3>
            <div className="text-[11px] text-slate-600 mb-1">
              <span>Rotation:</span>{" "}
              <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block ml-1">
                {`{approved_overlap_cutover}`}
              </span>
            </div>
            <div className="text-[11px] text-slate-600 mb-1.5">
              <span>On failure:</span>{" "}
              <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block ml-1">
                {`{canonical_platform_behavior}`}
              </span>
            </div>
            <div className="text-[11px] text-slate-600 font-normal">
              <span className="font-bold text-slate-800">Clock / replay window:</span> rendered only if security policy defines one.
            </div>
          </div>

          {/* Mobile Table Card: Six verification UI states */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm mb-4">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Six verification UI states.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      STATE
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      TREATMENT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {verificationUiStateRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs align-top">
                        {row.badge}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.treatment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Red Warning Callout Box */}
          <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs font-normal leading-relaxed text-red-950 text-left mb-8">
            <span className="font-bold text-red-900">IP controls are not authenticity.</span> Network controls render only if officially supported, and an IP allowlist is never implied to be sufficient proof that a delivery is genuine.
          </div>

        </div>

      </div>
    </section>
  );
}
