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
    linkHref: "#browse-resources",
  },
  {
    title: "Review access requirements",
    description: "What access must my integration have?",
    linkText: "Authentication",
    linkHref: "/developers-authentication",
  },
  {
    title: "Inspect resource contracts",
    description: "What can I read or write?",
    linkText: "Resource catalog with exposure status",
    linkHref: "#browse-resources",
  },
  {
    title: "Test safely",
    description: "Where can I validate requests?",
    linkText: "Developer Sandbox, when published",
    linkHref: "/developer-sandbox",
  },
  {
    title: "Handle asynchronous changes",
    description: "Which changes arrive as events?",
    linkText: "Webhooks, when verified",
    linkHref: "/developers-webhooks",
  },
  {
    title: "Build production integration",
    description: "What remains before launch?",
    linkText: "Build an Integration",
    linkHref: "/developers-build-an-integration",
  },
];

export default function SixFirstStepsSection() {
  return (
    <section
      className="w-full border-t border-slate-100 bg-slate-50/60 py-12 lg:py-24"
      id="start-here"
    >
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 text-center sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          START HERE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 max-w-3xl !font-[family-name:var(--font-jakarta)] !text-xl !font-extrabold !leading-tight !tracking-tight text-slate-900 sm:!text-3xl lg:!text-4xl">
          Six first steps, not an alphabetical{" "}
          <br className="hidden sm:inline" />
          endpoint list.
        </h2>

        {/* Subtitle */}
        <p className="mt-2.5 max-w-2xl text-xs font-normal leading-relaxed text-slate-600 sm:text-base">
          The shortest implementation path, without duplicating the
          destinations that own each topic.
        </p>

        {/* Cards */}
        <div className="mt-8 grid w-full max-w-[1240px] grid-cols-2 gap-3.5 text-left sm:gap-6 lg:mt-16 lg:grid-cols-3">
          {firstSteps.map((step) => (
            <div
              key={step.title}
              className="
                flex
                flex-col
                justify-between
                rounded-2xl
                border
                border-slate-200/90
                bg-white
                p-4
                shadow-sm
                transition
                hover:-translate-y-0.5
                hover:shadow-md
                sm:p-7
              "
            >
              <div>
                <h3 className="mb-1.5 !font-[family-name:var(--font-jakarta)] text-xs font-bold text-slate-900 sm:text-base">
                  {step.title}
                </h3>

                <p className="mb-4 text-[11px] font-normal leading-relaxed text-slate-500 sm:text-[13px]">
                  {step.description}
                </p>
              </div>

              <div>
                <Link
                  href={step.linkHref}
                  className="
                    inline-flex
                    items-center
                    text-xs
                    font-semibold
                    text-[#1D70F5]
                    transition
                    hover:underline
                    sm:text-[13px]
                  "
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