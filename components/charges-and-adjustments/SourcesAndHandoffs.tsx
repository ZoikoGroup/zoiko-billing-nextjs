"use client";

import Link from "next/link";

const handoffItems = [
  {
    title: "Verified categories only",
    description:
      "Catalog, order, contract, usage, commerce, CRM, ERP, tax and custom integrations, described only where verified.",
  },
  {
    title: "Inbound context",
    description:
      "Amount, quantity, rate or eligibility context arriving from an approved source.",
  },
  {
    title: "Outbound handoff",
    description:
      "Document, accounting or reporting handoff to a connected system.",
  },
  {
    title: "Ownership and conflict",
    description:
      "Which system owns a field, and what happens when two sources disagree.",
  },
  {
    title: "Retry and idempotency",
    description:
      "Retry behaviour and idempotency controls that prevent duplicate amounts.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Approved source records, shared identity or cross-product handoffs where enabled.",
  },
];

export default function SourcesAndHandoffs() {
  return (
    <>
      <style jsx global>{`
        .sources-handoffs,
        .sources-handoffs * {
          box-sizing: border-box;
        }

        .sources-handoffs .sh-white {
          color: #ffffff !important;
        }

        .sources-handoffs .sh-heading {
          color: #062f49 !important;
        }

        .sources-handoffs .sh-body {
          color: #536b78 !important;
        }

        .sources-handoffs .sh-blue {
          color: #3377ad !important;
        }

        .sources-handoffs .sh-card-title {
          color: #062f49 !important;
        }

        .sources-handoffs .sh-card-description {
          color: #536b78 !important;
        }

        .sources-handoffs .sh-boundary-text {
          color: #062f49 !important;
        }

        .sources-handoffs .sh-primary {
          color: #ffffff !important;
          background-color: #062f49 !important;
        }

        .sources-handoffs .sh-secondary {
          color: #3377ad !important;
        }

        .sources-handoffs .sh-secondary:hover {
          color: #1e527c !important;
        }

        @media (max-width: 1023px) {
          .sources-handoffs .sh-heading {
            font-size: 42px !important;
            line-height: 1.15 !important;
          }
        }

        @media (max-width: 639px) {
          .sources-handoffs {
            padding: 64px 20px !important;
          }

          .sources-handoffs .sh-heading {
            font-size: 36px !important;
            line-height: 1.12 !important;
          }

          .sources-handoffs .sh-intro {
            font-size: 15px !important;
            line-height: 1.8 !important;
          }

          .sources-handoffs .sh-boundary-text {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }

          .sources-handoffs .sh-actions {
            flex-direction: column !important;
          }

          .sources-handoffs .sh-action {
            width: 100% !important;
          }
        }
      `}</style>

      <section
        className="sources-handoffs w-full"
        style={{
          backgroundColor: "#f7f8f8",
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
                    flexShrink: 0,
                    borderRadius: "2px",
                    background:
                      "linear-gradient(to right, #35d9e5, #4b91ff)",
                  }}
                />

                <span
                  className="sh-blue"
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
                  Sources and handoffs
                </span>
              </div>

              {/* Heading */}
              <h2
                className="sh-heading"
                style={{
                  margin: 0,
                  width: "100%",
                  maxWidth: "638.15px",
                  fontSize: "48px",
                  fontWeight: 500,
                  lineHeight: "53.82px",
                  letterSpacing: "-0.02em",
                }}
              >
                Where amounts come
                <br />
                from, and where they go.
              </h2>
            </div>

            {/* RIGHT */}
            <div
              style={{
                flex: 1,
                width: "100%",
                maxWidth: "528.77px",
              }}
            >
              <p
                className="sh-body sh-intro"
                style={{
                  margin: 0,
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "32px",
                }}
              >
                Approved systems can supply quantity, rate and eligibility
                context inbound, and receive document, accounting or reporting
                context outbound.
              </p>
            </div>
          </div>

          {/* =========================================================
              HANDOFF LIST
          ========================================================= */}
          <div
            style={{
              width: "100%",
              height: "384px",
              overflow: "hidden",
              borderRadius: "16px",
              border: "1px solid #e4e7e8",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* FIRST */}
            <div
              style={{
                width: "100%",
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingTop: "24px",
                paddingBottom: "24px",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                gap: "2.7px",
              }}
            >
              <div
                style={{
                  paddingBottom: "4.79px",
                }}
              >
                <h3
                  className="sh-card-title"
                  style={{
                    margin: 0,
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  {handoffItems[0].title}
                </h3>
              </div>

              <p
                className="sh-card-description"
                style={{
                  margin: 0,
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Catalog, order, contract, usage, commerce, CRM, ERP, tax and
                custom
                <br />
                integrations, described only where verified.
              </p>
            </div>

            {/* REMAINING ITEMS */}
            {handoffItems.slice(1).map((item, index) => (
              <div
                key={item.title}
                style={{
                  width: "100%",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingTop: index === 4 ? "24px" : "24px",
                  paddingBottom: index === 0 || index === 3 ? "48px" : "24px",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <h3
                  className="sh-card-title"
                  style={{
                    margin: 0,
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="sh-card-description"
                  style={{
                    margin: 0,
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* =========================================================
              CONNECTOR BOUNDARY
          ========================================================= */}
          <div
            style={{
              width: "100%",
              minHeight: "162px",
              paddingLeft: "25px",
              paddingRight: "28px",
              paddingTop: "36px",
              paddingBottom: "32px",
              backgroundColor: "#f0f2f2",
              borderLeft: "3px solid #4b91ff",
              borderTopRightRadius: "16px",
              borderBottomRightRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <span
              className="sh-blue"
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "9.9px",
                fontWeight: 400,
                lineHeight: "16px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Connector boundary
            </span>

            <p
              className="sh-boundary-text"
              style={{
                width: "100%",
                maxWidth: "761.06px",
                margin: 0,
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Not every connector calculates, rates, discounts, taxes or posts
              amounts, and not in real time. Behaviour is stated per connector
              in the governed integration registry. Zoiko Billing remains
              independently deployable.
            </p>
          </div>

          {/* =========================================================
              CTA
          ========================================================= */}
          <div
            className="sh-actions flex w-full items-center justify-center"
            style={{
              gap: "12px",
              minHeight: "44px",
            }}
          >
            <Link
              href="/integrations"
              className="sh-action sh-primary"
              style={{
                minHeight: "44px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "8px",
                paddingBottom: "10px",
                borderRadius: "8px",
                border: "1px solid #062f49",
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
              Browse integrations
            </Link>

            <Link
              href="/integrations"
              className="sh-action sh-secondary"
              style={{
                minHeight: "44px",
                paddingLeft: "8px",
                paddingRight: "8px",
                paddingTop: "8px",
                paddingBottom: "8px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Compare deployment options

              <span
                style={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "24px",
                }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}