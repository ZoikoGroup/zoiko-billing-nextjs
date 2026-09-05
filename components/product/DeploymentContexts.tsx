"use client";

import Link from "next/link";

export default function DeploymentContexts() {
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
            gap-5
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />

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
                Standalone or with Zoiko One
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
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
              Two deployment contexts, and no assumed equivalence.
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
              Zoiko Billing runs on its own or alongside Zoiko One. What differs
              between them is source-controlled.
            </p>
          </div>

          {/* DEPLOYMENT CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              pt-5

              lg:grid-cols-2
            "
          >
            {/* STANDALONE */}
            <div
              className="
                flex
                min-h-[210px]
                w-full
                flex-col
                items-start
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-6
                pt-6
                pb-10
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {/* TITLE */}
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-7
                  text-[#091127]
                "
              >
                Standalone
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  !m-0
                  mt-2
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Zoiko Billing as its own system, integrated with whatever you
                already run — accounting, CRM, banking and payment providers
                via{" "}
                <Link
                  href="/integration-availability"
                  className="
                    !text-blue-600
                    font-semibold
                    transition-colors
                    hover:!text-blue-700
                    hover:underline
                  "
                >
                  Integrations
                </Link>
                .
              </p>

              {/* SUPPORTING TEXT */}
              <p
                className="
                  !m-0
                  mt-5
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                The platform map above describes this context.
              </p>
            </div>

            {/* WITH ZOIKO ONE */}
            <div
              className="
                flex
                min-h-[210px]
                w-full
                flex-col
                items-start
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-[#f2f4f7]
                px-6
                pt-6
                pb-10
              "
            >
              {/* TITLE */}
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-7
                  text-[#091127]
                "
              >
                With Zoiko One
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  !m-0
                  mt-2
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Billing operating alongside the wider Zoiko One estate.{" "}
                <Link
                  href="/zoiko-billing-plus-zoiko-one"
                  className="
                    !text-blue-600
                    font-semibold
                    transition-colors
                    hover:!text-blue-700
                    hover:underline
                  "
                >
                  Zoiko Billing + Zoiko One
                </Link>{" "}
                is authoritative for what that combination provides.
              </p>

              {/* WARNING / BOUNDARY */}
              <p
                className="
                  !m-0
                  mt-5
                  text-sm
                  leading-5
                  text-[#5d7192]
                "
              >
                <strong className="font-semibold">
                  Entitlement, data and plan behavior are not presented as
                  identical across the two contexts
                </strong>{" "}
                without source support — that presumption is a publication
                blocker.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}