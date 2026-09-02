export default function StoryDetailTemplateSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="story-template">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          STORY DETAIL TEMPLATE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Ten narrative blocks, ending with what the story does not prove.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Rendered with neutral placeholders. No customer, quote, figure or logo is invented — the
          structure is real, the content awaits consent and evidence.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/customer-stories/3773aa678f8a56fac4aedba516506e11399d5008.png"
            alt="Ten narrative blocks, ending with what the story does not prove"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787833640693.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Story Detail Shell Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm text-left space-y-5">
            
            {/* Breadcrumb inside card */}
            <div className="text-[10px] text-slate-400 font-normal">
              Home / Resources / Customer Stories / <span className="text-slate-600 font-medium">[Approved title]</span>
            </div>

            {/* Badges Header Row */}
            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <span className="text-slate-500 font-medium">logo · rights: active</span>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200/80">
                + Approved customer
              </span>
              <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200/80">
                o Evidence type <span className="font-mono">[registry_class]</span>
              </span>
            </div>

            {/* Title & Lead Paragraph */}
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug mb-2">
                [Context-specific outcome or use–case title]
              </h3>

              <p className="text-[11px] font-normal leading-relaxed text-slate-600">
                The opening answer sits within the first 150 words and states three things: what changed, which Zoiko Billing capabilities were involved, and what evidence supports it. No guaranteed-result wording appears, and no capability is described beyond what the current product source confirms. Until research and evidence are complete, this renders as{" "}
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                  [approved_opening]
                </span>{" "}
                rather than a plausible draft.
              </p>
            </div>

            {/* Metadata Badges Grid */}
            <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50/60 rounded-xl border border-slate-100 text-[10px]">
              <div>
                <div className="text-slate-400 font-medium uppercase">ORGANIZATION CONTEXT</div>
                <div className="font-mono text-purple-700 font-semibold">[approved_bands]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">IMPLEMENTATION STAGE</div>
                <div className="font-mono text-purple-700 font-semibold">[if_supported]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">PRODUCT AREAS</div>
                <div className="font-mono text-purple-700 font-semibold">[approved_areas]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">PUBLISHED</div>
                <div className="font-mono text-purple-700 font-semibold">[date]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">LAST VERIFIED</div>
                <div className="font-mono text-purple-700 font-semibold">[date]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">METHODOLOGY</div>
                <div className="text-blue-600 font-semibold cursor-pointer hover:underline">How this was reviewed →</div>
              </div>
            </div>

            {/* Block 1 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">1</span>
                STARTING CONTEXT
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                What the customer was managing, what constraint existed, and what baseline the evidence actually supports. A baseline that was never measured is labeled as unmeasured rather than estimated backwards.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">2</span>
                WHAT THEY WANTED TO IMPROVE
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Goals in the customer&apos;s own business language, <span className="font-bold text-slate-900">without rewriting an aspiration as a guaranteed outcome</span>.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">3</span>
                WHAT CHANGED
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Approved operating, process and product changes. Current product capabilities link to documentation rather than being described inline; discontinued behavior moves and a story does not.
              </p>
            </div>

            {/* Block 4 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">4</span>
                IMPLEMENTATION APPROACH
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Sequence, integration, process, training and governance decisions — <span className="font-bold text-slate-900">only where approved</span>.
              </p>
            </div>

            {/* Block 5 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">5</span>
                EVIDENCE AND OUTCOMES
              </div>
              <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-200/80 text-[10px] space-y-1.5">
                <div className="flex justify-between border-b border-slate-200/60 pb-1">
                  <span className="text-slate-500 font-medium">Claim</span>
                  <span className="bg-purple-100/70 text-purple-700 font-mono font-semibold px-1 rounded">[approved_wording]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Evidence type</span>
                  <span className="font-mono text-purple-700 font-semibold">[customer_reported_or_verified]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Metric definition</span>
                  <span className="font-mono text-purple-700 font-semibold">[formula_population_baseline]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Measurement period</span>
                  <span className="font-mono text-purple-700 font-semibold">[start_end]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Exclusions</span>
                  <span className="font-mono text-purple-700 font-semibold">[what_was_removed]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contribution</span>
                  <span className="font-mono text-purple-700 font-semibold">[zoiko_role_and_co_factors]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Source</span>
                  <span className="font-mono text-purple-700 font-semibold">[records_interview_analysis]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Artifact</span>
                  <span className="font-mono text-purple-700 font-semibold">[data]</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1.5">
                Every quantitative claim carries this block, adjacent to it — <span className="font-bold text-slate-700">reachable in one interaction, never a footnote</span>.
              </p>
            </div>

            {/* Block 6 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">6</span>
                CUSTOMER PERSPECTIVE
              </div>
              <div className="italic text-slate-800 bg-blue-50/60 border-l-2 border-blue-500 p-2.5 rounded-r-lg font-medium text-xs mb-2">
                &quot;[approved_quote_exact_meaning]&quot;
              </div>
              <div className="text-[10px] text-slate-500 flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-mono text-purple-700 font-semibold">[name_title_if_consented]</span>
                <span>· CONSENT SCOPE: <span className="font-mono text-purple-700 font-semibold">[channel_and_language]</span></span>
                <span>· REACTION: <span className="font-mono text-purple-700 font-semibold">[date]</span></span>
              </div>
              <p className="text-[10px] text-slate-400 font-normal leading-relaxed">
                Editing respects grammar and length only within approved editing permission. A pull quote must match the full-context quote and <span className="font-bold text-slate-700">never convert a preference into a measurable result</span>.
              </p>
            </div>

            {/* Block 7 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">7</span>
                WHAT READERS CAN LEARN
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Reusable lessons, separated from the conditions specific to this customer — so a reader can tell which parts might transfer to their situation.
              </p>
            </div>

            {/* Block 8 (Red Box) */}
            <div>
              <div className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-[9px] font-bold">8</span>
                WHAT THIS STORY DOES NOT PROVE
              </div>
              <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs text-red-950 font-normal leading-relaxed">
                <span className="font-bold text-red-900">Mandatory block.</span> States the material limitations, and why the outcome does not generalize: the configuration, process, data quality, integration, people and operating context that made output possible, and which of those a reader cannot assume they share. <span className="font-bold text-red-900">A story with no stated limitations does not pass the publication gate.</span>
              </div>
            </div>

            {/* Block 9 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">9</span>
                CURRENT PRODUCT CONTEXT
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Links to current Product, Documentation, Developers, Trust and Pricing. <span className="font-bold text-slate-900">A story never becomes the source of what the product does today</span>.
              </p>
            </div>

            {/* Block 10 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[9px] font-bold">10</span>
                RELATED RESOURCES
              </div>
              <p className="text-[11px] text-blue-600 font-semibold flex items-center gap-2">
                <a href="/resource-center" className="hover:underline">Guides</a> · <a href="/reports-and-insights" className="hover:underline">Reports &amp; Insights</a> · <span className="text-slate-500 font-normal">Help Center</span>
              </p>
            </div>

            {/* CONSENT & PERMISSION STATE Card */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-xs space-y-3">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                CONSENT &amp; PERMISSION STATE
              </div>

              <div className="divide-y divide-slate-100 text-[11px]">
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Identity use</span>
                  <span className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded border border-emerald-200/80">+ Granted</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-slate-500">Logo rights</span>
                    <span className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded border border-emerald-200/80">+ Active</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Current trademark with re-use rights on file</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-slate-500">Quote</span>
                    <span className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded border border-emerald-200/80">+ Granted</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Direct spoken or written quote</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-slate-500">Screenshot</span>
                    <span className="bg-amber-50 text-amber-700 font-bold text-[10px] px-2 py-0.5 rounded border border-amber-200/80">! Redacted</span>
                  </div>
                  <span className="text-[10px] text-slate-400">No names, amounts, addresses, bank details, tax IDs, credentials or document IDs</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Video</span>
                  <span className="text-slate-400">No permission</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Channels</span>
                  <span className="font-mono text-purple-700 font-semibold">[web_only_or_limitation]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Consent expiry</span>
                  <span className="font-mono text-purple-700 font-semibold">[review_date]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Product verifier</span>
                  <span className="text-slate-700 font-medium">Named internal verifier</span>
                </div>
              </div>

              <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3 text-[11px] text-red-950 font-normal leading-relaxed">
                <span className="font-bold text-red-900">Consent is a live state, not a static permission profile.</span> If consent narrows, the affected asset, channel, language or region is removed immediately. If consent is withdrawn, the story is withdrawn or anonymized as agreed, removed from browse and index, assets revoked, and a safe redirect applied.
              </div>
            </div>

            {/* Anonymous story rules Card */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-xs">
              <h4 className="text-xs font-bold text-slate-900 mb-2">
                Anonymous story rules
              </h4>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed mb-2">
                Where identity is withheld, the descriptor must neutral-identify: industry, region, scale, integration mix, chronology, non-unique quote and broad outcome without precise unique values. The <span className="font-bold text-slate-900">combination</span> identifies area without single field-lines.
              </p>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                The page states identity is withheld <span className="font-bold text-slate-900">with permission</span> — never implying business secrets, investigation or a negative reason. And the story is not SEO-optimized around the hidden identity.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
