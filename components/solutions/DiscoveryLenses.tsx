import Image from "next/image";

type Lens = {
  number: string;
  title: string;
  description: string;
  active?: boolean;
};

type BusinessNeed = {
  title: string;
  description: string;
  image: string;
};

export default function DiscoveryLenses() {
  const lenses: Lens[] = [
    {
      number: "Lens 01",
      title: "By business need",
      description:
        "You know the problem you are trying to fix, but not what it is called inside a billing platform.",
      active: true,
    },
    {
      number: "Lens 02",
      title: "By team",
      description:
        "You know who will use it day to day, and want the view built around that work.",
    },
    {
      number: "Lens 03",
      title: "By organization",
      description:
        "You know the shape and scale of the business, and want the relevant starting point.",
    },
  ];

  const businessNeeds: BusinessNeed[] = [
    {
      title: "Create Invoices Faster",
      description:
        "Invoice preparation is manual, repetitive, or spread across tools and people.",
      image: "/images/solutions/create-invoices-faster.png",
    },
    {
      title: "Improve Payment Visibility",
      description:
        "You cannot tell which invoices are settled, partly settled or unresolved without assembling it yourself.",
      image: "/images/solutions/improve-payment-visibility.png",
    },
    {
      title: "Reduce Outstanding Balances",
      description:
        "Overdue balances accumulate and chasing them is reactive.",
      image: "/images/solutions/reduce-outstanding-balances.png",
    },
    {
      title: "Standardize Billing Control",
      description:
        "Different people bill differently and there is no single agreed process.",
      image: "/images/solutions/standardize-billing-control.png",
    },
    {
      title: "Consolidate Multiple Entities",
      description:
        "Several legal entities bill separately and reporting has to be stitched together.",
      image: "/images/solutions/consolidate-multiple-entities.png",
    },
    {
      title: "Strengthen Auditability",
      description:
        "You need to show how a financial record reached its current state.",
      image: "/images/solutions/strengthen-auditability.png",
    },
  ];

  return (
    <section
    id ="starting-point"
     className="w-full bg-[#f7f8fa]">
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

            sm:gap-7

            md:gap-8
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
                Three discovery lenses
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
              Seventeen paths, three ways in.
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
              The same estate, indexed by need, by team and by organization.{" "}
              <strong className="font-bold">
                No lens is presented as the correct one
              </strong>{" "}
              — people arrive knowing different things about their own
              problem.
            </p>
          </div>

          {/* DISCOVERY LENSES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-3

              md:grid-cols-3
            "
          >
            {lenses.map((lens) => (
              <div
                key={lens.number}
                className={`
                  flex
                  min-h-[144px]
                  flex-col
                  rounded-2xl
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  ${
                    lens.active
                      ? "bg-[#fafbfc] outline outline-1 outline-offset-[-1px] outline-blue-600"
                      : "bg-white outline outline-1 outline-offset-[-1px] outline-[#dfe5ee]"
                  }
                `}
              >
                <span
                  className="
                    text-xs
                    font-normal
                    leading-4
                    text-[#7890b2]
                  "
                >
                  {lens.number}
                </span>

                <h3
                  className="
                    !m-0
                    mt-1.5
                    text-base
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {lens.title}
                </h3>

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
                  {lens.description}
                </p>
              </div>
            ))}
          </div>

          {/* BUSINESS NEED INTRO */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-1.5
              pt-1
            "
          >
            <h3
              className="
                !m-0
                text-xl
                font-extrabold
                leading-8
                tracking-[-0.02em]
                text-[#091127]
              "
            >
              By business need
            </h3>

            <p
              className="
                !m-0
                w-full
                max-w-[760px]
                text-sm
                font-normal
                leading-5
                text-[#5d7192]
              "
            >
              Six needs from the source taxonomy.{" "}
              <strong className="font-bold">
                None of these six has an established canonical route
              </strong>
              , so no URL is asserted for any of them — the labels and their
              mechanisms are source-defined, the destinations are not yet
              built.
            </p>
          </div>

          {/* BUSINESS NEED CARDS */}
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
            {businessNeeds.map((need) => (
              <article
                key={need.title}
                className="
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-[#dfe5ee]
                "
              >
                {/* CARD CONTENT */}
                <div className="px-5 pt-5">
                  <h4
                    className="
                      !m-0
                      text-base
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {need.title}
                  </h4>

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
                    {need.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="mt-4 px-5 pb-5">
                  <div
                    className="
                      relative
                      h-[153px]
                      w-full
                      overflow-hidden
                      rounded-3xl
                      bg-[#f3f5f8]
                    "
                  >
                    <Image
                      src={need.image}
                      alt={need.title}
                      fill
                      className="object-cover"
                      sizes="
                        (max-width: 639px) calc(100vw - 40px),
                        (max-width: 1023px) calc(50vw - 32px),
                        344px
                      "
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}