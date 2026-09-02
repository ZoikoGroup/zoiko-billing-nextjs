'use client';

import { useState } from "react";

const commitmentTypes = [
  { id: "initial-response", label: "Initial response" },
  { id: "update-cadence", label: "Update cadence" },
  { id: "resolution-target", label: "Resolution target" },
  { id: "escalation", label: "Escalation" },
  { id: "case-ack", label: "Case acknowledgement" },
  { id: "service-credits", label: "Service credits" },
];

export default function SupportCommitmentsSection() {
  const [activeType, setActiveType] = useState<string>("initial-response");

  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="support-commitments">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SUPPORT COMMITMENTS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Six commitment types, each resolving to one of three outcomes.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Published with full measurement basis, omitted entirely, or replaced by an approved generic
          statement. There is no fourth option where a number is estimated.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/support-policy/sp2.png"
            alt="Six commitment types, each resolving to one of three outcomes"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788177837455.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Commitment Resolver Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left">
            
            <h3 className="text-xs font-bold text-slate-900 mb-1">
              Commitment resolver
            </h3>
            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mb-3">
              Select a commitment type to see what the registry must supply before it can be published — and what the page shows when it cannot.
            </p>

            {/* TYPE Selection Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-4 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                TYPE
              </span>
              {commitmentTypes.map((type) => {
                const isActive = activeType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setActiveType(type.id)}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-blue-200/80 font-bold"
                        : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50"
                    }`}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>

            {/* Publishable Emerald Banner */}
            <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-3.5 text-xs text-emerald-950 font-normal leading-relaxed mb-4">
              <div className="font-bold text-emerald-900 mb-1">
                Publishable — with full measurement basis
              </div>
              <p className="text-[11px]">
                An initial response commitment <span className="font-bold text-slate-900">may</span> be published, because it is the one timing value support operations can reliably control. But the value alone is not the commitment — the measurement basis is.
              </p>
            </div>

            {/* REQUIRED BEFORE PUBLICATION Table Sub-card */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 text-xs space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                REQUIRED BEFORE PUBLICATION — ALL SEVEN
              </div>

              <div className="divide-y divide-slate-100 text-[11px]">
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Start event</span>
                  <span className="font-mono text-purple-700 font-semibold">[accepted_case_or_valid_submission]</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <span className="text-slate-500">Calendar</span>
                  <div className="font-mono text-purple-700 font-semibold text-[10px] flex flex-wrap items-center gap-1">
                    <span>[business_or_elapsed]</span> · <span>[timezone]</span> · <span>[business_days]</span> · <span>[holiday_treatment]</span>
                  </div>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Pause condition</span>
                  <span className="font-mono text-purple-700 font-semibold">[only_if_approved]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Resume condition</span>
                  <span className="font-mono text-purple-700 font-semibold">[what_restarts_timing]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Stop event</span>
                  <span className="font-mono text-purple-700 font-semibold">[what_satisfies_the_target]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Scope</span>
                  <span className="font-mono text-purple-700 font-semibold">[customers_cases_channels_priorities]</span>
                </div>
                <div className="py-1.5 flex items-center justify-between gap-2">
                  <span className="text-slate-500">Exclusions</span>
                  <span className="font-mono text-purple-700 font-semibold">[approved_exceptions_only]</span>
                </div>
                <div className="py-1.5 flex flex-col items-start gap-0.5">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-slate-500">Value</span>
                    <span className="font-mono text-purple-700 font-semibold">[approved_value]</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Resolved from the registry. Never written into policy copy.</span>
                </div>
              </div>
            </div>

            {/* Amber Seven Required Elements Footnote Box */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed mt-4">
              <span className="font-bold text-amber-900">Seven required elements before one number appears.</span> An initial-response target is the most quoted line in any support policy and the most frequently disputed, precisely because the basis is usually missing from it.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
