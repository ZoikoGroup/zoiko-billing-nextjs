"use client";

const preferenceSources = [
  {
    source: "Explicit customer or entity preference",
    boundary:
      "Primary configured preference for eligible future surfaces — must be current and authorized",
  },
  {
    source: "Purpose-specific contact preference",
    boundary:
      "Applies to defined communication only; does not override document language automatically",
  },
  {
    source: "Entity default",
    boundary:
      "A fallback for eligible surfaces — cannot create an unsupported language",
  },
  {
    source: "Product or global default",
    boundary:
      "The last approved fallback according to surface policy, disclosed by system evidence",
  },
  {
    source: "One-time document override",
    boundary:
      "Only where permitted, with explicit effective scope; does not rewrite the master preference",
  },
  {
    source: "Imported CRM or ERP preference",
    boundary:
      "A mapped input with source and currentness — not automatically trusted as Billing authority",
  },
  {
    source: "Zoiko One mapped preference",
    boundary:
      "Context only, per approved object mapping; no permission or support inheritance",
  },
];

const resolutionStates = [
  {
    state: "Resolved",
    type: "resolved",
    description:
      "One current supported language chosen for the exact surface and context",
  },
  {
    state: "Fallback used",
    type: "fallback",
    description: "An approved fallback was applied and recorded",
  },
  {
    state: "Conflict",
    type: "conflict",
    description:
      "Multiple current sources disagree; the configured authority or review applies",
  },
  {
    state: "Unsupported preference",
    type: "unsupported",
    description:
      "The preference exists, but the current surface cannot support it",
  },
  {
    state: "Stale preference",
    type: "stale",
    description:
      "The source or currentness threshold has been exceeded",
  },
  {
    state: "Unknown",
    type: "unknown",
    description:
      "No reliable preference — an approved default is used, never a guess",
  },
];

const stateStyles = {
  resolved: {
    wrapper: "bg-[#f0f8f3] ring-[#b7e7c7]",
    dot: "bg-[#29945a]",
    text: "text-[#29945a]",
  },
  fallback: {
    wrapper: "bg-[#f6f7f9] ring-[#d9dde4]",
    dot: "border-2 border-[#55708f]",
    text: "text-[#55708f]",
  },
  conflict: {
    wrapper: "bg-[#f9f4f4] ring-[#e9bfc0]",
    dot: "bg-[#d64b4b]",
    text: "text-[#d64b4b]",
  },
  unsupported: {
    wrapper: "bg-[#fbf7f0] ring-[#e9c98f]",
    dot: "bg-[#c87920]",
    text: "text-[#c87920]",
  },
  stale: {
    wrapper: "bg-[#f7f7f8] ring-[#d5d9e0]",
    dot: "bg-[#506a88]",
    text: "text-[#506a88]",
  },
  unknown: {
    wrapper: "bg-[#f5f7fb] ring-[#d4dce8]",
    dot: "bg-[#5579b5]",
    text: "text-[#5579b5]",
  },
};

function StateBadge({
  state,
  type,
}: {
  state: string;
  type: keyof typeof stateStyles;
}) {
  const styles = stateStyles[type];

  return (
    <span
      className={`
        inline-flex
        w-fit
        items-center
        gap-2
        rounded-md
        px-3
        py-1
        text-xs
        font-semibold
        leading-4
        ring-1
        ${styles.wrapper}
        ${styles.text}
      `}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-sm ${styles.dot}`}
      />
      {state}
    </span>
  );
}

export default function PreferenceResolution() {
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
                Customer &amp; entity preference and resolution
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
                A preference cannot create support
              </span>

              <span className="block sm:whitespace-nowrap">
                that does not exist.
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
              Seven preference sources feed resolution, each with a boundary.
              Where none resolves, the system uses an approved default — it
              never guesses.
            </p>
          </div>

          {/* TWO COLUMNS */}
          <div className="flex w-full flex-col gap-5 lg:flex-row">
            {/* PREFERENCE SOURCES */}
            <div
              className="
                min-w-0
                flex-1
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {/* HEADER */}
              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-4">
                <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
                  Preference sources and their boundaries.
                </p>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:block">
                <div className="grid grid-cols-[192px_minmax(0,1fr)]">
                  {preferenceSources.map((item, index) => {
                    const isLast = index === preferenceSources.length - 1;

                    return (
                      <div key={item.source} className="contents">
                        <div
                          className={`
                            px-4
                            py-3.5
                            ${
                              !isLast
                                ? "border-b border-[#edf0f4]"
                                : ""
                            }
                          `}
                        >
                          <span className="text-sm font-semibold leading-5 text-[#091127]">
                            {item.source}
                          </span>
                        </div>

                        <div
                          className={`
                            px-4
                            py-3.5
                            ${
                              !isLast
                                ? "border-b border-[#edf0f4]"
                                : ""
                            }
                          `}
                        >
                          <span className="text-sm font-normal leading-5 text-[#5d7192]">
                            {item.boundary}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* MOBILE */}
              <div className="flex flex-col md:hidden">
                {preferenceSources.map((item, index) => (
                  <div
                    key={item.source}
                    className={`
                      p-5
                      ${
                        index !== preferenceSources.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <p className="!m-0 text-sm font-semibold leading-5 text-[#091127]">
                      {item.source}
                    </p>

                    <p className="!m-0 mt-2 text-sm font-normal leading-6 text-[#5d7192]">
                      {item.boundary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RESOLUTION STATES */}
            <div
              className="
                min-w-0
                flex-1
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {/* HEADER */}
              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-4">
                <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
                  Resolution states.
                </p>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:block">
                {resolutionStates.map((item, index) => (
                  <div
                    key={item.state}
                    className={`
                      grid
                      grid-cols-[192px_minmax(0,1fr)]
                      ${
                        index !== resolutionStates.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-start px-4 py-4">
                      <StateBadge
                        state={item.state}
                        type={item.type as keyof typeof stateStyles}
                      />
                    </div>

                    <div className="px-4 py-4">
                      <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE */}
              <div className="flex flex-col md:hidden">
                {resolutionStates.map((item, index) => (
                  <div
                    key={item.state}
                    className={`
                      p-5
                      ${
                        index !== resolutionStates.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <StateBadge
                      state={item.state}
                      type={item.type as keyof typeof stateStyles}
                    />

                    <p className="!m-0 mt-3 text-sm font-normal leading-6 text-[#5d7192]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}