const navigationItems = [
  {
    title: "Where Zoiko Billing operates",
    content: (
      <>
        <a
          href="/jurisdiction-availability"
          className="text-sm font-semibold leading-6 text-blue-600"
        >
          Jurisdiction Availability
        </a>{" "}
        <span className="text-xs font-normal leading-5 text-[#526b91]">
          is the only source for country statements.{" "}
        </span>
        <span className="text-xs font-bold leading-5 text-[#526b91]">
          A navigation label is not a coverage claim.
        </span>
      </>
    ),
  },
  {
    title: "Document requirements",
    content: (
      <>
        <a
          href="localized-documents"
          className="text-sm font-semibold leading-6 text-blue-600"
        >
          Localized Documents
        </a>{" "}
        <span className="text-xs font-normal leading-5 text-[#526b91]">
          .{" "}
        </span>
        <span className="text-xs font-bold leading-5 text-[#526b91]">
          No invoice field or e-invoicing mandate is stated here.
        </span>
      </>
    ),
  },
  {
    title: "Entity structure",
    content: (
      <div className="flex flex-wrap items-center gap-x-1">
        <a
          href="/multi-entity-billing"
          className="text-sm font-semibold leading-6 text-blue-600"
        >
          Multi-Entity Billing
        </a>

        <span className="text-xs font-normal leading-5 text-[#526b91]">
          and
        </span>

        <a
          href="/entity-level-controls"
          className="text-sm font-semibold leading-6 text-blue-600"
        >
          Entity-Level Controls
        </a>

        <span className="text-xs font-normal leading-5 text-[#526b91]">
          .
        </span>
      </div>
    ),
  },
  {
    title: "Payment context",
    content: (
      <p className="!m-0 text-xs leading-5 text-[#526b91]">
        <span className="font-bold">Local Payment</span>{" "}
        <span className="font-normal">
          covers operating context for payment paths.{" "}
        </span>
        <span className="font-bold">Route pending</span>{" "}
        <span className="font-normal">
          — and no collection or remittance duty is described here.
        </span>
      </p>
    ),
  },
  {
    title: "Retention & data governance",
    content: (
      <>
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-blue-600"
        >
          Privacy &amp; Data Governance
        </a>{" "}
        <span className="text-xs font-normal leading-5 text-[#526b91]">
          .{" "}
        </span>
        <span className="text-xs font-bold leading-5 text-[#526b91]">
          No retention period is invented on this page.
        </span>
      </>
    ),
  },
  {
    title: "Assurance evidence",
    content: (
      <>
        <a
          href="/trust-center"
          className="text-sm font-semibold leading-6 text-blue-600"
        >
          Trust Center
        </a>{" "}
        <span className="text-xs font-normal leading-5 text-[#526b91]">
          .{" "}
        </span>
        <span className="text-xs font-bold leading-5 text-[#526b91]">
          No certification or regulatory licensing status is claimed.
        </span>
      </>
    ),
  },
];

export default function RelatedGlobalBillingNavigation() {
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
              max-w-[687px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#3b82f6] opacity-40" />

              <span
                className="
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#3b82f6]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Related Global Billing navigation
              </span>

              <span className="h-px w-4 shrink-0 bg-[#3b82f6] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                text-center
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#12294f]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Where the substance lives.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-[15px]
                font-normal
                leading-7
                text-[#526b91]

                sm:text-base
              "
            >
              This page organizes context and routes every question of fact.
            </p>
          </div>

          {/* NAVIGATION CARDS */}
          <div className="flex w-full flex-col gap-3">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:px-6
                  sm:py-5

                  md:px-6
                  md:py-5
                "
              >
                {/* CARD TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#12294f]
                  "
                >
                  {item.title}
                </h3>

                {/* CARD CONTENT */}
                <div className="mt-1.5 w-full">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}