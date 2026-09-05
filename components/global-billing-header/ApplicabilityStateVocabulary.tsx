export default function ApplicabilityStateVocabulary() {
  const rows = [
    {
      state: "Available",
      meaning: (
        <>
          Current source establishes the market or capability as available{" "}
          <strong>under stated scope</strong>.
        </>
      ),
      behavior: (
        <>
          Relevant current route and commercial action, per commercial
          configuration.
        </>
      ),
      restricted: false,
    },
    {
      state: "Limited availability",
      meaning: (
        <>
          Current source establishes <strong>material scope limits</strong>.
        </>
      ),
      behavior: (
        <>
          <strong>The qualifier renders before the CTA</strong>, not after it.
        </>
      ),
      restricted: false,
    },
    {
      state: "Partner-supported",
      meaning: (
        <>
          Delivery depends on an approved partner or provider relationship.
        </>
      ),
      behavior: (
        <>
          Identify the dependency{" "}
          <strong>without implying Zoiko-owned capability</strong>.
        </>
      ),
      restricted: true,
    },
    {
      state: "Planned",
      meaning: (
        <>
          An approved roadmap source <strong>explicitly permits</strong> a
          public planned state.
        </>
      ),
      behavior: (
        <>
          <strong>No current-capability language.</strong> Optional
          notification only if approved.
        </>
      ),
      restricted: true,
    },
    {
      state: "Not available",
      meaning: <>Current source says unavailable in the stated scope.</>,
      behavior: (
        <>
          <strong>No signup promise.</strong> Alternative routes only if
          approved.
        </>
      ),
      restricted: true,
    },
    {
      state: (
        <>
          Unknown / not
          <br />
          established
        </>
      ),
      meaning: <>Source cannot establish current state.</>,
      behavior: (
        <>
          <strong>Never converted to Available.</strong> Routes to
          availability, support or sales qualification.
        </>
      ),
      restricted: true,
    },
  ];

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
                Applicability state vocabulary
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
              Six states, and two of them are not
              &quot;no&quot;.
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
              Availability is not binary. Partner-supported and unknown are
              distinct conditions that a yes/no display would flatten into
              whichever answer is more convenient.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            {/* HEADER */}
            <div className="grid grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] bg-[#091127]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-wide
                    text-white
                  "
                >
                  State
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-wide
                    text-white
                  "
                >
                  Meaning
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-wide
                    text-white
                  "
                >
                  Page behavior
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={index}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* STATE */}
                <div className="border-r border-[#edf0f4] bg-[#fafbfc] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.state}
                  </span>
                </div>

                {/* MEANING */}
                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <p className="!m-0 text-xs font-normal leading-5 text-[#091127]">
                    {row.meaning}
                  </p>
                </div>

                {/* BEHAVIOR */}
                <div
                  className={`
                    px-3.5
                    py-3
                    ${
                      row.restricted
                        ? "bg-[#faf7f7] text-red-900"
                        : "bg-white"
                    }
                  `}
                >
                  <p
                    className={`
                      !m-0
                      text-xs
                      leading-5
                      ${
                        row.restricted
                          ? "font-normal text-red-900"
                          : "font-normal text-[#091127]"
                      }
                    `}
                  >
                    {row.behavior}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:hidden">
            {rows.map((row, index) => (
              <div
                key={index}
                className={`
                  p-5
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* STATE */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    State
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.state}
                  </p>
                </div>

                {/* MEANING */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Meaning
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {row.meaning}
                  </p>
                </div>

                {/* PAGE BEHAVIOR */}
                <div
                  className={
                    row.restricted
                      ? "rounded-xl bg-[#faf7f7] p-4"
                      : ""
                  }
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Page behavior
                  </p>

                  <p
                    className={`
                      !m-0
                      mt-1.5
                      text-sm
                      leading-6
                      ${
                        row.restricted
                          ? "text-red-900"
                          : "text-[#5d7192]"
                      }
                    `}
                  >
                    {row.behavior}
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