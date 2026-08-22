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
        <div className="w-full rounded-2xl bg-[#eeeeee] p-2.5 sm:rounded-3xl sm:p-4">
          <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl bg-[#050505] sm:rounded-2xl lg:aspect-[1/1.02]">
            <Image
              src="/images/saas-and-digital-services/billing-lifecycle.png"
              alt="Billing lifecycle"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-5 shrink-0 bg-blue-600 sm:w-6" />

            <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-blue-600 sm:text-xs sm:tracking-[0.18em]">
              Recurring schedules &amp; service periods
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-[680px]
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.02em]
              text-gray-900
              sm:text-[38px]
              sm:leading-[1.15]
              lg:text-5xl
              lg:leading-[1.14]
            "
          >
            Stopping a billing schedule does not cancel a customer&apos;s
            service.
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[680px]
              text-sm
              font-normal
              leading-6
              text-slate-600
              sm:mt-6
              sm:text-base
              sm:leading-7
            "
          >
            Billing lifecycle and service lifecycle can influence each other
            through approved handoffs, but they stay separate authorities.
            Nothing here activates, suspends, downgrades, renews or terminates
            an entitlement.
          </p>

          {/* Lifecycle items */}
          <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-5">
            {items.map((item) => (
              <div
                key={item.title}
                className="
                  grid
                  grid-cols-[6px_1fr]
                  items-start
                  gap-x-3
                  gap-y-1
                  sm:grid-cols-[6px_170px_1fr]
                  sm:gap-x-3
                  sm:gap-y-0
                "
              >
                {/* Bullet */}
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-sm bg-blue-600" />

                {/* Title */}
                <p className="text-sm font-bold leading-6 text-slate-700 sm:col-start-2">
                  {item.title}
                </p>

                {/* Description */}
                <p
                  className="
                    col-start-2
                    text-sm
                    font-normal
                    leading-6
                    text-slate-600
                    sm:col-start-3
                  "
                >
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