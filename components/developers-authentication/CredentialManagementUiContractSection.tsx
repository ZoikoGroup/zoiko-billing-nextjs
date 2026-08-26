'use client';

import { useState } from "react";

interface CredentialFixture {
  name: string;
  method: string;
  owner: string;
  environment: "Production" | "Test";
  permission: string;
  safeId: string;
  purpose: string;
  survivesDeparture: string;
  lastReviewed: string;
  rotationHistory: string;
  auditEvents: string;
}

const fixtures: CredentialFixture[] = [
  {
    name: "service-billing-prod",
    method: "{verified_method}",
    owner: "Platform Engineering",
    environment: "Production",
    permission: "Read + write",
    safeId: "cred_****_4F21",
    purpose: "Scheduled billing writes from the internal platform.",
    survivesDeparture: "Yes — owned by a team, survives departure",
    lastReviewed: "Last reviewed 02 Aug 2026",
    rotationHistory: "Reissued 02 Aug 2026 — prior identity revoked",
    auditEvents: "5 access events recorded",
  },
  {
    name: "service-billing-test",
    method: "{verified_method}",
    owner: "Platform Engineering",
    environment: "Test",
    permission: "Read-only",
    safeId: "cred_****_99A2",
    purpose: "Test environment billing verification.",
    survivesDeparture: "Yes — owned by a team",
    lastReviewed: "Last reviewed 15 Jul 2026",
    rotationHistory: "Created 15 Jul 2026",
    auditEvents: "2 access events recorded",
  },
  {
    name: "partner-readonly-01",
    method: "{verified_method}",
    owner: "Partnerships",
    environment: "Production",
    permission: "Read-only, scoped",
    safeId: "cred_****_18C4",
    purpose: "External partner read access.",
    survivesDeparture: "Yes — team owned",
    lastReviewed: "Last reviewed 20 Jun 2026",
    rotationHistory: "Created 20 Jun 2026",
    auditEvents: "12 access events recorded",
  },
  {
    name: "legacy-integration-02",
    method: "{verified_method}",
    owner: "Unassigned",
    environment: "Production",
    permission: "Requires review",
    safeId: "cred_****_007B",
    purpose: "Legacy system migration interface.",
    survivesDeparture: "Needs owner assignment",
    lastReviewed: "Pending review",
    rotationHistory: "Created 01 Jan 2025",
    auditEvents: "44 access events recorded",
  },
  {
    name: "decommissioned-svc",
    method: "{verified_method}",
    owner: "Platform Engineering",
    environment: "Production",
    permission: "None — revoked",
    safeId: "cred_****_DEAD",
    purpose: "Decommissioned service reference.",
    survivesDeparture: "Revoked",
    lastReviewed: "Revoked 10 May 2026",
    rotationHistory: "Revoked 10 May 2026",
    auditEvents: "8 access events recorded",
  },
];

export default function CredentialManagementUiContractSection() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeItem = fixtures[selectedIdx];

  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="ui-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CREDENTIAL MANAGEMENT UI CONTRACT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          No sensitive value appears in the table. Ever.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Select a row to open the detail drawer. Every value shown is safe metadata — synthetic,
          masked and nonfunctional.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/devolpers-authentication/da4.png"
            alt="No sensitive value appears in the table. Ever."
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787663654739.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Interactive Credential Console Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            {/* Header & Create CTA */}
            <div className="flex items-center justify-between gap-3 mb-1">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Authentication / Credentials
                </h3>
                <div className="text-[11px] text-slate-400 font-normal">
                  Synthetic fixtures - masked identifiers only
                </div>
              </div>
              <button
                type="button"
                className="bg-[#1D70F5] text-white font-semibold text-xs rounded-full px-3.5 py-1.5 shadow-sm hover:bg-blue-600 transition shrink-0"
              >
                Create access
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 my-3 text-[10px] text-slate-500 font-normal">
              <span className="font-semibold text-slate-700">Filters:</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Environment</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Status</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Owner</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Method</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">Permission</span>
            </div>

            {/* Credentials Table */}
            <div className="overflow-x-auto border border-slate-100 rounded-xl mb-4">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-3">NAME</th>
                    <th scope="col" className="py-2.5 px-3">METHOD</th>
                    <th scope="col" className="py-2.5 px-3">OWNER</th>
                    <th scope="col" className="py-2.5 px-3">ENVIRONMENT</th>
                    <th scope="col" className="py-2.5 px-3">PERMISSION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  {fixtures.map((item, idx) => {
                    const isSelected = selectedIdx === idx;
                    return (
                      <tr
                        key={idx}
                        onClick={() => setSelectedIdx(idx)}
                        className={`cursor-pointer transition ${
                          isSelected ? "bg-blue-50/80 font-medium" : "hover:bg-slate-50/50"
                        }`}
                      >
                        <td className="py-2.5 px-3 font-bold text-slate-900">{item.name}</td>
                        <td className="py-2.5 px-3">
                          <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold">
                            {item.method}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-600">{item.owner}</td>
                        <td className="py-2.5 px-3">
                          {item.environment === "Production" ? (
                            <span className="bg-red-50 text-red-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-red-200/60 inline-flex items-center gap-1">
                              <span className="w-1 h-1 rounded-sm bg-red-500" />
                              Production
                            </span>
                          ) : (
                            <span className="bg-blue-50 text-blue-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-blue-200/60 inline-flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-blue-500" />
                              Test
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-slate-600">{item.permission}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Selected Item Drawer View */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-slate-900 text-sm">{activeItem.name}</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded px-2 py-0.5 text-[10px] font-semibold">
                  ● Active
                </span>
                <span className="bg-red-50 text-red-700 border border-red-200/80 rounded px-2 py-0.5 text-[10px] font-semibold">
                  ■ Production
                </span>
              </div>

              <div className="divide-y divide-slate-200/60 text-[11px]">
                <div className="py-2">
                  <div className="text-slate-500 font-normal">Safe identifier:</div>
                  <div className="font-mono font-bold text-slate-800">{activeItem.safeId}</div>
                  <div className="text-[10px] text-slate-400">Stable link for support correlation, not credential material and not reversible into key</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Purpose:</div>
                  <div className="text-slate-800 font-medium">{activeItem.purpose}</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Method:</div>
                  <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block my-0.5">
                    {activeItem.method}
                  </span>
                  <div className="text-[10px] text-slate-400">Rendered from the verified method registry</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Owner:</div>
                  <div className="font-bold text-slate-900">{activeItem.owner}</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Permissions:</div>
                  <div className="font-bold text-slate-900">{activeItem.permission}</div>
                  <div className="text-[10px] text-slate-400">Plain-language summary; scope identifiers appear only when source-approved</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Survives departure?:</div>
                  <div className="text-slate-800 font-medium">{activeItem.survivesDeparture}</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Review:</div>
                  <div className="text-slate-800 font-medium">{activeItem.lastReviewed}</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Rotation history:</div>
                  <div className="text-slate-800 font-medium">{activeItem.rotationHistory}</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal">Audit:</div>
                  <div className="text-slate-800 font-medium">{activeItem.auditEvents}</div>
                </div>

                <div className="py-2">
                  <div className="text-slate-500 font-normal mb-1">Secret value:</div>
                  <span className="bg-red-50 text-red-700 border border-red-200 rounded px-2 py-0.5 text-[10px] font-semibold inline-block mb-1">
                    ● Not Displayed
                  </span>
                  <div className="text-[10px] text-slate-400">Reveal and copy occur only through the approved product surface, never in a list or drawer.</div>
                </div>
              </div>

              {/* Warning Callout */}
              <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-[11px] text-slate-700 font-normal leading-relaxed">
                <span className="font-bold text-slate-900">Production identity with write capability.</span> Any rotation or revocation here requires an impact preview and an authority check before confirmation, because dependent workloads stop when it changes.
              </div>
            </div>

          </div>

          {/* Red Danger Warning Box */}
          <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs text-red-950 font-normal leading-relaxed mb-4">
            <span className="font-bold text-red-900">Nothing in this table is a secret, and nothing here can be turned into one.</span> Safe identifiers are stable enough for operations and support correlation, but are not themselves credential material. Reveal and copy happen only through the approved product surface, never in a list view.
          </div>

          {/* Required UI Regions Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4 text-xs">
            <div className="text-xs font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              Required UI Regions.
            </div>

            <div className="space-y-3 text-slate-600">
              <div>
                <span className="font-bold text-slate-900">Header:</span> Name, status, environment, owner, safe identifier, permission summary and source freshness where supported
              </div>
              <div>
                <span className="font-bold text-slate-900">Top actions:</span> Create, rotate or reissue, revoke, review permissions — <span className="font-bold text-slate-900">only actions the user is authorized to perform</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Filters:</span> Status, environment, owner, method, workspace context and permission category where the model supports it
              </div>
              <div>
                <span className="font-bold text-slate-900">Detail drawer:</span> Purpose, method, environment, permissions, owner, safe metadata, related audit events and lifecycle history
              </div>
              <div>
                <span className="font-bold text-slate-900">Sensitive value:</span> <span className="font-bold text-slate-900">Never displayed in the table</span> — reveal and copy only through approved product behavior
              </div>
              <div>
                <span className="font-bold text-slate-900">Bulk actions:</span> Default to none for destructive credential actions unless security explicitly supports safe bulk management
              </div>
            </div>
          </div>

          {/* What "safe-metadata" means Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left text-xs mb-8">
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              What &quot;safe-metadata&quot; means
            </h3>
            <p className="text-xs text-slate-500 font-normal mb-4">
              A value is safe to display when it identifies a record for operations and support, but cannot be used to authenticate, and cannot be reversed into something that can.
            </p>

            <div className="space-y-2">
              <div className="rounded-lg bg-red-50/60 border border-red-100 p-2.5 text-[11px] text-red-900 font-medium">
                ● A masked fragment that distinguishes records without revealing material
              </div>
              <div className="rounded-lg bg-red-50/60 border border-red-100 p-2.5 text-[11px] text-red-900 font-medium">
                ● An owner and environment label
              </div>
              <div className="rounded-lg bg-red-50/60 border border-red-100 p-2.5 text-[11px] text-red-900 font-medium">
                ● A permission summary in plain language
              </div>
              <div className="rounded-lg bg-red-50/60 border border-red-100 p-2.5 text-[11px] text-red-900 font-medium">
                ● A creation or review timestamp
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-normal leading-relaxed mt-4 pt-3 border-t border-slate-100">
              Activity and last-used telemetry appear only where the product genuinely records them — an invented &quot;last used&quot; column is a fabricated security signal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
