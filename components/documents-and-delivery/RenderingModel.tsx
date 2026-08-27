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
    badge: "bg-[#f7f8fa] border-[#dfe5ee]",
    icon: "text-[#5d7192]",
    text: "text-[#5d7192]",
  },
  active: {
    badge: "bg-[#f7f8fa] border-[#b9c7dc]",
    icon: "text-[#52709d]",
    text: "text-[#52709d]",
  },
  error: {
    badge: "bg-[#faf8f7] border-[#e3b8ae]",
    icon: "text-[#b74d3c]",
    text: "text-[#b74d3c]",
  },
  ready: {
    badge: "bg-[#f7f8fa] border-[#b8c9dc]",
    icon: "text-[#52709d]",
    text: "text-[#52709d]",
  },
  info: {
    badge: "bg-[#f4f6fa] border-[#cbd5e1]",
    icon: "text-[#5273a8]",
    text: "text-[#5273a8]",
  },
};

const artifactDetails = [
  {
    label: "Document and version",
    value: "ZB-UK-2026-0418 · issued v3",
    mono: true,
  },
  {
    label: "Template",
    value: "UK-STD-EN · v7 · owner brand-ops",
    mono: true,
  },
  {
    label: "Issuer and sender",
    value: "Zoiko Ltd (UK) · supported sender identity",
    mono: false,
  },
  {
    label: "Locale and formatting",
    value: "en-GB · DD/MM/YYYY · 1,234.56",
    mono: true,
  },
  {
    label: "Output",
    value: "PDF · 2 pages · tagged for accessibility",
    mono: false,
  },
  {
    label: "Validation",
    value: "stable reference recorded · checks passed",
    mono: true,
  },
  {
    label: "Retention",
    value: "Policy DOC-RET-02 · no replacement artifact",
    mono: false,
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
      className={`inline-flex min-h-7 items-center gap-2 rounded-full border px-2.5 py-1 ${style.badge}`}
    >
      <span
        className={`font-mono text-xs font-medium leading-3 ${style.icon}`}
      >
        {icon}
      </span>

      <span
        className={`font-mono text-[10px] font-medium uppercase leading-4 tracking-wide ${style.text}`}
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
          py-16
          sm:px-8
          sm:py-20
          md:px-10
          md:py-24
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
            lg:px-12
          "
        >
          {/* =====================================================
              HEADER
          ===================================================== */}

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
                lg:pb-6
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-2.5">
                <span
                  className="
                    h-0.5
                    w-5
                    rounded-sm
                    bg-gradient-to-r
                    from-[#39d5cf]
                    to-[#52709d]
                  "
                />

                <span
                  className="
                    font-mono
                    text-xs
                    font-medium
                    uppercase
                    leading-4
                    tracking-wider
                    text-[#7890b2]
                  "
                >
                  Rendering
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  w-full
                  max-w-[638px]
                  text-[32px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  !text-[#091127]
                  sm:text-[38px]
                  md:text-[44px]
                  lg:text-[48px]
                  lg:leading-[53.82px]
                "
              >
                Render the approved
                <br className="hidden sm:block" />
                document version — not
                <br className="hidden sm:block" />
                a disconnected copy.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-base
                  font-normal
                  leading-8
                  !text-[#5d7192]
                "
              >
                An artifact is always tied to the exact issued version and
                template version that produced it. Changing a template later
                never rewrites what was already delivered.
              </p>
            </div>
          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-10
              pt-2
              lg:flex-row
              lg:items-start
              lg:gap-16
            "
          >
            {/* ===================================================
                LEFT PRODUCT VIEW
            =================================================== */}

            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-3">
                {/* PRODUCT LABEL */}
                <div className="flex flex-wrap items-center">
                  <div
                    className="
                      inline-flex
                      min-h-7
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#d7e0e9]
                      bg-white/70
                      px-3
                    "
                  >
                    <span className="h-[5px] w-[5px] rounded-sm bg-[#52709d]" />

                    <span
                      className="
                        font-mono
                        text-[10px]
                        font-normal
                        uppercase
                        leading-4
                        tracking-wide
                        !text-[#52709d]
                      "
                    >
                      Illustrative product view
                    </span>
                  </div>
                </div>

                {/* PRODUCT CARD */}
                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    shadow-[0_4px_14px_rgba(14,33,27,0.04),0_1px_2px_rgba(14,33,27,0.05)]
                  "
                >
                  {/* CARD HEADER */}
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-2.5
                      border-b
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                      px-4
                      py-3.5
                    "
                  >
                    <span className="h-2 w-2 rounded-sm bg-[#52709d]" />

                    <span
                      className="
                        font-mono
                        text-xs
                        font-normal
                        uppercase
                        leading-4
                        tracking-wide
                        !text-[#5d7192]
                      "
                    >
                      Render artifact AR-33108
                    </span>

                    <div className="ml-auto">
                      <StatusBadge
                        status="ready"
                        title="Ready"
                      />
                    </div>
                  </div>

                  {/* ARTIFACT DETAILS */}
                  {artifactDetails.map((item, index) => (
                    <div
                      key={item.label}
                      className={`
                        flex
                        items-start
                        gap-3.5
                        px-4
                        py-3.5
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
                          border-[#cbd6e3]
                          bg-[#f7f8fa]
                        "
                      >
                        <span
                          className="
                            font-mono
                            text-[9px]
                            font-semibold
                            leading-4
                            !text-[#52709d]
                          "
                        >
                          {index + 1}
                        </span>
                      </div>

                      {/* DETAIL */}
                      <div className="min-w-0 flex-1">
                        <p
                          className="
                            !m-0
                            font-mono
                            text-[9px]
                            font-normal
                            uppercase
                            leading-4
                            tracking-wide
                            !text-[#7890b2]
                          "
                        >
                          {item.label}
                        </p>

                        <p
                          className={`
                            !m-0
                            mt-1.5
                            text-sm
                            leading-6
                            !text-[#091127]
                            ${
                              item.mono
                                ? "font-mono"
                                : "font-normal"
                            }
                          `}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* DISCLAIMER */}
                <p
                  className="
                    !m-0
                    font-mono
                    text-[10px]
                    font-normal
                    uppercase
                    leading-5
                    tracking-wide
                    !text-[#52709d]
                  "
                >
                  Universal PDF/A, archival, digital-signature or regulatory
                  format support is not claimed. Supported formats are
                  published per document type and market.
                </p>
              </div>
            </div>

            {/* ===================================================
                RIGHT STATES
            =================================================== */}

            <div className="w-full lg:w-1/2">
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                "
              >
                {/* TABLE TITLE */}
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                    px-5
                    py-4
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-wide
                      !text-[#5d7192]
                    "
                  >
                    Artifact states and required treatment
                  </span>
                </div>

                {/* DESKTOP HEADER */}
                <div className="hidden grid-cols-[1.1fr_0.85fr_1.15fr] border-b border-[#dfe5ee] bg-[#fafbfc] md:grid">
                  <div className="px-3.5 py-2">
                    <span className="font-mono text-[10px] font-medium uppercase leading-4 tracking-wide !text-[#7890b2]">
                      State
                    </span>
                  </div>

                  <div className="px-3.5 py-2">
                    <span className="font-mono text-[10px] font-medium uppercase leading-4 tracking-wide !text-[#7890b2]">
                      Meaning
                    </span>
                  </div>

                  <div className="px-3.5 py-2">
                    <span className="font-mono text-[10px] font-medium uppercase leading-4 tracking-wide !text-[#7890b2]">
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
                        grid-cols-[1.1fr_0.85fr_1.15fr]
                        ${
                          index !== artifactStates.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      <div className="flex items-start px-3.5 py-5">
                        <StatusBadge
                          status={state.status}
                          title={state.title}
                        />
                      </div>

                      <div className="px-3.5 py-4">
                        <p className="!m-0 text-sm leading-5 !text-[#091127]">
                          {state.meaning}
                        </p>
                      </div>

                      <div className="px-3.5 py-4">
                        <p className="!m-0 text-sm leading-5 !text-[#091127]">
                          {state.treatment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* MOBILE */}
                <div className="flex flex-col md:hidden">
                  {artifactStates.map((state, index) => (
                    <div
                      key={state.title}
                      className={`
                        p-4
                        ${
                          index !== artifactStates.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      <StatusBadge
                        status={state.status}
                        title={state.title}
                      />

                      <div className="mt-4">
                        <p className="!m-0 font-mono text-[10px] font-medium uppercase tracking-wide !text-[#7890b2]">
                          Meaning
                        </p>

                        <p className="!m-0 mt-1.5 text-sm leading-6 !text-[#091127]">
                          {state.meaning}
                        </p>
                      </div>

                      <div className="mt-4">
                        <p className="!m-0 font-mono text-[10px] font-medium uppercase tracking-wide !text-[#7890b2]">
                          Required treatment
                        </p>

                        <p className="!m-0 mt-1.5 text-sm leading-6 !text-[#091127]">
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
                  mt-8
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#52709d]
                  bg-[#f7f8fa]
                  px-6
                  py-6
                "
              >
                <p
                  className="
                    !m-0
                    font-mono
                    text-[10px]
                    font-normal
                    uppercase
                    leading-4
                    tracking-wide
                    !text-[#7890b2]
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
                    leading-7
                    !text-[#091127]
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

          <div className="flex w-full justify-center pt-2">
            <Link
              href="/invoices-and-credit-notes"
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
                !font-normal
                !leading-6
                !text-white
                !no-underline
                text-base
                whitespace-nowrap
                transition
                hover:bg-[#17213a]
              "
            >
              <span
                className="
                  block
                  !font-normal
                  !leading-6
                  !text-white
                "
              >
                Explore Invoices &amp; Credit Notes
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}