import Image from "next/image";
import Link from "next/link";

const billingItems = [
  {
    title: "Reusable definition",
    description:
      "A charge definition, or a schedule-specific amount context where supported, can be reused across events.",
  },
  {
    title: "Effective window",
    description:
      "Start, end and recurrence context determine when the definition participates.",
  },
  {
    title: "Proration and escalation",
    description:
      "Proration, usage, escalation and indexation apply only where verified for your configuration.",
  },
  {
    title: "Event-time calculation",
    description:
      "The schedule event creates or prepares the amount from the configuration current at that time.",
  },
  {
    title: "Exception handling",
    description:
      "When source data, a rate or eligibility is unavailable, the event raises an exception rather than guessing.",
  },
  {
    title: "No assumed outcome",
    description:
      "A prepared amount still passes through validation, approval and application like any other.",
  },
];

export default function RepeatBilling() {
  return (
    <section className="w-full bg-[#f7f8f8] px-6 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-28 xl:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-0 lg:px-12">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-end lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="min-w-0 flex-1 pt-2.5 pb-5">
            <div className="flex flex-col items-start gap-5">

              {/* EYEBROW */}
              <div className="relative h-4 w-48">
                <div className="absolute left-0 top-[7.94px] h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-500 to-blue-600" />

                <span className="absolute left-[30px] top-[-1px] whitespace-nowrap font-mono text-xs font-medium uppercase leading-4 tracking-wider text-blue-700">
                  Repeat billing
                </span>
              </div>

              {/* HEADING */}
              <div className="w-full max-w-[638.15px]">
                <h2 className="text-4xl font-medium leading-[1.12] tracking-[-0.02em] text-sky-950 sm:text-[42px] lg:text-5xl lg:leading-[53.82px]">
                  Use approved amounts
                  <br />
                  in repeat billing without
                  <br />
                  assuming the result.
                </h2>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full max-w-[528.77px]">
            <p className="text-base font-normal leading-8 text-slate-600">
              A schedule event prepares an amount from current configuration.
              It does not guarantee the amount, the invoice, the issue, the
              delivery or the payment.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex w-full flex-col items-start gap-10 pt-3 lg:flex-row lg:gap-16">

          {/* BILLING DETAILS */}
          <div className="w-full lg:w-[526.31px] lg:shrink-0">
            {billingItems.map((item, index) => (
              <div
                key={item.title}
                className={`w-full py-4 sm:grid sm:grid-cols-[145px_1fr] sm:items-start sm:gap-5 ${
                  index !== billingItems.length - 1
                    ? "border-b border-zinc-300"
                    : ""
                }`}
              >
                {/* TITLE */}
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-sky-950">
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div>
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-[526.33px] lg:shrink-0">
            <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04),0px_1px_2px_0px_rgba(14,33,27,0.05)]">
              <Image
                src="/images/charges-and-adjustments/repeat-billing.png"
                alt="Repeat billing schedule illustration"
                width={526}
                height={355}
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* SCHEDULE BOUNDARY */}
        <div className="flex w-full flex-col items-start gap-2 rounded-tr-2xl rounded-br-2xl border-l-[3px] border-blue-600 bg-[#f7f8f8] px-7 pt-9 pb-8">

          {/* LABEL */}
          <div className="w-full">
            <span className="font-mono text-[9.9px] font-normal uppercase leading-4 tracking-wide text-blue-700">
              Schedule boundary
            </span>
          </div>

          {/* TEXT */}
          <div className="w-full max-w-[761.07px]">
            <p className="text-base font-normal leading-7 text-sky-950">
              A schedule does not guarantee the amount, invoice, issue,
              delivery or payment. Advanced subscription and usage-billing
              capabilities are claimed only where approved for your plan and
              configuration.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex w-full items-center justify-start">
          <Link
            href="/billing-schedules"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#062F49] px-5 py-2 text-base font-normal leading-6 text-white outline outline-1 outline-offset-[-1px] outline-[#062F49] transition-colors hover:bg-[#083b59]"
          >
            <span className="!text-white">
              Explore Billing Schedules
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}