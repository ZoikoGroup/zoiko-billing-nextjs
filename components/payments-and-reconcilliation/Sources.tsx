"use client";

const evidenceRows = [
  {
    number: "1",
    label: "Source",
    value: "Approved payment provider · webhook",
    mono: false,
  },
  {
    number: "2",
    label: "Event and dedupe key",
    value: "evt_7c19 · key pmt_7c19_v1",
    mono: true,
  },
  {
    number: "3",
    label: "Original state",
    value: '"transfer.completed" · retained verbatim',
    mono: true,
  },
  {
    number: "4",
    label: "Normalized state",
    value: "settled · mapping version 6",
    mono: true,
  },
  {
    number: "5",
    label: "Timestamps",
    value: "received 24 Jul 11:02Z · provider 24 Jul 10:58Z",
    mono: true,
  },
  {
    number: "6",
    label: "Value and settlement date",
    value: "value 24 Jul · settlement 25 Jul",
    mono: true,
  },
];

const sourceRows = [
  {
    title: (
      <>
        Payment provider
        <br />
        events
      </>
    ),
    description:
      "Gateway or provider events, where that provider is verified for your configuration.",
  },
  {
    title: (
      <>
        Bank and open
        <br />
        banking
      </>
    ),
    description:
      "Bank statement, open-banking or file import where supported.",
  },
  {
    title: "System integrations",
    description:
      "ERP, commerce, CRM or custom integration records where verified.",
  },
  {
    title: "Manual evidence",
    description:
      "Entered under restricted permission with a recorded reason.",
  },
];

export default function Sources() {
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
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
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
                Sources
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
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
              Preserve the original evidence behind every payment state.
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
              Normalization makes provider states comparable. It never
              discards what the provider actually said, or when it said it.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              grid
              w-full
              gap-10
              pt-2

              lg:grid-cols-2
              lg:gap-12
            "
          >
            {/* PRODUCT VIEW */}
            <div className="flex w-full flex-col items-start gap-3">
              {/* BADGE */}
              <div className="flex items-center">
                <div
                  className="
                    flex
                    h-7
                    items-center
                    rounded-full
                    border
                    border-[#dfe5ee]
                    bg-white
                    px-3
                  "
                >
                  <span className="mr-2 h-[5px] w-[5px] rounded-sm bg-[#7890b2]" />

                  <span
                    className="
                      text-[10px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-wider
                      text-[#7890b2]
                    "
                  >
                    Illustrative product view
                  </span>
                </div>
              </div>

              {/* PRODUCT CARD */}
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
                {/* CARD HEADER */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-2.5
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-4
                    py-3.5
                  "
                >
                  <span className="h-2 w-2 rounded-sm bg-[#7890b2]" />

                  <span
                    className="
                      text-xs
                      font-normal
                      uppercase
                      tracking-wider
                      text-[#5d7192]
                    "
                  >
                    State normalization · PMT-88A41C
                  </span>

                  <span
                    className="
                      ml-auto
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-3
                      py-1
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-[#7890b2]
                    "
                  >
                    ✓ &nbsp; Mapping v6
                  </span>
                </div>

                {/* EVIDENCE ROWS */}
                {evidenceRows.map((row, index) => (
                  <div
                    key={row.number}
                    className={`
                      flex
                      items-start
                      gap-3.5
                      px-4
                      py-3.5

                      ${
                        index !== evidenceRows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* NUMBER */}
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-[#dfe5ee]
                        bg-[#fafbfc]
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-semibold
                          leading-4
                          text-[#7890b2]
                        "
                      >
                        {row.number}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">
                      <div
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          leading-4
                          tracking-[0.12em]
                          text-[#7890b2]
                        "
                      >
                        {row.label}
                      </div>

                      <div
                        className={`
                          mt-1.5
                          break-words
                          text-sm
                          leading-5
                          text-[#091127]
                          ${
                            row.mono
                              ? "font-mono"
                              : "font-normal"
                          }
                        `}
                      >
                        {row.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PRODUCT NOTE */}
              <p
                className="
                  !m-0
                  text-[10px]
                  font-normal
                  uppercase
                  leading-5
                  tracking-wider
                  text-[#7890b2]
                "
              >
                Support for a specific provider, bank, country, network or
                payment method is published only where it has been verified.
              </p>
            </div>

            {/* WHERE EVIDENCE COMES FROM */}
            <div className="flex w-full flex-col items-start gap-3">
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                Where evidence comes from
              </h3>

              <div className="mt-1 w-full">
                {sourceRows.map((row, index) => (
                  <div
                    key={index}
                    className={`
                      grid
                      gap-4
                      py-3.5

                      sm:grid-cols-[145px_1fr]

                      ${
                        index !== sourceRows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {row.title}
                    </div>

                    <div
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SOURCE BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-6
              py-7

              sm:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Source boundary
            </span>

            <p
              className="
                !m-0
                max-w-[850px]
                text-base
                font-normal
                leading-7
                text-[#091127]
              "
            >
              Manual evidence never silently overrides provider truth. Where
              a manual record conflicts with a provider state, the conflict is
              surfaced for review rather than resolved quietly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}