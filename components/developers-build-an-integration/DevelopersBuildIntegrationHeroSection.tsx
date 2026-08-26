import Link from "next/link";

interface LayerCard {
  layer: string;
  title: string;
  description: string;
}

const layerCards: LayerCard[] = [
  {
    layer: "LAYER 1",
    title: "External system",
    description: "Verified participants only; no customer-specific names in public examples.",
  },
  {
    layer: "LAYER 2",
    title: "Integration boundary",
    description: "Where translation, orchestration and retry logic lives — a decision, not a mandated architecture.",
  },
  {
    layer: "LAYER 3",
    title: "Zoiko Billing",
    description: "Governed records, lifecycle, permissions and approvals.",
  },
  {
    layer: "LAYER 4",
    title: "Event & evidence path",
    description: "Safe identifiers connecting external action to API result, event and audit evidence.",
  },
  {
    layer: "LAYER 5",
    title: "Operational owner",
    description: "Named accountability for what happens when reality is ambiguous.",
  },
];

export default function DevelopersBuildIntegrationHeroSection() {
  return (
    <section className="w-full bg-white py-10 lg:py-20" id="hero">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:flex)                              */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex flex-row items-center gap-14 justify-between">
          
          {/* Left Column: Text & Actions */}
          <div className="flex w-1/2 flex-col items-start gap-5 max-w-[600px] text-left">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-slate-400" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                DEVELOPERS · BUILD AN INTEGRATION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              Build the billing <br />
              integration <span className="text-[#1D70F5]">around the</span> <br />
              <span className="text-[#1D70F5]">truth of the record.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[480px]">
              Plan how systems connect to Zoiko Billing across access, object lifecycle, events,
              testing, failures, reconciliation, production rollout and long-term ownership — with
              every implementation fact tied back to its canonical source.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#integration-lifecycle"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Review the integration lifecycle</span>
              </Link>

              <Link
                href="/developers-api-documentation"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">API Documentation</span>
              </Link>
            </div>

            {/* Notice Callout Box */}
            <div className="relative mt-2 w-full overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] sm:text-xs text-slate-500 max-w-[480px]">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
              <p className="pl-2.5 font-normal leading-relaxed">
                This page does not redefine endpoints, schemas, authentication, webhook delivery, sandbox behavior or SDK support. Those contracts remain owned by their approved developer sources.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image dban1.png */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/developers-build-an-integration/dban1.png"
                alt="Build the billing integration around the truth of the record"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787668934197.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/developers-api-overview" className="hover:text-slate-900 transition">Developers</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Build an Integration</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              DEVELOPERS · BUILD AN INTEGRATION
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Build the billing integration{" "}
            <span className="text-[#1D70F5]">around the truth of the record.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            Plan how systems connect to Zoiko Billing across access, object lifecycle, events, testing, failures, reconciliation, production rollout and long-term ownership — with every implementation fact tied back to its canonical source.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <Link
              href="#integration-lifecycle"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Review the integration lifecycle</span>
            </Link>

            <Link
              href="/developers-api-documentation"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">API Documentation</span>
            </Link>

            <Link
              href="/developers-authentication"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] px-2 py-2 hover:underline"
            >
              Authentication →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              This page does not redefine endpoints, schemas, authentication, webhook delivery, sandbox behavior or SDK support. Those contracts remain owned by their approved developer sources.
            </p>
          </div>

          {/* 4 Blue Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="bg-blue-50 text-[#1D70F5] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-blue-200/70 inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full border border-[#1D70F5]" />
              Source-of-truth explicit
            </span>
            <span className="bg-blue-50 text-[#1D70F5] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-blue-200/70 inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full border border-[#1D70F5]" />
              Least privilege
            </span>
            <span className="bg-blue-50 text-[#1D70F5] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-blue-200/70 inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full border border-[#1D70F5]" />
              Failure &amp; reconciliation planned
            </span>
            <span className="bg-blue-50 text-[#1D70F5] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-blue-200/70 inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full border border-[#1D70F5]" />
              Production owner assigned
            </span>
          </div>

          {/* 5 Layer Cards Grid */}
          <div className="grid grid-cols-1 gap-3 mb-6">
            {layerCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-4 text-left shadow-sm"
              >
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {card.layer}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Red Warning Disclaimer Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-6">
            <span className="font-bold text-red-900">
              A successful billing integration is not &quot;a request that returned 200.&quot;
            </span>{" "}
            It is a governed system boundary with explicit source-of-truth ownership, lifecycle rules, safe repetition and reconciliation, event handling, evidence, security, rollout, and an owner for ambiguity. This page publishes no endpoint, schema, error code, event name, SDK language, sandbox behavior or architecture component that its owning source has not defined — and implies no message queue, middleware, ETL, IPaaS, database access, direct ledger access or managed connector.
          </div>

        </div>

      </div>
    </section>
  );
}
