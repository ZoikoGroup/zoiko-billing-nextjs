"use client";

import Link from "next/link";

type StatusType = "neutral" | "active" | "error" | "ready" | "info";

type ArtifactState = {
  status: StatusType;
  title: string;
  meaning: string;
  treatment: string;
};

const artifactStates: ArtifactState[] = [
  {
    status: "neutral",
    title: "Pending render",
    meaning:
      "An approved source exists but generation has not completed.",
    treatment: "Show the source version and owner.",
  },
  {
    status: "active",
    title: "Rendering",
    meaning: "Artifact generation is active.",
    treatment:
      "Prevent duplicate finalization; expose safe progress.",
  },
  {
    status: "error",
    title: "Render failed",
    meaning:
      "The artifact could not be generated or validated.",
    treatment: "Block release and show the recovery route.",
  },
  {
    status: "ready",
    title: "Ready",
    meaning:
      "A validated artifact is available for permitted release.",
    treatment:
      "Show document version, template version and format.",
  },
  {
    status: "neutral",
    title: "Expired / revoked",
    meaning:
      "The artifact or its link is no longer available for new access.",
    treatment:
      "Preserve evidence and offer an authorized replacement path.",
  },
  {
    status: "info",
    title: "Superseded",
    meaning:
      "A newer corrective or replacement artifact exists.",
    treatment:
      "Retain the relationship. The prior artifact is not silently deleted.",
  },
  {
    status: "neutral",
    title: "Archived / retained",
    meaning:
      "No longer active but still held under policy.",
    treatment:
      "Restrict access and preserve the required history.",
  },
];

const statusStyles: Record<
  StatusType,
  {
    badge: string;
    icon: string;
    text: string;
  }
> = {
  neutral: {
    badge: "border-[#dfe5ee] bg-[#f7f8fa]",
    icon: "text-[#5d7192]",
    text: "text-[#5d7192]",
  },
  active: {
    badge: "border-[#cbd6e3] bg-[#f7f8fa]",
    icon: "text-[#52709d]",
    text: "text-[#52709d]",
  },
  error: {
    badge: "border-[#e3b8ae] bg-[#faf8f7]",
    icon: "text-[#b74d3c]",
    text: "text-[#b74d3c]",
  },
  ready: {
    badge: "border-[#cbd6e3] bg-[#f7f8fa]",
    icon: "text-[#52709d]",
    text: "text-[#52709d]",
  },
  info: {
    badge: "border-[#cbd5e1] bg-[#f4f6fa]",
    icon: "text-[#5273a8]",
    text: "text-[#5273a8]",
  },
};

const artifactDetails = [
  {
    label: "Document and version",
    value: "ZB-UK-2026-0418 · issued v3",
  },
  {
    label: "Template",
    value: "UK-STD-EN · v7 · owner brand-ops",
  },
  {
    label: "Issuer and sender",
    value: "Zoiko Ltd (UK) · supported sender identity",
  },
  {
    label: "Locale and formatting",
    value: "en-GB · DD/MM/YYYY · 1,234.56",
  },
  {
    label: "Output",
    value: "PDF · 2 pages · tagged for accessibility",
  },
  {
    label: "Validation",
    value: "stable reference recorded · checks passed",
  },
  {
    label: "Retention",
    value: "Policy DOC-RET-02 · no replacement artifact",
  },
];

function StatusBadge({
  status,
  title,
}: {
  status: StatusType;
  title: string;
}) {
  const style = statusStyles[status];

  const icon =
    status === "error"
      ? "!"
      : status === "ready"
        ? "✓"
        : status === "active"
          ? "›"
          : status === "info"
            ? "i"
            : "–";

  return (
    <div
      className={`
        inline-flex
        min-h-7
        items-center
        gap-2
        rounded-full
        border
        px-2.5
        py-1
        ${style.badge}
      `}
    >
      <span
        className={`
          text-xs
          font-medium
          leading-3
          ${style.icon}
        `}
      >
        {icon}
      </span>

      <span
        className={`
          text-[10px]
          font-bold
          uppercase
          leading-4
          tracking-[0.08em]
          ${style.text}
        `}
      >
        {title}
      </span>
    </div>
  );
}

export default function Rendering() {
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
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* =====================================================
              SECTION INTRO
          ===================================================== */}

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
                Rendering
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
              Render the approved document version — not a disconnected copy.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              An artifact is always tied to the exact issued version and
              template version that produced it. Changing a template later
              never rewrites what was already delivered.
            </p>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-8

              lg:flex-row
              lg:items-start
              lg:gap-8
            "
          >
            {/* ===================================================
                LEFT — ARTIFACT DETAILS
            =================================================== */}

            <div className="w-full lg:w-[44%]">
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
                {/* CARD HEADER */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-4
                    py-3.5
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Render artifact
                  </span>

                  <span className="text-sm text-[#b0bbca]">·</span>

                  <span
                    className="
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    AR-33108
                  </span>

                  <div className="ml-auto">
                    <StatusBadge status="ready" title="Ready" />
                  </div>
                </div>

                {/* ARTIFACT DETAILS */}
                <div className="flex flex-col">
                  {artifactDetails.map((item, index) => (
                    <div
                      key={item.label}
                      className={`
                        flex
                        items-start
                        gap-4
                        px-4
                        py-4

                        sm:px-5

                        ${
                          index !== artifactDetails.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      {/* NUMBER */}
                      <div
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-md
                          border
                          border-[#dfe5ee]
                          bg-[#f7f8fa]
                        "
                      >
                        <span
                          className="
                            text-[10px]
                            font-semibold
                            leading-4
                            text-[#7890b2]
                          "
                        >
                          {index + 1}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="min-w-0 flex-1">
                        <p
                          className="
                            !m-0
                            text-[10px]
                            font-bold
                            uppercase
                            leading-4
                            tracking-[0.08em]
                            text-[#7890b2]
                          "
                        >
                          {item.label}
                        </p>

                        <p
                          className="
                            !m-0
                            mt-1.5
                            break-words
                            text-sm
                            font-normal
                            leading-6
                            text-[#091127]
                          "
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DISCLAIMER */}
              <p
                className="
                  !m-0
                  mt-3
                  px-1
                  text-xs
                  font-normal
                  leading-5
                  text-[#7890b2]
                "
              >
                Universal PDF/A, archival, digital-signature or regulatory
                format support is not claimed. Supported formats are published
                per document type and market.
              </p>
            </div>

            {/* ===================================================
                RIGHT — ARTIFACT STATES
            =================================================== */}

            <div className="w-full lg:w-[56%]">
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
                {/* TABLE HEADER */}
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-4
                    py-3.5

                    sm:px-5
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Artifact states and required treatment
                  </span>
                </div>

                {/* DESKTOP TABLE HEADER */}
                <div
                  className="
                    hidden
                    grid-cols-[1.05fr_1fr_1fr]
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]

                    md:grid
                  "
                >
                  <div className="px-4 py-3">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      State
                    </span>
                  </div>

                  <div className="px-4 py-3">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      Meaning
                    </span>
                  </div>

                  <div className="px-4 py-3">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      Required treatment
                    </span>
                  </div>
                </div>

                {/* DESKTOP ROWS */}
                <div className="hidden md:block">
                  {artifactStates.map((state, index) => (
                    <div
                      key={state.title}
                      className={`
                        grid
                        grid-cols-[1.05fr_1fr_1fr]

                        ${
                          index !== artifactStates.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      {/* STATE */}
                      <div className="px-4 py-4">
                        <StatusBadge
                          status={state.status}
                          title={state.title}
                        />
                      </div>

                      {/* MEANING */}
                      <div className="px-4 py-4">
                        <p
                          className="
                            !m-0
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {state.meaning}
                        </p>
                      </div>

                      {/* TREATMENT */}
                      <div className="px-4 py-4">
                        <p
                          className="
                            !m-0
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {state.treatment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* MOBILE CARDS */}
                <div className="flex flex-col md:hidden">
                  {artifactStates.map((state, index) => (
                    <div
                      key={state.title}
                      className={`
                        p-5

                        ${
                          index !== artifactStates.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      {/* STATE */}
                      <StatusBadge
                        status={state.status}
                        title={state.title}
                      />

                      {/* MEANING */}
                      <div className="mt-4">
                        <p
                          className="
                            !m-0
                            text-[10px]
                            font-bold
                            uppercase
                            leading-4
                            tracking-[0.08em]
                            text-[#7890b2]
                          "
                        >
                          Meaning
                        </p>

                        <p
                          className="
                            !m-0
                            mt-1.5
                            text-sm
                            font-normal
                            leading-6
                            text-[#5d7192]
                          "
                        >
                          {state.meaning}
                        </p>
                      </div>

                      {/* TREATMENT */}
                      <div className="mt-4">
                        <p
                          className="
                            !m-0
                            text-[10px]
                            font-bold
                            uppercase
                            leading-4
                            tracking-[0.08em]
                            text-[#7890b2]
                          "
                        >
                          Required treatment
                        </p>

                        <p
                          className="
                            !m-0
                            mt-1.5
                            text-sm
                            font-normal
                            leading-6
                            text-[#5d7192]
                          "
                        >
                          {state.treatment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TEMPLATE BOUNDARY */}
              <div
                className="
                  mt-6
                  rounded-r-2xl
                  border-l-2
                  border-[#7890b2]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_1px_2px_rgba(15,23,42,0.02)]
                "
              >
                <p
                  className="
                    !m-0
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#7890b2]
                  "
                >
                  Template boundary
                </p>

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
                  A template is presentation, not the billing record.
                  Updating a template produces future artifacts — it never
                  alters one that has already been delivered.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div className="flex w-full justify-center pt-1">
            <Link
              href="/invoices"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2
                text-base
                font-normal
                leading-6
                !text-white
                no-underline
                transition
                hover:bg-[#17213a]
              "
            >
              Explore Invoices &amp; Credit Notes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}