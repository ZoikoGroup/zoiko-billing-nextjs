"use client";

import Image from "next/image";
import Link from "next/link";

const exportItems = [
  {
    title: "Report definition",
    description:
      "The saved report or approved definition, at a specific version.",
  },
  {
    title: "Schedule and recipients",
    description:
      "Run schedule, timezone, recipients and delivery channel where supported.",
  },
  {
    title: "Format",
    description:
      "CSV, spreadsheet, PDF or API, only where that format is verified.",
  },
  {
    title: "Field selection and scope",
    description:
      "Selected fields, filters, as-of time and definition version.",
  },
  {
    title: "Protection",
    description:
      "Encryption, expiry, access control and secure delivery.",
  },
  {
    title: "Outcome evidence",
    description:
      "Success, failure, retry, revocation and the audit record.",
  },
];

export default function ReportsExports() {
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
              flex-col
              items-start
              gap-4

              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                max-w-[662px]
                flex-col
                items-start
                gap-3
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
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
                  Reports and exports
                </span>
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
                Share reporting data
                <br className="hidden sm:block" />
                through controlled,
                <br className="hidden sm:block" />
                auditable delivery.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[528px]
                lg:pb-1
              "
            >
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                An export is a data release. It carries a requester, a
                purpose, a permission check and an expiry — not just a file
                name.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-start
              gap-8
              pt-1

              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* EXPORT DETAILS */}
            <div className="flex w-full flex-col">
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                What a controlled export records
              </h3>

              <div className="mt-2 divide-y divide-[#dfe5ee]">
                {exportItems.map((item) => (
                  <div
                    key={item.title}
                    className="
                      grid
                      grid-cols-1
                      gap-2
                      py-4

                      sm:grid-cols-[145px_1fr]
                      sm:gap-4
                    "
                  >
                    <h4
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* EXPORT BOUNDARY */}
              <div
                className="
                  mt-4
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-white
                  px-5
                  py-6

                  sm:px-7
                  sm:py-7
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#7890b2]
                  "
                >
                  Export boundary
                </span>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-7
                    text-[#091127]

                    sm:text-base
                  "
                >
                  Restricted data is never sent to unapproved recipients or
                  channels. A scheduled report is not guaranteed to complete
                  when source data or dependencies are unavailable — it
                  reports the failure instead.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full">
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <Image
                  src="/images/reporting-and-analytics/exports.png"
                  alt="Controlled reporting exports and delivery"
                  width={526}
                  height={701}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center pt-1">
            <Link
              href="/automation"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-base
                font-normal
                leading-6
                !text-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-[#091127]
                transition
                hover:bg-[#17233d]
                hover:!text-white
              "
            >
              Explore Automation &amp; Workflows
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}