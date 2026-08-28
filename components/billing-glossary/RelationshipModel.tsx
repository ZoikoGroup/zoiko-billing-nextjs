"use client";

const relationships = [
  {
    relationship: "Alias / acronym",
    meaning: "A different label for the same meaning.",
    displayRule:
      "Resolves to the same canonical page; shown near the heading",
  },
  {
    relationship: "Broader term",
    meaning: "A more general concept.",
    displayRule: "Up to two or three high-value links",
  },
  {
    relationship: "Narrower term",
    meaning: "A more specific child concept.",
    displayRule: "Up to four relevant links",
  },
  {
    relationship: "Related term",
    meaning: "Associated but not hierarchical.",
    displayRule: "Up to four — avoid semantic dumping",
  },
  {
    relationship: "Contrast",
    meaning: "A commonly confused or meaningfully different term.",
    displayRule: "Shown when the distinction prevents an error",
  },
  {
    relationship: "Replaces / replaced by",
    meaning: "A terminology lifecycle relationship.",
    displayRule:
      "Prominent status notice on the old term, with the current term linked",
  },
];

export default function RelationshipModel() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14
          sm:px-8 sm:py-16
          md:px-10 md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col items-center
            gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* INTRO */}
          <div
            className="
              flex w-full max-w-[662px] flex-col items-center
              gap-3 pt-2 text-center
            "
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Relationship model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold
                !leading-[1.2] !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Six typed relationships, with display limits.
            </h2>

            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Typed links prevent semantic dumping — a reader can tell whether
              a nearby term is a parent, a child, a synonym or a trap.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full overflow-hidden rounded-2xl border
              border-[#dfe5ee] bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP */}
            <div className="hidden md:block">
              <div
                className="
                  grid
                  grid-cols-[208px_minmax(0,1fr)_minmax(0,1.35fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Relationship
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Meaning
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Display rule
                  </span>
                </div>
              </div>

              {relationships.map((item, index) => (
                <div
                  key={item.relationship}
                  className={`
                    grid
                    grid-cols-[208px_minmax(0,1fr)_minmax(0,1.35fr)]
                    ${
                      index !== relationships.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.relationship}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.meaning}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.displayRule}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {relationships.map((item, index) => (
                <div
                  key={item.relationship}
                  className={`
                    p-5
                    ${
                      index !== relationships.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Relationship
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {item.relationship}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Meaning
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.meaning}
                    </p>
                  </div>

                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Display rule
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.displayRule}
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