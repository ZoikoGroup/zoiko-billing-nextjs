import Link from "next/link";

interface QuickStartStep {
  number: number;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const steps: QuickStartStep[] = [
  {
    number: 1,
    title: "Understand the model",
    description:
      "See the billing domains, record boundaries and lifecycle concepts exposed for integration.",
    linkText: "API capability map",
    linkHref: "#capability-map",
  },
  {
    number: 2,
    title: "Review access",
    description:
      "Understand authentication and permission boundaries before building.",
    linkText: "Authentication",
    linkHref: "#authentication",
  },
  {
    number: 3,
    title: "Test safely",
    description:
      "Validate an integration path in the developer environment where available.",
    linkText: "Developer Sandbox",
    linkHref: "#sandbox",
  },
  {
    number: 4,
    title: "Build and operate",
    description:
      "Use documentation, events, SDKs and examples, and implementation guidance.",
    linkText: "Documentation · Webhooks · SDKs",
    linkHref: "#sdks-webhooks",
  },
];

export default function QuickStartSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-20 border-t border-slate-100">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DEVELOPER QUICK-START
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-2xl">
          Four steps, in the order that avoids rework.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-xl text-xs font-normal leading-relaxed text-slate-600 sm:text-base">
          Understand the model and the access boundary before you build, so permission and
          ownership surprises do not arrive at launch.
        </p>

        {/* 4 Cards Responsive Grid (2 columns on mobile, 4 columns on desktop) */}
        <div className="mt-8 lg:mt-12 grid w-full grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4 text-left">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-sm transition hover:shadow-md"
            >
              <div>
                {/* Number Badge */}
                <div className="mb-3 sm:mb-4 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-blue-50 text-xs sm:text-sm font-extrabold text-blue-600">
                  {step.number}
                </div>

                {/* Card Title */}
                <h3 className="mb-1.5 text-xs sm:text-base font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Card Description */}
                <p className="text-[11px] sm:text-sm font-normal leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-4 sm:mt-6 pt-1 sm:pt-2">
                <Link
                  href={step.linkHref}
                  className="inline-flex items-center text-[11px] sm:text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
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
