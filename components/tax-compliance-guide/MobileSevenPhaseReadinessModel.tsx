"use client";

import React, { useState } from "react";

type PhaseState =
  | "Not assessed"
  | "Source needed"
  | "Source unavailable"
  | "Review needed"
  | "Conflicted"
  | "Capability unknown"
  | "Approved orientation"
  | "Superseded";

interface PhaseData {
  id: number;
  name: string;
  defaultState: PhaseState;
  coreQuestion: string;
  subtitle: string;
  questionsToResolve: string[];
  evidenceExpected: string[];
  specialistHandoff: string;
  stopCondition: string;
  primaryOutput: string;
}

const initialPhases: PhaseData[] = [
  {
    id: 1,
    name: "Scope the operating question",
    defaultState: "Approved orientation",
    coreQuestion:
      "What entity, market, offer, transaction or process is being evaluated?",
    subtitle: "Establish the question before looking for an answer to it.",
    questionsToResolve: [
      "What specific tax or compliance question is being asked?",
      "Which entity, market, offer or transaction does it concern?",
      "Who is asking, and what decision depends on the answer?",
      "What is explicitly out of scope for this question?",
      "Who owns the scope, and who can change it?",
    ],
    evidenceExpected: [
      "A written operating question",
      "A scope statement with exclusions",
      "A named scope owner",
    ],
    specialistHandoff: "Billing / product / finance context owner",
    stopCondition:
      "Scope stated as an assumption. A question scoped loosely returns an answer to something adjacent, and the mismatch surfaces only when someone relies on it.",
    primaryOutput: "A scoped operating question with an owner.",
  },
  {
    id: 2,
    name: "Verify availability",
    defaultState: "Capability unknown",
    coreQuestion:
      "Is this capability, jurisdiction, or payment method supported in Zoiko Billing?",
    subtitle: "Confirm software coverage before spending specialist hours.",
    questionsToResolve: [
      "Is the required tax calculation or exemption supported in this market?",
      "Does the local compliance profile exist in Supported Countries?",
      "Is a custom integration or third-party tax engine required?",
    ],
    evidenceExpected: [
      "Supported Countries capability matrix verification",
      "Confirmation of marketplace and tax-engine routing",
    ],
    specialistHandoff: "Product operations / engineering specialist",
    stopCondition:
      "Capability unknown. Product or market availability not established — no downstream assumption permitted.",
    primaryOutput: "Confirmed capability status in Supported Countries.",
  },
  {
    id: 3,
    name: "Source context",
    defaultState: "Source needed",
    coreQuestion:
      "What authoritative statutes, regulations or guidance govern this question?",
    subtitle: "Attach definitive references before drafting configuration rules.",
    questionsToResolve: [
      "What specific tax law, ruling, or statutory guidance applies?",
      "Is the source current, authenticated, and primary?",
      "Does secondary documentation contradict the statute?",
    ],
    evidenceExpected: [
      "Primary statutory or regulatory citation",
      "Version timestamp and legislative effective date",
    ],
    specialistHandoff: "Tax / legal / compliance reviewer",
    stopCondition:
      "Source needed. Question identified but no authoritative source attached — definitive guidance held.",
    primaryOutput: "Validated primary source citation and citation date.",
  },
  {
    id: 4,
    name: "Applicability & specialist review",
    defaultState: "Review needed",
    coreQuestion:
      "Has a qualified tax specialist confirmed the interpretation applies to your business?",
    subtitle: "Only specialist approval clears a hold state.",
    questionsToResolve: [
      "Does this rule apply to the entity's nexus and commercial model?",
      "Are digital services, physical goods, or mixed supplies separated?",
      "Has an approved reviewer signed off on the interpretation?",
    ],
    evidenceExpected: [
      "Signed specialist memorandum or ticket review",
      "Named reviewer with explicit jurisdiction scope",
    ],
    specialistHandoff: "Tax / legal / compliance reviewer",
    stopCondition:
      "Review needed. Specialist approval incomplete — educational continuation allowed; authoritative status blocked.",
    primaryOutput: "Formally approved applicability memorandum.",
  },
  {
    id: 5,
    name: "Configure / operationalize",
    defaultState: "Not assessed",
    coreQuestion:
      "How is the approved tax posture translated into billing rules, rates, and invoices?",
    subtitle: "Configuration must match the specialist ruling precisely.",
    questionsToResolve: [
      "What tax code, rate, or exemption rule is applied to the catalog?",
      "How are rounding, currency conversions, and invoice line items displayed?",
      "Are reverse charges and self-billing rules enforced?",
    ],
    evidenceExpected: [
      "Tested tax configuration rule in staging sandbox",
      "Sample invoice preview matching legal entity rules",
    ],
    specialistHandoff: "Billing administrator / RevOps",
    stopCondition:
      "Not assessed. No governance review exists — owner needed and specialist route required.",
    primaryOutput: "Verified sandbox invoice run with matching audit trail.",
  },
  {
    id: 6,
    name: "Evidence & exceptions",
    defaultState: "Not assessed",
    coreQuestion:
      "What audit artifacts, customer exemption certificates, and records are retained?",
    subtitle: "Every tax decision requires defensible compliance evidence.",
    questionsToResolve: [
      "Where are reseller certificates and VAT validation records archived?",
      "What is the statutory retention period for invoice ledgers?",
      "How are customer disputes and retrospective corrections handled?",
    ],
    evidenceExpected: [
      "Exemption certificate repository mapping",
      "Audit trail export specification",
    ],
    specialistHandoff: "Finance / compliance operations",
    stopCondition:
      "Not assessed. No governance review exists — owner needed and specialist route required.",
    primaryOutput: "Audit readiness package with documented retention schedule.",
  },
  {
    id: 7,
    name: "Monitor change",
    defaultState: "Not assessed",
    coreQuestion:
      "What process monitors statutory changes, nexus threshold triggers, and re-reviews?",
    subtitle: "Tax rules decay on legislative timetables outside product control.",
    questionsToResolve: [
      "What cadenced review interval is established for this rule?",
      "What statutory monitoring source alerts the team to rule changes?",
      "Who is notified when sales volume crosses economic nexus thresholds?",
    ],
    evidenceExpected: [
      "Scheduled calendar re-review date",
      "Automated nexus tracking alerts configured",
    ],
    specialistHandoff: "Governance & compliance steering group",
    stopCondition:
      "Not assessed. No governance review exists — owner needed and specialist route required.",
    primaryOutput: "Active monitoring cadence with designated governance owner.",
  },
];

const allStates: PhaseState[] = [
  "Not assessed",
  "Source needed",
  "Source unavailable",
  "Review needed",
  "Conflicted",
  "Capability unknown",
  "Approved orientation",
  "Superseded",
];

export default function MobileSevenPhaseReadinessModel() {
  const [activePhaseId, setActivePhaseId] = useState<number>(1);
  const [phaseStates, setPhaseStates] = useState<Record<number, PhaseState>>({
    1: "Approved orientation",
    2: "Capability unknown",
    3: "Source needed",
    4: "Review needed",
    5: "Not assessed",
    6: "Not assessed",
    7: "Not assessed",
  });

  const activePhase =
    initialPhases.find((p) => p.id === activePhaseId) || initialPhases[0];

  const handleStateChange = (state: PhaseState) => {
    setPhaseStates((prev) => ({
      ...prev,
      [activePhaseId]: state,
    }));
  };

  const getBadgeStyle = (state: PhaseState) => {
    switch (state) {
      case "Approved orientation":
        return "border-emerald-200 bg-emerald-50 text-emerald-700";
      case "Source needed":
      case "Review needed":
        return "border-amber-200 bg-amber-50 text-amber-700";
      case "Conflicted":
      case "Source unavailable":
        return "border-rose-200 bg-rose-50 text-rose-700";
      case "Capability unknown":
      case "Not assessed":
      case "Superseded":
      default:
        return "border-indigo-100 bg-indigo-50/70 text-indigo-700";
    }
  };

  return (
    <div className="w-full font-[family-name:var(--font-inter)]">
      {/* 7 PHASE CARDS GRID */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {initialPhases.map((phase) => {
          const isActive = phase.id === activePhaseId;
          const currentState = phaseStates[phase.id];
          return (
            <button
              key={phase.id}
              type="button"
              onClick={() => setActivePhaseId(phase.id)}
              className={`flex flex-col items-start rounded-2xl border p-3 text-left transition ${
                isActive
                  ? "border-[#1D70F5] bg-blue-50/30 shadow-sm"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <span className="text-[10px] font-semibold text-[#7890b2]">
                Phase {phase.id}
              </span>

              <h4 className="!m-0 mt-0.5 text-xs font-bold leading-tight text-[#091127]">
                {phase.name}
              </h4>

              <div className="mt-2.5">
                <span
                  className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[9.5px] font-semibold border ${getBadgeStyle(
                    currentState
                  )}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {currentState}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* CARRY-FORWARD RECORD BANNER */}
      <div className="mt-5 rounded-2xl border border-rose-300 bg-rose-50/40 p-4 sm:p-5">
        <p className="!m-0 text-[10px] font-bold uppercase tracking-wider text-rose-800 sm:text-xs">
          Carry-forward record · 6 unresolved stop conditions
        </p>

        <p className="!m-0 mt-1.5 text-xs leading-relaxed text-rose-950/80">
          These remain open regardless of how far the guide is read. A later phase
          cannot erase an earlier unresolved condition, and nothing downstream is
          presented as approved while any of these stands.
        </p>

        <ul className="!m-0 !mt-3 space-y-2 !p-0 list-none text-xs leading-relaxed text-rose-950">
          <li className="flex items-start gap-1.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>
              <strong>Phase 2 — Capability unknown.</strong> Product or market
              availability not established — no downstream assumption permitted.
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>
              <strong>Phase 3 — Source needed.</strong> Question identified but no
              authoritative source attached — definitive guidance held.
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>
              <strong>Phase 4 — Review needed.</strong> Specialist approval
              incomplete — educational continuation allowed; authoritative status
              blocked.
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>
              <strong>Phase 5 — Not assessed.</strong> No governance review
              exists — owner needed and specialist route required.
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>
              <strong>Phase 6 — Not assessed.</strong> No governance review
              exists — owner needed and specialist route required.
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
            <span>
              <strong>Phase 7 — Not assessed.</strong> No governance review
              exists — owner needed and specialist route required.
            </span>
          </li>
        </ul>
      </div>

      {/* ACTIVE PHASE INSPECTOR CARD */}
      <div className="mt-5 rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-sm">
        {/* HEADER */}
        <div>
          <span className="text-[10px] font-semibold text-[#7890b2]">
            Phase {activePhase.id} of 7
          </span>

          <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 mt-0.5 text-base font-bold text-[#091127] sm:text-lg">
            {activePhase.name}
          </h3>

          <p className="!m-0 mt-1.5 text-xs text-[#5d7192]">
            <strong className="font-semibold text-[#091127]">
              Core question:
            </strong>{" "}
            {activePhase.coreQuestion}
          </p>

          <p className="!m-0 mt-0.5 text-[11px] text-[#7890b2]">
            {activePhase.subtitle}
          </p>
        </div>

        {/* QUESTIONS TO RESOLVE */}
        <div className="mt-5 border-t border-[#edf0f4] pt-4">
          <p className="!m-0 text-[10px] font-bold uppercase tracking-wider text-[#7890b2]">
            Questions to resolve
          </p>

          <ul className="!m-0 !mt-2.5 space-y-2 !p-0 list-none">
            {activePhase.questionsToResolve.map((q, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs leading-relaxed text-[#5d7192]"
              >
                <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border border-[#1D70F5] bg-blue-50 text-[9px] font-bold text-[#1D70F5]">
                  ✓
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* EVIDENCE EXPECTED */}
        <div className="mt-4 border-t border-[#edf0f4] pt-4">
          <p className="!m-0 text-[10px] font-bold uppercase tracking-wider text-[#7890b2]">
            Evidence expected
          </p>

          <ul className="!m-0 !mt-2.5 space-y-2 !p-0 list-none">
            {activePhase.evidenceExpected.map((e, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs leading-relaxed text-[#5d7192]"
              >
                <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border border-[#1D70F5] bg-blue-50 text-[9px] font-bold text-[#1D70F5]">
                  ✓
                </span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SPECIALIST HANDOFF */}
        <div className="mt-4 border-t border-[#edf0f4] pt-4">
          <p className="!m-0 text-[10px] font-bold uppercase tracking-wider text-[#7890b2]">
            Specialist handoff
          </p>

          <div className="mt-2 inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-[#091127]">
            {activePhase.specialistHandoff}
          </div>
        </div>

        {/* STOP CONDITION */}
        <div className="mt-4 border-t border-[#edf0f4] pt-4">
          <p className="!m-0 text-[10px] font-bold uppercase tracking-wider text-[#7890b2]">
            Stop condition
          </p>

          <div className="mt-2 rounded-xl border border-rose-200 bg-rose-50/70 p-3 text-xs leading-relaxed text-rose-950">
            {activePhase.stopCondition}
          </div>
        </div>

        {/* PRIMARY OUTPUT */}
        <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/30 p-3 text-xs leading-relaxed text-[#091127]">
          <strong className="font-semibold">Primary output:</strong>{" "}
          <span className="text-[#5d7192]">{activePhase.primaryOutput}</span>
        </div>

        {/* SET THIS PHASE'S STATE */}
        <div className="mt-5 border-t border-[#edf0f4] pt-4">
          <p className="!m-0 text-[10px] font-bold uppercase tracking-wider text-[#7890b2]">
            Set this phase's state
          </p>

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {allStates.map((st) => {
              const isSelected = phaseStates[activePhase.id] === st;
              return (
                <button
                  key={st}
                  type="button"
                  onClick={() => handleStateChange(st)}
                  className={`rounded-full px-2.5 py-1 text-[10.5px] font-medium transition ${
                    isSelected
                      ? "border border-blue-500 bg-blue-50 text-blue-700 shadow-xs font-semibold"
                      : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {st}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
