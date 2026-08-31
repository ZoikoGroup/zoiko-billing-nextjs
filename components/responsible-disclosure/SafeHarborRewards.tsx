export default function SafeHarborRewards() {
  return (
    <section
      id="safe-harbor-rewards"
      className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Safe harbor &amp; rewards
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Two things this page will not improvise.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Both are frequently assumed to exist, and assuming either one is a
            risk a researcher takes personally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          {/* Safe harbor */}
          <div className="flex h-full flex-col gap-2 rounded-2xl border border-[#dfe5ee] bg-white px-6 pb-9 pt-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            <h3 className="!m-0 text-lg font-bold !leading-7 !text-[#091127] font-[family-name:var(--font-jakarta)]">
              Safe harbor
            </h3>

            <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
              <span className="font-bold">
                No safe-harbor text is reproduced on this page.
              </span>{" "}
              Where Legal has approved terms, they render from the source with
              their exact eligibility conditions, jurisdiction limits and any
              sanctions or export restrictions attached.
            </p>

            <p className="m-0 pt-1.5 text-sm font-normal !leading-5 !text-[#5d7192]">
              A paraphrased protection is not a protection. Language like
              &quot;we will not pursue good-faith researchers&quot; reads as a
              commitment and carries none of the conditions that make a real
              safe-harbor clause meaningful — so this page states nothing rather
              than something reassuring.
            </p>

            <p className="m-0 pt-1.5 text-sm font-normal !leading-5 !text-[#5d7192]">
              <span className="font-bold">
                If no approved terms are published, you have no stated
                protection.
              </span>{" "}
              That is worth knowing before you test, not after.
            </p>
          </div>

          {/* Rewards */}
          <div className="flex h-full flex-col gap-1.5 rounded-2xl border border-[#d6e4fb] bg-[#eaf2fe] px-6 pb-9 pt-6">
            <h3 className="!m-0 text-lg font-bold !leading-7 !text-[#091127] font-[family-name:var(--font-jakarta)]">
              Rewards
            </h3>

            <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
              <span className="font-bold">
                No bug bounty, monetary reward, payment amount or eligibility
                rule is stated here.
              </span>{" "}
              Where a program exists, its own approved source defines it.
            </p>

            <p className="m-0 pt-1.5 text-sm font-normal !leading-5 !text-[#5d7192]">
              A case reaching <span className="font-bold">resolved</span> does
              not imply a reward, and neither does an issue being accepted for
              remediation. Those are separate determinations under separate
              authority.
            </p>

            <p className="m-0 pt-1.5 text-sm font-normal !leading-5 !text-[#5d7192]">
              Credit and acknowledgement, where offered at all, are part of
              disclosure coordination rather than an automatic outcome of a
              valid report.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
