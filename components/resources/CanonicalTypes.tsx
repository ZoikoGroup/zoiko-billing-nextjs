"use client";

import Link from "next/link";

const resourceTypes = [
  {
    type: "Type 01",
    title: "Guides",
    description: (
      <>
        Explanatory material on billing practice and
        <br className="hidden sm:block" />
        platform use.
      </>
    ),
    link: "/billing-guides",
    linkText: "Billing guides →",
  },
  {
    type: "Type 02",
    title: "Templates",
    description: "Downloadable operational assets.",
    link: "/templates",
    linkText: "Templates →",
  },
  {
    type: "Type 03",
    title: "Glossary",
    description: (
      <>
        Billing terminology with governed
        <br className="hidden sm:block" />
        definitions.
      </>
    ),
    link: "/billing-glossary",
    linkText: "Billing glossary →",
  },
  {
    type: "Type 04",
    title: "Reports & insights",
    description: "Analysis with a defined data basis.",
    link: "/reports-and-insights",
    linkText: "Reports & insights →",
  },
  {
    type: "Type 05",
    title: "Customer stories",
    description: "Named accounts of customer outcomes.",
    link: "/customer-stories",
    linkText: "Customer stories →",
  },
  {
    type: "Type 06",
    title: "Webinars & events",
    description: "Scheduled sessions and recordings.",
    link: "/webinar-and-events",
    linkText: "Webinars & events →",
  },
  {
    type: "Type 07",
    title: "Product updates",
    description: "Release and change records.",
    link: "/product-updates",
    linkText: "Product updates →",
  },
];

export default function CanonicalTypes() {
  return (
    <section 
    id = "types"
    className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-8
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:gap-10
          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
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
              Canonical resource types
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
            Seven types, seven date grammars.
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
            Each type carries a different primary date and a different
            freshness rule. This is why one &quot;updated&quot; field across
            the estate would be misleading.
          </p>
        </div>

        {/* RESOURCE CARDS */}
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
          {resourceTypes.map((resource) => (
            <div
              key={resource.type}
              className="
                flex
                min-h-[192px]
                flex-col
                justify-between
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-4
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {/* TYPE */}
              <div>
                <p
                  className="
                    !m-0
                    text-xs
                    font-normal
                    leading-4
                    text-[#7890b2]
                  "
                >
                  {resource.type}
                </p>
              </div>

              {/* TITLE + DESCRIPTION */}
              <div className="mt-4 flex flex-1 flex-col">
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {resource.title}
                </h3>

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
                  {resource.description}
                </p>
              </div>

              {/* LINK */}
              <div className="pt-4">
                <Link
                  href={resource.link}
                  className="
                    inline-flex
                    text-xs
                    font-bold
                    leading-5
                    text-blue-600
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  {resource.linkText}
                </Link>
              </div>
            </div>
          ))}

          {/* BOUNDARY CARD */}
          <div
            className="
              flex
              min-h-[192px]
              flex-col
              justify-between
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#f7f8fa]
              p-4
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* TYPE */}
            <div>
              <p
                className="
                  !m-0
                  text-xs
                  font-normal
                  leading-4
                  text-[#7890b2]
                "
              >
                Boundary
              </p>
            </div>

            {/* TITLE + DESCRIPTION */}
            <div className="mt-4 flex flex-1 flex-col">
              <h3
                className="
                  !m-0
                  text-sm
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Not resources
              </h3>

              <p
                className="
                  !m-0
                  mt-1.5
                  text-xs
                  leading-4
                  text-[#5d7192]
                "
              >
                <strong className="font-bold">
                  Documentation, Help Center and
                  <br className="hidden sm:block" />
                  Developer material are not resources.
                </strong>{" "}
                They are authorities with their own governance, linked rather
                than absorbed.
              </p>
            </div>

            {/* DOCUMENTATION LINK */}
            <div className="pt-4">
              <Link
                href="/documentation"
                className="
                  inline-flex
                  text-xs
                  font-bold
                  leading-5
                  text-blue-600
                  transition-opacity
                  hover:opacity-70
                "
              >
                Documentation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}