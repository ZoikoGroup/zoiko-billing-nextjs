"use client";

import Link from "next/link";

const contextItems = [
  {
    title: "Entity and market",
    description:
      "The issuing entity and market context the amount belongs to.",
  },
  {
    title: "Currency and precision",
    description:
      "The charge currency and the decimal precision supported for it.",
  },
  {
    title: "Exchange-rate source",
    description:
      "The rate source and effective date, recorded wherever conversion is used.",
  },
  {
    title: "Rounding rules",
    description:
      "Rounding mode and output precision, plus presentation currency where relevant.",
  },
  {
    title: "Tax rates and evidence",
    description:
      "Configured rates, exemptions, evidence state and the source they came from.",
  },
  {
    title: "Jurisdiction availability",
    description:
      "Published per market from the approved availability registry.",
  },
  {
    title: "Provider and mandate",
    description:
      "Provider, jurisdiction and mandate support stated only with current evidence.",
  },
  {
    title: "Restricted access",
    description:
      "Tax and contract context carries its own access controls.",
  },
];

export default function GlobalTaxContext() {
  return (
    <>
      <style jsx global>{`
        .global-tax-context,
        .global-tax-context * {
          box-sizing: border-box;
        }

        .global-tax-context .gtc-white {
          color: #ffffff !important;
        }

        .global-tax-context .gtc-light {
          color: #b8cad5 !important;
        }

        .global-tax-context .gtc-lighter {
          color: #d7e3e9 !important;
        }

        .global-tax-context .gtc-cyan {
          color: #48dce8 !important;
        }

        .global-tax-context .gtc-blue {
          color: #8db6cc !important;
        }

        .global-tax-context .gtc-card-title {
          color: #ffffff !important;
        }

        .global-tax-context .gtc-card-description {
          color: #8db6cc !important;
        }

        .global-tax-context a.gtc-primary {
          color: #062c43 !important;
          background-color: #ffffff !important;
        }

        .global-tax-context a.gtc-secondary {
          color: #ffffff !important;
          background-color: transparent !important;
        }

        .global-tax-context a.gtc-secondary:hover {
          color: #ffffff !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
        }

        @media (max-width: 1023px) {
          .global-tax-context .gtc-heading {
            font-size: 42px !important;
            line-height: 1.12 !important;
          }
        }

        @media (max-width: 639px) {
          .global-tax-context {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }

          .global-tax-context .gtc-heading {
            font-size: 36px !important;
            line-height: 1.12 !important;
          }

          .global-tax-context .gtc-intro {
            font-size: 15px !important;
            line-height: 1.8 !important;
          }

          .global-tax-context .gtc-boundary-text {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }

          .global-tax-context .gtc-actions {
            flex-direction: column !important;
          }

          .global-tax-context .gtc-action {
            width: 100% !important;
          }
        }
      `}</style>

      <section
        className="global-tax-context w-full"
        style={{
          backgroundColor: "#062f49",
          paddingLeft: "clamp(24px, 7.78vw, 112px)",
          paddingRight: "clamp(24px, 7.78vw, 112px)",
          paddingTop: "96px",
          paddingBottom: "96px",
        }}
      >
        <div
          className="mx-auto flex w-full flex-col"
          style={{
            maxWidth: "1220px",
            paddingLeft: "48px",
            paddingRight: "48px",
            gap: "36px",
          }}
        >
          {/* =========================================================
              HEADER
          ========================================================= */}
          <div
            className="flex w-full flex-col lg:flex-row"
            style={{
              alignItems: "flex-end",
              gap: "64px",
            }}
          >
            {/* LEFT */}
            <div
              className="flex flex-1 flex-col"
              style={{
                paddingTop: "10px",
                paddingBottom: "20px",
                gap: "20px",
              }}
            >
              {/* Eyebrow */}
              <div
                className="flex items-center"
                style={{
                  height: "16px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "2px",
                    borderRadius: "2px",
                    background:
                      "linear-gradient(to right, #35d9e5, #4b91ff)",
                    flexShrink: 0,
                  }}
                />

                <span
                  className="gtc-cyan"
                  style={{
                    marginLeft: "10px",
                    fontFamily: "IBM Plex Mono, monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "16px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Global and tax context
                </span>
              </div>

              {/* Heading */}
              <h2
                className="gtc-heading gtc-white"
                style={{
                  margin: 0,
                  maxWidth: "638px",
                  fontSize: "48px",
                  fontWeight: 500,
                  lineHeight: "53.82px",
                  letterSpacing: "-0.02em",
                }}
              >
                Amounts are
                <br />
                market-specific by
                <br />
                configuration.
              </h2>
            </div>

            {/* RIGHT */}
            <div
              style={{
                width: "100%",
                maxWidth: "528.77px",
                paddingBottom: "0",
              }}
            >
              <p
                className="gtc-light gtc-intro"
                style={{
                  margin: 0,
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "32px",
                }}
              >
                Entity, currency, precision, conversion and tax source are all
                configurable — within verified availability for that market.
              </p>
            </div>
          </div>

          {/* =========================================================
              CONTEXT CARDS
          ========================================================= */}
          <div
            style={{
              width: "100%",
              height: "320px",
              paddingTop: "20px",
              overflow: "hidden",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.14)",
              backgroundColor: "rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {contextItems.map((item, index) => (
              <div
                key={item.title}
                style={{
                  width: "100%",
                  minHeight: index === 7 ? "76px" : "76px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "20px",
                  paddingBottom: index === 7 ? "20px" : "20px",
                  backgroundColor: "#062f49",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "6px",
                  borderBottom:
                    index !== contextItems.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                {/* Title */}
                <h3
                  className="gtc-card-title"
                  style={{
                    width: "100%",
                    margin: 0,
                    paddingBottom: "4px",
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="gtc-card-description"
                  style={{
                    margin: 0,
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* =========================================================
              JURISDICTION BOUNDARY
          ========================================================= */}
          <div
            style={{
              width: "100%",
              minHeight: "162px",
              paddingLeft: "25px",
              paddingRight: "28px",
              paddingTop: "36px",
              paddingBottom: "32px",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderLeft: "3px solid #35d9e5",
              borderTopRightRadius: "16px",
              borderBottomRightRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {/* Label */}
            <span
              className="gtc-cyan"
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "9.9px",
                fontWeight: 400,
                lineHeight: "16px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Jurisdiction boundary
            </span>

            {/* Text */}
            <p
              className="gtc-lighter gtc-boundary-text"
              style={{
                width: "100%",
                maxWidth: "761px",
                margin: 0,
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Language and currency do not determine the legal entity or the
              tax treatment. Tax calculation and price support for a specific
              market are claimed only where current evidence exists in the
              availability registry.
            </p>
          </div>

          {/* =========================================================
              CTA BUTTONS
          ========================================================= */}
          <div
            className="gtc-actions flex w-full items-center justify-center"
            style={{
              gap: "12px",
              minHeight: "44px",
            }}
          >
            {/* Primary */}
            <Link
              href="/global-billing"
              className="gtc-action gtc-primary"
              style={{
                minHeight: "44px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "8px",
                paddingBottom: "10px",
                borderRadius: "8px",
                border: "1px solid #ffffff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Explore global billing
            </Link>

            {/* Secondary */}
            <Link
              href="/jurisdiction-availability"
              className="gtc-action gtc-secondary"
              style={{
                minHeight: "44px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "8px",
                paddingBottom: "10px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.36)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Check jurisdiction availability
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}