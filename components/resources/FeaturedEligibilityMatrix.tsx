"use client";

const eligibilityRows = [
  {
    type: "Guide",
    eligible:
      "Published, substantive, current review, relevant to current product context.",
    disqualifier: "Review overdue · withdrawn · thin",
  },
  {
    type: "Template",
    eligible:
      "Published, safe asset, current version, accessible preview and download.",
    disqualifier: "Malware · MIME · version · accessibility failure",
    emphasis: "accessibility failure",
  },
  {
    type: "Report",
    eligible:
      "Approved evidence, methodology, limitations and freshness.",
    disqualifier: "Unverified claim · stale · correction unresolved",
    emphasis: "correction unresolved",
  },
  {
    type: "Customer story",
    eligible:
      "Approved consent, rights, attribution and claim verification.",
    disqualifier: "Consent withdrawn · claim evidence invalid",
    emphasis: "Consent withdrawn",
  },
  {
    type: "Event",
    eligible:
      "The registration or watch action matches current event state.",
    disqualifier: "Canceled · expired · recording not approved",
    emphasis: "recording not approved",
  },
  {
    type: "Product update",
    eligible:
      "Current truthful change record with clear applicability.",
    disqualifier: "Superseded · withdrawn · stale snippet",
    emphasis: "stale snippet",
  },
];

export default function FeaturedEligibilityMatrix() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-8
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:gap-10
          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
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
              Featured eligibility matrix
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              w-full
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
            Six types, and every one has an
            <br className="hidden sm:block" />
            automatic disqualifier.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              pt-1
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            Featuring is not editorial preference. A resource becomes
            ineligible the moment its disqualifier fires — without anyone
            deciding to remove it.
          </p>
        </div>

        {/* MATRIX */}
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
            <div className="grid grid-cols-[160px_minmax(0,1fr)_minmax(0,1fr)] bg-[#18304f]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Content type
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Eligible when
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Automatic disqualifier
                </span>
              </div>
            </div>

            {/* ROWS */}
            {eligibilityRows.map((row, index) => (
              <div
                key={row.type}
                className={`
                  grid
                  grid-cols-[160px_minmax(0,1fr)_minmax(0,1fr)]
                  ${
                    index !== eligibilityRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* CONTENT TYPE */}
                <div className="border-r border-[#edf0f4] bg-[#fafbfc] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.type}
                  </span>
                </div>

                {/* ELIGIBLE */}
                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {row.eligible}
                  </span>
                </div>

                {/* DISQUALIFIER */}
                <div className="bg-[#fffafa] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-red-900">
                    {row.disqualifier}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE */}
          <div className="flex flex-col md:hidden">
            {eligibilityRows.map((row, index) => (
              <div
                key={row.type}
                className={`
                  p-5
                  ${
                    index !== eligibilityRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* CONTENT TYPE */}
                <div className="mb-4">
                  <p className="!m-0 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Content type
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-6 text-[#091127]">
                    {row.type}
                  </p>
                </div>

                {/* ELIGIBLE */}
                <div className="mb-4">
                  <p className="!m-0 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Eligible when
                  </p>

                  <p className="!m-0 mt-1.5 text-xs leading-5 text-[#091127]">
                    {row.eligible}
                  </p>
                </div>

                {/* DISQUALIFIER */}
                <div className="rounded-xl bg-[#fffafa] p-3">
                  <p className="!m-0 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-red-900">
                    Automatic disqualifier
                  </p>

                  <p className="!m-0 mt-1.5 text-xs leading-5 text-red-900">
                    {row.disqualifier}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}