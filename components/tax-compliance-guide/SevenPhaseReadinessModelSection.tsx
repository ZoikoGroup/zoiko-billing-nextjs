import Image from "next/image";
import MobileSevenPhaseReadinessModel from "./MobileSevenPhaseReadinessModel";

export default function SevenPhaseReadinessModelSection() {
  return (
    <section
      id="phase-1"
      className="w-full bg-[#f8faff] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20"
    >
      <div id="seven-phase-model" className="sr-only -mt-20" />
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Seven-Phase Readiness Model
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 text-center !text-[30px] font-extrabold !leading-[1.15] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Select a phase, then set its state.
        </h2>

        {/* DESCRIPTION */}
        <p className="!mt-4 mx-auto max-w-[680px] text-center text-[14px] font-normal leading-[1.65] text-[#5d7192] sm:text-base">
          Changing a phase state updates the carry-forward record below.{" "}
          <strong className="font-semibold text-[#091127]">
            Unresolved conditions from earlier phases remain visible at every later phase.
          </strong>
        </p>

        {/* WORKFLOW ILLUSTRATION (DESKTOP ONLY) */}
        <div className="mt-8 hidden w-full max-w-[1240px] overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-2 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:mt-10 sm:rounded-[28px] sm:p-3 md:mt-12 lg:block">
          <Image
            src="/images/tax-compliance-guide/tcg2.png"
            alt="Seven-phase readiness model workflow"
            width={1774}
            height={887}
            priority
            className="h-auto w-full rounded-2xl object-cover"
            sizes="(max-width: 1280px) 100vw, 1240px"
          />
        </div>

        {/* MOBILE INTERACTIVE MODEL */}
        <div className="mt-8 block w-full max-w-[1240px] lg:hidden">
          <MobileSevenPhaseReadinessModel />
        </div>
      </div>
    </section>
  );
}
