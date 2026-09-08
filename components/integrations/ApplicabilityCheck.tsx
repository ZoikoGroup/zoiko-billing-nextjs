'use client';

type CheckRow = {
  question: string;
  source: string;
  interface: React.ReactNode;
};

const rows: CheckRow[] = [
  {
    question: 'Is it currently offered?',
    source: 'Registry availability status',
    interface: 'Availability badge',
  },
  {
    question: 'Can my plan use it?',
    source: 'Registry / commercial configuration',
    interface: (
      <>
        Plan qualifier <strong>near the action</strong>
      </>
    ),
  },
  {
    question: 'Is it offered in my region?',
    source: 'Registry',
    interface: (
      <>
        Region qualifier ·{' '}
        <a
          href="/check-availability"
          className="font-semibold text-blue-600 underline-offset-2 hover:underline"
        >
          check availability
        </a>
      </>
    ),
  },
  {
    question: 'Do I need an external provider account?',
    source: 'Docs / registry',
    interface: 'Prerequisites list',
  },
  {
    question: 'Is setup self-service?',
    source: 'Registry',
    interface: 'Setup method',
  },
  {
    question: 'Is it healthy right now?',
    source: 'Operational status source',
    interface: <strong>Separate health badge or link</strong>,
  },
  {
    question: 'How current is this information?',
    source: 'Registry verification',
    interface: 'Last verified date',
  },
];

export default function ApplicabilityCheck() {
  return (
    <section className="w-full bg-[#f7f8fa]">
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
                Applicability check
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
              Seven questions a reader actually has.
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
              Each has a distinct answer source. A directory that answers only
              the first leaves six unanswered while looking complete.
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
              <div className="grid grid-cols-3 bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Question
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Answer source
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Interface
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.question}
                  className={`
                    grid
                    grid-cols-3
                    ${
                      index !== rows.length - 1
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  `}
                >
                  {/* QUESTION */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.question}
                    </span>
                  </div>

                  {/* SOURCE */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        text-sm leading-5 text-[#5d7192]
                        ${
                          row.question === 'Is it healthy right now?'
                            ? 'font-bold'
                            : 'font-normal'
                        }
                      `}
                    >
                      {row.source}
                    </span>
                  </div>

                  {/* INTERFACE */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm leading-5 text-[#5d7192]">
                      {row.interface}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.question}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  `}
                >
                  {/* QUESTION */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Question
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.question}
                    </p>
                  </div>

                  {/* ANSWER SOURCE */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Answer source
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.source}
                    </p>
                  </div>

                  {/* INTERFACE */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Interface
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.interface}
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