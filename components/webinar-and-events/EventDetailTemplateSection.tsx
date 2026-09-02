export default function EventDetailTemplateSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="event-detail-template">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          EVENT DETAIL TEMPLATE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          A rescheduled event, rendered honestly.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Shown in the rescheduled state so the banner, the re-derived action and the independent
          post-event states are all visible at once. All values are placeholders.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/webinar-and-events/wae3.png"
            alt="A rescheduled event, rendered honestly"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787834533575.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Event Detail Shell Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm text-left space-y-5">
            
            {/* Breadcrumb inside card */}
            <div className="text-[10px] text-slate-400 font-normal">
              Home / Resources / Webinar &amp; Events / <span className="text-slate-600 font-medium">[Approved event]</span>
            </div>

            {/* Amber Rescheduled Banner */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed">
              <span className="font-bold text-amber-900">Rescheduled.</span> This event has moved to a new date. The new schedule below is authoritative, and registration has been re-derived from the current state. If you registered previously, the registration status in the authority system carries over — <span className="font-bold text-amber-900">this page makes no notification claim it cannot honor</span>.
            </div>

            {/* Badges Header Row */}
            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-full border border-blue-200/80">
                ● Rescheduled
              </span>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200/80">
                ● Registration open
              </span>
              <span className="bg-white text-slate-600 font-semibold px-2 py-0.5 rounded-full border border-slate-200">
                o 1h 00m
              </span>
            </div>

            {/* Title & Lead Paragraph */}
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug mb-2">
                [Specific event title]
              </h3>

              <p className="text-[11px] font-normal leading-relaxed text-slate-600">
                The direct answer states what the event covers, who it is for, the current schedule and status, and what action is available right now. It contains no roadmap claim, no product promise beyond current Documentation, and no recording promise. Until the registry supplies content, this renders as{" "}
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                  [approved_summary]
                </span>.
              </p>
            </div>

            {/* Schedule & Format Metadata Rows */}
            <div className="bg-slate-50/60 p-3.5 rounded-xl border border-slate-100 space-y-2 text-[11px]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Current schedule</span>
                <span className="font-mono text-purple-700 font-semibold text-right">[date] · [start] — [end] ([tz_label])</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Previous schedule</span>
                <span className="font-mono text-purple-700 font-semibold text-right">[old_date] · [old_time] ([tz_label])</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Format</span>
                <span className="font-bold text-slate-900 text-right">Virtual</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Registration deadline</span>
                <span className="font-mono text-purple-700 font-semibold text-right">[from_system_only]</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Capacity / waitlist</span>
                <span className="font-medium text-slate-600 text-right">● Not shown</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-500 font-medium">Last updated</span>
                <span className="font-mono text-purple-700 font-semibold text-right">[schedule_change_date]</span>
              </div>
            </div>

            {/* Buttons & Subordination Note */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs font-semibold text-white shadow-md shadow-blue-500/25"
              >
                Register
              </button>

              <button
                type="button"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs font-semibold text-slate-900"
              >
                Book a demo
              </button>

              <span className="text-[10px] text-slate-400 font-normal">
                The commercial action stays visually subordinate to the event action.
              </span>
            </div>

            {/* WHY ATTEND */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                WHY ATTEND
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                A specific user problem and its learning value — not a product pitch restated as an agenda.
              </p>
            </div>

            {/* WHAT YOU WILL LEARN */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                WHAT YOU WILL LEARN
              </div>
              <ul className="space-y-1 text-[11px] text-slate-600 font-normal leading-relaxed list-disc pl-4">
                <li>Three to six concrete outcomes, each stated as something the attendee will be able to do</li>
                <li><span className="font-bold text-slate-900">No roadmap or unreleased-capability promise</span></li>
                <li>Product capability described only as current Documentation supports it</li>
              </ul>
            </div>

            {/* AGENDA */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                AGENDA
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Realized agenda only. In session order. Run-time duration appears only where approved — a provisional running order is not published as though it were final.
              </p>
            </div>

            {/* SPEAKERS - CONFIRMED ONLY */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                SPEAKERS · CONFIRMED ONLY
              </div>

              <div className="space-y-2">
                <div className="p-2.5 bg-slate-50/70 rounded-xl border border-slate-200/80 flex items-center justify-between text-[10px]">
                  <div>
                    <div className="font-mono text-purple-700 font-semibold">[confirmed_name1]</div>
                    <div className="font-mono text-purple-700 font-normal">[approved_title_and_org]</div>
                  </div>
                  <span className="text-slate-400">Consent and rights on file</span>
                </div>

                <div className="p-2.5 bg-slate-50/70 rounded-xl border border-slate-200/80 flex items-center justify-between text-[10px]">
                  <div>
                    <div className="font-mono text-purple-700 font-semibold">[confirmed_name2]</div>
                    <div className="font-mono text-purple-700 font-normal">[approved_title_and_org]</div>
                  </div>
                  <span className="text-slate-400">Consent and rights on file</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-2">
                <span className="font-bold text-slate-900">Draft and invited speakers never appear publicly.</span> Only confirmed status is published, and a material speaker change updates this section and the last-updated date. Recording rights are held separately from live participation rights.
              </p>
            </div>

            {/* WHO IT IS FOR */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                WHO IT IS FOR
              </div>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Audience text and prerequisites, so an attendee can tell before registering whether the session assumes knowledge they do not have.
              </p>
            </div>

            {/* AFTER THE EVENT (Post-Event Artifacts Sub-card) */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-xs space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                POST-EVENT ARTIFACTS · EACH STATE INDEPENDENT
              </div>

              <div className="divide-y divide-slate-100 text-[11px]">
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Recording</span>
                  <span className="bg-amber-50 text-amber-800 font-semibold text-[10px] px-2 py-0.5 rounded-full border border-amber-200/80">● Under review</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Transcript</span>
                  <span className="bg-amber-50 text-amber-800 font-semibold text-[10px] px-2 py-0.5 rounded-full border border-amber-200/80">● Under review</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Slides</span>
                  <span className="text-slate-400">● Not published</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Recap</span>
                  <span className="text-slate-400">● Not published</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Q&amp;A summary</span>
                  <span className="text-slate-400">● Not published</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 font-normal leading-relaxed pt-1">
                <span className="font-bold text-slate-900">Under review is not a promise.</span> A recording may complete review and publish, or may never be published at all — and the page says the former only when approved standing permits it.
              </p>
            </div>

            {/* ACCESSIBILITY & ACCOMMODATION Sub-card */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-xs space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                ACCESSIBILITY &amp; ACCOMMODATION
              </div>

              <div className="divide-y divide-slate-100 text-[11px]">
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Live captions</span>
                  <span className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded-full border border-emerald-200/80">● Available</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Transcript</span>
                  <span className="bg-amber-50 text-amber-800 font-semibold text-[10px] px-2 py-0.5 rounded-full border border-amber-200/80">● Planned</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Slides / materials</span>
                  <span className="bg-purple-50 text-purple-700 font-semibold text-[10px] px-2 py-0.5 rounded-full border border-purple-200/80">● To be confirmed</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Sign language</span>
                  <span className="text-slate-400">● Not available</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Accommodation request</span>
                  <span className="font-mono text-purple-700 font-semibold">[path_until_if_staffed]</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <span className="text-slate-500">Video player</span>
                  <span className="text-slate-800 font-medium text-[10px]">Keyboard accessible · captions · transcript · <span className="font-bold text-slate-900">no autoplay with sound</span></span>
                </div>
              </div>

              <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3 text-[11px] text-red-950 font-normal leading-relaxed mt-2">
                <span className="font-bold text-red-900">No generic &quot;accessible event&quot; badge.</span> Concrete features and known limits are published individually, including Not available and To be confirmed. An unknown item is never silently rendered as available — which is exactly what a single badge does.
              </div>
            </div>

            {/* Event access & support Card */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-xs space-y-2">
              <h4 className="text-xs font-bold text-slate-900 mb-1">
                Event access &amp; support
              </h4>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                The registration action points only to the approved registration authority, with no open redirects. An account requirement is shown only where the registration system confirms one.
              </p>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                <span className="font-bold text-slate-900">The join link is never exposed before approved access state</span>, and never indexed in public metadata where access is controlled.
              </p>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Event-specific support appears only if approved; otherwise attendees route to Help Center.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
