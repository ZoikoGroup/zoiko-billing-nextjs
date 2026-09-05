"use client";

import Link from "next/link";

const actions = [
  {
    number: "01",
    title: "Create and edit draft amounts",
    description:
      "Prepare charges, fees and adjustments that have no issued effect yet.",
  },
  {
    number: "02",
    title: "Apply a discount or fee",
    description:
      "Attach a reduction or additional amount within the permitted eligibility and scope.",
  },
  {
    number: "03",
    title: "Change price, rate, quantity or dates",
    description:
      "Alter the inputs that determine the calculated result.",
  },
  {
    number: "04",
    title: "Override a calculated result",
    description:
      "Replace a computed value manually, with a recorded reason and authority.",
  },
  {
    number: "05",
    title: "Create an issued correction or credit",
    description:
      "Produce a governed correction against an already-issued amount.",
  },
  {
    number: "06",
    title: "Apply a write-off",
    description:
      "Restricted balance treatment where supported, separated from document correction.",
  },
  {
    number: "07",
    title: "Approve within threshold",
    description:
      "Decide requests up to the authority delegated for that amount, type and context.",
  },
  {
    number: "08",
    title: "Read without changing",
    description:
      "Review amounts, calculations and evidence with no ability to alter them.",
  },
];

const thresholds = [
  {
    title: "Amount",
    value: "absolute value",
  },
  {
    title: "Percentage",
    value: "of the base",
  },
  {
    title: "Type",
    value: "charge, fee, discount, credit",
  },
  {
    title: "Source",
    value: "manual, integration, schedule",
  },
  {
    title: "Entity",
    value: "issuing legal entity",
  },
  {
    title: "Risk",
    value: "configured risk class",
  },
];

export default function Permissions() {
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
              max-w-[760px]
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
                Permissions and thresholds
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
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
              Require review when amount, type or context makes it necessary.
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
              Eight amount actions are governed separately, because creating
              a draft charge and overriding a calculated result are not the
              same risk.
            </p>
          </div>

          {/* ACTIONS */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#dfe5ee]
              shadow-[0_8px_24px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.03)]
            "
          >
            {actions.map((action, index) => (
              <div
                key={action.number}
                className={`
                  flex
                  min-h-[96px]
                  w-full
                  items-start
                  gap-4
                  bg-white
                  px-5
                  py-5

                  sm:min-h-[112px]
                  sm:px-6

                  ${
                    index !== actions.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    size-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#d8e0e9]
                    bg-[#f5f7f9]
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-semibold
                      leading-4
                      text-[#456b9c]
                    "
                  >
                    {action.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="min-w-0 w-full max-w-[600px]">
                  <h3
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {action.title}
                  </h3>

                  <p
                    className="
                      !m-0
                      mt-1
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {action.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* THRESHOLD HEADING */}
          <div className="flex w-full items-center gap-3">
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
              Thresholds can be set on
            </span>
          </div>

          {/* THRESHOLD CHIPS */}
          <div className="flex w-full flex-wrap gap-3">
            {thresholds.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-11
                  items-center
                  rounded-full
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-4
                  py-2
                  shadow-[0_1px_2px_rgba(15,23,42,0.02)]
                "
              >
                <span
                  className="
                    shrink-0
                    font-mono
                    text-xs
                    font-semibold
                    leading-4
                    text-[#456b9c]
                  "
                >
                  {item.title}
                </span>

                <span
                  className="
                    ml-4
                    font-mono
                    text-xs
                    font-normal
                    leading-4
                    text-[#5d7192]
                  "
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* APPROVAL BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-5

              sm:px-7
              sm:py-6
            "
          >
            {/* LABEL */}
            <span
              className="
                block
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Approval boundary
            </span>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Approval applies to the exact amount, version, context and
              proposed effect that was reviewed. A configured approval policy
              is a control, not a universal compliance guarantee.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full items-center justify-start">
            <Link
              href="/roles-and-approvals"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-base
                font-normal
                leading-6
                !text-white
                transition-opacity
                hover:opacity-90
              "
            >
              Explore Roles &amp; Approvals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}