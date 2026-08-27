import Image from "next/image";
import Link from "next/link";

interface StageItem {
  stageNumber: number;
  title: string;
  description: React.ReactNode;
}

const mobileStages: StageItem[] = [
  {
    stageNumber: 1,
    title: "Producer",
    description: "A billing lifecycle change occurs on a governed record.",
  },
  {
    stageNumber: 2,
    title: "Event boundary",
    description: (
      <>
        The event is emitted per{" "}
        <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px]">
          {`{webhooks_spec}`}
        </span>
      </>
    ),
  },
  {
    stageNumber: 3,
    title: "Endpoint",
    description: "Your receiver validates authenticity before acting.",
  },
  {
    stageNumber: 4,
    title: "Acknowledgement",
    description: (
      <>
        Receipt recorded —{" "}
        <span className="font-semibold text-slate-800">
          not proof of business finality
        </span>
        .
      </>
    ),
  },
];

export default function EventsWebhooksSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="sdks-webhooks">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          EVENTS &amp; WEBHOOKS BOUNDARY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl">
          React to billing events without polling every record.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs font-normal leading-relaxed text-slate-600 sm:text-base">
          Where event delivery is supported, integrations can respond to defined billing
          lifecycle changes. Exact event types, payloads, delivery guarantees, signatures,
          retry behavior, ordering and replay behavior come from the Webhooks specification.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-sm">
          <Image
            src="/images/developers/dao4.png"
            alt="React to billing events without polling every record"
            width={1240}
            height={460}
            unoptimized
            priority
            className="h-auto w-full rounded-3xl object-cover"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787568255894.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Top 4 Stage Cards (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {mobileStages.map((st) => (
              <div
                key={st.stageNumber}
                className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm"
              >
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  STAGE {st.stageNumber}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                  {st.title}
                </h3>
                <div className="text-[11px] font-normal text-slate-500 leading-relaxed">
                  {st.description}
                </div>
              </div>
            ))}
          </div>

          {/* Stage 5 Full Width Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm mb-5">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              STAGE 5
            </div>
            <h3 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
              Retry / exception
            </h3>
            <div className="text-[11px] font-normal text-slate-500 leading-relaxed">
              Behavior per product policy, shown only once verified.
            </div>
          </div>

          {/* Failure States Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm mb-5">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3">
              Failure states, shown only where policy supports them
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-red-50 border border-red-200/80 px-2.5 py-1 text-[11px] font-medium text-red-700">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Endpoint unavailable
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-red-50 border border-red-200/80 px-2.5 py-1 text-[11px] font-medium text-red-700">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Signature failure
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-[11px] font-medium text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Retry scheduled
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-[11px] font-medium text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Delivery exhausted
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 border border-purple-200/80 px-2.5 py-1 text-[11px] font-medium text-purple-700">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Manual review
              </span>
            </div>
          </div>

          {/* Delivery Semantics Light Blue Callout Card */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
              Delivery semantics are not assumed
            </h3>
            <p className="text-xs font-normal leading-relaxed text-slate-600">
              Retries, ordering and replay are labeled only after engineering verification.{" "}
              <span className="font-bold text-slate-900">
                Exactly-once delivery is never implied.
              </span>
            </p>
            <Link
              href="#webhooks-spec"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 mt-3 hover:underline"
            >
              Webhooks <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
