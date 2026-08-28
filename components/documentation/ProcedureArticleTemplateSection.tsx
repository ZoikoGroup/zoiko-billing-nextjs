export default function ProcedureArticleTemplateSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="procedure-template">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          PROCEDURE ARTICLE TEMPLATE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Nine regions, and the state gate comes before the steps.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Rendered with placeholders. A procedure that behaves differently — or is unavailable — under
          certain states or permissions says so before the reader starts step one.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/documentation/d3.png"
            alt="Nine regions, and the state gate comes before the steps"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787836383127.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Procedure Article Shell Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm text-left space-y-5">
            
            {/* Breadcrumb inside card */}
            <div className="text-[10px] text-slate-400 font-normal">
              Home / Customer Support / Documentation / <span className="text-slate-600 font-medium">[Product area]</span> / <span className="text-slate-600 font-medium">[Article]</span>
            </div>

            {/* Badges Header Row */}
            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200/80">o Procedure</span>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200/80">● Current</span>
            </div>

            {/* Title & Lead Paragraph */}
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug mb-2">
                [One current product-use intent]
              </h3>

              <p className="text-[11px] font-normal leading-relaxed text-slate-600">
                The direct answer states two to four sentences describing current behavior and its scope. It states what the product does today, not what it will do or once did. Until the product source supplies content, this renders as{" "}
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                  [approved_current_behavior]
                </span>.
              </p>
            </div>

            {/* Metadata Badges Grid */}
            <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50/60 rounded-xl border border-slate-100 text-[10px]">
              <div>
                <div className="text-slate-400 font-medium uppercase">APPLIES TO ROLE</div>
                <div className="font-mono text-purple-700 font-semibold">[source_governed]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">APPLIES TO STATE</div>
                <div className="font-mono text-purple-700 font-semibold">[source_governed]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">PLAN / REGION</div>
                <div className="font-mono text-purple-700 font-semibold">[only_if_sourced]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">LAST REVIEWED</div>
                <div className="font-mono text-purple-700 font-semibold">[date]</div>
              </div>
            </div>

            {/* GOAL */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                GOAL
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                What the reader will complete by following this procedure — stated as an outcome, not as a feature description.
              </p>
            </div>

            {/* BEFORE YOU START */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                BEFORE YOU START
              </div>
              <ul className="space-y-1 text-[11px] text-slate-600 font-normal leading-relaxed list-disc pl-4">
                <li>Permissions required — <span className="font-mono text-purple-700 font-semibold">[approved_role_or_capability]</span></li>
                <li>Object state required — <span className="font-mono text-purple-700 font-semibold">[approved_state]</span></li>
                <li>Data or prerequisite configuration — <span className="font-mono text-purple-700 font-semibold">[if_source_supported]</span></li>
                <li>Dependent system state — <span className="font-mono text-purple-700 font-semibold">[only_where_sourced]</span></li>
              </ul>
            </div>

            {/* STATE & PERMISSION GATE Amber Box */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed">
              <div className="font-bold text-amber-900 mb-1">
                This procedure is not always available.
              </div>
              <p className="text-[11px]">
                When the object is in a state that does not permit the action, or the signed-in role lacks the capability, the procedure behaves differently or is unavailable — and that is stated <span className="font-bold text-amber-900">here, before step one</span>, rather than discovered at the step where it fails.
              </p>
            </div>

            {/* STEPS */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                STEPS
              </div>
              <ol className="space-y-1.5 text-[11px] list-decimal pl-4 mb-2">
                <li><span className="font-mono text-purple-700 font-semibold">[current_action1]</span></li>
                <li><span className="font-mono text-purple-700 font-semibold">[current_action2]</span></li>
                <li><span className="font-mono text-purple-700 font-semibold">[current_action3]</span></li>
                <li><span className="font-mono text-purple-700 font-semibold">[current_action4]</span></li>
              </ol>
              <p className="text-[10px] text-slate-400 font-normal leading-relaxed">
                Numbered current actions with <span className="font-bold text-slate-900">no skipped state transitions</span> — a step that silently assumes an intermediate change is a step a reader cannot follow.
              </p>
            </div>

            {/* EXPECTED RESULT */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                EXPECTED RESULT
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                The observable current product outcome — what the reader will actually see when it worked.
              </p>
            </div>

            {/* EXCEPTIONS */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                EXCEPTIONS
              </div>
              <ul className="space-y-1 text-[11px] text-slate-600 font-normal leading-relaxed list-disc pl-4">
                <li>Partial completion — <span className="font-mono text-purple-700 font-semibold">[approved_behavior]</span></li>
                <li>Permission denied — <span className="font-mono text-purple-700 font-semibold">[approved_behavior]</span></li>
                <li>Locked or in-progress state — <span className="font-mono text-purple-700 font-semibold">[approved_behavior]</span></li>
                <li>Failed action — <span className="font-mono text-purple-700 font-semibold">[approved_behavior]</span></li>
              </ul>
            </div>

            {/* VERIFICATION Emerald Box */}
            <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-3.5 text-xs text-emerald-950 font-normal leading-relaxed">
              <div className="font-bold text-emerald-900 mb-1">
                Confirm without repeating the action.
              </div>
              <p className="text-[11px]">
                Verification describes how to check the outcome using a read-only view or record — never by performing the procedure again, which in billing can create a duplicate document or a second payment allocation.
              </p>
            </div>

            {/* TROUBLESHOOTING */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                TROUBLESHOOTING
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Symptom diagnosis links to Help Center rather than being duplicated here — <span className="font-bold text-slate-900">two copies of troubleshooting guidance drift apart and one becomes wrong.</span>
              </p>
            </div>

            {/* SCREENSHOT GOVERNANCE Purple Card */}
            <div className="rounded-xl border border-purple-200/80 bg-purple-50/60 p-4 text-center text-xs text-purple-950 space-y-1.5">
              <div className="font-mono font-semibold text-purple-800">[ approved current UI screenshot ]</div>
              <div className="text-[10px] text-slate-500 space-y-0.5">
                <div>synthetic / redacted account data</div>
                <div>no names · no document IDs</div>
                <div>no bank or card data · no tax IDs</div>
                <div>no credentials</div>
              </div>
              <div className="text-[9px] text-purple-700 font-medium pt-1">
                alt text describes purpose and relevant UI state
              </div>
            </div>

            {/* RELATED REFERENCE - STATE TABLE Sub-card */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 text-xs space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                RELATED REFERENCE · STATE TABLE
              </div>

              <div className="divide-y divide-slate-100 text-[10px]">
                <div className="grid grid-cols-3 gap-1 font-bold text-slate-500 pb-1">
                  <span>STATE</span>
                  <span>ALLOWED ACTIONS</span>
                  <span>NEXT STATES</span>
                </div>
                <div className="py-1.5 grid grid-cols-3 gap-1 font-mono text-purple-700 font-semibold">
                  <span>[state]</span>
                  <span>[approved]</span>
                  <span>[approved]</span>
                </div>
                <div className="py-1.5 grid grid-cols-3 gap-1 font-mono text-purple-700 font-semibold">
                  <span>[state]</span>
                  <span>[approved]</span>
                  <span>[approved]</span>
                </div>
                <div className="py-1.5 grid grid-cols-3 gap-1 font-mono text-purple-700 font-semibold">
                  <span>[state]</span>
                  <span>[approved]</span>
                  <span>[approved]</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 font-normal leading-relaxed pt-1">
                State, meaning, entry condition, allowed actions, exit states and visibility come <span className="font-bold text-slate-900">only from approved product source</span>. Field tables never invent API field names.
              </p>
            </div>

            {/* Red Limits Absence Footnote Box */}
            <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs text-red-950 font-normal leading-relaxed">
              <span className="font-bold text-red-900">Limits are absent by default.</span> No numeric cap, rate, retention period, file size, timing or quota appears anywhere in this template — these publish only when a source authority owns the value, because a plausible-looking limit becomes the number customers plan against.
            </div>

            {/* Bottom Cross-authority Handoff Link */}
            <div className="text-[10px] text-slate-500 font-normal text-center pt-3 border-t border-slate-100">
              Cross-authority: <a href="#faq" className="text-blue-600 font-bold hover:underline">Help Center</a> for symptoms · Developers for API contracts · <a href="/pricing-and-plans" className="text-blue-600 font-bold hover:underline">Pricing</a> for plan availability
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
