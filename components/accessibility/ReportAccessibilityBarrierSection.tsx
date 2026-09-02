'use client';

import { useState } from "react";

interface ReportStateRow {
  badge: React.ReactNode;
  explanation: React.ReactNode;
}

const reportStateRows: ReportStateRow[] = [
  {
    badge: (
      <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold border border-emerald-200/80 inline-block">
        ● Received
      </span>
    ),
    explanation: (
      <>
        Authoritative intake stored. <span className="font-bold text-slate-900">No response-time promise attached.</span>
      </>
    ),
  },
  {
    badge: (
      <span className="bg-amber-50 text-amber-800 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-200/80 inline-block">
        ● Needs information
      </span>
    ),
    explanation: (
      <>
        If targeted clarification is requested — <span className="font-bold text-slate-900">never unnecessary personal or medical detail.</span>
      </>
    ),
  },
  {
    badge: (
      <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200/80 inline-block">
        o Validated
      </span>
    ),
    explanation: (
      <>
        The barrier was reproduced. <span className="font-bold text-slate-900">This does not imply a severity or a fix date.</span>
      </>
    ),
  },
  {
    badge: (
      <span className="bg-amber-50 text-amber-800 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-200/80 inline-block">
        o Workaround available
      </span>
    ),
    explanation: "A verified current workaround exists, with its scope and version visible.",
  },
  {
    badge: (
      <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200/80 inline-block">
        o Remediation in progress
      </span>
    ),
    explanation: (
      <>
        Fix work is source-confirmed. <span className="font-bold text-slate-900">No release date unless approved.</span>
      </>
    ),
  },
  {
    badge: (
      <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200/80 inline-block">
        o Fixed pending verification
      </span>
    ),
    explanation: (
      <>
        A change exists but verification is incomplete. <span className="font-bold text-slate-900">Not called resolved.</span>
      </>
    ),
  },
  {
    badge: (
      <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold border border-emerald-200/80 inline-block">
        ● Verified / closed
      </span>
    ),
    explanation: (
      <>
        Remediation verified per source — <span className="font-bold text-slate-900">with no claim beyond the affected scope.</span>
      </>
    ),
  },
  {
    badge: (
      <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-semibold inline-block">
        ● Duplicate / related
      </span>
    ),
    explanation: (
      <>
        Routed safely, <span className="font-bold text-slate-900">without exposing another reporter&apos;s or customer&apos;s information.</span>
      </>
    ),
  },
];

export default function ReportAccessibilityBarrierSection() {
  const [selectedType, setSelectedType] = useState<string>("barrier");

  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="report-barrier">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          REPORT AN ACCESSIBILITY BARRIER
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Six steps, and none of them asks about you.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Reproduction context only. No diagnosis, no disability category, and no medical or identity document.
        </p>

        {/* Accessibility Feedback Form Card */}
        <div className="mt-8 lg:mt-14 w-full max-w-[800px] rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-8 shadow-sm text-left">
          
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
            Accessibility feedback
          </h3>
          <p className="text-xs text-slate-400 font-normal mb-4 sm:mb-6 pb-3 border-b border-slate-100">
            Intake collects what is needed to reproduce the barrier and nothing more.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5">
            
            {/* Field 1: Report Type */}
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-2">
                What kind of report is this? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedType("barrier")}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
                    selectedType === "barrier"
                      ? "border-slate-900 bg-white text-slate-900 font-bold shadow-sm"
                      : "border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  An accessibility barrier
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType("help")}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
                    selectedType === "help"
                      ? "border-slate-900 bg-white text-slate-900 font-bold shadow-sm"
                      : "border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Product help
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType("doc")}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
                    selectedType === "doc"
                      ? "border-slate-900 bg-white text-slate-900 font-bold shadow-sm"
                      : "border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Document accessibility
                </button>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs flex items-center">
                  <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                    [either_approved_category]
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1.5">
                No diagnosis or disability category is requested at any point. This category describes the report, not the reporter.
              </p>
            </div>

            {/* Red Sensitive Data Warning Box (Mobile view emphasis) */}
            <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs text-red-950 font-normal leading-relaxed my-3">
              <span className="font-bold text-red-900">Do not include sensitive data.</span> No passwords, payment or bank credentials, authentication secrets, or unredacted personal or medical information. This warning appears <span className="font-bold text-slate-900">before</span> the free-text field and the upload control, not after them.
            </div>

            {/* Field 2: Where did this happen */}
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1.5">
                Where did this happen? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Page or workflow"
                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1">
                The minimum needed to locate the barrier.
              </p>
            </div>

            {/* Field 3: Device / Browser */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <label className="text-xs font-bold text-slate-900">
                  Device, browser or assistive technology <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                  [only_if_useful]
                </span>
              </div>
              <input
                type="text"
                placeholder="e.g. NVDA, VoiceOver, Chrome, iOS"
                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1">
                Asked only where it helps reproduce the issue — and <span className="font-bold text-slate-900">optional</span>, because requiring it turns a barrier report into a disclosure.
              </p>
            </div>

            {/* Field 4: Description */}
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1.5">
                What were you trying to do, and what happened? <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                placeholder="Describe the task and the barrier"
                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-1">
                <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                  Conditional - only if approved
                </span>
              </div>
            </div>

            {/* Field 5: Attachment */}
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1.5">
                Attachment <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="Screenshot or log, with redaction guidance"
                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1">
                <span className="font-bold text-slate-900">No medical or identity documents by default.</span> Redact before uploading.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col items-start gap-2">
              <button
                type="submit"
                className="inline-flex min-h-10 sm:min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Submit report</span>
              </button>
              <p className="text-[10px] text-slate-400 font-normal leading-relaxed">
                Idempotent submission — retrying does not create a duplicate.
              </p>
            </div>

            <p className="text-[10px] text-slate-400 font-normal leading-relaxed pt-1 border-t border-slate-100">
              No marketing consent is attached to this form. Reporting a barrier is not an opportunity to collect a subscription.
            </p>

          </form>

          {/* ========================================================================= */}
          {/* MOBILE-ONLY REPORT STATES SUB-CARD (block lg:hidden)                       */}
          {/* ========================================================================= */}
          <div className="block lg:hidden mt-6 pt-5 border-t border-slate-100 text-left">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
              REPORT STATES — WHAT EACH ONE DOES AND DOES NOT MEAN
            </div>
            
            <div className="divide-y divide-slate-100 text-[11px]">
              {reportStateRows.map((row, idx) => (
                <div key={idx} className="py-2 flex flex-col items-start gap-1">
                  <div>{row.badge}</div>
                  <div className="text-slate-600 leading-relaxed text-[11px]">
                    {row.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
