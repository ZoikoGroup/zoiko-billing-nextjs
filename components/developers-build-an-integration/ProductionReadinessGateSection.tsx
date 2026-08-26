'use client';

import { useState } from "react";

interface ReadinessGateItem {
  id: string;
  title: string;
  authority: string;
  description: string;
}

const readinessGates: ReadinessGateItem[] = [
  {
    id: "gate-1",
    title: "Capability and source",
    authority: "Authority: API Overview · Documentation",
    description: "All required API, event, auth, sandbox and SDK facts have canonical owners and verified publication state.",
  },
  {
    id: "gate-2",
    title: "Identity and permissions",
    authority: "Authority: Authentication",
    description: "Production integration identity exists; least privilege reviewed; credential owner, rotation and revocation path assigned.",
  },
  {
    id: "gate-3",
    title: "Object and state model",
    authority: "Authority: API Documentation",
    description: "Team understands authoritative objects, states, actions and mutability, plus invalid and conflict cases.",
  },
  {
    id: "gate-4",
    title: "Failure semantics",
    authority: "Authority: API Documentation",
    description: "Validation, permission, conflict, dependency, service, partial, duplicate, stale and unknown-outcome handling defined where applicable.",
  },
  {
    id: "gate-5",
    title: "Events",
    authority: "Authority: Webhooks",
    description: "Verification, acknowledgement, retries, duplicate and order behavior, replay and receiver failure ownership tested where used.",
  },
  {
    id: "gate-6",
    title: "Safe repetition",
    authority: "Authority: API Documentation",
    description: "Documented idempotency, retry and reconciliation behavior implemented exactly as specified for each state-changing operation.",
  },
  {
    id: "gate-7",
    title: "Sandbox evidence",
    authority: "Authority: Developer Sandbox",
    description: "Required non-production scenarios passed; production differences explicitly reviewed.",
  },
  {
    id: "gate-8",
    title: "Security and data governance",
    authority: "Authority: Security owner",
    description: "Secrets, permissions, data minimization, logging, retention, downstream access and third-party boundaries approved.",
  },
  {
    id: "gate-9",
    title: "Observability",
    authority: "Authority: This page · Operations",
    description: "Safe identifiers, logs, metrics, alerts, evidence, exception owner and support path ready.",
  },
  {
    id: "gate-10",
    title: "Reconciliation",
    authority: "Authority: This page · Operations",
    description: "Runbook tested; owner can determine actual state before any unsafe retry or corrective action.",
  },
  {
    id: "gate-11",
    title: "Change ownership",
    authority: "Authority: API Documentation · Webhooks",
    description: "Version, deprecation and changelog source monitored; migration owner assigned.",
  },
  {
    id: "gate-12",
    title: "Rollout and backout",
    authority: "Authority: This page",
    description: "Scope, validation criteria, pause and recovery path, and communication owner defined.",
  },
  {
    id: "gate-13",
    title: "Operational ownership",
    authority: "Authority: This page",
    description: "Named production owner, escalation path, documentation and handover complete.",
  },
];

export default function ProductionReadinessGateSection() {
  const [checkedGates, setCheckedGates] = useState<Record<string, boolean>>({});

  const toggleGate = (id: string) => {
    setCheckedGates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const markedCount = Object.values(checkedGates).filter(Boolean).length;

  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="readiness-gate">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          PRODUCTION READINESS GATE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Thirteen gates, and a checkbox is not approval.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Tick the gates you have genuinely satisfied. The verdict below deliberately refuses
          to congratulate you.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/developers-build-an-integration/dban6.png"
            alt="Thirteen gates, and a checkbox is not approval"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787669293609.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Readiness Planning Aid Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            {/* Card Header */}
            <div className="flex items-center justify-between gap-3 mb-3 pb-2.5 border-b border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Readiness planning aid
                </h3>
                <div className="text-[11px] text-slate-400 font-normal">
                  Local to this browser - not recorded, not submitted, not an approval
                </div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium shrink-0">
                {markedCount} of 13 gates marked
              </span>
            </div>

            {/* 13 Gate Checkbox Rows */}
            <div className="divide-y divide-slate-100">
              {readinessGates.map((gate) => {
                const isChecked = !!checkedGates[gate.id];
                return (
                  <label
                    key={gate.id}
                    className="py-3 flex items-start gap-3 cursor-pointer hover:bg-slate-50/50 transition rounded-lg px-1"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleGate(gate.id)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mt-0.5 cursor-pointer shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-900">
                          {gate.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          {gate.authority}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-normal leading-relaxed mt-0.5">
                        {gate.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

          </div>

          {/* Red Callout Box */}
          <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs text-red-950 font-normal leading-relaxed mb-3">
            <span className="font-bold text-red-900">
              {markedCount === 0 ? "No gates marked." : `${markedCount} of 13 gates marked.`}
            </span>{" "}
            This aid is local to your browser. Nothing is recorded, submitted or shared, and no result here is visible to Zoiko Billing.
          </div>

          {/* Amber Disclaimer Callout Box */}
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed mb-6">
            <span className="font-bold text-amber-900">No readiness theater.</span> A green badge is never displayed because a developer checked boxes in a browser. Readiness is a governance conclusion based on applicable evidence and responsible owner review — a public static checklist can support planning, but it cannot confer approval.
          </div>

        </div>

      </div>
    </section>
  );
}
