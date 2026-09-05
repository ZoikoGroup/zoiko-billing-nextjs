"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Source",
    description: "Issued document version",
  },
  {
    number: "02",
    title: "Render",
    description: "Template version, artifact",
  },
  {
    number: "03",
    title: "Recipient",
    description: "Purpose and authority",
  },
  {
    number: "04",
    title: "Release",
    description: "Permission and policy",
  },
  {
    number: "05",
    title: "Channel",
    description: "Provider evidence only",
  },
  {
    number: "06",
    title: "Evidence",
    description: "Attempts, failures, recovery",
  },
];

export default function DocumentsDeliveryNextStep() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#07344d",
      }}
      className="px-6 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-28 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* =========================================================
              LEFT SIDE
          ========================================================= */}
          <div className="flex w-full flex-1 flex-col items-start">
            {/* Section label */}
            <div className="flex h-4 items-center">
              <div
                style={{
                  background:
                    "linear-gradient(to right, #00c9df, #3182ff)",
                }}
                className="mr-2.5 h-0.5 w-5 rounded-full"
              />

              <span
                style={{ color: "#36d9ee" }}
                className="text-xs font-medium uppercase leading-4 tracking-wider"
              >
                Next step
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{ color: "#ffffff" }}
              className="mt-5 max-w-[660px] text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl"
            >
              Start with the
              <br />
              document-delivery
              <br />
              path your operation
              <br />
              needs.
            </h2>

            {/* Description */}
            <p
              style={{ color: "#82a3b8" }}
              className="mt-8 max-w-[530px] text-base font-normal leading-8"
            >
              Decide which channel each document class deserves, who may
              release it, and what you want to be able to prove afterwards.
            </p>

            {/* =====================================================
                CTA BUTTONS
            ===================================================== */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Create Account */}
              <Link
                href="/create-account"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#3182ff",
                  border: "1px solid #3182ff",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                }}
              >
                <span style={{ color: "#ffffff" }}>
                  Create Account
                </span>
              </Link>

              {/* Book a Demo */}
              <Link
                href="/book-demo"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.36)",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                }}
              >
                <span style={{ color: "#ffffff" }}>
                  Book a Demo
                </span>
              </Link>
            </div>

            {/* Security overview */}
            <Link
              href="/security-overview"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "12px",
                minHeight: "44px",
                color: "#00c9df",
                textDecoration: "none",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
            >
              <span style={{ color: "#00c9df" }}>
                Security overview
              </span>

              <span
                style={{
                  color: "#00c9df",
                  fontWeight: 700,
                }}
              >
                →
              </span>
            </Link>

            {/* Bottom description */}
            <p
              style={{ color: "#9bb0bd" }}
              className="mt-6 max-w-[620px] text-base font-normal leading-7"
            >
              Sent, delivered, opened and accepted are four different facts.
              Availability varies by document type, provider, plan, entity and
              market.
            </p>
          </div>

          {/* =========================================================
              RIGHT SIDE
          ========================================================= */}
          <div className="flex w-full flex-1 flex-col items-start">
            {/* Process card */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
              className="w-full rounded-2xl px-6 py-6 sm:px-7 lg:min-h-[551px]"
            >
              <div className="flex flex-col">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex min-h-[73px] items-center gap-4 py-2.5 ${
                      index !== steps.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    {/* Number */}
                    <div
                      style={{
                        background:
                          "linear-gradient(135deg, #00c9df, #3182ff)",
                      }}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                    >
                      <span
                        style={{ color: "#ffffff" }}
                        className="text-[9px] font-normal leading-4"
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Step content */}
                    <div className="flex flex-col">
                      <span
                        style={{ color: "#ffffff" }}
                        className="text-sm font-normal leading-6"
                      >
                        {step.title}
                      </span>

                      <span
                        style={{ color: "#82a3b8" }}
                        className="text-[10px] font-normal leading-4"
                      >
                        {step.description}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Card footer */}
                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.10)",
                  }}
                  className="mt-2 pt-4"
                >
                  <p
                    style={{ color: "#ffffff" }}
                    className="text-sm font-semibold leading-6"
                  >
                    Billing clarity from invoice to payment.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT CTA
            ===================================================== */}
            <div className="mt-5 flex w-full items-center">
              <Link
                href="/accounts-receivable"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.36)",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                }}
              >
                <span style={{ color: "#ffffff" }}>
                  Explore Accounts Receivable
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}