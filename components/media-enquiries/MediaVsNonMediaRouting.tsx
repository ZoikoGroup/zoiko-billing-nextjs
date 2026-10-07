import Link from "next/link";

export default function MediaVsNonMediaRouting() {
  const rows = [
    {
      need: "Sales or pricing",
      route: (
        <>
          <Link
            href="/sales-enquiries"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Sales enquiries
          </Link>
          <span className="text-[#091127]"> · </span>
          <Link
            href="/pricing"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Pricing
          </Link>
        </>
      ),
      whyNotHere: "Commercial terms are not a media matter.",
    },
    {
      need: "Customer support",
      route: (
        <Link
          href="/contact-support"
          className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
        >
          Contact support
        </Link>
      ),
      whyNotHere: "Account or support details are not collected here.",
    },
    {
      need: "Partner enquiry",
      route: (
        <Link
          href="/partner-portal"
          className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
        >
          Partners
        </Link>
      ),
      whyNotHere: "Commercial and ecosystem review stays separate.",
    },
    {
      need: "Privacy or data rights",
      route: (
        <>
          <Link
            href="/privacy-policy"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Privacy policy
          </Link>
          <span className="text-[#091127]">
            {" "}
            — authoritative route
          </span>
        </>
      ),
      whyNotHere: "Rights requests must not be sent to media.",
    },
    {
      need: "Security issue",
      route: (
        <>
          <Link
            href="/security-overview"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Security
          </Link>
          <span className="text-[#091127]">
            {" "}
            — approved disclosure route where established
          </span>
        </>
      ),
      whyNotHere:
        "Never disclose a vulnerability in a media form.",
    },
    {
      need: "General product evaluation",
      route: (
        <>
          <Link
            href="/product"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Product Tour
          </Link>
          <span className="text-[#091127]">
            {" "}
            · Demo Library · capability pages
          </span>
        </>
      ),
      whyNotHere:
        "This form is for professional coverage requests.",
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
                Media vs non-media routing
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
              Six needs that belong somewhere else.
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
              If your intent is below,{" "}
              <span className="font-bold">use that route instead</span> — this
              form will not reach the right team, and the detour costs you
              time.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  bg-[#091127]
                "
              >
                <div className="border-r border-white/10 px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Your need
                  </span>
                </div>

                <div className="border-r border-white/10 px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Correct route
                  </span>
                </div>

                <div className="px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Why not here
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.need}
                  className={`
                    grid
                    grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* NEED */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.need}
                    </span>
                  </div>

                  {/* ROUTE */}
                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      border-r
                      border-[#edf0f4]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#091127]
                      "
                    >
                      {row.route}
                    </span>
                  </div>

                  {/* WHY NOT HERE */}
                  <div
                    className="
                      bg-[#fffafa]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-red-900
                      "
                    >
                      {row.whyNotHere}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.need}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* YOUR NEED */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Your need
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.need}
                    </p>
                  </div>

                  {/* CORRECT ROUTE */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Correct route
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#091127]
                      "
                    >
                      {row.route}
                    </p>
                  </div>

                  {/* WHY NOT HERE */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Why not here
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-6
                        text-red-900
                      "
                    >
                      {row.whyNotHere}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}