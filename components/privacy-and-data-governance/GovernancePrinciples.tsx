type Principle = {
  title: string;
  body: React.ReactNode;
};

const PRINCIPLES: Principle[] = [
  {
    title: "Purpose limitation",
    body: (
      <>
        Data is used for approved purposes tied to the activity, with the
        purpose recorded rather than assumed.
      </>
    ),
  },
  {
    title: "Data minimization",
    body: (
      <>
        Collection is scoped to what the activity requires — which is why
        support intake asks for identifiers rather than payloads.
      </>
    ),
  },
  {
    title: "Access governance",
    body: (
      <>
        Access follows role categories and approvals.{" "}
        <span className="font-bold">
          Product permission detail remains Documentation authority.
        </span>
      </>
    ),
  },
  {
    title: "Lifecycle governance",
    body: (
      <>
        Records move through defined states, and disposition is a decision with
        conditions rather than a timer.
      </>
    ),
  },
  {
    title: "Rights routing",
    body: (
      <>
        Requests reach the process that can evaluate them, with the scope of
        what is possible stated honestly.
      </>
    ),
  },
  {
    title: "Precedence",
    body: (
      <>
        Where sources conflict, the authority order is explicit.{" "}
        <span className="font-bold">The interface does not adjudicate.</span>
      </>
    ),
  },
];

export default function GovernancePrinciples() {
  return (
    <section
      id="governance-principles"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Governance principles
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 !text-2xl !tracking-normal font-extrabold !leading-8 text-balance font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Six principles, described as
            governance rather than outcome.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Each names a discipline that exists. None claims a result that only
            evidence can establish.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 pt-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="
                flex h-full flex-col items-start gap-1.5
                rounded-2xl border border-[#dfe5ee] bg-white px-5 py-5
                shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]
              "
            >
              <h3 className="!m-0 text-sm font-bold !leading-6 !text-[#091127] font-[family-name:var(--font-jakarta)]">
                {principle.title}
              </h3>

              <p className="m-0 text-xs font-normal !leading-5 !text-[#5d7192]">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
