export default function ReportDetailTemplateSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="report-template">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          REPORT DETAIL TEMPLATE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          The shell an approved analysis fills.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Rendered with placeholder values throughout. The chart carries axes, units and a source
          line but <span className="font-bold text-slate-900">no plotted figures</span>, because
          inventing one would breach the doctrine this page exists to enforce.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/reports-and-insights/rai3.png"
            alt="The shell an approved analysis fills"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787832604862.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Report Detail Shell Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm text-left">
            
            {/* Breadcrumb inside card */}
            <div className="text-[10px] text-slate-400 font-normal mb-3">
              Home / Resources / Reports &amp; Insights / <span className="text-slate-600 font-medium">[Approved title]</span>
            </div>

            {/* Badge & Title */}
            <span className="bg-blue-50 text-blue-700 font-bold text-[10px] px-2 py-0.5 rounded border border-blue-200/80 uppercase inline-block mb-2">
              REPORT
            </span>

            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug mb-2">
              [One primary research question or evidence–led finding]
            </h3>

            <p className="text-[11px] font-normal leading-relaxed text-slate-600 mb-4">
              The direct answer occupies two to four sentences and carries its period, population and scope qualifier inline where these are material. Causal wording appears only where the methodology genuinely supports causal inference. Until approved evidence exists, this block renders as{" "}
              <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                [approved_finding]
              </span>{" "}
              rather than a plausible draft.
            </p>

            {/* Metadata Badges Grid */}
            <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50/60 rounded-xl border border-slate-100 text-[10px] mb-5">
              <div>
                <div className="text-slate-400 font-medium uppercase">EVIDENCE TYPE</div>
                <div className="font-mono text-purple-700 font-semibold">[registry_class]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">DATA PERIOD</div>
                <div className="font-mono text-purple-700 font-semibold">[start_end]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">POPULATION / SAMPLE</div>
                <div className="font-mono text-purple-700 font-semibold">[n_and_selection]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">GEOGRAPHY</div>
                <div className="font-mono text-purple-700 font-semibold">[if_material]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">PUBLISHED / REVIEWED</div>
                <div className="font-mono text-purple-700 font-semibold">[dates]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">METHODOLOGY</div>
                <div className="text-blue-600 font-semibold cursor-pointer hover:underline">How this was produced →</div>
              </div>
            </div>

            {/* EXECUTIVE SUMMARY */}
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              EXECUTIVE SUMMARY
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-600 font-normal leading-relaxed mb-5 list-disc pl-4">
              <li>
                Finding —{" "}
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                  [approved_wording]
                </span>
              </li>
              <li>Scope — population, period and exclusions stated inline</li>
              <li>Implication — a decision consideration, not a guaranteed outcome</li>
              <li>Limitation — the strongest caveat, not the weakest</li>
              <li>Next question — what this analysis could not answer</li>
            </ul>

            {/* WHAT THE EVIDENCE SHOWS */}
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">
              WHAT THE EVIDENCE SHOWS
            </div>
            <p className="text-[11px] text-slate-600 font-normal leading-relaxed mb-4">
              Describes the observation using named metric definitions and a stated denominator. A percentage never appears without the population it is a percentage of, and a comparison never appears without the two periods being named.
            </p>

            {/* WHAT IT DOES NOT ESTABLISH (Red Box) */}
            <div className="text-[10px] font-bold text-red-600 uppercase tracking-wider mt-4 mb-2">
              WHAT IT DOES NOT ESTABLISH
            </div>
            <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs text-red-950 font-normal leading-relaxed mb-4">
              <span className="font-bold text-red-900">This block is mandatory and appears before interpretation.</span> It states explicitly what the analysis cannot support: causality where the design is observational, representativeness where the sample is not random, and measurement limits where the metric is a proxy. An analysis with no stated limitations does not pass the publication gate.
            </div>

            {/* INTERPRETATION (Purple Box) */}
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">
              INTERPRETATION
            </div>
            <div className="rounded-xl border border-purple-200/80 bg-purple-50/70 p-3.5 text-xs text-purple-950 font-normal leading-relaxed mb-4">
              <span className="font-bold text-purple-900">Labeled as interpretation, not evidence.</span> Editorial and subject-matter viewing of the finding is visually and semantically separated from what the data shows, so a reader can accept the observation while disagreeing with the framing.
            </div>

            {/* PRACTICAL IMPLICATIONS */}
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">
              PRACTICAL IMPLICATIONS
            </div>
            <p className="text-[11px] text-slate-600 font-normal leading-relaxed mb-5">
              Decision and process considerations linked to Guides and Templates —{" "}
              <span className="font-bold text-slate-900">without claiming a guaranteed outcome</span> for any reader who follows them.
            </p>

            {/* Figure 1 Chart Container Card */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/40 p-4 mb-5 text-left">
              <div className="text-xs font-bold text-slate-900 mb-2">
                Figure 1 ·{" "}
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                  [approved_figure_title]
                </span>
              </div>

              {/* Chart Placeholder SVG Box */}
              <div className="h-44 sm:h-52 w-full border border-dashed border-slate-300 rounded-lg bg-white flex flex-col items-center justify-center text-slate-400 my-3 text-xs relative p-3">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] text-slate-400 -rotate-90">
                  (unit)
                </div>
                <div className="flex h-28 items-end gap-3 sm:gap-5 border-b border-l border-slate-300 pl-2 pb-1 w-4/5 justify-around">
                  <div className="w-6 sm:w-8 h-20 bg-slate-100 border border-slate-200 rounded-t" />
                  <div className="w-6 sm:w-8 h-20 bg-slate-100 border border-slate-200 rounded-t" />
                  <div className="w-6 sm:w-8 h-20 bg-slate-100 border border-slate-200 rounded-t" />
                  <div className="w-6 sm:w-8 h-20 bg-slate-100 border border-slate-200 rounded-t" />
                </div>
                <span className="text-xs font-medium text-slate-400 mt-2">no values plotted</span>
                <span className="text-[9px] text-slate-400 mt-1">(category axis)</span>
              </div>

              <p className="text-[10px] text-slate-500 font-normal leading-relaxed">
                <span className="font-bold text-slate-900">Baseline starts at zero.</span> Units, denominator, period and source are attached to the figure; axes are accessible; text summary plus data table accompany it. No smoothing, modeling or formula-assembly without being labeled as such.
              </p>
            </div>

            {/* METHODOLOGY PANEL */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                METHODOLOGY PANEL
              </div>

              <div className="divide-y divide-slate-100 text-[11px]">
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Research question</span>
                  <span className="font-mono text-purple-700 font-semibold">[question_analysis_answers]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Evidence type</span>
                  <span className="font-mono text-purple-700 font-semibold">[registry_class]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Source</span>
                  <span className="font-mono text-purple-700 font-semibold">[named_resource_or_dataset]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Population / sample</span>
                  <span className="font-mono text-purple-700 font-semibold">[inclusion_n_selection]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Time period</span>
                  <span className="font-mono text-purple-700 font-semibold">[collection_start_end]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Metric definitions</span>
                  <span className="font-mono text-purple-700 font-semibold">[units_denominator_exclusions]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Analytical method</span>
                  <span className="font-mono text-purple-700 font-semibold">[description_comparative_model]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Privacy &amp; cohort</span>
                  <span className="font-mono text-purple-700 font-semibold">[aggregation_suppression_permission]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Limitations</span>
                  <span className="font-mono text-purple-700 font-semibold">[fixed_caveats_generalizability]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Reviewer</span>
                  <span className="font-mono text-purple-700 font-semibold">[name_and_review_function]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Version</span>
                  <span className="font-mono text-purple-700 font-semibold">[version_and_correction_reason]</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-3.5">
                Metric definitions link to Billing Glossary. Corrections and version history appear at the foot of the published analysis.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
