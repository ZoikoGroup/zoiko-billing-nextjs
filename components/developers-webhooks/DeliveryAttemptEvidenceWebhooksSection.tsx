'use client';

import { useState } from "react";

interface DeliveryFixture {
  id: string;
  eventType: string;
  subscription: string;
  attempts: number;
  result: string;
  resultType: "success" | "error" | "warning";
  endpointUrl: string;
  occurred: string;
  verificationStatus: string;
  nextAction: string;
  guarantee: string;
  payloadStatus: string;
  responseBodyStatus: string;
  timelineDetail: string;
}

const deliveryFixtures: DeliveryFixture[] = [
  {
    id: "dlv_****_a417",
    eventType: "{approved_event_type}",
    subscription: "orders-sync-prod",
    attempts: 1,
    result: "Accepted",
    resultType: "success",
    endpointUrl: "https://*******/hooks/*****",
    occurred: "19 Aug 2026, 09:14:02 UTC",
    verificationStatus: "Verified",
    nextAction: "No further attempt required",
    guarantee: "Published",
    payloadStatus: "Redacted by default",
    responseBodyStatus: "Not surfaced",
    timelineDetail: "Accepted by receiver · 09:14:02 UTC · duration recorded",
  },
  {
    id: "dlv_****_b902",
    eventType: "{approved_event_type}",
    subscription: "ledger-bridge-prod",
    attempts: 3,
    result: "Receiver failure",
    resultType: "error",
    endpointUrl: "https://*******/ledger/*****",
    occurred: "19 Aug 2026, 08:30:11 UTC",
    verificationStatus: "Verified",
    nextAction: "Scheduled retry pending",
    guarantee: "Published",
    payloadStatus: "Redacted by default",
    responseBodyStatus: "Not surfaced",
    timelineDetail: "Receiver returned HTTP 500 · 08:30:11 UTC",
  },
  {
    id: "dlv_****_c663",
    eventType: "{approved_event_type}",
    subscription: "analytics-feed-prod",
    attempts: 2,
    result: "Verification failed",
    resultType: "error",
    endpointUrl: "https://*******/analytics/*****",
    occurred: "19 Aug 2026, 07:12:45 UTC",
    verificationStatus: "Failed",
    nextAction: "Requires security review",
    guarantee: "Unspecified",
    payloadStatus: "Redacted by default",
    responseBodyStatus: "Not surfaced",
    timelineDetail: "Signature verification failed · 07:12:45 UTC",
  },
  {
    id: "dlv_****_d116",
    eventType: "{approved_event_type}",
    subscription: "orders-sync-prod",
    attempts: 1,
    result: "Timeout",
    resultType: "warning",
    endpointUrl: "https://*******/hooks/*****",
    occurred: "19 Aug 2026, 06:05:00 UTC",
    verificationStatus: "Verified",
    nextAction: "Retry in progress",
    guarantee: "Published",
    payloadStatus: "Redacted by default",
    responseBodyStatus: "Not surfaced",
    timelineDetail: "HTTP connection timed out after 5000ms",
  },
  {
    id: "dlv_****_e740",
    eventType: "{approved_event_type}",
    subscription: "partner-notify-test",
    attempts: 1,
    result: "Connection error",
    resultType: "error",
    endpointUrl: "https://*******/test/*****",
    occurred: "19 Aug 2026, 05:00:22 UTC",
    verificationStatus: "Pending",
    nextAction: "Endpoint check required",
    guarantee: "Unspecified",
    payloadStatus: "Redacted by default",
    responseBodyStatus: "Not surfaced",
    timelineDetail: "DNS resolution failure at 05:00:22 UTC",
  },
];

export default function DeliveryAttemptEvidenceWebhooksSection() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeItem = deliveryFixtures[selectedIdx];

  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="attempt-evidence">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DELIVERY ATTEMPT EVIDENCE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Metadata by default. Content only by permission.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Select a delivery to inspect its attempt timeline. Every value is synthetic, and
          payload plus response content are redacted by default rather than shown and then
          apologized for.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/devolpers-webhooks/dw4.png"
            alt="Metadata by default. Content only by permission"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787665686921.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Interactive Delivery Console Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-1">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Delivery log
                </h3>
                <div className="text-[11px] text-slate-400 font-normal">
                  Synthetic fixtures - safe identifiers only
                </div>
              </div>
              <span className="bg-red-50 text-red-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-red-200/60 shrink-0">
                ■ Environment: Production
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 my-3 text-[10px] text-slate-500 font-normal">
              <span className="font-semibold text-slate-700">Filters:</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Time range</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Environment</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Event type</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Subscription</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Result category</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Attempt</span>
            </div>

            {/* Delivery Table */}
            <div className="overflow-x-auto border border-slate-100 rounded-xl mb-4">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-3">DELIVERY ID</th>
                    <th scope="col" className="py-2.5 px-3">EVENT TYPE</th>
                    <th scope="col" className="py-2.5 px-3">SUBSCRIPTION</th>
                    <th scope="col" className="py-2.5 px-3">ATTEMPTS</th>
                    <th scope="col" className="py-2.5 px-3">RESULT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  {deliveryFixtures.map((item, idx) => {
                    const isSelected = selectedIdx === idx;
                    return (
                      <tr
                        key={idx}
                        onClick={() => setSelectedIdx(idx)}
                        className={`cursor-pointer transition ${
                          isSelected ? "bg-blue-50/80 font-medium" : "hover:bg-slate-50/50"
                        }`}
                      >
                        <td className="py-2.5 px-3 font-bold text-slate-900">{item.id}</td>
                        <td className="py-2.5 px-3">
                          <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold">
                            {item.eventType}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-600">{item.subscription}</td>
                        <td className="py-2.5 px-3 text-slate-600">{item.attempts}</td>
                        <td className="py-2.5 px-3">
                          {item.resultType === "success" && (
                            <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-emerald-200/60 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {item.result}
                            </span>
                          )}
                          {item.resultType === "warning" && (
                            <span className="bg-amber-50 text-amber-800 font-semibold text-[10px] px-2 py-0.5 rounded border border-amber-200/60 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              {item.result}
                            </span>
                          )}
                          {item.resultType === "error" && (
                            <span className="bg-red-50 text-red-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-red-200/60 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                              {item.result}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Selected Item Drawer View */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-slate-900 text-sm">{activeItem.id}</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded px-2 py-0.5 text-[10px] font-semibold">
                  ● {activeItem.result}
                </span>
                <span className="bg-red-50 text-red-700 border border-red-200/80 rounded px-2 py-0.5 text-[10px] font-semibold">
                  ■ Production
                </span>
              </div>

              <div className="divide-y divide-slate-200/60 text-[11px]">
                <div className="py-2">
                  <div className="text-slate-500 font-normal">Event type:</div>
                  <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block my-0.5">
                    {activeItem.eventType}
                  </span>
                  <div className="text-[10px] text-slate-400">Canonical identifier from the approved registry</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Subscription:</div>
                  <div className="font-bold text-slate-900">{activeItem.subscription}</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Endpoint URL:</div>
                  <div className="font-mono text-slate-800">{activeItem.endpointUrl}</div>
                  <div className="text-[10px] text-slate-400">Masked by permission</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Occurred:</div>
                  <div className="text-slate-800 font-medium">{activeItem.occurred}</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Verification:</div>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded px-2 py-0.5 text-[10px] font-semibold inline-block mb-0.5">
                    ● {activeItem.verificationStatus}
                  </span>
                  <div className="text-[10px] text-slate-400">Method and status only — no signature or secret material</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Next action:</div>
                  <div className="text-slate-800 font-medium">{activeItem.nextAction}</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Delivery guarantee:</div>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded px-2 py-0.5 text-[10px] font-semibold inline-block">
                    ● {activeItem.guarantee}
                  </span>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Payload:</div>
                  <span className="bg-red-50 text-red-700 border border-red-200 rounded px-2 py-0.5 text-[10px] font-semibold inline-block mb-0.5">
                    ● {activeItem.payloadStatus}
                  </span>
                  <div className="text-[10px] text-slate-400">Revealed only through role-appropriate, audited product behavior</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Receiver response body:</div>
                  <span className="bg-red-50 text-red-700 border border-red-200 rounded px-2 py-0.5 text-[10px] font-semibold inline-block mb-0.5">
                    ● {activeItem.responseBodyStatus}
                  </span>
                  <div className="text-[10px] text-slate-400">Never treated as analytics data</div>
                </div>
              </div>

              {/* Timeline Header & Item */}
              <div className="mt-3 text-xs font-bold text-slate-900 uppercase tracking-wider">
                ATTEMPT TIMELINE
              </div>
              <div className="mt-1.5 p-2 bg-white rounded-lg border border-slate-200/80 text-[11px]">
                <div className="font-bold text-slate-900">Attempt 1 <span className="text-emerald-700 font-semibold">● Accepted by receiver</span></div>
                <div className="text-slate-500 text-[10px]">{activeItem.timelineDetail}</div>
              </div>

              {/* Timeline Callout */}
              <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-[11px] text-slate-700 font-normal leading-relaxed">
                <span className="font-bold text-slate-900">Accepted means the receiver acknowledged the delivery.</span> It does not mean the consumer finished business processing — that outcome lives in your system, not in this log.
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                <button type="button" className="rounded-full border border-slate-300 bg-white px-3 py-1 text-[10px] font-semibold text-slate-700">
                  Copy safe ID
                </button>
                <button type="button" className="rounded-full border border-slate-300 bg-white px-3 py-1 text-[10px] font-semibold text-slate-700">
                  Open event definition
                </button>
                <button type="button" className="rounded-full border border-slate-300 bg-white px-3 py-1 text-[10px] font-semibold text-slate-700">
                  Contact support with safe evidence
                </button>
              </div>

            </div>

          </div>

          {/* Red Danger Warning Box */}
          <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs text-red-950 font-normal leading-relaxed mb-4">
            <span className="font-bold text-red-900">No payload, secret, signature or raw receiver response appears in this list.</span> Copy controls are scoped so that copying a safe identifier cannot pick up adjacent payload or hidden text, and feedback widgets never auto-attach raw content.
          </div>

          {/* Default visibility by field class Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-8 text-xs">
            <div className="text-xs font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              Default visibility by field class.
            </div>

            <div className="divide-y divide-slate-100">
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-bold text-slate-900">Safe IDs, timestamps, event type, attempt number</span>
                <span className="text-slate-600">Visible according to role</span>
              </div>

              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-bold text-slate-900">Endpoint URL</span>
                <span className="text-slate-600">Masked or partial based on permission</span>
              </div>

              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-bold text-slate-900">Payload</span>
                <span className="text-slate-600">
                  <span className="font-bold text-slate-900">Hidden or redacted by default</span>, with a permission and audit requirement if available
                </span>
              </div>

              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-bold text-slate-900">Verification headers / material</span>
                <span className="text-slate-600">Never exposed beyond policy-safe diagnostics</span>
              </div>

              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-bold text-slate-900">Receiver response body</span>
                <span className="text-slate-600">
                  Redacted, truncated or unavailable by default — <span className="font-bold text-slate-900">never analyzed as telemetry</span>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
