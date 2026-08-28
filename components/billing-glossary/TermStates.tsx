import Image from "next/image";

export default function TermStates() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 lg:gap-11">

        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">

          {/* Eyebrow */}
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 bg-color-azure-60 opacity-40" />

            <span className="whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Term states
            </span>

            <span className="h-px w-4 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <div className="w-full pb-1 text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
              Nine states, and a renamed term says
              what it is now called.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[687px] pt-1 text-center">
            <p className="text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
              A search with no match never produces an invented definition to
              fill the gap.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/billing-glossary/term-states.png"
            alt="Term states"
            width={1184}
            height={580}
            className="h-auto w-full"
            priority
          />
        </div>

      </div>
    </section>
  );
}