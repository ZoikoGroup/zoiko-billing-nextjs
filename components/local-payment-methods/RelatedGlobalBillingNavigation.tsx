import Link from "next/link";

const destinations = [
  {
    title: "Operating context",
    content: (
      <>
        <Link
          href="/local-payment"
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
        >
          Local Payment
        </Link>
        <span> — how an approved path is operated.</span>
        <br />
        <span className="font-bold">Adjacent destination; route pending.</span>
      </>
    ),
  },
  {
    title: "Market coverage",
    content: (
      <>
        <Link
          href="/supported-countries"
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
        >
          Supported Countries
        </Link>
        <span> and </span>
        <Link
          href="/jurisdiction-availability"
          className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-700 hover:underline"
        >
          Jurisdiction Availability
        </Link>
        <span>.</span>
        <br />
        <span className="font-bold">Coverage is capability-scoped.</span>
      </>
    ),
  },
  {
    title: "Currency policy",
    content: (
      <>
        <Link
          href="/currency-control"
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
        >
          Currency Control
        </Link>
        <span> — allowed currency and precision context.</span>{" "}
        <span className="font-bold">Route pending.</span>
      </>
    ),
  },
  {
    title: "Provider relationships",
    content: (
      <>
        <Link
          href="/payment-providers"
          className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-700 hover:underline"
        >
          Payment providers
        </Link>
        <span> — a separate registry with its own governance.</span>
      </>
    ),
  },
  {
    title: "Compliance context",
    content: (
      <>
        <Link
          href="/local-compliance"
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
        >
          Local Compliance
        </Link>
        <span> and </span>
        <Link
          href="/tax-compliance-guide"
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
        >
          Tax and Compliance
        </Link>
        <span>. </span>
        <span className="font-bold">Routes pending.</span>
      </>
    ),
  },
  {
    title: "Technical expectations",
    content: (
      <>
        <Link
          href="/integrations-standards"
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
        >
          Integration Standards
        </Link>
        <span> and </span>
        <Link
          href="/documentation"
          className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-700 hover:underline"
        >
          Documentation
        </Link>
        <span>. </span>
        <span className="font-bold">No endpoint or schema here.</span>
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
              Where each adjacent fact is owned.
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
              Six destinations, and this page resolves none of them.
            </p>
          </div>

          {/* DESTINATION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {destinations.map((destination) => (
              <div
                key={destination.title}
                className="
                  flex
                  min-h-[156px]
                  w-full
                  flex-col
                  items-start
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
                    w-full
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {destination.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    w-full
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {destination.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}