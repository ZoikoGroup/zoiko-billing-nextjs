"use client";

import React, { useState } from "react";
import Link from "next/link";

type StatusState =
  | "Ready"
  | "Loading"
  | "Success"
  | "Validation error"
  | "Permission error"
  | "Unknown outcome";

const statuses: StatusState[] = [
  "Ready",
  "Loading",
  "Success",
  "Validation error",
  "Permission error",
  "Unknown outcome",
];

const responsesByStatus: Record<StatusState, string> = {
  Ready: `// No request sent yet.

Select an operation and send to populate this pane.
Response shape is defined by canonical documentation,
not by this overview page.`,
  Loading: `// Sending request to [current_environment]...
// Awaiting response from [confirmed_resource_path]...`,
  Success: `HTTP/1.1 200 OK
Content-Type: application/json
Idempotency-Key: [confirmed_idempotency_key]
Request-Id: [id_protocol_supported]

{
  "status": "success",
  "resource": "[confirmed_resource]",
  "identifier": "[identifier_shaped]",
  "workflow_state": "recorded",
  "evidence": "[confirmed_record_signature]"
}`,
  "Validation error": `HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": {
    "type": "validation_error",
    "field": "[field_from_canonical_schema]",
    "message": "Value must match canonical schema rules.",
    "doc_url": "/developers-api-documentation"
  }
}`,
  "Permission error": `HTTP/1.1 403 Forbidden
Content-Type: application/json

{
  "error": {
    "type": "permission_boundary_error",
    "required_scope": "[scoped_from_permission]",
    "message": "Active credential lacks permission for this action on this object."
  }
}`,
  "Unknown outcome": `HTTP/1.1 504 Gateway Timeout
// Read-before-repeat protocol required.
// Do not assume failure. Verify record status before reissuing.`,
};

export default function MobileHeroInspector() {
  const [activeStatus, setActiveStatus] = useState<StatusState>("Ready");
  const [copiedReq, setCopiedReq] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const requestText = `// Zero fake syntax. Canonical headers, fields and syntax
// are supplied by API Documentation before publication.

METHOD: [confirmed_operation]
PATH:   [confirmed_resource_path]

HEADERS:
  Authorization: Bearer [confirmed_token]
  Content-Type: application/json
  Idempotency-Key: [confirmed_idempotency_key]

BODY:
  [field_from_canonical_schema] : [value_shaped]
  [field_from_canonical_schema] : [value_shaped]
  [reference_to_billing_object] : [identifier_shaped]`;

  const copyRequest = () => {
    navigator.clipboard?.writeText(requestText);
    setCopiedReq(true);
    setTimeout(() => setCopiedReq(false), 2000);
  };

  const copyResponse = () => {
    navigator.clipboard?.writeText(responsesByStatus[activeStatus]);
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-4 font-[family-name:var(--font-inter)] text-left">
      {/* Main Inspector Card */}
      <div className="w-full rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
        {/* Resource and Operation */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-100 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-medium">Resource:</span>
            <span className="rounded bg-indigo-50 border border-indigo-100/80 px-2 py-0.5 font-mono text-[11px] text-indigo-700">
              [confirmed_resource]
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-medium">Operation:</span>
            <span className="rounded bg-indigo-50 border border-indigo-100/80 px-2 py-0.5 font-mono text-[11px] text-indigo-700">
              [confirmed_operation]
            </span>
          </div>
        </div>

        {/* Environment & Open exact reference */}
        <div className="flex flex-wrap items-center justify-between gap-2 py-2.5 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Environment:</span>
            <span className="rounded bg-indigo-50 border border-indigo-100/80 px-2 py-0.5 font-mono text-[11px] text-indigo-700">
              [current_environment]
            </span>
          </div>

          <Link
            href="/developers-api-documentation"
            className="text-xs font-semibold text-[#1D70F5] hover:underline flex items-center gap-1"
          >
            Open exact reference &rarr;
          </Link>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar">
          {statuses.map((st) => {
            const isActive = activeStatus === st;
            return (
              <button
                key={st}
                type="button"
                onClick={() => setActiveStatus(st)}
                className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition ${
                  isActive
                    ? "bg-[#1D70F5] text-white shadow-sm"
                    : "border border-slate-200/90 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {st}
              </button>
            );
          })}
        </div>

        {/* Request Pane */}
        <div className="mt-1 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <span>REQUEST</span>
            <button
              type="button"
              onClick={copyRequest}
              className="text-[11px] font-semibold text-[#1D70F5] hover:underline lowercase first-letter:uppercase"
            >
              {copiedReq ? "Copied" : "Copy"}
            </button>
          </div>

          <pre className="overflow-x-auto rounded-xl border border-slate-200/80 bg-[#f8fafc] p-3 text-[11px] font-mono leading-relaxed text-slate-700">
            <code>{requestText}</code>
          </pre>
        </div>

        {/* Response Pane */}
        <div className="mt-3 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <div className="flex items-center gap-1.5">
              <span>RESPONSE</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-slate-600">
                {activeStatus.toUpperCase()}
              </span>
            </div>
            <button
              type="button"
              onClick={copyResponse}
              className="text-[11px] font-semibold text-[#1D70F5] hover:underline lowercase first-letter:uppercase"
            >
              {copiedRes ? "Copied" : "Copy"}
            </button>
          </div>

          <pre className="min-h-[90px] overflow-x-auto rounded-xl border border-slate-200/80 bg-[#f8fafc] p-3 text-[11px] font-mono leading-relaxed text-slate-700">
            <code>{responsesByStatus[activeStatus]}</code>
          </pre>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-3 text-[11px] text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Version:</span>
            <span className="rounded bg-indigo-50 border border-indigo-100/80 px-1.5 py-0.5 font-mono text-[10px] text-indigo-700">
              [version_pattern]
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Scope required:</span>
            <span className="rounded bg-indigo-50 border border-indigo-100/80 px-1.5 py-0.5 font-mono text-[10px] text-indigo-700">
              [scoped_from_permission]
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Idempotency:</span>
            <span className="rounded bg-indigo-50 border border-indigo-100/80 px-1.5 py-0.5 font-mono text-[10px] text-indigo-700">
              [default_operation_supported]
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Request identifier:</span>
            <span className="rounded bg-indigo-50 border border-indigo-100/80 px-1.5 py-0.5 font-mono text-[10px] text-indigo-700">
              [id_protocol_supported]
            </span>
          </div>
        </div>
      </div>

      {/* Yellow / Amber Warning Callout */}
      <div className="rounded-xl border border-amber-200 bg-[#FFFBEB] p-3.5 text-xs leading-relaxed text-amber-900">
        <strong className="font-semibold text-amber-950">
          Nothing here is production syntax.
        </strong>{" "}
        Every bracketed token is a marked placeholder awaiting canonical
        documentation. Cycle the status above to see the response classes an
        integration must handle.
      </div>

      {/* Red / Rose Disclaimer Callout */}
      <div className="rounded-xl border border-rose-200 bg-[#FEF2F2] p-3.5 text-xs leading-relaxed text-rose-900">
        <strong className="font-semibold text-rose-950">
          What this page does not claim:
        </strong>{" "}
        No specific endpoint, method, status code, error payload, header, event
        name, delivery guarantee, rate limit, requests-per-second figure,
        tokenscope, OAuth flow, rotation interval, scope name, session duration,
        SDK language or version scheme is specified here. Secret-looking strings
        in this mockup are obviously synthetic and nonfunctional. A timeout is
        never assumed to mean failure, and exactly-once delivery is not implied.
      </div>
    </div>
  );
}
