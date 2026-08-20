import Image from "next/image";

export default function BillingLifecycle() {
  const items = [
    {
      title: "Repeat interval",
      description:
        "— only an approved schedule cadence; no subscription term inferred.",
    },
    {
      title: "Service period relation",
      description:
        "— the billed period and effective period stated explicitly.",
    },
    {
      title: "Pause & resume",
      description:
        "— permission-controlled, with the effect on future billing visible.",
    },
    {
      title: "Change effective date",
      description:
        "— future changes versioned and applied prospectively unless a correction workflow says otherwise.",
    },
    {
      title: "End billing",
      description:
        "— an approved schedule end state, which is not entitlement cancellation.",
    },
    {
      title: "Failure or unknown",
      description:
        "— missing input, schedule failure, stale source and unknown outcome all stay explicit.",
    },
  ];

  return (
    <section className="w-full bg-[#f7f7f7] px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <div className="w-full rounded-3xl bg-[#eeeeee] p-3 sm:p-4">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[#050505] sm:min-h-[400px] lg:min-h-[500px]">
            <Image
              src="/images/saas-and-digital-services/billing-lifecycle.png"
              alt="Billing lifecycle"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Recurring schedules &amp; service periods
            </span>
          </div>

          <h2 className="max-w-[680px] text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.14]">
            Stopping a billing schedule does not cancel a customer&apos;s
            service.
          </h2>

          <p className="mt-6 max-w-[680px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Billing lifecycle and service lifecycle can influence each other
            through approved handoffs, but they stay separate authorities.
            Nothing here activates, suspends, downgrades, renews or terminates
            an entitlement.
          </p>

          <div className="mt-7 space-y-5">
            {items.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[6px_1fr] gap-3 sm:grid-cols-[6px_170px_1fr] sm:gap-3"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-sm bg-blue-600" />

                <p className="text-sm font-bold leading-6 text-slate-700">
                  {item.title}
                </p>

                <p className="col-span-1 text-sm font-normal leading-6 text-slate-600 sm:col-span-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}