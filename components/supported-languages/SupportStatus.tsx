import Image from "next/image";

export default function SupportStatus() {
  return (
    <section className="w-full bg-[#F7F7F6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-[#3B82F6] sm:text-xs sm:tracking-[0.16em]">
              Current support status &amp; publication rules
            </span>

            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-3xl font-extrabold leading-9 text-[#172033] sm:text-4xl sm:leading-10">
            Planned never inflates the inventory.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#5B6577] sm:text-base sm:leading-7">
            This destination is a current-support directory. A roadmap entry
            is not a capability.
          </p>
        </div>

        {/* Support Status Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
          <div className="relative aspect-[1184/553] w-full">
            <Image
              src="/images/supported-languages/support-status.png"
              alt="Current support status and publication rules"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1184px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}