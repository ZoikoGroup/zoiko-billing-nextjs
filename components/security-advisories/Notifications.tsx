type NotificationRule = {
  rule: string;
  requirement: React.ReactNode;
};

const RULES: NotificationRule[] = [
  {
    rule: "Capability",
    requirement: (
      <>
        A notification or feed option renders{" "}
        <span className="font-bold">
          only where an approved mechanism exists
        </span>{" "}
        — none is described here
      </>
    ),
  },
  {
    rule: "Scope of coverage",
    requirement: (
      <>
        If offered, it states which advisories it covers;{" "}
        <span className="font-bold">
          a partial feed presented as complete is a safety problem
        </span>
      </>
    ),
  },
  {
    rule: "No delivery promise",
    requirement: (
      <>
        No timing, no guaranteed delivery, and{" "}
        <span className="font-bold">
          no implication that subscribing satisfies a monitoring obligation
        </span>
      </>
    ),
  },
  {
    rule: "Not a substitute",
    requirement: (
      <>
        A subscription does not replace checking the current advisory list, and
        the page says so
      </>
    ),
  },
];

export default function Notifications() {
  return (
    <section
      id="notifications"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Notifications
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            A subscription capability is not assumed to exist.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Four rules, because a promised notification that never arrives is
            worse than no notification offer at all.
          </p>
        </div>

        {/* Stacked cards — below lg */}
        <div className="flex w-full flex-col gap-3 lg:hidden">
          {RULES.map((row) => (
            <div
              key={row.rule}
              className="flex w-full flex-col gap-3 rounded-2xl border border-[#dfe5ee] bg-white p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
            >
              <h3 className="!m-0 text-sm font-bold !leading-5 !text-[#091127] font-[family-name:var(--font-jakarta)]">
                {row.rule}
              </h3>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Requirement
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.requirement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Table — lg and up */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] lg:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fafbfc]">
                  <th className="w-56 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Rule
                  </th>

                  <th className="border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Requirement
                  </th>
                </tr>
              </thead>

              <tbody>
                {RULES.map((row, index) => (
                  <tr
                    key={row.rule}
                    className={
                      index === RULES.length - 1
                        ? ""
                        : "border-b border-[#edf0f4]"
                    }
                  >
                    <td className="px-4 py-3.5 align-top text-sm font-semibold !leading-5 !text-[#091127]">
                      {row.rule}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.requirement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
