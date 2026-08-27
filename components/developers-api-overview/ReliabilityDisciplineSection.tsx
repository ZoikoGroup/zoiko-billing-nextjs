import Image from "next/image";

interface TopicMobileRow {
  topic: string;
  statement: string;
}

const mobileTopics: TopicMobileRow[] = [
  {
    topic: "Errors",
    statement:
      "Explain that integrations must handle validation, permission, conflict, dependency, limit, service and unknown-outcome classes.",
  },
  {
    topic: "Retries",
    statement:
      "State that retry behavior depends on operation semantics and documented guidance.",
  },
  {
    topic: "Idempotency",
    statement:
      "Surface it only for operations that actually support it, with exact canonical behavior.",
  },
  {
    topic: "Unknown outcomes",
    statement:
      "Require a safe read-before-repeat path where product semantics define one.",
  },
  {
    topic: "Rate & usage limits",
    statement:
      "Expose limits and headers only where authoritative values exist; otherwise direct to documentation.",
  },
  {
    topic: "Versioning",
    statement:
      "State the policy and compatibility promises only when published.",
  },
  {
    topic: "Deprecation",
    statement:
      "Provide notice window, changelog, migration guidance and sunset states when policy defined.",
  },
  {
    topic: "Observability",
    statement:
      "Expose request or event identifiers and status evidence only if the product supports them.",
  },
];

export default function ReliabilityDisciplineSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white" id="reliability">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          RELIABILITY, ERRORS &amp; CHANGE DISCIPLINE
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl max-w-3xl">
          A timeout is not a failure.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-xl text-xs font-normal leading-relaxed text-slate-300 sm:text-base">
          Nine topics where the overview states the requirement and defers the exact values
          — because a fabricated limit or code is worse than none.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/images/developers/dao5.png"
            alt="A timeout is not a failure"
            width={1240}
            height={460}
            unoptimized
            priority
            className="h-auto w-full rounded-3xl object-cover"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787568376641.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1A3C] shadow-lg text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-white/10 border-b border-slate-800">
                  <th scope="col" className="py-3 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-300 w-1/3">
                    TOPIC
                  </th>
                  <th scope="col" className="py-3 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-300 w-2/3">
                    REQUIREMENT &amp; DEFERRAL STATEMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {mobileTopics.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition">
                    <td className="py-3.5 px-4 text-xs font-bold text-white align-top">
                      {row.topic}
                    </td>
                    <td className="py-3.5 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                      {row.statement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
