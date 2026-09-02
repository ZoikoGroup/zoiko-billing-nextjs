import Image from "next/image";

const currencyContexts = [
  {
    title: "Account or base currency",
    description:
      "— internal, customer or account context where supported.",
  },
  {
    title: "Billing or document currency",
    description: "— the currency shown on the billing document.",
  },
  {
    title: "Charge or source currency",
    description:
      "— the original currency of the source amount, where different and supported.",
  },
  {
    title: "Payment currency",
    description:
      "— the currency in which a payment record or provider reports the transaction.",
  },
  {
    title: "Settlement currency",
    description:
      "— provider or bank settlement context, only where supported and authoritative.",
  },
  {
    title: "Display or reporting currency",
    description:
      "— a presentation layer that must never rewrite original evidence.",
  },
  {
    title: "FX rate",
    description:
      "— source, timestamp, pair, rate type, direction, rounding, any markup or fee, and finality.",
  },
  {
    title: "Conversion authority",
    description:
      "— who or what may convert, versus who may only display an estimate.",
  },
];

export default function CurrencyContexts() {
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-8

              sm:gap-10

              lg:flex-row
              lg:items-center
              lg:gap-14
            "
          >
            {/* ================= LEFT CONTENT ================= */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-3
                pt-2
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
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
                  Multi-currency billing
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  w-full
                  text-[30px]
                  font-extrabold
                  leading-[1.2]
                  tracking-[-0.035em]
                  text-[#091127]

                  sm:text-[34px]

                  md:text-[36px]

                  lg:text-[40px]
                "
              >
                Eight currency contexts, and none of them is an exchange rate.
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  !m-0
                  w-full
                  max-w-[687px]
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                Currency support is not foreign-exchange execution. Presenting
                an amount, billing an amount and settling an amount are three
                different things with three different authorities.
              </p>

              {/* ================= CURRENCY LIST ================= */}
              <div className="mt-1.5 flex w-full flex-col">
                {currencyContexts.map((item) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      w-full
                      items-start
                      gap-3
                      py-3

                      sm:gap-4
                    "
                  >
                    {/* BULLET */}
                    <span
                      className="
                        mt-2
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-xs
                        bg-blue-600
                      "
                    />

                    {/* CONTENT */}
                    <div
                      className="
                        flex
                        flex-1
                        flex-col
                        gap-0.5

                        sm:flex-row
                        sm:items-start
                        sm:gap-2
                      "
                    >
                      <span
                        className="
                          shrink-0
                          text-sm
                          font-bold
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.title}
                      </span>

                      <span
                        className="
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= RIGHT VISUAL ================= */}
            <div
              className="
                w-full
                flex-1
                rounded-3xl
                bg-[#edf0f4]
                p-3

                sm:p-4
              "
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/global-billing/currency-contexts.png"
                  alt="Multi-currency billing contexts"
                  width={548}
                  height={530}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 548px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}