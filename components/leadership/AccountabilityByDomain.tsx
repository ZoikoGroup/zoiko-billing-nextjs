import Link from "next/link";

const domains = [
  {
    title: "Product",
    description: (
      <>
        What the software does and how it behaves.{" "}
        <Link
          href="/documentation"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          Documentation
        </Link>{" "}
        is the authority, not a leadership statement.
      </>
    ),
  },
  {
    title: "Security",
    description: (
      <>
        <Link
          href="/security-overview"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          Security Overview
        </Link>{" "}
        and{" "}
        <Link
          href="/trust-center"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          Trust Center
        </Link>{" "}
        publish control domains and evidence with their scope attached.
      </>
    ),
  },
  {
    title: "Privacy & data",
    description: (
      <>
        <Link
          href="/privacy-and-data-governance"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          Privacy & Data Governance
        </Link>{" "}
        covers lifecycle, retention boundaries and rights routing.
      </>
    ),
  },
  {
    title: "Support",
    description: (
      <>
        <Link
          href="/support-policy"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          Support Policy
        </Link>{" "}
        holds commitments;{" "}
        <Link
          href="/help-center"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          Help Center
        </Link>{" "}
        and specialist routes handle the work.
      </>
    ),
  },
  {
    title: "Operations",
    description: (
      <>
        <Link
          href="/system-status"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          System Status
        </Link>{" "}
        reports service state and never defaults to operational when it cannot
        confirm it.
      </>
    ),
  },
  {
    title: "Corporate",
    description: (
      <>
        <Link
          href="/about"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          About
        </Link>{" "}
        covers entity relationships; Zoiko Group owns group-level corporate
        truth.
      </>
    ),
  },
];

export default function AccountabilityByDomain() {
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

            sm:gap-8

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
                Accountability by domain
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
              Six domains, each with a destination that shows the work.
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
              Accountability is more legible from what a domain publishes than
              from a title on a card.
            </p>
          </div>

          {/* DOMAIN CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2
              sm:gap-5

              lg:grid-cols-3
            "
          >
            {domains.map((domain) => (
              <div
                key={domain.title}
                className="
                  flex
                  min-h-[176px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
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
                  {domain.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}