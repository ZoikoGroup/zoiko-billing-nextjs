import Link from "next/link";

export default function PublicSourcesFirst() {
  const destinations = [
    {
      title: "Capability questions",
      content: (
        <>
          <Link
            href="/product"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Product
          </Link>{" "}
          <span className="text-[#5d7192]">
            and the Product Tour — what the platform governs, with each
            claim&apos;s boundary attached.
          </span>
        </>
      ),
    },
    {
      title: "Availability questions",
      content: (
        <>
          <Link
            href="/jurisdiction-availability"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Jurisdiction Availability
          </Link>{" "}
          <span className="text-[#5d7192]">
            — capability-scoped coverage, owned by the registry.
          </span>
        </>
      ),
    },
    {
      title: "Commercial questions",
      content: (
        <>
          <Link
            href="/pricing"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Pricing
          </Link>{" "}
          <span className="text-[#5d7192]">
            — published plans and terms, maintained commercially.
          </span>
        </>
      ),
    },
    {
      title: "Security & assurance",
      content: (
        <>
          <Link
            href="/trust-center"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Trust Center
          </Link>{" "}
          <span className="text-[#5d7192]">and </span>
          <Link
            href="/security-overview"
            className="font-semibold !text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Security
          </Link>{" "}
          <span className="text-[#5d7192]">
            — evidence with scope attached.
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
            gap-5
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
                Public sources first
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
              Four destinations that are more
              <br className="hidden sm:block" /> current than a statement.
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
              A governed page is reviewed on a cycle. An emailed answer is
              accurate on the day it was written.
            </p>
          </div>

          {/* DESTINATION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-5

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {destinations.map((destination) => (
              <div
                key={destination.title}
                className="
                  flex
                  min-h-[190px]
                  w-full
                  flex-col
                  items-start
                  rounded-[10px]
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-3.5
                  pt-8
                  pb-6

                  sm:min-h-[185px]

                  lg:min-h-[190px]
                "
              >
                {/* CARD TITLE */}
                <div className="w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {destination.title}
                  </p>
                </div>

                {/* CARD CONTENT */}
                <div className="mt-5 w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {destination.content}
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