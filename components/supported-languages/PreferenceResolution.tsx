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
    description:
      "An approved fallback was applied and recorded",
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
    wrapper: "bg-[#F0F8F3] ring-[#B7E7C7]",
    dot: "bg-[#29945A]",
    text: "text-[#29945A]",
  },
  fallback: {
    wrapper: "bg-[#F6F7F9] ring-[#D9DDE4]",
    dot: "border-2 border-[#55708F]",
    text: "text-[#55708F]",
  },
  conflict: {
    wrapper: "bg-[#F9F4F4] ring-[#E9BFC0]",
    dot: "bg-[#D64B4B]",
    text: "text-[#D64B4B]",
  },
  unsupported: {
    wrapper: "bg-[#FBF7F0] ring-[#E9C98F]",
    dot: "bg-[#C87920]",
    text: "text-[#C87920]",
  },
  stale: {
    wrapper: "bg-[#F7F7F8] ring-[#D5D9E0]",
    dot: "bg-[#506A88]",
    text: "text-[#506A88]",
  },
  unknown: {
    wrapper: "bg-[#F5F7FB] ring-[#D4DCE8]",
    dot: "bg-[#5579B5]",
    text: "text-[#5579B5]",
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
      className={`inline-flex w-fit items-center gap-2 rounded-md px-3 py-1 text-xs font-semibold leading-4 ring-1 ${styles.wrapper} ${styles.text}`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-sm ${styles.dot}`} />
      {state}
    </span>
  );
}

export default function PreferenceResolution() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 lg:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#3B82F6] sm:text-xs sm:tracking-[0.16em]">
              Customer &amp; entity preference and resolution
            </span>

            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-3xl font-extrabold leading-9 text-[#172033] sm:text-4xl sm:leading-10">
            <span className="block sm:whitespace-nowrap">
              A preference cannot create support
            </span>

            <span className="block sm:whitespace-nowrap">
              that does not exist.
            </span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#5B6577] sm:text-base sm:leading-7">
            Seven preference sources feed resolution, each with a boundary.
            Where none resolves, the system uses an approved default — it
            never guesses.
          </p>
        </div>

        {/* Two Columns */}
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          {/* Preference Sources */}
          <div className="min-w-0 flex-1 overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#E5E7EB]">
            {/* Header */}
            <div className="border-b border-[#E5E7EB] bg-[#FAFAFA] px-5 py-4">
              <p className="text-sm font-normal leading-5 text-[#5B6577]">
                Preference sources and their boundaries.
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[192px_minmax(0,1fr)]">
                {preferenceSources.map((item, index) => {
                  const isLast = index === preferenceSources.length - 1;

                  return (
                    <div key={item.source} className="contents">
                      <div
                        className={`px-4 py-3.5 ${
                          !isLast ? "border-b border-[#F0F1F3]" : ""
                        }`}
                      >
                        <span className="text-sm font-semibold leading-5 text-[#172033]">
                          {item.source}
                        </span>
                      </div>

                      <div
                        className={`px-4 py-3.5 ${
                          !isLast ? "border-b border-[#F0F1F3]" : ""
                        }`}
                      >
                        <span className="text-sm font-normal leading-5 text-[#5B6577]">
                          {item.boundary}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="flex flex-col md:hidden">
              {preferenceSources.map((item) => (
                <div
                  key={item.source}
                  className="border-b border-[#F0F1F3] p-4 last:border-b-0"
                >
                  <p className="text-sm font-semibold leading-5 text-[#172033]">
                    {item.source}
                  </p>

                  <p className="mt-2 text-sm font-normal leading-5 text-[#5B6577]">
                    {item.boundary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Resolution States */}
          <div className="min-w-0 flex-1 overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#E5E7EB]">
            {/* Header */}
            <div className="border-b border-[#E5E7EB] bg-[#FAFAFA] px-5 py-4">
              <p className="text-sm font-normal leading-5 text-[#5B6577]">
                Resolution states.
              </p>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
              {resolutionStates.map((item, index) => (
                <div
                  key={item.state}
                  className={`grid grid-cols-[192px_minmax(0,1fr)] ${
                    index !== resolutionStates.length - 1
                      ? "border-b border-[#F0F1F3]"
                      : ""
                  }`}
                >
                  <div className="flex items-start px-4 py-4">
                    <StateBadge state={item.state} type={item.type as keyof typeof stateStyles} />
                  </div>

                  <div className="px-4 py-4">
                    <p className="text-sm font-normal leading-5 text-[#5B6577]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:hidden">
              {resolutionStates.map((item) => (
                <div
                  key={item.state}
                  className="border-b border-[#F0F1F3] p-4 last:border-b-0"
                >
                  <StateBadge
                    state={item.state}
                    type={item.type as keyof typeof stateStyles}
                  />

                  <p className="mt-3 text-sm font-normal leading-5 text-[#5B6577]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}