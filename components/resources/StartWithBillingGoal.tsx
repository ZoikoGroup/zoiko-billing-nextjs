"use client";

import Link from "next/link";

const goals = [
  {
    title: "Set up billing from scratch",
    description: (
      <>
        Guides and templates covering initial structure and process
        <br className="hidden sm:block" />
        decisions.
      </>
    ),
    scope: "Spans guides, templates, glossary",
    href: "/billing-guides",
  },
  {
    title: "Reduce time spent invoicing",
    description: "Practice material on process and automation boundaries.",
    scope: "Spans guides, product updates",
    href: "/automation",
  },
  {
    title: "Understand a billing term",
    description: "Governed definitions rather than a general explanation.",
    scope: "Glossary first",
    href: "/billing-guides",
  },
  {
    title: "Prepare for an audit",
    description: "Material on records, corrections and evidence trails.",
    scope: "Spans guides, templates",
    href: "/templates",
  },
  {
    title: "Evaluate Zoiko Billing",
    description: "Reading rather than a sales conversation.",
    scope: "Spans reports, customer stories — then",
    href: "/pricing",
    linkText: "Pricing",
  },
  {
    title: "Keep up with changes",
    description: "What shipped, when it takes effect and who it applies to.",
    scope: "Product updates, events",
    href: "/product-updates",
  },
];

export default function StartWithBillingGoal() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            md:gap-11
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
                Start with a billing goal
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              Six goals, for readers who do not
            
              know the type they need.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A goal path collects resources across types.{" "}
              <strong className="font-bold">
                It does not promise the goal is achievable
              </strong>{" "}
              — it points at reading material.
            </p>
          </div>

          {/* GOAL CARDS */}
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
            {goals.map((goal) => (
              <div
                key={goal.title}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-4
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
                  {goal.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    text-xs
                    font-normal
                    leading-4
                    text-[#5d7192]
                  "
                >
                  {goal.description}
                </p>

                {/* SCOPE + LINK */}
                <div className="mt-auto pt-4">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#7890b2]
                    "
                  >
                    {goal.scope}{" "}
                    {goal.linkText && (
                      <Link
                        href={goal.href}
                        className="
                          font-semibold
                          text-blue-600
                          transition-opacity
                          hover:opacity-70
                        "
                      >
                        {goal.linkText}
                      </Link>
                    )}
                  </p>

                  {!goal.linkText && (
                    <Link
                      href={goal.href}
                      className="
                        mt-2
                        inline-flex
                        text-xs
                        font-bold
                        leading-5
                        text-blue-600
                        transition-opacity
                        hover:opacity-70
                      "
                    >
                      Explore →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}