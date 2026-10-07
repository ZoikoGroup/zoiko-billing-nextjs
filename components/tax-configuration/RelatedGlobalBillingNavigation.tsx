export default function RelatedGlobalBillingNavigation() {
  const navigationItems = [
    {
      title: "Requirement context",
      content: (
        <>
          <a
            href="/local-compliance"
            className="font-semibold text-blue-600 hover:underline"
          >
            Local Compliance
          </a>{" "}
          organizes local requirement records.{" "}
          <strong>Route pending</strong> — and it makes no determination
          either.
        </>
      ),
    },
    {
      title: "Where Zoiko Billing operates",
      content: (
        <>
          <a
            href="/jurisdiction-availability"
            className="font-semibold text-blue-600 hover:underline"
          >
            Jurisdiction Availability
          </a>
          <span>. </span>
          <strong>
            A jurisdiction reference in a configuration record is not
            coverage.
          </strong>
        </>
      ),
    },
    {
      title: "Document output",
      content: (
        <>
          <a
            href="/localized-documents"
            className="font-semibold text-blue-600 hover:underline"
          >
            Localized Documents
          </a>
          <span>. </span>
          <strong>
            No invoice field or e-invoicing mandate is stated here.
          </strong>
        </>
      ),
    },
    {
      title: "Entity scope",
      content: (
        <>
          <a
            href="/multi-entity-billing"
            className="font-semibold text-blue-600 hover:underline"
          >
            Multi-Entity Billing
          </a>{" "}
          and{" "}
          <a
            href="/entity-level-controls"
            className="font-semibold text-blue-600 hover:underline"
          >
            Entity-Level Controls
          </a>
          .
        </>
      ),
    },
    {
      title: "Currency context",
      content: (
        <>
          <a
            href="/currency-control"
            className="font-semibold text-blue-600 hover:underline"
          >
            Currency Control
          </a>{" "}
          governs currency permission.{" "}
          <strong>Route pending</strong> — and tax and currency are
          independent authorities.
        </>
      ),
    },
    {
      title: "Reviewability model",
      content: (
        <>
          <a
            href="/strengthen-auditability"
            className="font-semibold text-blue-600 hover:underline"
          >
            Strengthen Auditability
          </a>{" "}
          owns attribution and correction semantics.{" "}
          <strong>Route pending.</strong>
        </>
      ),
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
                Related Global Billing navigation
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
              Where the adjacent answers live.
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
              Tax configuration depends on requirement context, entity scope
              and document output — each owned separately.
            </p>
          </div>

          {/* NAVIGATION CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              sm:gap-4
              md:gap-5
            "
          >
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  sm:px-6
                  sm:py-6
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                {/* CONTENT */}
                <p
                  className="
                    !m-0
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}