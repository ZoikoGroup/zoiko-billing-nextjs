import Link from "next/link";

export default function WhereToGoNext() {
  const routes = [
    {
      title: "Check a market",
      content: (
        <>
          <Link
            href="/jurisdiction-availability"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            Jurisdiction Availability
          </Link>
          <span className="text-[#5d7192]">
            {" "}
            — the register, with scope and limits per market.
          </span>
        </>
      ),
    },
    {
      title: "Check a language",
      content: (
        <>
          <Link
            href="/supported-languages"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            Supported Languages
          </Link>
          <span className="text-[#5d7192]">
            {" "}
            — current support, nothing inferred from it.
          </span>
        </>
      ),
    },
    {
      title: "Check a provider",
      content: (
        <>
          <Link
            href="/integration-availability"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            Integrations
          </Link>

          <span className="text-[#5d7192]"> and </span>

          <Link
            href="/integration-availability"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            integration availability
          </Link>

          <span className="text-[#5d7192]"> by market.</span>
        </>
      ),
    },
    {
      title: "Understand the product",
      content: (
        <span className="text-[#5d7192]">
          Product owns the record model. Global Billing describes how it
          behaves across contexts.
        </span>
      ),
    },
    {
      title: "Evaluate commercially",
      content: (
        <>
          <Link
            href="/pricing-and-plans"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            Pricing
          </Link>

          <span className="text-[#5d7192]">, then </span>

          <Link
            href="/book-demo"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            a demo
          </Link>

          <span className="text-[#5d7192]"> or </span>

          <Link
            href="/sales-enquiries"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            sales enquiries
          </Link>

          <span className="text-[#5d7192]">. </span>

          <span className="font-bold text-[#5d7192]">
            Only after availability is confirmed.
          </span>
        </>
      ),
    },
    {
      title: "Already a customer",
      content: (
        <>
          <Link
            href="/help-center"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            Help Center
          </Link>

          <span className="text-[#5d7192]">, </span>

          <Link
            href="/documentation"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            Documentation
          </Link>

          <span className="text-[#5d7192]"> or </span>

          <Link
            href="/support-policy"
            className="!text-blue-600 hover:!text-blue-700 hover:underline"
          >
            Support
          </Link>

          <span className="text-[#5d7192]"> — </span>

          <span className="font-bold text-[#5d7192]">
            not sales.
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
                Where to go next
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
              Six routes, by what you actually need.
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
              Availability questions are not sales questions, and an existing
              customer is never routed into a lead flow.
            </p>
          </div>

          {/* ROUTES */}
          <div className="w-full">
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-4

                sm:gap-5

                lg:grid-cols-2
              "
            >
              {routes.map((route) => (
                <div
                  key={route.title}
                  className="
                    flex
                    min-h-[142px]
                    w-full
                    flex-col
                    items-start
                    justify-start
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
                      w-full
                      font-['Plus_Jakarta_Sans']
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {route.title}
                  </h3>

                  {/* CONTENT */}
                  <div
                    className="
                      w-full
                      text-xs
                      font-normal
                      leading-5
                    "
                  >
                    {route.content}
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