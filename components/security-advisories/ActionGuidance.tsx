export default function ActionGuidance() {
  return (
    <section
      id="action-guidance"
      className="w-full bg-[#0c1a33] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#8ea3c2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#8ea3c2]">
              Action guidance
            </span>

            <span className="h-px w-4 shrink-0 bg-[#8ea3c2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#ffffff] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Seven action states, and conflicts resolve to the newest.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#b6c4d9] sm:text-base sm:!leading-7">
            A customer following superseded steps from an older advisory is the failure this contract prevents.
          </p>
        </div>

        {/* Illustration */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-[#2a3d5f] shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <img
            src="/images/security-advisories/action-guidance.png"
            alt="Seven action states, with conflicts resolving to the newest advisory"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
