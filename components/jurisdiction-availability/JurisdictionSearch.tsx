"use client";

const points = [
  {
    title: "Accepted terms",
    description:
      "canonical name, approved common name, code and approved alias.",
  },
  {
    title: "Normalization",
    description:
      "case, spacing and punctuation normalized, with the user's visible language preserved.",
  },
  {
    title: "Fuzzy match",
    description:
      "suggestions may appear, but the user confirms before any status is treated as authoritative.",
  },
  {
    title: "Subnational search",
    description:
      "only where authoritative subnational records exist; otherwise routed to the parent jurisdiction with the scope explained.",
  },
  {
    title: "Browser or IP location",
    description:
      "may never silently choose availability or commercial state.",
  },
  {
    title: "Recent selection",
    description:
      "persisted only under privacy-safe preference rules, and never used as legal or commercial evidence.",
  },
];

export default function JurisdictionSearch() {
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
            grid
            w-full
            max-w-[1240px]
            items-center
            gap-8

            lg:grid-cols-2
            lg:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              w-full
              min-w-0
              flex-col
              items-start
              gap-3

              sm:gap-3.5
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
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
                Search, canonicalization &amp; disambiguation
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[610px]
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
              An ambiguous name is never auto-resolved.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[610px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Every selection resolves to an immutable jurisdiction
              identifier. Where a name could mean more than one place, the
              page asks rather than guesses — because a wrong match becomes a
              wrong financial decision.
            </p>

            {/* POINTS */}
            <div className="mt-1 w-full">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="
                    flex
                    items-start
                    gap-3
                    border-b
                    border-[#edf0f4]
                    py-3
                    last:border-b-0

                    sm:py-4
                  "
                >
                  {/* BULLET */}
                  <span
                    className="
                      mt-2
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-[2px]
                      bg-sky-600
                    "
                  />

                  {/* TEXT */}
                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      flex-col
                      gap-0.5

                      sm:flex-row
                      sm:items-start
                      sm:gap-3
                    "
                  >
                    <span
                      className="
                        w-full
                        shrink-0
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]

                        sm:w-[145px]
                      "
                    >
                      {point.title}
                    </span>

                    <span
                      className="
                        min-w-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      <span className="hidden sm:inline">— </span>
                      {point.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full min-w-0">
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <img
                src="/images/jurisdiction-availability/jurisdiction-search.png"
                alt="Jurisdiction search, canonicalization and disambiguation"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}