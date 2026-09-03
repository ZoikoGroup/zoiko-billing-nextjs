"use client";

import React from "react";
import Link from "next/link";

const controls = [
  {
    title: "Least privilege, enforced server-side",
    description:
      "Sensitive finance actions are permissioned at the service boundary, not in the interface.",
  },
  {
    title: "Governed history",
    description:
      "Material billing and AR actions produce history and evidence per the product architecture.",
  },
  {
    title: "Minimized data",
    description:
      "Customer, contact and payment-reference data is purpose-limited.",
  },
  {
    title: "Secrets stay out",
    description:
      "No tokens, credentials, payment secrets or bank credentials appear in marketing forms or analytics.",
  },
  {
    title: "Controlled exports",
    description:
      "Permission plus requester, purpose and currentness, with secure delivery where applicable.",
  },
];

export default function SecurityBaseline() {
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
            gap-3.5
          "
        >
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Security, privacy &amp; control baseline
            </span>
          </div>

          {/* HEADING */}
          <div className="w-full">
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
                !text-[30px]
                !font-bold
                !leading-[1.2]
                !tracking-[-0.025em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Baseline protections are not a premium tier.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full max-w-[686px]">
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
              Privacy, security and accessibility are not weakened on lower
              plans to manufacture a reason to upgrade.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5
              pt-3.5
              pb-2

              lg:flex-row
            "
          >
            {/* CONTROL BASELINE CARD */}
            <div
              className="
                flex-1
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-6
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:px-6
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-semibold
                  leading-7
                  text-[#091127]
                "
              >
                Control baseline
              </h3>

              <div className="mt-1">
                {controls.map((control, index) => (
                  <div
                    key={control.title}
                    className={`
                      flex
                      items-start
                      gap-3.5
                      py-3.5
                      ${
                        index !== 0
                          ? "border-t border-[#091127]/10"
                          : ""
                      }
                    `}
                  >
                    {/* NUMBER */}
                    <div
                      className="
                        flex
                        size-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#dfe5ee]
                        bg-white
                      "
                    >
                      <span
                        className="
                          text-xs
                          font-bold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {control.title}
                      </h4>

                      <p
                        className="
                          !m-0
                          text-xs
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {control.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="
                flex
                flex-1
                flex-col
                gap-4

                lg:pb-32
              "
            >
              {/* ACCESSIBILITY */}
              <div
                className="
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-[#eef3f0]
                  px-5
                  pb-9
                  pt-6

                  sm:px-6
                "
              >
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-7
                    text-[#091127]
                  "
                >
                  Accessibility target
                </h3>

                <p
                  className="
                    !m-0
                    mt-3
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  WCAG 2.2 AA implementation target across tables, filters,
                  dialogs and status semantics. Status is conveyed by text and
                  shape, never by color alone. Charts and lineage carry a text
                  summary and an accessible data table. Content reflows at
                  200% zoom and 320 CSS pixels without losing the amount,
                  state, or the definition beside it.
                </p>
              </div>

              {/* DILIGENCE */}
              <div
                className="
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-6
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:px-6
                "
              >
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-7
                    text-[#091127]
                  "
                >
                  Diligence without a sales call
                </h3>

                <p
                  className="
                    !m-0
                    mt-3
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  Trust, Security, Privacy, Accessibility and Legal resources
                  are public. Booking a demo is for commercial and solution
                  fit, not the only route to evidence.
                </p>

                {/* LINKS */}
                <div className="flex flex-wrap gap-2 pt-3">
                  <Link
                    href="/trust"
                    className="
                      inline-flex
                      min-h-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-4
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                      transition
                      hover:bg-[#f7f8fa]
                    "
                  >
                    Trust center
                  </Link>

                  <Link
                    href="/privacy"
                    className="
                      inline-flex
                      min-h-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-4
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                      transition
                      hover:bg-[#f7f8fa]
                    "
                  >
                    Privacy
                  </Link>

                  <Link
                    href="/accessibility"
                    className="
                      inline-flex
                      min-h-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-4
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                      transition
                      hover:bg-[#f7f8fa]
                    "
                  >
                    Accessibility
                  </Link>

                  <Link
                    href="/security"
                    className="
                      inline-flex
                      min-h-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-4
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                      transition
                      hover:bg-[#f7f8fa]
                    "
                  >
                    Security
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}