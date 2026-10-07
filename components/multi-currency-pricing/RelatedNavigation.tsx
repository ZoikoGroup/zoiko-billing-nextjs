interface NavigationItem {
  title: string;
  content: React.ReactNode;
}

const navigationItems: NavigationItem[] = [
  {
    title: "Zoiko Billing plan prices",
    content: (
      <>
        <a
          href="/pricing"
          className="font-semibold text-blue-600 hover:underline"
        >
          Pricing
        </a>{" "}
        owns commercial terms.{" "}
        <strong>This page is a governance model, not a price list.</strong>
      </>
    ),
  },
  {
    title: "Currency permission",
    content: (
      <>
        <strong>Currency Control</strong> defines allowed currency policy and
        precision context. <strong>Route pending.</strong>
      </>
    ),
  },
  {
    title: "Conversion governance",
    content: (
      <>
        <strong>FX Management</strong> owns rate provenance and timing.{" "}
        <strong>Route pending</strong> — and no execution is implied.
      </>
    ),
  },
  {
    title: "Market coverage",
    content: (
      <>
        <strong>Supported Countries</strong> and{" "}
        <a
          href="/jurisdiction-availability"
          className="font-semibold text-blue-600 hover:underline"
        >
          Jurisdiction Availability
        </a>
        .{" "}
        <strong>A currency label proves nothing about support.</strong>
      </>
    ),
  },
  {
    title: "Payment acceptance",
    content: (
      <>
        <strong>Local Payment</strong> and{" "}
        <a
          href="/payment-providers"
          className="font-semibold text-blue-600 hover:underline"
        >
          Payment Providers
        </a>
        . <strong>Separate approval from price display.</strong>
      </>
    ),
  },
  {
    title: "Tax treatment",
    content: (
      <>
        <strong>Indirect Tax</strong> and{" "}
        <strong>Tax and Compliance</strong>.{" "}
        <strong>Price display determines nothing about tax.</strong>
      </>
    ),
  },
];

export default function RelatedNavigation() {
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
                Related navigation
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                pb-[0.8px]
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
              Where each adjacent fact is owned.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Six destinations, and this page reproduces none of them.
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
                "
              >
                {/* TITLE */}
                <div className="w-full">
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
                </div>

                {/* CONTENT */}
                <div className="mt-1.5 w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      leading-5
                      text-[#5d7192]

                      sm:text-sm
                    "
                  >
                    {item.content}
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