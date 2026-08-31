export default function KnownLimitationsSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="known-limitations">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          KNOWN LIMITATIONS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Published while open, not after they are fixed.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A limitation record carries scope, impact and any verified workaround — and states impact
          without assuming anything about the person affected.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/accessibility/a3.png"
            alt="Published while open, not after they are fixed"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788178915038.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left space-y-4">
          
          {/* Limitation Record Card 1 */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-slate-400 font-normal">Lim-042</span>
              <span className="bg-amber-50 text-amber-800 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-200/80">
                o Workaround available
              </span>
            </div>

            <div className="font-mono text-purple-700 font-semibold text-xs">
              [plain_barrier_description]
            </div>

            <p className="text-[11px] text-slate-600 leading-relaxed">
              Public titles describe the barrier in plain language — <span className="font-bold text-slate-900">never internal bug jargon</span>, because a limitation registry is read by the people the barrier affects.
            </p>

            <div className="divide-y divide-slate-100 text-[11px] pt-1">
              <div className="py-1.5 flex flex-col items-start gap-0.5">
                <span className="text-slate-500 font-medium">Affected scope</span>
                <span className="font-mono text-purple-700 font-semibold">[product_workflow_component_version_environment]</span>
              </div>
              <div className="py-1.5 flex flex-col items-start gap-0.5">
                <span className="text-slate-500 font-medium">Impact</span>
                <span className="font-mono text-purple-700 font-semibold">[what_cannot_be_done]</span>
                <span className="text-[10px] text-slate-400">Stated without medical or disability assumptions</span>
              </div>
              <div className="py-1.5 flex items-center justify-between gap-2">
                <span className="text-slate-500">Workaround</span>
                <span className="font-mono text-purple-700 font-semibold">[only_if_verified_safe_current]</span>
              </div>
              <div className="py-1.5 flex items-center justify-between gap-2">
                <span className="text-slate-500">State</span>
                <span className="bg-amber-50 text-amber-800 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-200/80">
                  o Workaround available
                </span>
              </div>
              <div className="py-1.5 flex flex-col items-start gap-0.5">
                <span className="text-slate-500">Dates</span>
                <div className="font-mono text-purple-700 font-semibold text-[10px]">
                  Reported [date] · confirmed [date] · reviewed [date]
                </div>
                <span className="text-[10px] text-slate-400">Only states the source actually knows. No estimated fix date.</span>
              </div>
              <div className="py-1.5 flex items-center justify-between gap-2">
                <span className="text-slate-500">Owner</span>
                <span className="text-slate-700 font-medium">Accessibility owner and product owner</span>
              </div>
              <div className="py-1.5 flex flex-col items-start gap-0.5">
                <span className="text-slate-500">Reporter</span>
                <span className="font-bold text-slate-900 text-[10px]">Not published. No reporter or user identity appears in a public limitation record</span>
              </div>
            </div>
          </div>

          {/* Limitation Record Card 2 */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-slate-400 font-normal">Lim-043</span>
              <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200/80">
                o Fixed pending verification
              </span>
            </div>

            <div className="font-mono text-purple-700 font-semibold text-xs">
              [plain_barrier_description]
            </div>

            <div className="divide-y divide-slate-100 text-[11px] pt-1">
              <div className="py-1.5 flex flex-col items-start gap-0.5">
                <div className="w-full flex items-center justify-between">
                  <span className="text-slate-500">State</span>
                  <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200/80">
                    o Fixed pending verification
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">A change exists, but accessibility verification is incomplete. This is not marked resolved...</span>
              </div>
              <div className="py-1.5 flex flex-col items-start gap-0.5">
                <div className="w-full flex items-center justify-between">
                  <span className="text-slate-500">Workaround</span>
                  <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-semibold">
                    o None available
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">Not invented. Where no safe verified workaround exists, the record says so and routes to Support</span>
              </div>
            </div>
          </div>

          {/* Translucent Callout Box */}
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 text-xs text-slate-700 leading-relaxed space-y-3">
            <div>
              <div className="font-bold text-slate-900 mb-0.5">
                When the registry is empty
              </div>
              <p className="text-[11px] text-slate-600">
                The page reads: <span className="font-bold text-slate-900">&quot;No current public limitations are listed in this registry.&quot;</span> It does not say that no accessibility issues exist — those are different claims, and the second one is never true of any product.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200/60">
              <div className="font-bold text-slate-900 mb-0.5">
                When the registry is unavailable
              </div>
              <p className="text-[11px] text-slate-600">
                The page states that the source is unavailable. <span className="font-bold text-slate-900">A cached empty list is never shown as current</span>, because an empty list is the most misleading possible cache.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
