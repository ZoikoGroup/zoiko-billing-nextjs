import Image from "next/image";

const basePath = "/images/zoiko-billing-plus-zoiko-one";

const contractRows = [
  ["Source object & field", "Canonical identifier and version"],
  ["Destination object & field", "Approved target and compatibility"],
  [
    "Direction",
    "One-way A→B, one-way B→A, or bidirectional only when explicitly designed",
  ],
  ["Trigger", "Manual, event-driven, scheduled, import, or API call"],
  [
    "Transformation",
    "Normalization, format conversion, defaults, lookups, calculated mappings",
  ],
  ["Validation", "Required fields, allowed values, referential integrity"],
  [
    "Conflict rule",
    "Reject, source wins, destination wins, or human review — never implicit last-write-wins",
  ],
  ["Retry & idempotency", "Duplicate-safe processing, deterministic correlation"],
  [
    "Freshness",
    "Last successful sync plus a policy-backed stale threshold",
  ],
  [
    "Evidence",
    "Mapping version, actor, approval, test result, effective time",
  ],
];

const leftItems = [
  "Organization / entity",
  "Invoice reference",
  "Billing lifecycle event",
  "Balance status",
];

const rightItems = [
  "Organization reference",
  "Linked document",
  "Handoff task",
  "Reporting dimension",
];

export default function Mapping() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Mapping, direction &amp; transformation
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="max-w-[1100px] text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Arrows point one way unless two-way behavior is actually built.
        </h2>

        {/* Description */}
        <p className="max-w-[700px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
          Every arrow below is a governed route with a named authority. There
          are no decorative bidirectional arrows on this page.
        </p>

        {/* =========================
            ROUTE DIAGRAM
        ========================== */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Diagram title */}
            <div className="mb-8 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Configured routes — Mapping v4, tested
              </span>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[280px_minmax(0,1fr)_280px] lg:gap-5">
              {/* Billing side */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex min-h-[52px] items-center justify-center">
                  <Image
                    src={`${basePath}/billing-logo.png`}
                    alt="Zoiko Billing"
                    width={180}
                    height={52}
                    className="h-[52px] w-auto object-contain"
                  />
                </div>

                <p className="mt-2 text-center text-sm text-slate-500">
                  System of record for billing
                </p>

                <div className="mt-5 space-y-3">
                  {leftItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Routes */}
              <div className="flex flex-col gap-4">
                <RouteRow
                  text="One-way · Billing authoritative"
                  active
                />

                <RouteRow text="Reference only · no copy" />

                <RouteRow
                  text="Event · idempotent, correlation ID"
                  active
                />

                <RouteRow text="Snapshot · timestamped, non-authoritative" />

                <div className="mt-2 rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-center">
                  <span className="text-sm font-bold text-red-600">
                    No reverse route configured into Billing
                  </span>
                </div>
              </div>

              {/* Zoiko One side */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                {/* Equal-sized image containers */}
                <div className="flex min-h-[52px] items-center justify-center gap-2">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center">
                    <Image
                      src={`${basePath}/zoiko-one-icon.png`}
                      alt="Zoiko One icon"
                      width={52}
                      height={52}
                      className="h-[52px] w-[52px] object-contain"
                    />
                  </div>

                  <div className="flex h-[52px] min-w-0 items-center">
                    <Image
                      src={`${basePath}/zoiko-one-logo.png`}
                      alt="Zoiko One"
                      width={150}
                      height={52}
                      className="h-[52px] w-auto max-w-[150px] object-contain"
                    />
                  </div>
                </div>

                <p className="mt-2 text-center text-sm text-slate-500">
                  Consumes approved scope
                </p>

                <div className="mt-5 space-y-3">
                  {rightItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text alternative */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm leading-6 text-slate-500">
                <span className="font-bold text-slate-900">
                  Text alternative:
                </span>{" "}
                four one-way routes run from Zoiko Billing to Zoiko One
                context. Organization and entity data flows one way with
                Billing as the authoritative system. Invoice data is exposed
                as a reference only and is not copied. Billing lifecycle events
                flow one way as idempotent events carrying a correlation ID.
                Balance status flows one way as a timestamped,
                non-authoritative snapshot. No route is configured in the
                reverse direction, so nothing in Zoiko One can write into
                Billing under this mapping version.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            CONTRACT + IMAGE
        ========================== */}
        <div className="grid grid-cols-1 gap-5 pt-2 lg:grid-cols-2">
          {/* Mapping contract */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-6">
            <h3 className="text-base font-bold leading-7 text-slate-900">
              Mapping contract — every route
            </h3>

            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              {contractRows.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid grid-cols-1 sm:grid-cols-[180px_minmax(0,1fr)] ${
                    index !== contractRows.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <div className="bg-gray-50 px-4 py-3 text-sm font-semibold leading-5 text-slate-900">
                    {label}
                  </div>

                  <div className="px-4 py-3 text-sm leading-5 text-slate-500">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mapping image */}
          <div className="flex w-full items-start">
            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <Image
                src={`${basePath}/mapping-flow.png`}
                alt="Zoiko Billing to Zoiko One mapping and transformation diagram"
                width={596}
                height={447}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   ROUTE ROW
========================= */

function RouteRow({
  text,
  active = false,
}: {
  text: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px flex-1 ${
          active ? "bg-blue-600" : "bg-slate-400"
        }`}
      />

      <span
        className={`shrink-0 text-center text-xs font-bold sm:text-sm ${
          active ? "text-blue-600" : "text-slate-500"
        }`}
      >
        {text}
      </span>

      <span
        className={`relative h-px flex-1 ${
          active ? "bg-blue-600" : "bg-slate-400"
        }`}
      >
        {active && (
          <span className="absolute -right-0.5 -top-[4px] h-2 w-2 rotate-45 border-r-2 border-t-2 border-blue-600" />
        )}
      </span>
    </div>
  );
}