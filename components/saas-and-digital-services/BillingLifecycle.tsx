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
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1240px]
            items-center
            gap-10

            lg:grid-cols-2
            lg:gap-14
          "
        >
          {/* IMAGE */}
          <div
            className="
              w-full
              rounded-2xl
              bg-[#eeeeee]
              p-2.5

              sm:rounded-3xl
              sm:p-4
            "
          >
            <div
              className="
                relative
                aspect-[1/1]
                w-full
                overflow-hidden
                rounded-xl
                bg-[#050505]

                sm:rounded-2xl

                lg:aspect-[1/1.02]
              "
            >
              <Image
                src="/images/saas-and-digital-services/billing-lifecycle.png"
                alt="Billing lifecycle"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full">
            {/* EYEBROW */}
            <div className="mb-4 flex items-center gap-3">
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
                Recurring schedules &amp; service periods
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[680px]
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
              Stopping a billing schedule does not cancel a customer&apos;s
              service.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-5
                w-full
                max-w-[680px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:mt-6
                sm:text-base
              "
            >
              Billing lifecycle and service lifecycle can influence each other
              through approved handoffs, but they stay separate authorities.
              Nothing here activates, suspends, downgrades, renews or
              terminates an entitlement.
            </p>

            {/* LIFECYCLE ITEMS */}
            <div
              className="
                mt-7
                space-y-5

                sm:mt-8
              "
            >
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
                  {/* BULLET */}
                  <span
                    className="
                      mt-[9px]
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-sm
                      bg-[#7890b2]
                    "
                  />

                  {/* TITLE */}
                  <p
                    className="
                      !m-0
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]

                      sm:col-start-2
                    "
                  >
                    {item.title}
                  </p>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      col-start-2
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]

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
      </div>
    </section>
  );
}