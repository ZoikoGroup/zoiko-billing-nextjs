import Link from "next/link";
import Image from "next/image";

interface LayerItem {
  number: number;
  title: string;
  subtitle: React.ReactNode;
}

const mobileLayers: LayerItem[] = [
  {
    number: 1,
    title: "Integration identity",
    subtitle: "A service identity with a named owner, scope and lifecycle",
  },
  {
    number: 2,
    title: "Authentication",
    subtitle: (
      <>
        Method per canonical documentation —{" "}
        <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px]">
          {`{method}`}
        </span>
      </>
    ),
  },
  {
    number: 3,
    title: "Permission & scope evaluation",
    subtitle: "Identity plus role or scope plus object and action plus workflow state",
  },
  {
    number: 4,
    title: "Billing object & action",
    subtitle: "The governed record the call actually touches",
  },
  {
    number: 5,
    title: "Audit & response",
    subtitle: "Evidence recorded where the product supports it",
  },
];

export default function AuthenticationBoundarySection() {
  return (
    <section className="w-full bg-slate-50/50 py-12 lg:py-24 border-t border-slate-100" id="authentication">
      
      {/* ========================================================================= */}
      {/* DESKTOP VERSION (UNTOUCHED - hidden lg:flex)                             */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex mx-auto max-w-[1320px] flex-col items-center gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-14 lg:px-12">
        
        {/* Left Column: Text Content & CTAs */}
        <div className="flex w-full flex-col items-start gap-5 lg:w-1/2 lg:max-w-[580px]">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-slate-400" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              AUTHENTICATION &amp; PERMISSION BOUNDARY
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Access starts with identity, scope and purpose.
          </h2>

          {/* Description */}
          <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
            An integration should receive only the access needed for its defined billing
            responsibilities. Authentication method, credential lifecycle, scopes, secret
            handling and environment setup are sourced from the canonical Authentication
            documentation.
          </p>

          {/* Action CTAs */}
          <div className="flex w-full flex-wrap items-center gap-3 pt-2 sm:w-auto">
            <Link
              href="#authentication-docs"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-center text-xs sm:text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
            >
              Authentication
            </Link>

            <Link
              href="#api-docs"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              API Documentation
            </Link>
          </div>

        </div>

        {/* Right Column: Image Container */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-3xl shadow-xl flex items-center justify-center">
            <Image
              src="/images/developers/dao3.png"
              alt="Access starts with identity, scope and purpose"
              width={520}
              height={420}
              unoptimized
              priority
              className="h-auto w-full rounded-3xl object-cover"
            />
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VERSION (MATCHING REFERENCE media_1787568115240.png - block lg:hidden) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden mx-auto max-w-[640px] px-4 sm:px-6">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-5 bg-slate-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            AUTHENTICATION &amp; PERMISSION BOUNDARY
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl font-extrabold leading-tight text-slate-900 tracking-tight mb-3">
          Access starts with identity, scope and purpose.
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-4">
          An integration should receive only the access needed for its defined billing
          responsibilities. Authentication method, credential lifecycle, scopes, secret handling
          and environment setup are sourced from the canonical Authentication documentation.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <Link
            href="#authentication-docs"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-blue-600 px-5 text-center text-xs font-semibold text-white shadow-sm"
          >
            Authentication
          </Link>
          <Link
            href="#api-docs"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-center text-xs font-semibold text-slate-800"
          >
            API Documentation
          </Link>
        </div>

        {/* Red / Pink Warning Box */}
        <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs leading-relaxed text-red-950 font-normal mb-6">
          <span className="font-bold text-red-900">Not claimed here.</span> Token type, OAuth flow, API-key behavior,
          rotation interval, scope names, IP controls, mTLS and session duration are all deferred to
          verified documentation. No real credential appears in any example.
        </div>

        {/* Layer by Layer Mobile Card */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm text-left">
          
          {/* Card Header */}
          <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
            The access boundary, layer by layer
          </h3>
          <p className="text-xs text-slate-500 font-normal mb-5">
            Structural diagram — each layer is evaluated independently.
          </p>

          {/* 5 Layer Items */}
          <div className="divide-y divide-slate-100">
            {mobileLayers.map((layer) => (
              <div key={layer.number} className="py-3 flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-600">
                  {layer.number}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {layer.title}
                  </h4>
                  <div className="text-[11px] sm:text-xs font-normal text-slate-500 mt-0.5 leading-relaxed">
                    {layer.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="border-t border-slate-100 pt-4 mt-4 text-[11px] text-slate-500 font-normal leading-relaxed">
            There is no single &quot;admin key&quot; layer. Access is not simplified into one credential that bypasses the rest.
          </div>

        </div>

      </div>

    </section>
  );
}
