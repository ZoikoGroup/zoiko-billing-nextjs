import Image from "next/image";

export default function ChangeHistory() {
  return (
    <section className="w-full bg-[#F7F8FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-7 sm:gap-10">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-[#4387A8] sm:text-xs sm:tracking-[0.18em]">
              Change history, effective dates &amp; evidence
            </span>

            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#102A43] sm:text-[36px] lg:text-[42px] lg:leading-[1.15]">
            Why a status changed is part of the record.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#60758A] sm:text-base sm:leading-7">
            Availability history explains what was published and authorized
            at a point in time.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-xl border border-[#E1E5E9] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[1184/532]">
            <Image
              src="/images/jurisdiction-availability/change-history.png"
              alt="Change history, effective dates and evidence"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1184px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}