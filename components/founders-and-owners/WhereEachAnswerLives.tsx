import Link from "next/link";

export default function WhereEachAnswerLives() {
  const destinations = [
    {
      title: "Standardise Billing Control",
      description: (
        <>
          Ownership, approvals, exceptions and operating discipline.{" "}
          <span className="font-bold">
            Route pending — no link asserted.
          </span>
        </>
      ),
    },
    {
      title: "Strengthen Auditability",
      description: (
        <>
          Reviewability, change explanation and evidence.{" "}
          <span className="font-bold">Route pending.</span>
        </>
      ),
    },
    {
      title: "Developers and IT",
      description: (
        <>
          Integration boundaries, write authority and technical dependencies.{" "}
          <span className="font-bold">Route pending.</span>
        </>
      ),
    },
    {
      title: "What the platform actually does",
      description: (
        <>
          <Link
            href="/product"
            className="font-semibold !text-blue-600 hover:underline"
          >
            Product
          </Link>{" "}
          owns the connected-record model and state semantics.
        </>
      ),
    },
    {
      title: "Scope and terms",
      description: (
        <>
          <Link
            href="/pricing"
            className="font-semibold !text-blue-600 hover:underline"
          >
            Pricing
          </Link>{" "}
          owns commercial fit.{" "}
          <span className="font-bold">
            No entitlement is inferred from anything on this page.
          </span>
        </>
      ),
    },
    {
      title: "Security and assurance evidence",
      description: (
        <>
          <Link
            href="/trust-center"
            className="font-semibold !text-blue-600 hover:underline"
          >
            Trust Center
          </Link>{" "}
          and{" "}
          <Link
            href="/security-overview"
            className="font-semibold !text-blue-600 hover:underline"
          >
            Security
          </Link>
          , with scope attached.
        </>
      ),
    },
  ];

  return (
    <section className="w-full">
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
            gap-5
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
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />

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
                Where each answer lives
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />
            </div>

            {/* HEADING */}
            <div className="w-full">
              <h2
                className="
                  !m-0
                  w-full
                  text-center
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
                This page frames the questions. Six destinations hold the
                answers.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[687px]
                pt-[3px]
              "
            >
              <p
                className="
                  !m-0
                  text-center
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]
                  sm:text-base
                "
              >
                Three of the Solutions paths below have no governed route yet
                and are shown without links.
              </p>
            </div>
          </div>

          {/* DESTINATION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-5
              md:grid-cols-2
              md:gap-5
              lg:grid-cols-3
            "
          >
            {destinations.map((destination) => (
              <div
                key={destination.title}
                className="
                  flex
                  min-h-[154px]
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
                    {destination.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {destination.description}
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