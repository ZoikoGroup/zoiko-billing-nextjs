export default function RelatedGlobalBillingNavigation() {
  const navigationItems = [
    {
      title: "Which currencies are supported",
      content: (
        <>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-blue-600"
          >
            Multi-Currency Billing
          </a>
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            .{" "}
          </span>
          <span className="text-xs font-bold leading-5 text-[#5d7192]">
            This page names no currency
          </span>
          <br />
          <span className="text-xs font-bold leading-5 text-[#5d7192]">
            and asserts no support.
          </span>
        </>
      ),
    },
    {
      title: "Where Zoiko Billing operates",
      content: (
        <>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-blue-600"
          >
            Jurisdiction Availability
          </a>
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            .{" "}
          </span>
          <span className="text-xs font-bold leading-5 text-[#5d7192]">
            No country support is
          </span>
          <br />
          <span className="text-xs font-bold leading-5 text-[#5d7192]">
            inferred from an FX concept.
          </span>
        </>
      ),
    },
    {
      title: "Entity-level control",
      content: (
        <>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-blue-600"
          >
            Entity-Level Controls
          </a>
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            {" "}and{" "}
          </span>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-blue-600"
          >
            Multi-Entity Billing
          </a>
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            .
          </span>
        </>
      ),
    },
    {
      title: "Tax treatment",
      content: (
        <>
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            Tax is a separate authority from FX.{" "}
          </span>
          <span className="text-xs font-bold leading-5 text-[#5d7192]">
            Neither is derived
            <br className="hidden sm:block" /> from the other
          </span>
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            , and no tax rule appears on this page.
          </span>
        </>
      ),
    },
    {
      title: "Reviewability model",
      content: (
        <>
          <span className="text-xs font-bold leading-5 text-[#5d7192]">
            Strengthen Auditability
          </span>
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            {" "}owns attribution, evidence
            <br className="hidden sm:block" /> linkage and correction semantics.{" "}
          </span>
          <span className="text-xs font-bold leading-5 text-[#5d7192]">
            Route pending.
          </span>
        </>
      ),
    },
    {
      title: "Payment providers",
      content: (
        <>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-blue-600"
          >
            Payment Providers
          </a>
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            .{" "}
          </span>
          <span className="text-xs font-bold leading-5 text-[#5d7192]">
            A provider connection is not an
          </span>
          <br />
          <span className="text-xs font-bold leading-5 text-[#5d7192]">
            FX source
          </span>
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            , and neither implies the other.
          </span>
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
              max-w-[662px]
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
                max-w-[662px]
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
              FX governance sits next to currency support, entity structure and
              document localization — each a separate authority.
            </p>
          </div>

          {/* NAVIGATION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              md:grid-cols-2
            "
          >
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[164px]
                  w-full
                  flex-col
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
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
                <div className="!m-0 pt-0.5">
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