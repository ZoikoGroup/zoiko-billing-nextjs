const interactions = [
  {
    title: "Table of contents",
    description:
      "Semantic anchor links, keyboard usable, with optional current-section indication",
  },
  {
    title: "Copy link",
    description: (
      <>
        Only if implemented, and{" "}
        <strong>never behind a forced login</strong>; a stable URL is
        sufficient on its own
      </>
    ),
  },
  {
    title: "Print",
    description:
      "Print styles remove navigation clutter but preserve headings, the source and freshness panel, links and scope notes",
  },
  {
    title: "Code blocks",
    description:
      "Only for genuinely technical educational snippets, with accessible highlighting",
  },
  {
    title: "Tables",
    description: (
      <>
        Responsive and accessible — <strong>never used for layout</strong>
      </>
    ),
  },
  {
    title: "Callouts",
    description:
      "Reserved for decision, caution, source, example or next-step information",
  },
  {
    title: "Sticky elements",
    description: (
      <>
        <strong>No sticky call to action that covers article content</strong>;
        a desktop table of contents may be sticky within safe bounds
      </>
    ),
  },
];

export default function ReadingExp() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-16 lg:py-20 bg-color-grey-97-4">
      <div className="w-full max-w-[1240px] mx-auto px-0 sm:px-4 lg:px-7 flex flex-col items-center gap-11">

        {/* Heading */}
        <div className="w-full max-w-[1000px] pt-2 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-3 h-4">
            <div className="w-4 h-px opacity-40 bg-color-azure-60" />

            <span className="text-color-azure-60 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-widest whitespace-nowrap">
              Reading experience
            </span>

            <div className="w-4 h-px opacity-40 bg-color-azure-60" />
          </div>

          <h2 className="text-center text-color-azure-11-2 text-3xl sm:text-4xl font-extrabold leading-10">
            No sticky call to action covering the
            article.
          </h2>

          <p className="w-full max-w-[687px] pt-1 text-center text-color-azure-44-3 text-sm sm:text-base font-normal font-['Inter'] leading-6 sm:leading-7">
            Seven interaction rules that keep the guide readable, printable
            and keyboard-navigable.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto rounded-2xl">
          <div className="min-w-[900px] bg-color-white-solid rounded-2xl shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4 overflow-hidden">

            {/* Header */}
            <div className="flex">
              <div className="w-48 shrink-0 px-4 py-3.5 bg-color-grey-99-2 border-b border-color-grey-92-4">
                <span className="text-color-azure-60 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                  Interaction
                </span>
              </div>

              <div className="flex-1 px-4 py-3.5 bg-color-grey-99-2 border-b border-color-grey-92-4">
                <span className="text-color-azure-60 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                  Requirement
                </span>
              </div>
            </div>

            {/* Rows */}
            {interactions.map((item, index) => (
              <div
                key={item.title}
                className={`flex ${
                  index !== interactions.length - 1
                    ? "border-b border-color-grey-95-10"
                    : ""
                }`}
              >
                <div className="w-48 shrink-0 px-4 py-3.5">
                  <span className="text-color-azure-11-2 text-sm font-semibold font-['Inter'] leading-5">
                    {item.title}
                  </span>
                </div>

                <div className="flex-1 px-4 py-3.5">
                  <p className="text-color-azure-44-3 text-sm font-normal font-['Inter'] leading-5">
                    {item.description}
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