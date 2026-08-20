import Image from "next/image";

export default function PassThrough() {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-6 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-16">

        {/* Eyebrow */}
        <div className="flex h-4 items-center">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
            Pass-through costs, fees &amp; adjustments
          </span>
        </div>

        {/* Heading */}
        <h2 className="!m-0 w-full max-w-[900px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-gray-900">
          Rebilling a cost is not buying, approving or verifying it.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          A pass-through cost becomes a billable line only after it passes
          through a governed pipeline. Each stage has an owner, and no stage
          is skipped because the amount is small.
        </p>

        {/* Image */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/agencies/costs.png"
            alt="Pass-through costs and adjustments"
            width={1264}
            height={642}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}