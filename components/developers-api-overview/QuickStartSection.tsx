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
    linkHref: "/developers-authentication",
  },
  {
    number: 3,
    title: "Test safely",
    description:
      "Validate an integration path in the developer environment where available.",
    linkText: "Developer Sandbox",
    linkHref: "/developer-sandbox",
  },
  {
    number: 4,
    title: "Build and operate",
    description:
      "Use documentation, events, SDKs and examples, and implementation patterns.",
    linkText: "Documentation · Webhooks · SDKs",
    linkHref: "/developers-webhooks",
  },
];

export default function QuickStartSection() {
  return (
    <section id="quick-start" className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-16
          sm:px-8
          sm:py-20
          md:px-10
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-10
            sm:gap-12
          "
        >
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Developer Quick-Start
              </span>
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                !font-[family-name:var(--font-jakarta)]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Four steps, in the order that avoids rework.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[680px]
                text-[15px]
                font-normal
                leading-relaxed
                text-[#5d7192]
                sm:text-base
              "
            >
              Understand the model and the access boundary before you build, so permission and
              ownership surprises do not arrive at launch.
            </p>
          </div>

          {/* 4 CARDS GRID */}
          <div className="grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  flex
                  min-h-[220px]
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-6
                  shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                  transition
                  hover:shadow-md
                "
              >
                <div>
                  {/* Number Badge */}
                  <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      !m-0
                      !font-[family-name:var(--font-jakarta)]
                      text-sm
                      font-bold
                      leading-5
                      text-[#091127]
                      sm:text-[15px]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="!m-0 mt-2 text-xs font-normal leading-relaxed text-[#5d7192] sm:text-[13px]">
                    {step.description}
                  </p>
                </div>

                {/* Link */}
                <div className="mt-5 pt-2">
                  <Link
                    href={step.linkHref}
                    className="inline-flex items-center text-xs font-semibold text-[#1D70F5] transition hover:text-blue-700 hover:underline"
                  >
                    {step.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}