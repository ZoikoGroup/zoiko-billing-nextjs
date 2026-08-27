"use client";

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
    lines: [
      "The original issued and delivered document is",
      "identified before anything new is produced.",
    ],
  },
  {
    number: "02",
    title: "Render the corrective document",
    lines: [
      "The current corrective document is rendered from its",
      "own approved version.",
    ],
  },
  {
    number: "03",
    title: "Decide the notice",
    lines: [
      "State whether a new message, portal publication or",
      "notification is required.",
    ],
  },
  {
    number: "04",
    title: "Preserve prior artifacts",
    lines: [
      "Previous artifacts and attempts are retained",
      "according to policy.",
    ],
  },
  {
    number: "05",
    title: "Link both documents",
    lines: [
      "Original and corrective documents are linked in",
      "internal and recipient-facing context where",
      "supported.",
    ],
  },
  {
    number: "06",
    title: "Never silently replace",
    lines: [
      "Previously delivered evidence is not overwritten or",
      "erased.",
    ],
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
    <div className="flex w-full flex-col items-start gap-1.5">
      <div className="flex w-full flex-col items-start">
        <h3 className="!m-0 text-lg font-semibold leading-6 text-sky-950">
          {title}
        </h3>
      </div>

      <div className="flex w-full flex-col">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`flex w-full flex-col gap-2 px-0 py-4 sm:flex-row sm:items-start sm:gap-4 ${
              index !== items.length - 1
                ? "border-b border-color-grey-93-4"
                : ""
            }`}
          >
            <div className="w-full shrink-0 sm:w-36">
              <div className="text-sm font-semibold leading-6 text-sky-950">
                {item.title}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="text-sm font-normal leading-6 text-color-azure-35">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Recovery() {
  return (
    <section className="w-full bg-color-grey-97-2">
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
            max-w-[1220px]
            flex-col
            items-start
            gap-9
            px-0
            sm:px-4
            lg:px-12
          "
        >
          {/* =========================================================
              HERO
          ========================================================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8
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
                gap-5
                pt-2.5
                pb-4
                lg:pb-6
              "
            >
              {/* EYEBROW */}
              <div className="relative flex h-4 w-24 items-center">
                <div
                  className="
                    absolute
                    left-0
                    top-[7.94px]
                    h-0.5
                    w-5
                    rounded-xs
                    bg-gradient-to-r
                    from-color-cyan-42
                    to-color-azure-51
                  "
                />

                <span
                  className="
                    absolute
                    left-[30px]
                    top-[-1px]
                    whitespace-nowrap
                    text-xs
                    font-medium
                    uppercase
                    leading-4
                    tracking-wider
                    text-color-azure-44
                  "
                >
                  Recovery
                </span>
              </div>

              {/* HEADING */}
              <div className="w-full max-w-[638px]">
                <h2
                  className="
                    !m-0
                    text-[32px]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.03em]
                    text-sky-950
                    sm:text-[40px]
                    md:text-[44px]
                    lg:text-5xl
                    lg:leading-[53.82px]
                  "
                >
                  Make failure, retry and
                  <br className="hidden sm:block" />
                  alternate delivery
                  <br className="hidden sm:block" />
                  explicit.
                </h2>
              </div>
            </div>

            {/* RIGHT DESCRIPTION */}
            <div className="w-full max-w-[528px] flex-1">
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-7
                  text-color-azure-35
                  sm:text-base
                "
              >
                Recovery has to be safe as well as automatic. A retry must
                never turn into a stream of duplicate messages, and an
                alternate route is a privacy decision.
              </p>
            </div>
          </div>

          {/* =========================================================
              FAILURE + RECOVERY
          ========================================================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-12
              py-6
              lg:flex-row
              lg:justify-center
              lg:gap-16
              lg:pb-10
            "
          >
            <div className="w-full lg:max-w-[526px]">
              <RecoveryList title="What goes wrong" items={failures} />
            </div>

            <div className="w-full lg:max-w-[526px]">
              <RecoveryList title="How it recovers" items={recovery} />

              {/* RECOVERY BOUNDARY */}
              <div
                className="
                  mt-8
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-2
                  rounded-r-2xl
                  border-l-[3px]
                  border-color-azure-51
                  bg-color-grey-97-2
                  px-6
                  py-6
                  sm:px-7
                  sm:py-7
                "
              >
                <div className="w-full">
                  <div
                    className="
                      text-[9.9px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-wide
                      text-color-azure-44
                    "
                  >
                    Recovery boundary
                  </div>
                </div>

                <p
                  className="
                    !m-0
                    w-full
                    text-sm
                    font-normal
                    leading-7
                    text-sky-950
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

          {/* =========================================================
              CORRECTED DOCUMENTS INTRO
          ========================================================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3.5
              border-t
              border-zinc-200
              pt-10
              sm:pt-12
            "
          >
            <div className="w-full max-w-[512px]">
              <h3
                className="
                  !m-0
                  text-2xl
                  font-medium
                  leading-8
                  tracking-[-0.02em]
                  text-sky-950
                  sm:text-3xl
                "
              >
                Corrected and replacement documents
              </h3>
            </div>

            <div className="w-full max-w-[555px]">
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-7
                  text-color-azure-35
                  sm:text-base
                "
              >
                When a credit note or correction supersedes something already
                delivered, the prior delivery evidence stays exactly where it
                is.
              </p>
            </div>
          </div>

          {/* =========================================================
              CORRECTION STEPS
          ========================================================= */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-2
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {correctionSteps.map((step) => (
              <div
                key={step.number}
                className="
                  flex
                  min-h-[240px]
                  w-full
                  flex-col
                  items-start
                  gap-1
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-color-white-solid
                  px-6
                  py-6
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-gradient-to-br
                    from-color-cyan-42
                    to-color-azure-51
                    py-1.5
                  "
                >
                  <span
                    className="
                      text-center
                      text-[9.9px]
                      font-semibold
                      leading-4
                      text-color-white-solid
                    "
                  >
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="flex w-full flex-col items-start pb-1 pt-2">
                  <h4
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-5
                      text-sky-950
                    "
                  >
                    {step.title}
                  </h4>
                </div>

                {/* DESCRIPTION */}
                <div className="flex flex-col items-start">
                  {step.lines.map((line) => (
                    <p
                      key={line}
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-color-azure-35
                      "
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================
              CORRECTION BOUNDARY
          ========================================================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-color-azure-51
              bg-color-grey-97-2
              px-6
              py-7
              sm:px-7
              sm:py-9
            "
          >
            <div className="w-full">
              <div
                className="
                  text-[9.9px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-wide
                  text-color-azure-44
                "
              >
                Correction boundary
              </div>
            </div>

            <p
              className="
                !m-0
                w-full
                text-sm
                font-normal
                leading-7
                text-sky-950
                sm:text-base
              "
            >
              Issuing and delivering a correction does not guarantee the
              recipient understands or accepts the change, and prior delivery
              history is never erased.
            </p>
          </div>

          {/* =========================================================
              CTA
          ========================================================= */}

          <div className="flex w-full items-center justify-start">
            <button
              type="button"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-sky-950
                bg-sky-950
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
                focus:ring-sky-950
                focus:ring-offset-2
              "
            >
              <span className="!text-white">
                Explore Automation &amp; Workflows
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}