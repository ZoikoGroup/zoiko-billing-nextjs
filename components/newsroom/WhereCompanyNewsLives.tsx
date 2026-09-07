"use client";

import Link from "next/link";

const rows = [
  {
    wants: "Corporate announcement or statement",
    authority: {
      label: "Newsroom",
      href: "/newsroom",
    },
    behavior: <>Published here with source, date and claim governance</>,
  },
  {
    wants: "What changed in the product",
    authority: {
      label: "Product Updates",
      href: "/product-updates",
    },
    behavior: (
      <>
        <strong>Not announced here</strong> — a release note carries
        availability state and action requirements a newsroom item does not
      </>
    ),
  },
  {
    wants: "Is the service down?",
    authority: {
      label: "System Status",
      href: "/system-status",
    },
    behavior: (
      <>
        <strong>Never reported here.</strong> An incident in a dated feed is
        stale within minutes
      </>
    ),
  },
  {
    wants: "Research or benchmark findings",
    authority: {
      label: "Reports & Insights",
      href: "/reports-and-insights",
    },
    behavior: (
      <>Linked; methodology and limitations travel with the finding there</>
    ),
  },
  {
    wants: "A customer result",
    authority: {
      label: "Customer Stories",
      href: "/customer-stories",
    },
    behavior: (
      <>
        <strong>Consent and evidence gate applies there</strong>, not to a
        press release
      </>
    ),
  },
  {
    wants: "An upcoming event",
    authority: {
      label: "Webinar & Events",
      href: "/webinars-and-events",
    },
    behavior: <>Linked; schedule and state are governed there</>,
  },
  {
    wants: "A security or legal notice",
    authority: {
      label: "Security Advisories",
      href: "/security-advisories",
    },
    secondaryAuthority: {
      label: "Legal",
      href: "/legal",
    },
    behavior: (
      <>
        <strong>Not routed through corporate communications</strong>
      </>
    ),
  },
];

export default function WhereCompanyNewsLives() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14
          sm:px-8 sm:py-16
          md:px-10 md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col items-center
            gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[662px] flex-col items-center
              gap-3 pt-2 text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Where company news actually lives
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold
                !leading-[1.2] !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Seven kinds of news, and only one belongs here.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Each destination has an evidence or action gate that a general
              newsroom item would bypass.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full overflow-hidden rounded-2xl
              border border-[#dfe5ee] bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[288px_208px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs font-bold uppercase leading-4
                      tracking-wide text-[#7890b2]
                    "
                  >
                    What a reader wants
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs font-bold uppercase leading-4
                      tracking-wide text-[#7890b2]
                    "
                  >
                    Authority
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs font-bold uppercase leading-4
                      tracking-wide text-[#7890b2]
                    "
                  >
                    Newsroom behavior
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.wants}
                  className={`
                    grid grid-cols-[288px_208px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* WHAT A READER WANTS */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm font-semibold leading-5
                        text-[#091127]
                      "
                    >
                      {row.wants}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <div className="flex flex-wrap items-center gap-x-1">
                      <Link
                        href={row.authority.href}
                        className="
                          !text-[#5276ad]
                          text-sm font-semibold leading-6
                          transition-colors
                          hover:!text-[#091127]
                          hover:underline
                        "
                      >
                        {row.authority.label}
                      </Link>

                      {row.secondaryAuthority && (
                        <>
                          <span
                            className="
                              text-sm leading-5
                              text-[#5d7192]
                            "
                          >
                            ·
                          </span>

                          <Link
                            href={row.secondaryAuthority.href}
                            className="
                              !text-[#5276ad]
                              text-sm font-semibold leading-6
                              transition-colors
                              hover:!text-[#091127]
                              hover:underline
                            "
                          >
                            {row.secondaryAuthority.label}
                          </Link>
                        </>
                      )}
                    </div>
                  </div>

                  {/* NEWSROOM BEHAVIOR */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm font-normal leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.behavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.wants}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* WHAT A READER WANTS */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px] font-bold uppercase
                        tracking-[0.12em] text-[#7890b2]
                      "
                    >
                      What a reader wants
                    </p>

                    <p
                      className="
                        !m-0 mt-1.5
                        text-sm font-semibold leading-5
                        text-[#091127]
                      "
                    >
                      {row.wants}
                    </p>
                  </div>

                  {/* AUTHORITY */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px] font-bold uppercase
                        tracking-[0.12em] text-[#7890b2]
                      "
                    >
                      Authority
                    </p>

                    <div
                      className="
                        mt-1.5 flex flex-wrap
                        items-center gap-x-1
                      "
                    >
                      <Link
                        href={row.authority.href}
                        className="
                          !text-[#5276ad]
                          text-sm font-semibold leading-6
                          transition-colors
                          !hover:!text-[#091127]
                          hover:underline
                        "
                      >
                        {row.authority.label}
                      </Link>

                      {row.secondaryAuthority && (
                        <>
                          <span
                            className="
                              text-sm leading-5
                              text-[#5d7192]
                            "
                          >
                            ·
                          </span>

                          <Link
                            href={row.secondaryAuthority.href}
                            className="
                              !text-[#5276ad]
                              text-sm font-semibold leading-6
                              transition-colors
                              !hover:!text-[#091127]
                              hover:underline
                            "
                          >
                            {row.secondaryAuthority.label}
                          </Link>
                        </>
                      )}
                    </div>
                  </div>

                  {/* NEWSROOM BEHAVIOR */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px] font-bold uppercase
                        tracking-[0.12em] text-[#7890b2]
                      "
                    >
                      Newsroom behavior
                    </p>

                    <p
                      className="
                        !m-0 mt-1.5
                        text-sm leading-6 text-[#5d7192]
                      "
                    >
                      {row.behavior}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}