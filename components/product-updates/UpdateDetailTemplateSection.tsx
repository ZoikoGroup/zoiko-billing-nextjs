export default function UpdateDetailTemplateSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="update-detail-template">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          UPDATE DETAIL TEMPLATE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          A deprecation with a required action, rendered in full.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Shown in the hardest case — the state where an incomplete notice would leave a customer
          unable to act. All values are placeholders.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/product-updates/pu3.png"
            alt="A deprecation with a required action, rendered in full"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787835302810.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Update Detail Shell Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm text-left space-y-5">
            
            {/* Breadcrumb inside card */}
            <div className="text-[10px] text-slate-400 font-normal">
              Home / Resources / Product Updates / <span className="text-slate-600 font-medium">[Approved update]</span>
            </div>

            {/* Amber Correction Banner */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed">
              <span className="font-bold text-amber-900">Corrected <span className="font-mono text-purple-700 font-semibold">[date]</span> .</span> The migration deadline in this notice was updated after publication. The corrected date appears below and the previous date is recorded in the history block — <span className="font-bold text-amber-900">a changed deadline is never edited silently</span>, because customers plan work against it.
            </div>

            {/* Badges Header Row */}
            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <span className="bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded border border-amber-200/80">o Deprecation</span>
              <span className="bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded border border-amber-200/80">o Deprecated</span>
              <span className="bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded border border-red-200/80">● Action required</span>
              <span className="bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded border border-amber-200/80">o Scope-limited</span>
            </div>

            {/* Title & Lead Paragraph */}
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug mb-2">
                [Specific change description]
              </h3>

              <p className="text-[11px] font-normal leading-relaxed text-slate-600">
                The opening answer states what changed, the effective date, the affected scope, whether action is required, and the current status — in that order, so a reader can stop reading as soon as they learn it does not apply to them. Until the release source supplies content this renders as{" "}
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                  [approved_summary]
                </span>.
              </p>
            </div>

            {/* Metadata Badges Grid */}
            <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50/60 rounded-xl border border-slate-100 text-[10px]">
              <div>
                <div className="text-slate-400 font-medium uppercase">EFFECTIVE DATE</div>
                <div className="font-mono text-purple-700 font-semibold">[operational_date]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">PUBLISHED</div>
                <div className="font-mono text-purple-700 font-semibold">[editorial_date]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">APPLICABILITY</div>
                <div className="font-mono text-purple-700 font-semibold">[region_plan_environment]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">AVAILABILITY</div>
                <div className="font-bold text-slate-900">Deprecated</div>
              </div>
              <div className="col-span-2">
                <div className="text-slate-400 font-medium uppercase">DOCUMENTATION</div>
                <div className="text-blue-600 font-semibold cursor-pointer hover:underline">Current source →</div>
              </div>
            </div>

            {/* Red Action Block (ACTION REQUIRED) */}
            <div className="rounded-xl border border-red-200/80 bg-red-50/80 p-4 text-xs text-red-950 font-normal leading-relaxed">
              <div className="text-[10px] font-bold text-red-800 uppercase tracking-wider mb-2">
                ACTION REQUIRED
              </div>
              <p className="text-[11px] mb-3">
                <span className="font-bold text-slate-900">Who this affects:</span> <span className="font-mono text-purple-700 font-semibold">[approved_audience_and_scope]</span> . If you are outside this scope, no action is needed.
              </p>
              <ol className="space-y-1.5 text-[11px] list-decimal pl-4 mb-3">
                <li>Confirm whether your configuration uses <span className="font-mono text-purple-700 font-semibold">[deprecated_item]</span></li>
                <li>Review the replacement path in <span className="font-bold text-slate-900 underline cursor-pointer">current documentation →</span></li>
                <li>Complete the migration by <span className="font-mono text-purple-700 font-semibold">[approved_deadline]</span> ([timezone])</li>
                <li>Contact Support if a step fails or your account needs specific assistance</li>
              </ol>
              <p className="text-[10px] text-red-900 leading-relaxed border-t border-red-200/60 pt-2">
                <span className="font-bold">Migration safety rule.</span> This block publishes only because a current replacement path, affected scope, authoritative documentation, an approved deadline and a support route all exist. <span className="font-bold">A required migration notice without all five does not ship.</span>
              </p>
            </div>

            {/* 8 Narrative Sections */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">1</span>
                WHAT CHANGED
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                A behavior and user experience summary in plain language, describing what an operator will observe rather than what was implemented.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">2</span>
                WHY IT MATTERS
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Operational impact — <span className="font-bold text-slate-900">without unsupported return-on-investment or savings claims</span>. An update explains consequence, not benefit.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">3</span>
                WHO AND WHAT IS AFFECTED
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Plans, regions, environments and integrations, <span className="font-bold text-slate-900">only where the current authority confirms them</span>. Scope is never widened to make an update sound more significant.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">4</span>
                AVAILABILITY AND ROLLOUT
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Source-governed state and dates. Where a change is rolling out, no completion date appears unless the release authority has approved one.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">5</span>
                WHAT YOU NEED TO DO
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                The action block above, at user level. <span className="font-bold text-slate-900">Technical configuration detail stays in Documentation and Developers</span> rather than being duplicated into a release note that will age.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">6</span>
                KNOWN LIMITATIONS
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Material constraints and exclusions, stated here rather than left for a customer to discover mid-migration.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">7</span>
                DEVELOPER AND INTEGRATION IMPACT
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                A business summary, with Developers as the authority for protocol, schema and contract detail.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">8</span>
                SUPPORT PATH
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Help Center and Support for account-specific issues — because a required action that fails needs somewhere to go.
              </p>
            </div>

            {/* DEPRECATION NOTICE CONTRACT Sub-card */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-xs space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                DEPRECATION NOTICE CONTRACT
              </div>

              <div className="divide-y divide-slate-100 text-[11px]">
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Deprecated item</span>
                  <span className="font-mono text-purple-700 font-semibold">[exact_approved_identifier]</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-slate-500">Status</span>
                    <span className="bg-amber-50 text-amber-800 font-semibold text-[10px] px-2 py-0.5 rounded border border-amber-200/80">o Deprecated</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Not mixed with Retired — the two states are never blurred</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Affected scope</span>
                  <span className="font-mono text-purple-700 font-semibold">[from_source_truth]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Replacement</span>
                  <span className="text-slate-800"><span className="font-mono text-purple-700 font-semibold">[approved_alternative]</span> - <span className="text-blue-600 font-semibold cursor-pointer">current docs →</span></span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Deprecation date</span>
                  <span className="font-mono text-purple-700 font-semibold">[date]</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-slate-500">Migration deadline</span>
                    <span className="font-mono text-purple-700 font-semibold">[approved_date]</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Never inferred from internal planning</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Reassessment date</span>
                  <span className="font-mono text-purple-700 font-semibold">[if_approved]</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-slate-500">Risks if no action</span>
                    <span className="font-mono text-purple-700 font-semibold">[verified_only]</span>
                  </div>
                  <span className="text-[10px] text-slate-400">What may stop working — stated only where verified</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Support</span>
                  <span className="text-slate-700 font-medium">Help Center · Support</span>
                </div>
              </div>
            </div>

            {/* CORRECTION & HISTORY Sub-card */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-xs space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                CORRECTION &amp; HISTORY
              </div>

              <div className="divide-y divide-slate-100 text-[11px]">
                <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-mono text-purple-700 font-semibold">[date]</span>
                  <span className="text-slate-600">Migration deadline corrected. Previous: <span className="font-mono text-purple-700 font-semibold">[old_deadline]</span></span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="font-mono text-purple-700 font-semibold">[date]</span>
                  <span className="text-slate-600">Originally published</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <span className="text-slate-500 font-medium">Supersession</span>
                  <span className="text-slate-600 text-[10px]">None. This update supersedes nothing and has not been superseded.</span>
                </div>
              </div>
            </div>

            {/* Red Historical Truth Footnote Card */}
            <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs text-red-950 font-normal leading-relaxed">
              <span className="font-bold text-red-900">Historical updates stay dated, not corrected into the present.</span> When the product later stops behaving as an old update describes, that update keeps its original date and gains a prominent link to current Documentation. Rewriting history to match today would destroy the record customers rely on to understand when something changed.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
