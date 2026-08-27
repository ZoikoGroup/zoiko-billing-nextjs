import Link from "next/link";

interface StepCard {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const firstSteps: StepCard[] = [
  {
    title: "Understand the billing model",
    description: "Which resources, records and lifecycles exist?",
    linkText: "Concepts & resource relationships",
    linkHref: "#concepts",
  },
  {
    title: "Review access requirements",
    description: "What access must my integration have?",
    linkText: "Authentication",
    linkHref: "#authentication",
  },
  {
    title: "Inspect resource contracts",
    description: "What can I read or write?",
    linkText: "Resource catalog with exposure status",
    linkHref: "#catalog",
  },
  {
    title: "Test safely",
    description: "Where can I validate requests?",
    linkText: "Developer Sandbox, when published",
    linkHref: "#sandbox",
  },
  {
    title: "Handle asynchronous changes",
    description: "Which changes arrive as events?",
    linkText: "Webhooks, when verified",
    linkHref: "#webhooks",
  },
  {
    title: "Build production integration",
    description: "What remains before launch?",
    linkText: "Build an Integration",
    linkHref: "#build-integration",
  },
];

export default function SixFirstStepsSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="start-here">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          START HERE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Six first steps, not an alphabetical endpoint list.
        </h2>

        {/* Subtitle */}
        <p className="mt-2.5 max-w-xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The shortest implementation path, without duplicating the destinations that own each topic.
        </p>

        {/* 6 Cards Grid (2 Columns on Mobile, 3 Columns on Desktop matching media_1787661363441.png) */}
        <div className="mt-8 lg:mt-16 grid w-full grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-3 text-left max-w-[1240px]">
          {firstSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-sm transition hover:shadow-md"
            >
              <div>
                <h3 className="text-xs sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-500 leading-relaxed font-normal mb-4 sm:mb-6">
                  {step.description}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <Link
                  href={step.linkHref}
                  className="inline-flex items-center text-[11px] sm:text-sm font-semibold text-[#1D70F5] hover:text-blue-700 hover:underline transition"
                >
                  {step.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
