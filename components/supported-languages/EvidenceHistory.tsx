"use client";

const evidenceRows = [
  {
    label: "Record ID",
    value: "A stable language-surface capability reference",
  },
  {
    label: "Source & owner",
    value:
      "Product, localization, document, support or partner authority",
  },
  {
    label: "Status",
    value: "The current state from the approved vocabulary",
  },
  {
    label: "Limitations",
    value: "Visible, structured and adjacent to the state",
  },
  {
    label: "Effective from and to",
    value: "Current, future and expired kept separate",
  },
  {
    label: "Last reviewed",
    value: "The evidence review timestamp",
  },
  {
    label: "Stale threshold",
    value:
      "When exceeded, the positive claim suppresses or enters Needs review",
  },
  {
    label: "Dependencies",
    value:
      "Template, resource, entity, jurisdiction, commercial, provider, render and accessibility references",
  },
  {
    label: "Change event",
    value:
      "Old and new state, actor or source, reason, effective date and supersession",
  },
];

const historyItems = [
  {
    number: "1",
    title: "01 Aug 2026 — Limited became Available",
    description:
      "Reason: accessibility profile passed · owner: Product Localization",
  },
  {
    number: "2",
    title: "18 Jul 2026 — Resource v8 approved",
    description:
      "Source text v12 · legal controlled text unchanged",
  },
  {
    number: "3",
    title: "Current dependencies",
    description:
      "Template INV-X v4 · resource bundle v8 reviewed · accessibility profile passed",
  },
];

export default function EvidenceHistory() {
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
              max-w-[1000px]
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
                Currentness, change history &amp; evidence
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              <span className="block sm:whitespace-nowrap">
                When evidence goes stale, the claim
              </span>

              <span className="block sm:whitespace-nowrap">
                comes down.
              </span>
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
              If the authoritative record is stale, conflicted or withdrawn,
              or a required dependency fails, the page stops presenting that
              language-surface combination as current support.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5

              lg:flex-row
              lg:items-start
            "
          >
            {/* LEFT CARD */}
            <div
              className="
                w-full
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              {/* CARD HEADER */}
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
                "
              >
                <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
                  Required evidence fields.
                </p>
              </div>

              {/* DESKTOP TABLE */}
              <div className="hidden md:block">
                {evidenceRows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`
                      grid
                      grid-cols-[160px_minmax(0,1fr)]
                      ${
                        index !== evidenceRows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.label}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-6 text-[#5d7192]">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE */}
              <div className="flex flex-col md:hidden">
                {evidenceRows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`
                      px-4
                      py-4
                      ${
                        index !== evidenceRows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.label}
                    </div>

                    <div className="mt-1 text-sm font-normal leading-6 text-[#5d7192]">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div
              className="
                w-full
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:p-6

                lg:flex-1
              "
            >
              {/* TITLE */}
              <h3 className="!m-0 text-lg font-bold leading-7 text-[#091127]">
                Language detail history
              </h3>

              {/* SUBTITLE */}
              <p className="!m-0 pt-1 text-xs font-normal leading-5 text-[#5d7192]">
                Synthetic Example Language A · invoice document surface
              </p>

              {/* HISTORY */}
              <div className="mt-2">
                {historyItems.map((item) => (
                  <div
                    key={item.number}
                    className="
                      flex
                      items-start
                      gap-3.5
                      border-t
                      border-[#edf0f4]
                      py-3.5
                    "
                  >
                    {/* NUMBER */}
                    <div
                      className="
                        flex
                        size-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-white
                        ring-1
                        ring-[#dfe5ee]
                      "
                    >
                      <span className="text-xs font-bold leading-5 text-[#55708f]">
                        {item.number}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">
                      <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                        {item.title}
                      </p>

                      <p className="!m-0 pt-0.5 text-xs font-normal leading-5 text-[#5d7192]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* HISTORY NOTE */}
              <div className="border-t border-[#edf0f4] pt-3.5">
                <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                  Effective since 01 Aug 2026 · last reviewed 12 Aug 2026.
                  History explains what was published and authorized at a
                  point in time — it is not a promise of continued support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}