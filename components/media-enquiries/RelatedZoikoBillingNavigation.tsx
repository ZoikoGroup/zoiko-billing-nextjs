import Link from "next/link";

export default function RelatedZoikoBillingNavigation() {
  const items = [
    {
      title: "Company overview",
      link: "Company",
      href: "/company",
      description: " — the entity separation model and routing hub.",
    },
    {
      title: "Newsroom",
      description: "Announcements and published statements.",
      note: "Preview suppressed on the Company hub; route pending.",
    },
    {
      title: "Leadership",
      description: "Approved representative information.",
      note: "Not published — no spokesperson is named on this page.",
    },
    {
      title: "Legal notices",
      link: "Legal notices",
      href: "/legal-notices",
      description: " — corporate identity and the formal notice set.",
    },
    {
      title: "Trust center",
      link: "Trust Center",
      href: "/trust-center",
      description: " — assurance evidence with scope attached.",
    },
    {
      title: "Product tour",
      link: "Product",
      href: "/product",
      description:
        " — a walkthrough where every claim carries its boundary.",
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
                Related Zoiko Billing navigation
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
              Where else to look.
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
              Six destinations, including the two Company pages a journalist
              usually wants next.
            </p>
          </div>

          {/* CARDS */}
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
            {items.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  h-full
                  min-h-[190px]
                  flex-col
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
                <div className="mt-1.5">
                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {item.link ? (
                      <>
                        <Link
                          href={item.href}
                          className="
                            font-semibold
                            !text-blue-600
                            transition-colors
                            hover:text-blue-700
                            hover:underline
                          "
                        >
                          {item.link}
                        </Link>
                        {item.description}
                      </>
                    ) : (
                      <>
                        {item.description}{" "}
                        <strong className="font-bold text-[#5d7192]">
                          {item.note}
                        </strong>
                      </>
                    )}
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