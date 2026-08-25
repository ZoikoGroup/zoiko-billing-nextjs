export default function SourcesAndHandoffs() {
  const handoffs = [
    {
      title: "Approved source records",
      description:
        "Customer, charge, schedule, order or project context may arrive from approved systems.",
    },
    {
      title: "Workflow participation",
      description:
        "Workflows may prepare, validate, route, issue, deliver or handle exceptions within permission.",
    },
    {
      title: "Verified connectors only",
      description:
        "Accounting, ERP, CRM, commerce, payment and document connectors are described only when verified.",
    },
    {
      title: "Zoiko One handoffs",
      description:
        "Shared identity, approved source records or cross-product handoffs where enabled.",
    },
    {
      title: "Source ownership",
      description:
        "Which system owns a field, and what happens when two disagree, stays visible.",
    },
    {
      title: "Sync state and retry",
      description:
        "Sync state, retry behaviour and conflict handling are shown rather than hidden.",
    },
  ];

  return (
    <section className="w-full bg-[#f5f7f7]">
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
          lg:py-24
          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1220px]
            flex-col
            items-start
            gap-9
            px-0
            lg:px-12
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8
              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2.5
                pb-2
                lg:pb-6
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-0.5
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27c7d9]
                    to-[#4f8bd9]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#49758f]
                    sm:text-xs
                  "
                >
                  Sources and handoffs
                </span>
              </div>

              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[34px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#08294a]
                  sm:text-[40px]
                  md:text-[44px]
                  lg:text-[48px]
                "
              >
                Where documents come from, and where they go next.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#526c82]
                  sm:text-base
                  sm:leading-8
                "
              >
                Approved systems and workflows can supply the context and
                move a document through its lifecycle, with source ownership
                and conflict behaviour visible.
              </p>
            </div>
          </div>

          {/* HANDOFF CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-zinc-200
              bg-zinc-200
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {handoffs.map((item, index) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
                  bg-white
                  px-6
                  py-6
                  transition-colors
                  hover:bg-[#fbfcfc]
                  sm:min-h-[205px]
                  sm:border-r
                  sm:border-b
                  sm:border-zinc-200
                  lg:min-h-[210px]
                  lg:[&:nth-child(3n)]:border-r-0
                  lg:[&:nth-child(n+4)]:border-b-0
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    mb-5
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#08294a]
                    text-[10px]
                    font-medium
                    leading-4
                    text-white
                  "
                >
                  {index + 1}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-6
                    text-[#08294a]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    max-w-[500px]
                    text-sm
                    font-normal
                    leading-6
                    text-[#526c82]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CONNECTOR BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#4389b5]
              bg-[#eef2f3]
              px-5
              py-7
              sm:px-7
              sm:py-8
            "
          >
            <div
              className="
                text-[10px]
                font-normal
                uppercase
                leading-4
                tracking-[0.08em]
                text-[#49758f]
              "
            >
              Connector boundary
            </div>

            <p
              className="
                !m-0
                mt-2
                max-w-[850px]
                text-sm
                font-normal
                leading-7
                text-[#08294a]
                sm:text-base
              "
            >
              Not every connector creates, updates, posts or clears
              documents, and not in real time. Behaviour is stated per
              connector in the governed integration registry. Zoiko Billing
              remains independently deployable.
            </p>
          </div>

          {/* CTA */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              justify-center
              gap-4
              pt-0
              sm:flex-row
              sm:items-center
            "
          >
            <button
              type="button"
              className="
                min-h-11
                rounded-lg
                bg-[#08294a]
                px-5
                py-2
                text-center
                text-base
                font-normal
                leading-6
                text-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-[#08294a]
                transition-opacity
                hover:opacity-90
              "
            >
              Explore Automation &amp; Workflows
            </button>

            <button
              type="button"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                px-1
                py-2
                text-base
                font-normal
                leading-6
                text-[#39779d]
                transition-opacity
                hover:opacity-75
              "
            >
              Browse integrations
              <span className="text-base font-bold">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}