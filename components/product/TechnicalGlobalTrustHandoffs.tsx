"use client";

import Link from "next/link";

const handoffs = [
  {
    question: "What can it connect to?",
    links: [
      {
        label: "Integrations",
        href: "/integration-availability",
      },
    ],
    description: (
      <>
        <span>Integrations holds the verified registry; Developers </span>
        <span>holds technical contracts. </span>
        <strong>
          No protocol, authentication method or connector is named here.
        </strong>
      </>
    ),
  },
  {
    question: "Where does it work?",
    links: [
      {
        label: "Global Billing",
        href: "/global-billing",
      },
      {
        label: "Availability",
        href: "/integration-availability",
      },
    ],
    description: (
      <>
        <span>
          Global Billing owns currency, entity, language and jurisdiction
          scope.{" "}
        </span>
        <strong>
          Multi-entity capability does not establish jurisdictional coverage.
        </strong>
      </>
    ),
  },
  {
    question: "Is it secure?",
    links: [
      {
        label: "Security Overview",
        href: "/security-overview",
      },
      {
        label: "Trust Center",
        href: "/trust-center",
      },
    ],
    description: (
      <>
        <span>
          Security Overview owns posture and evidence with scope attached.{" "}
        </span>
        <strong>
          No control or certification claim appears on a product page.
        </strong>
      </>
    ),
  },
  {
    question: "What does it cost?",
    links: [
      {
        label: "Pricing",
        href: "/pricing-and-plans",
      },
    ],
    description: (
      <>
        <span>Pricing owns plans and prices. </span>
        <strong>No stale price or plan content is published here</strong>
        <span> — it routes instead.</span>
      </>
    ),
  },
  {
    question: "I'm already a customer",
    links: [
      {
        label: "Help Center",
        href: "/help-center",
      },
      {
        label: "Documentation",
        href: "/documentation",
      },
      {
        label: "Support",
        href: "/support-policy",
      },
    ],
    description: (
      <>
        <span>
          Existing customers are routed to the appropriate support resource.{" "}
        </span>
        <strong>Support-first, never a sales flow.</strong>
      </>
    ),
  },
  {
    question: "What changed recently?",
    links: [
      {
        label: "Product Updates",
        href: "/product-updates",
      },
    ],
    description: (
      <>
        <span>Product Updates owns release history. This page </span>
        <span>describes the current model, not its changes.</span>
      </>
    ),
  },
];

export default function TechnicalGlobalTrustHandoffs() {
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
                Technical, global &amp; trust handoffs
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
              Three questions this page routes
            
              rather than answers.
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
              Each has an owning authority whose answer changes independently
              of the product model.
            </p>
          </div>

          {/* HANDOFF CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-2
              sm:grid-cols-2
              sm:gap-5
              lg:grid-cols-3
              lg:gap-5
            "
          >
            {handoffs.map((item) => (
              <div
                key={item.question}
                className="
                  flex
                  min-h-[190px]
                  w-full
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  sm:min-h-[200px]
                  sm:px-6
                  sm:py-6
                "
              >
                {/* QUESTION */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.question}
                </h3>

                {/* LINKS */}
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {item.links.map((link, index) => (
                    <div
                      key={link.label}
                      className="flex items-center"
                    >
                      <Link
                        href={link.href}
                        className="
                          !text-blue-600
                          text-sm
                          font-semibold
                          leading-6
                          transition-colors
                          hover:!text-blue-700
                          hover:underline
                        "
                      >
                        {link.label}
                      </Link>

                      {index < item.links.length - 1 && (
                        <span className="px-1 text-xs text-[#5d7192]">
                          {item.links.length === 2 ? "and" : ","}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* DESCRIPTION */}
                <div
                  className="
                    mt-1
                    w-full
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}