import Image from "next/image";

export default function MarketCheck() {
  return (
    <section className="w-full px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full max-w-[320px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Jurisdiction availability first
            </span>

            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <h2 className="text-center text-3xl font-extrabold leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            Check the market before reading the
            <br className="hidden sm:block" />
            feature list.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] pt-0.5 text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Availability comes before persuasion. Select a synthetic
            jurisdiction and capability to see how each dimension resolves,
            with the limitation shown adjacent to any action.
          </p>
        </div>

        {/* Image */}
        <div className="w-full pt-1 sm:pt-3 lg:pt-6">
          <div className="relative w-full overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            <Image
              src="/images/global-billing/market-check.png"
              alt="Jurisdiction availability market check"
              width={1184}
              height={592}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}