type ScopeField = {
  field: string;
  requirement: React.ReactNode;
  ifAbsent: React.ReactNode;
};

const FIELDS: ScopeField[] = [
  {
    field: "In-scope targets",
    requirement: <>Exact source-approved systems, surfaces or assets.</>,
    ifAbsent: (
      <span className="font-bold">Nothing is in scope by default</span>
    ),
  },
  {
    field: "Environment",
    requirement: (
      <>
        Which environment testing is authorized against, where the source
        distinguishes them.
      </>
    ),
    ifAbsent: <>Assume none is authorized</>,
  },
  {
    field: "Excluded targets",
    requirement: <>Explicit exclusions, including third-party services.</>,
    ifAbsent: (
      <>
        Absence of an exclusion is <span className="font-bold">not</span>{" "}
        inclusion
      </>
    ),
  },
  {
    field: "Excluded methods",
    requirement: <>Techniques prohibited regardless of target.</>,
    ifAbsent: <>The testing rules still apply in full</>,
  },
  {
    field: "Test accounts",
    requirement: (
      <>Whether provisioned accounts exist and how they are obtained.</>
    ),
    ifAbsent: (
      <span className="font-bold">
        Do not create or use accounts belonging to others
      </span>
    ),
  },
  {
    field: "Known or accepted issues",
    requirement: (
      <>Classes already known or accepted, where the source publishes them.</>
    ),
    ifAbsent: <>A report may still be a duplicate</>,
  },
  {
    field: "Scope version",
    requirement: (
      <>
        An effective date, so a researcher knows which rules applied when they
        tested.
      </>
    ),
    ifAbsent: <>Check before testing rather than after</>,
  },
];

export default function ScopeStatement() {
  return (
    <section
      id="scope"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Scope
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            What a scope statement must contain to be usable.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            A scope list without version, environment and exclusion detail
            leaves a researcher guessing — and guessing is how someone ends up
            testing production by accident.
          </p>
        </div>

        {/* Stacked cards — small screens */}
        <div className="flex w-full flex-col gap-3 lg:hidden">
          {FIELDS.map((row) => (
            <div
              key={row.field}
              className="flex w-full flex-col gap-3 rounded-2xl border border-[#dfe5ee] bg-white p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
            >
              <h3 className="!m-0 text-sm font-bold !leading-5 !text-[#091127] font-[family-name:var(--font-jakarta)]">
                {row.field}
              </h3>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Requirement
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.requirement}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  If absent
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.ifAbsent}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Table — md and up */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] lg:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fafbfc]">
                  <th className="w-52 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Field
                  </th>

                  <th className="border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Requirement
                  </th>

                  <th className="w-96 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    If absent
                  </th>
                </tr>
              </thead>

              <tbody>
                {FIELDS.map((row, index) => (
                  <tr
                    key={row.field}
                    className={
                      index === FIELDS.length - 1
                        ? ""
                        : "border-b border-[#edf0f4]"
                    }
                  >
                    <td className="px-4 py-3.5 align-top text-sm font-semibold !leading-5 !text-[#091127]">
                      {row.field}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.requirement}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.ifAbsent}
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
