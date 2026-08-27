import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Schedule",
    description: "Version, timezone, scope",
  },
  {
    number: "02",
    title: "Occurrence due",
    description: "Idempotent identity created",
  },
  {
    number: "03",
    title: "Eligibility",
    description: "Checked, not assumed",
  },
  {
    number: "04",
    title: "Run request",
    description: "Permitted action attempted",
  },
  {
    number: "05",
    title: "Result",
    description: "Or a classified exception",
  },
  {
    number: "06",
    title: "Next occurrence",
    description: "Projected from current version",
  },
];

export default function BillingSchedulesNextStep() {
  return (
    <section className="w-full bg-[#062f49]">
      <div className="mx-auto w-full max-w-[1220px] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col justify-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="w-full flex-1">
            <div className="flex flex-col items-start gap-4">
              {/* Eyebrow */}
              <div className="flex h-4 items-center gap-2.5">
                <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-[#35d5d5] to-[#2c7cff]" />

                <span className="!text-[#6ee7e7] text-xs font-medium uppercase leading-4 tracking-wider">
                  Next step
                </span>
              </div>

              {/* Heading */}
              <div className="w-full max-w-[660px] pt-1.5">
                <h2 className="!text-[#ffffff] text-4xl font-medium leading-tight sm:text-5xl sm:leading-[50.16px]">
                  Start with the billing
                  <br />
                  timelines your
                  <br />
                  operation needs.
                </h2>
              </div>

              {/* Description */}
              <div className="w-full max-w-[529px]">
                <p className="!text-[#a9c3d5] text-base font-normal leading-8">
                  Decide when work should become eligible, who owns the
                  exceptions, and what happens on the days nothing goes to
                  plan.
                </p>
              </div>

              {/* =================================================
                  CTA GROUP
              ================================================= */}
              <div className="flex flex-wrap items-center gap-3 pt-5">
                {/* Create Account */}
                <Link
                  href="/signup"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#2879ff] bg-[#2879ff] px-5 py-2.5 !text-[#ffffff] text-base font-normal leading-6 no-underline transition-opacity hover:opacity-90"
                >
                  Create Account
                </Link>

                {/* Book Demo */}
                <Link
                  href="/book-a-demo"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-transparent px-5 py-2.5 !text-[#ffffff] text-base font-normal leading-6 no-underline transition-colors hover:bg-white/10"
                >
                  Book a Demo
                </Link>

                {/* Global Billing */}
                <Link
                  href="/global-billing"
                  className="inline-flex min-h-11 items-center gap-2 px-1 py-2.5 !text-[#48d7d7] text-base font-normal leading-6 no-underline"
                >
                  <span className="!text-[#48d7d7]">
                    Global billing
                  </span>

                  <span
                    aria-hidden="true"
                    className="!text-[#48d7d7] text-base font-bold leading-6"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* Disclaimer */}
              <div className="w-full pt-1">
                <p className="!text-[#ffffff] text-base font-normal leading-7">
                  A projected next run is a projection, not a guarantee.
                  <br className="hidden sm:block" />
                  Availability varies by plan, workflow, entity, integration
                  and market.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT CARD
          ===================================================== */}
          <div className="w-full flex-1">
            <div className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-7">
              <div className="flex flex-col">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex min-h-[73px] items-start gap-4 py-2.5 ${
                      index !== steps.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    {/* Number */}
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#35d5d5] to-[#2879ff]">
                      <span className="!text-[#ffffff] text-[9px] font-normal leading-4">
                        {step.number}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="!text-[#f1f5f9] text-sm font-normal leading-6">
                        {step.title}
                      </span>

                      <span className="!text-[#91afc3] text-[9.8px] font-normal leading-4">
                        {step.description}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Bottom text */}
                <div className="mt-5 border-t border-white/10 pt-3.5">
                  <p className="!text-[#ffffff] text-sm font-semibold leading-6">
                    Billing clarity from invoice to payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}