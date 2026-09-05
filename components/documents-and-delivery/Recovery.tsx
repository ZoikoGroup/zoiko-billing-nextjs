"use client";

import Link from "next/link";

const failures = [
  {
    title: "Rendering failure",
    description:
      "The artifact could not be generated or validated, so release stays blocked.",
  },
  {
    title: "Invalid or restricted endpoint",
    description:
      "The endpoint is inactive, unverified or not permitted for this document.",
  },
  {
    title: "Provider error",
    description:
      "Authentication, rate, size or availability error from the provider itself.",
  },
  {
    title: "Bounce or rejection",
    description:
      "The provider or recipient endpoint actively refused the attempt.",
  },
  {
    title: "Expiry",
    description:
      "An access window or link period ended before it was used.",
  },
  {
    title: "Unknown result",
    description:
      "No reliable final outcome is available, so it is reported as unknown.",
  },
];

const recovery = [
  {
    title: "Idempotent retry",
    description:
      "Retry under policy using the same idempotency context, so nothing duplicates.",
  },
  {
    title: "Controlled resend",
    description:
      "Resend the same artifact without altering the issued document or its number.",
  },
  {
    title: "Alternate recipient",
    description:
      "Route to another approved recipient, subject to current permission.",
  },
  {
    title: "Alternate channel",
    description:
      "Switch to a different approved channel where the content classification allows it.",
  },
  {
    title: "Escalation or manual delivery",
    description:
      "Hand to an owner for manual delivery when automation is not appropriate.",
  },
  {
    title: "Customer-record correction",
    description:
      "Fix the underlying endpoint so future attempts do not repeat the failure.",
  },
];

const correctionSteps = [
  {
    number: "01",
    title: "Identify the original",
    description:
      "The original issued and delivered document is identified before anything new is produced.",
  },
  {
    number: "02",
    title: "Render the corrective document",
    description:
      "The current corrective document is rendered from its own approved version.",
  },
  {
    number: "03",
    title: "Decide the notice",
    description:
      "State whether a new message, portal publication or notification is required.",
  },
  {
    number: "04",
    title: "Preserve prior artifacts",
    description:
      "Previous artifacts and attempts are retained according to policy.",
  },
  {
    number: "05",
    title: "Link both documents",
    description:
      "Original and corrective documents are linked in internal and recipient-facing context where supported.",
  },
  {
    number: "06",
    title: "Never silently replace",
    description:
      "Previously delivered evidence is not overwritten or erased.",
  },
];

function RecoveryList({
  title,
  items,
}: {
  title: string;
  items: typeof failures;
}) {
  return (
    <div className="flex w-full flex-col items-start">
      <h3
        className="
          !m-0
          mb-2
          text-lg
          font-semibold
          leading-6
          text-[#091127]
        "
      >
        {title}
      </h3>

      <div className="flex w-full flex-col">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`
              grid
              w-full
              grid-cols-1
              gap-1.5
              px-0
              py-4
              sm:grid-cols-[145px_minmax(0,1fr)]
              sm:gap-5
              ${
                index !== items.length - 1
                  ? "border-b border-[#edf0f4]"
                  : ""
              }
            `}
          >
            <div>
              <span
                className="
                  text-sm
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                {item.title}
              </span>
            </div>

            <div className="min-w-0">
              <span
                className="
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Recovery() {
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
            items-start
            gap-10
            sm:gap-11
            md:gap-12
          "
        >
          {/* HERO */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-7
              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-4
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
                  Recovery
                </span>

                <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  w-full
                  max-w-[650px]
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
                Make failure, retry and alternate delivery explicit.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[530px] flex-1">
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
                Recovery has to be safe as well as automatic. A retry must
                never turn into a stream of duplicate messages, and an
                alternate route is a privacy decision.
              </p>
            </div>
          </div>

          {/* FAILURE + RECOVERY */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-10
              lg:grid-cols-2
              lg:gap-12
              xl:gap-16
            "
          >
            {/* WHAT GOES WRONG */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                sm:px-6
                sm:py-6
              "
            >
              <RecoveryList
                title="What goes wrong"
                items={failures}
              />
            </div>

            {/* HOW IT RECOVERS */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                sm:px-6
                sm:py-6
              "
            >
              <RecoveryList
                title="How it recovers"
                items={recovery}
              />

              {/* RECOVERY BOUNDARY */}
              <div
                className="
                  mt-7
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-2
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-[#f7f8fa]
                  px-5
                  py-5
                  sm:px-6
                  sm:py-6
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
                  Recovery boundary
                </span>

                <p
                  className="
                    !m-0
                    w-full
                    text-sm
                    font-normal
                    leading-7
                    text-[#091127]
                    sm:text-base
                  "
                >
                  Retries must not create uncontrolled duplicate messages or
                  artifacts, and alternate routes require current permission
                  and a privacy review before they are used.
                </p>
              </div>
            </div>
          </div>

          {/* CORRECTED DOCUMENTS INTRO */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3
              border-t
              border-[#dfe5ee]
              pt-10
              sm:pt-12
            "
          >
            <h3
              className="
                !m-0
                w-full
                max-w-[620px]
                !text-[26px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]
                sm:!text-[30px]
                md:!text-[32px]
              "
            >
              Corrected and replacement documents
            </h3>

            <p
              className="
                !m-0
                w-full
                max-w-[700px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              When a credit note or correction supersedes something already
              delivered, the prior delivery evidence stays exactly where it
              is.
            </p>
          </div>

          {/* CORRECTION STEPS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {correctionSteps.map((step) => (
              <div
                key={step.number}
                className="
                  flex
                  min-h-[220px]
                  w-full
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.03)]
                  sm:px-6
                  sm:py-6
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    min-w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#091127]
                    px-2
                    py-1.5
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      leading-4
                      text-white
                    "
                  >
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <h4
                  className="
                    !m-0
                    mt-4
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  {step.title}
                </h4>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CORRECTION BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-6
              sm:px-6
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
              Correction boundary
            </span>

            <p
              className="
                !m-0
                w-full
                text-sm
                font-normal
                leading-7
                text-[#091127]
                sm:text-base
              "
            >
              Issuing and delivering a correction does not guarantee the
              recipient understands or accepts the change, and prior delivery
              history is never erased.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full items-center justify-start">
            <Link
              href="/automation"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2
                text-center
                text-base
                font-normal
                leading-6
                !text-white
                transition-opacity
                hover:opacity-90
                focus:outline-none
                focus:ring-2
                focus:ring-[#091127]
                focus:ring-offset-2
              "
            >
              <span className="!text-white">
                Explore Automation &amp; Workflows
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}