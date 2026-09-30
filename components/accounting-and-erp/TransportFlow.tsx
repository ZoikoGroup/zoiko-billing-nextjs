import Image from "next/image";

export default function TransportFlow() {
  return (
    <section className="w-full overflow-hidden bg-[#0b1428]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 md:gap-11">
          {/* INTRO */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
            {/* EYEBROW */}
            <div className="flex max-w-full items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-white opacity-40" />

              <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.08em] text-white/55 sm:text-xs sm:tracking-[0.12em] md:whitespace-nowrap md:tracking-[0.15em]">
                Batch, file, API, event, idempotency &amp; reconciliation
              </span>

              <span className="h-px w-4 shrink-0 bg-white opacity-40" />
            </div>

            {/* HEADING */}
            <h2 className="!m-0 w-full max-w-[662px] !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-white sm:!text-[34px] md:!text-[36px] lg:!text-[40px]">
              Transport tells you how data moved, not what happened in the
              books.
            </h2>

            {/* DESCRIPTION */}
            <p className="!m-0 w-full max-w-[687px] text-[15px] font-normal leading-7 text-white/70 sm:text-base">
              CSV, API, webhook or file — none of them is a proxy for posting
              or finality.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="relative aspect-[1184/592] w-full">
              <Image
                src="/images/accounting-and-erp/transport.png"
                alt="Accounting integration transport and reconciliation flow"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 639px) 100vw, (max-width: 767px) 90vw, (max-width: 1023px) 85vw, 1184px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}