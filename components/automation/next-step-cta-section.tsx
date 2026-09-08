import React from 'react';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Trigger',
    description: 'Approved event or schedule',
  },
  {
    number: '02',
    title: 'Conditions',
    description: 'Typed, with unknown handling',
  },
  {
    number: '03',
    title: 'Action',
    description: 'Permitted and scoped',
  },
  {
    number: '04',
    title: 'Review gate',
    description: 'Human decision where required',
  },
  {
    number: '05',
    title: 'Exception path',
    description: 'Classified with an owner',
  },
  {
    number: '06',
    title: 'Evidence',
    description: 'Version, actor, result, time',
  },
];

export default function NextStepCtaSection() {
  return (
    <section className="w-full !bg-white px-4 py-16 !text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            overflow-hidden
            rounded-[28px]
            !bg-sky-950
            px-5
            py-6
            !text-white
            shadow-[0_22px_60px_rgba(2,6,23,0.14)]
            sm:px-8
            sm:py-8
            lg:px-10
            lg:py-10
          "
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

            {/* ================= LEFT CONTENT ================= */}
            <div className="flex h-full flex-col items-start justify-center gap-6 lg:col-span-6">

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5">
                <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-500" />

                <span className="text-xs font-mono font-medium uppercase tracking-wider !text-cyan-400">
                  Next step
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  !m-0
                  text-3xl
                  font-medium
                  leading-tight
                  font-sans
                  !text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Start with the billing work your team repeats most.
              </h2>

              {/* Description */}
              <p
                className="
                  !m-0
                  max-w-xl
                  text-base
                  font-normal
                  leading-relaxed
                  !text-sky-200/80
                  sm:text-lg
                "
              >
                Pick one recurring task, give it an explicit trigger, a
                permitted action and a review gate - then let the evidence
                show you whether it is working.
              </p>

              {/* ================= CTA BUTTONS ================= */}
              <div className="flex flex-wrap items-center gap-3 pt-2">

                {/* CREATE ACCOUNT */}
                <a
                  href="/create-account"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-lg
                    !border-0
                    !bg-sky-500
                    px-5
                    py-2.5
                    text-base
                    font-normal
                    !text-white
                    shadow-xs
                    opacity-100
                    transition-colors
                    hover:!bg-sky-400
                    hover:!text-white
                  "
                >
                  Create Account
                </a>

                {/* BOOK A DEMO */}
                <a
                  href="/book-demo"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-lg
                    !border
                    !border-white/35
                    !bg-transparent
                    px-5
                    py-2.5
                    text-base
                    font-normal
                    !text-white
                    opacity-100
                    transition-colors
                    hover:!bg-white/10
                    hover:!text-white
                  "
                >
                  Book a Demo
                </a>

                {/* VIEW PRICING */}
                <a
                  href="/pricing-and-plans"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    !bg-transparent
                    px-2
                    py-2.5
                    text-base
                    font-normal
                    !text-cyan-400
                    opacity-100
                    transition-colors
                    hover:!bg-transparent
                    hover:!text-cyan-300
                  "
                >
                  <span>View Pricing</span>
                  <span className="font-mono font-bold">
                    -&gt;
                  </span>
                </a>
              </div>

              {/* Note */}
              <p
                className="
                  !m-0
                  max-w-lg
                  pt-2
                  text-xs
                  font-normal
                  leading-relaxed
                  !text-sky-200/60
                  sm:text-sm
                "
              >
                Controlled automation, not autonomous operation. Availability
                varies by capability, plan, connector and jurisdiction.
              </p>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="space-y-6 lg:col-span-6">

              {/* Workflow Card */}
              <div
                className="
                  divide-y
                  divide-white/10
                  rounded-2xl
                  !border
                  !border-white/15
                  !bg-white/5
                  p-6
                  shadow-md
                  sm:p-8
                "
              >
                {workflowSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-4 pt-4 first:pt-0"
                  >
                    {/* Number */}
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-gradient-to-br
                        from-cyan-400
                        to-sky-500
                        text-[10px]
                        font-mono
                        font-medium
                        !text-white
                        shadow-xs
                      "
                    >
                      {step.number}
                    </div>

                    {/* Text */}
                    <div className="space-y-0.5">
                      <h3 className="font-sans text-sm font-normal !text-slate-100">
                        {step.title}
                      </h3>

                      <p className="font-mono text-xs !text-sky-300/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Bottom statement */}
                <div className="border-t border-white/15 pt-5">
                  <p className="font-sans text-sm font-semibold !text-white">
                    Billing clarity from invoice to payment.
                  </p>
                </div>
              </div>

              {/* Explore Platform */}
              <div>
                <a
                  href="/platform-overview"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-lg
                    !border
                    !border-white/35
                    !bg-transparent
                    px-5
                    py-2.5
                    text-base
                    font-normal
                    !text-white
                    opacity-100
                    transition-colors
                    hover:!bg-white/10
                    hover:!text-white
                  "
                >
                  Explore the platform
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}