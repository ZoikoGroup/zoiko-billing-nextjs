import Link from "next/link";

const workContextItems = [
  {
    title: "Billing correctness matters",
    description:
      "An invoice, an allocation or a balance is a financial record someone will rely on. Mistakes are visible to a customer's customers.",
  },
  {
    title: "Exceptions are the work",
    description:
      "Unallocated payments, unknown outcomes and partial states are the interesting cases — the happy path is rarely where the difficulty lives.",
  },
  {
    title: "Evidence over assertion",
    description:
      "The same doctrine that governs our public pages governs the product: state what a source supports, and say so when nothing does.",
  },
  {
    title: "Boundaries are explicit",
    description:
      "We route accounting, tax and legal determinations to qualified professionals rather than encoding a guess into software.",
  },
  {
    title: "Part of a group",
    description: (
      <>
        Zoiko Billing sits within Zoiko Group and is also a Zoiko One
        component —{" "}
        <Link
          href="/about"
          className="font-semibold text-[#526f9d] underline-offset-2 hover:underline"
        >
          About
        </Link>{" "}
        covers the relationships.
      </>
    ),
  },
  {
    title: "Roles vary widely",
    description:
      "Team, location, work model and employer differ per role, so this section describes the domain rather than a single working arrangement.",
  },
];

export default function WorkContext() {
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
                Work context
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
              What the work actually involves.
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
              Statements about the domain and how we build, not about culture —
              culture claims are unfalsifiable and every company makes the
              same ones.
            </p>
          </div>

          {/* WORK CONTEXT CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:gap-5

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            {workContextItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[180px]
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
                    font-['Plus_Jakarta_Sans']
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
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
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}