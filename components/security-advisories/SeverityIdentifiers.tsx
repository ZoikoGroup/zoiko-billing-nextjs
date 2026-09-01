type FieldRule = {
  field: string;
  rule: React.ReactNode;
  failure: React.ReactNode;
};

const FIELDS: FieldRule[] = [
  {
    field: "Public severity",
    rule: (
      <>
        Rendered only if Security publishes a source-controlled public severity
        system.
      </>
    ),
    failure: <>A severity word with no defined scale behind it</>,
  },
  {
    field: "Internal severity",
    rule: (
      <>
        <span className="font-bold">Never exposed by default</span>, and not
        interchangeable with public severity.
      </>
    ),
    failure: <>An engineering triage label read as customer risk</>,
  },
  {
    field: "CVSS score or vector",
    rule: (
      <>
        Only if officially calculated and approved.{" "}
        <span className="font-bold">Never auto-generated from prose.</span>
      </>
    ),
    failure: <>A computed-looking number nobody calculated</>,
  },
  {
    field: "CVE ID",
    rule: <>Only after authoritative assignment and publication.</>,
    failure: <>A placeholder identifier that later belongs to something else</>,
  },
  {
    field: "Vendor or advisory ID",
    rule: <>The exact approved external reference only.</>,
    failure: <>A guessed reference that misdirects a reader</>,
  },
  {
    field: "Exploit status",
    rule: (
      <>
        &quot;Known exploited&quot; or &quot;proof of concept available&quot;
        only where an approved source establishes it.
      </>
    ),
    failure: (
      <>
        <span className="font-bold">Manufactured urgency</span> — or false
        reassurance
      </>
    ),
  },
  {
    field: "Affected customer count",
    rule: <>Not published unless explicitly approved and safe.</>,
    failure: (
      <>An exposure figure that itself becomes attacker intelligence</>
    ),
  },
];

export default function SeverityIdentifiers() {
  return (
    <section
      id="severity-identifiers"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Severity &amp; identifiers
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Seven fields that appear only when authoritatively assigned.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Each is trivially easy to generate plausibly, which is exactly why
            each requires an external authority.
          </p>
        </div>

        {/* Stacked cards — below lg */}
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
                  Rule
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.rule}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Failure prevented
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.failure}
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
                  <th className="w-48 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Field
                  </th>

                  <th className="border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Rule
                  </th>

                  <th className="w-96 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Failure prevented
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
                      {row.rule}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.failure}
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
