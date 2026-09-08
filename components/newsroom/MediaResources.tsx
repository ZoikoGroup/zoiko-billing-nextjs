"use client";

import Link from "next/link";

const mediaResources = [
  {
    title: "Brand assets",
    description: (
      <>
        Published only with current usage terms attached.{" "}
        <strong>
          Availability of a logo file is not permission for any use.
        </strong>
      </>
    ),
  },
  {
    title: "Product imagery",
    description: (
      <>
        Approved current UI with synthetic or redacted data — the same
        screenshot rules{" "}
        <Link
          href="/documentation"
          className="
            font-semibold
            !text-[#5276ad]
            !hover:text-[#091127]
            hover:underline
          "
        >
          Documentation
        </Link>{" "}
        applies.
      </>
    ),
  },
  {
    title: "Leadership portraits",
    description: (
      <>
        Only where consent is current per the{" "}
        <Link
          href="/leadership"
          className="
            font-semibold
            !text-[#5276ad]
            !hover:text-[#091127]
            hover:underline
          "
        >
          Leadership
        </Link>{" "}
        registry.{" "}
        <strong>Consent that lapses removes the asset.</strong>
      </>
    ),
  },
  {
    title: "Boilerplate",
    description: (
      <>
        Approved company description with entity wording resolved from the
        legal registry, not written into a static block.
      </>
    ),
  },
  {
    title: "Press routes",
    description: (
      <>
        <strong>Rendered only from the approved routing registry.</strong> No
        press email, phone number or form is invented.
      </>
    ),
  },
  {
    title: "Partner and customer marks",
    description: (
      <>
        Removed promptly where permission changes — a lapsed logo on a media
        page is a live rights problem.
      </>
    ),
  },
];

export default function MediaResources() {
  return (
    <section
    id ="media-resources"
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
                Media resources
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Six asset classes, each governed by its
             
              rights.
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
              Media resources are where brand assets and people&apos;s
              likenesses leave the site under someone else&apos;s control.
            </p>
          </div>

          {/* CARDS */}
          <div className="w-full pt-1">
            <div className="grid w-full grid-cols-1 gap-3">
              {mediaResources.map((resource) => (
                <div
                  key={resource.title}
                  className="
                    w-full
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
                    {resource.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}