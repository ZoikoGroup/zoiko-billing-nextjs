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
    <section className="w-full bg-color-grey-97-4 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-5">
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-14">
          {/* Left Content */}
          <div className="flex w-full flex-1 flex-col items-start gap-3.5 pt-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-blue-600 opacity-75" />

              <span className="text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
                Multi-currency billing
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-2xl font-extrabold leading-8 text-color-azure-11-2 sm:text-3xl sm:leading-9">
              Eight currency contexts, and none of them is an exchange rate.
            </h2>

            {/* Description */}
            <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
              Currency support is not foreign-exchange execution. Presenting
              an amount, billing an amount and settling an amount are three
              different things with three different authorities.
            </p>

            {/* Currency List */}
            <div className="mt-1.5 flex w-full flex-col">
              {currencyContexts.map((item) => (
                <div
                  key={item.title}
                  className="flex w-full items-start gap-3 py-3 sm:gap-4"
                >
                  {/* Bullet */}
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-blue-600" />

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-2">
                    <span className="shrink-0 text-sm font-bold leading-6 text-color-azure-44-3">
                      {item.title}
                    </span>

                    <span className="text-sm font-normal leading-6 text-color-azure-44-3">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="w-full flex-1 rounded-3xl bg-color-grey-95-13 p-3 sm:p-4">
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/global-billing/currency-contexts.png"
                alt="Multi-currency billing contexts"
                width={548}
                height={530}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}