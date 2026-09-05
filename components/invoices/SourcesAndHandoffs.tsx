import Link from "next/link";

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
            items-start
            gap-8

            sm:gap-10

            md:gap-11
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
                pt-2
                pb-2

                lg:pb-5
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
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
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#49758f]

                    sm:text-xs
                    sm:tracking-[0.18em]
                  "
                >
                  Sources and handoffs
                </span>
              </div>

              {/* TITLE */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  !text-[30px]
                  !font-extrabold
                  !leading-[1.2]
                  !tracking-[-0.035em]
                  !text-[#08294a]

                  sm:!text-[34px]

                  md:!text-[36px]

                  lg:!text-[40px]
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
                  px-5
                  py-5
                  transition-colors
                  hover:bg-[#fbfcfc]

                  sm:min-h-[200px]

                  lg:min-h-[210px]
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
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-semibold
                    leading-5
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
                    max-w-[250px]
                    text-sm
                    font-normal
                    leading-5
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
              py-6

              sm:px-6
              sm:py-7

              md:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#49758f]

                sm:text-xs
              "
            >
              Connector boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-6
                text-[#08294a]

                sm:text-base
                sm:leading-7
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
              gap-3
              pt-1

              sm:flex-row
              sm:items-center
            "
          >
            {/* PRIMARY CTA */}
            <Link
              href="/automation"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#08294a]
                px-5
                py-2
                text-center
                text-base
                font-normal
                leading-6
                !text-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-[#08294a]
                transition-opacity
                hover:opacity-90
              "
            >
              Explore Automation &amp; Workflows
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="/integration-availability"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}