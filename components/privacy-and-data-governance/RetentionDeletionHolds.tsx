export default function RetentionDeletionHolds() {
  return (
    <section
      id="retention-deletion-holds"
      className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Retention, deletion &amp; holds
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 !text-2xl !tracking-normal font-extrabold !leading-8 text-balance font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Seven states, and one of them stops a
            deletion you asked for.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[2.5px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            A billing record can be simultaneously eligible for deletion under
            one obligation and required to be preserved under another. The page
            shows that rather than resolving it optimistically.
          </p>
        </div>

        {/* States diagram */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-[#dfe5ee] shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <img
            src="/images/privacy-and-data-governance/retention-deletion-holds.png"
            alt="Retention, deletion and legal hold states for billing records"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
