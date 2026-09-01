export default function AfterYouReport() {
  return (
    <section
      id="after-you-report"
      className="w-full bg-[#0c1a33] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-60" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#8ea3c2]">
              After you report
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-60" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-white sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Eight case states, and none of them carries a deadline.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#b6c4d9] sm:text-base sm:!leading-7">
            Each state says what it means and — in the guardrail column — what
            it deliberately does not tell you.
          </p>
        </div>

        {/* Illustration */}
        <div className="w-full overflow-hidden rounded-2xl border border-[#2a3d5f]">
          <img
            src="/images/responsible-disclosure/case-states.png"
            alt="The eight case states a vulnerability report can move through"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
