'use client';

type RecordRow = {
  field: string;
  required: string;
  authority: string;
  treatment: React.ReactNode;
};

const rows: RecordRow[] = [
  {
    field: 'Name',
    required: 'Yes',
    authority: 'Registry',
    treatment: 'Primary heading and link.',
  },
  {
    field: 'Category',
    required: 'Yes',
    authority: 'Registry',
    treatment: 'Label or tag.',
  },
  {
    field: 'Provider',
    required: 'Where applicable',
    authority: 'Registry',
    treatment: 'Secondary identity.',
  },
  {
    field: 'Approved purpose',
    required: 'Yes',
    authority: 'Registry / CMS',
    treatment: (
      <>
        <strong>One factual sentence.</strong> Not a benefit statement.
      </>
    ),
  },
  {
    field: 'Availability status',
    required: 'Yes',
    authority: 'Registry',
    treatment: (
      <>
        <strong>Text badge</strong> — never colour alone.
      </>
    ),
  },
  {
    field: 'Operational health',
    required: 'Only if published',
    authority: 'Status source',
    treatment: (
      <strong>
        Separate badge or link. Never merged with availability.
      </strong>
    ),
  },
  {
    field: 'Plan applicability',
    required: 'If gated',
    authority: 'Registry / commercial',
    treatment: (
      <>
        <strong>Qualifier near the action</strong>, not in a footnote.
      </>
    ),
  },
  {
    field: 'Region applicability',
    required: 'If relevant',
    authority: 'Registry',
    treatment: (
      <>
        Qualifier or detail.{' '}
        <strong>Never inferred from provider headquarters.</strong>
      </>
    ),
  },
  {
    field: 'Setup method',
    required: 'Yes',
    authority: 'Registry',
    treatment: 'Self-service, assisted, enterprise or custom.',
  },
  {
    field: 'Auth method',
    required: 'If public-safe',
    authority: 'Docs / registry',
    treatment: (
      <>
        Detail metadata. <strong>Omitted where not public-safe.</strong>
      </>
    ),
  },
  {
    field: 'Prerequisites',
    required: 'If material',
    authority: 'Docs',
    treatment: 'Concise preview, details on the destination.',
  },
  {
    field: 'Documentation',
    required: 'When setup exists',
    authority: 'Docs',
    treatment: (
      <>
        The authoritative link.{' '}
        <strong>Technical truth is never restated here.</strong>
      </>
    ),
  },
  {
    field: 'Certification',
    required: 'Only if a formal record exists',
    authority: 'Registry / partner governance',
    treatment: (
      <strong>Never inferred from a provider&apos;s own credentials.</strong>
    ),
  },
  {
    field: 'Last verified',
    required: 'Yes',
    authority: 'Registry',
    treatment: 'Date plus an explanation of what verification covered.',
  },
];

export default function RecordAnatomy() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-5
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Integration record anatomy
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Every field names its authority.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Which fields are mandatory, who owns each, and how each renders.{' '}
              <strong className="font-bold text-[#5d7192]">
                Nothing is inferred from a provider&apos;s own marketing.
              </strong>
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div className="grid grid-cols-[176px_112px_144px_minmax(0,1fr)] bg-[#101d3a]">
                <div className="border-r border-white/15 px-3.5 py-2.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Field
                  </span>
                </div>

                <div className="border-r border-white/15 px-3.5 py-2.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Required
                  </span>
                </div>

                <div className="border-r border-white/15 px-3.5 py-2.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Authority
                  </span>
                </div>

                <div className="px-3.5 py-2.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Treatment &amp; rule
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.field}
                  className={`
                    grid
                    grid-cols-[176px_112px_144px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  `}
                >
                  {/* FIELD */}
                  <div className="bg-[#fafbfc] px-3.5 py-2.5 border-r border-[#edf0f4]">
                    <span className="text-xs font-bold leading-5 text-[#091127]">
                      {row.field}
                    </span>
                  </div>

                  {/* REQUIRED */}
                  <div className="border-r border-[#edf0f4] px-3.5 py-2.5">
                    <span className="text-xs font-normal leading-5 text-[#7890b2]">
                      {row.required}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="border-r border-[#edf0f4] px-3.5 py-2.5">
                    <span className="text-xs font-normal leading-5 text-[#7890b2]">
                      {row.authority}
                    </span>
                  </div>

                  {/* TREATMENT */}
                  <div className="px-3.5 py-2.5">
                    <span className="text-xs font-normal leading-5 text-[#091127]">
                      {row.treatment}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.field}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  `}
                >
                  {/* FIELD */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Field
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.field}
                    </p>
                  </div>

                  {/* REQUIRED */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Required
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.required}
                    </p>
                  </div>

                  {/* AUTHORITY */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Authority
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.authority}
                    </p>
                  </div>

                  {/* TREATMENT */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Treatment &amp; rule
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.treatment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}