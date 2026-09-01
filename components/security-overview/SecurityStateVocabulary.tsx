export default function SecurityStateVocabulary() {
  const states = [
    {
      state: "Verified / current",
      stateClass: "w-32 bg-[#e5e8e5] text-[#287a46] outline-[#a9d6b5]",
      dotClass: "bg-[#287a46]",
      meaning: "An approved source is current for the displayed scope.",
      treatment: (
        <>
          Plain state plus date and scope —{" "}
          <strong>not a celebratory badge</strong>
        </>
      ),
    },
    {
      state: "Scoped / conditional",
      stateClass: "w-40 bg-[#f0eeea] text-[#a65a20] outline-[#e4b98f]",
      dotClass: "bg-[#a65a20]",
      meaning: "True only under stated conditions.",
      treatment: (
        <>
          <strong>The scope stays adjacent to the claim</strong>, never in a
          footnote
        </>
      ),
    },
    {
      state: "Under review",
      stateClass: "w-28 bg-[#f1f2f3] text-[#3d6eaa] outline-[#d2d6db]",
      dotClass: "bg-[#3d6eaa]",
      meaning: "The source or claim is being revalidated.",
      treatment: (
        <>
          <strong>Previous wording is not presented as current fact</strong>
        </>
      ),
    },
    {
      state: "Unavailable",
      stateClass: "w-24 bg-[#f4f5f6] text-[#7890b2] outline-[#dfe5ee]",
      dotClass: "bg-[#7890b2]",
      meaning: "Public evidence or detail is not available.",
      treatment: "An evidence or request route is offered where one exists",
    },
    {
      state: "Superseded",
      stateClass: "w-28 bg-[#f1efeb] text-[#a65a20] outline-[#e2b68b]",
      dotClass: "bg-[#a65a20]",
      meaning: "A newer record replaces this one.",
      treatment: "The successor is linked and correction history preserved",
    },
    {
      state: "Withdrawn",
      stateClass: "w-24 bg-[#f1eded] text-[#c24b45] outline-[#e2b6b3]",
      dotClass: "bg-[#c24b45]",
      meaning: "The claim should no longer be relied on.",
      treatment:
        "Removed from normal browse and index; explained only if needed",
    },
    {
      state: "Not established",
      stateClass: "w-32 bg-[#f1f2f3] text-[#3d6eaa] outline-[#d2d6db]",
      dotClass: "bg-[#3d6eaa]",
      meaning: "No current approved public source establishes the fact.",
      treatment: <strong>No inference and no optimistic fallback</strong>,
    },
  ];

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
            gap-5 px-0
            sm:px-4
            md:px-7
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[662px] flex-col items-center
              gap-3 pt-2 text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Security state vocabulary
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
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
              Seven states, and none rendered as a badge.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Every state is a plain label with its scope and date adjacent —
              because a celebratory treatment of &quot;verified&quot; invites
              the reader to skip the scope that qualifies it.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full overflow-hidden rounded-2xl border border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden overflow-x-auto md:block">
              <div className="min-w-[1040px]">
                {/* HEADER */}
                <div className="grid grid-cols-[224px_384px_minmax(0,1fr)]">
                  <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      State
                    </span>
                  </div>

                  <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Meaning
                    </span>
                  </div>

                  <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Treatment
                    </span>
                  </div>
                </div>

                {/* ROWS */}
                {states.map((item, index) => (
                  <div
                    key={item.state}
                    className={`
                      grid grid-cols-[224px_384px_minmax(0,1fr)]
                      ${index !== states.length - 1 ? "border-b border-[#edf0f4]" : ""}
                    `}
                  >
                    {/* STATE */}
                    <div className="border-r border-[#edf0f4] px-4 py-3.5">
                      <div
                        className={`
                          flex h-6 min-h-6 items-center rounded-md
                          px-2.5 outline outline-1 outline-offset-[-1px]
                          ${item.stateClass}
                        `}
                      >
                        <span
                          className={`mr-2 h-1.5 w-1.5 shrink-0 rounded-sm opacity-80 ${item.dotClass}`}
                        />

                        <span className="text-xs font-semibold leading-4">
                          {item.state}
                        </span>
                      </div>
                    </div>

                    {/* MEANING */}
                    <div className="border-r border-[#edf0f4] px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {item.meaning}
                      </span>
                    </div>

                    {/* TREATMENT */}
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {item.treatment}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {states.map((item, index) => (
                <div
                  key={item.state}
                  className={`
                    p-5
                    ${index !== states.length - 1 ? "border-b border-[#edf0f4]" : ""}
                  `}
                >
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      State
                    </p>

                    <div
                      className={`
                        mt-2 flex h-6 w-fit min-h-6 items-center rounded-md
                        px-2.5 outline outline-1 outline-offset-[-1px]
                        ${item.stateClass}
                      `}
                    >
                      <span
                        className={`mr-2 h-1.5 w-1.5 shrink-0 rounded-sm opacity-80 ${item.dotClass}`}
                      />

                      <span className="text-xs font-semibold leading-4">
                        {item.state}
                      </span>
                    </div>
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
                      Treatment
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.treatment}
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