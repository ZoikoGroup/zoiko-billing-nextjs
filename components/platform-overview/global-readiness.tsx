import React from 'react';
import Link from 'next/link';

const integrationTags = [
  'Payment Providers',
  'Accounting & ERP',
  'CRM Platforms',
  'Banking & Reconciliation',
  'Zoiko Ecosystem',
];

const globalReadinessTags = [
  'Multi-Currency Billing',
  'Localised Documents',
  'Multi-Entity Control',
  'Tax Configuration',
  'Jurisdiction Availability',
];

export default function IntegrationsAndGlobalReadiness() {
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
            gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* SECTION INTRO */}
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
                Integrations and global readiness
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
              Configure global billing with market-specific control.
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
              Connect the systems you already run, and configure billing per
              market — within verified availability.
            </p>
          </div>

          {/* CONTENT CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              md:grid-cols-2
              md:gap-6
            "
          >
            {/* INTEGRATIONS */}
            <div
              className="
                flex
                min-h-[330px]
                flex-col
                justify-between
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                transition-all
                duration-200
                hover:border-[#cbd5e1]
                hover:shadow-[0_12px_28px_rgba(15,23,42,0.07),0_2px_4px_rgba(15,23,42,0.04)]
                sm:p-7
              "
            >
              <div className="flex w-full flex-col gap-3">
                <h3
                  className="
                    !m-0
                    text-[18px]
                    font-semibold
                    leading-6
                    text-[#091127]
                    sm:text-xl
                  "
                >
                  Integrations
                </h3>

                <p
                  className="
                    !m-0
                    max-w-[540px]
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  Connector listings come from the governed integration
                  registry. Only verified connectors are published.
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {integrationTags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-[#dfe5ee]
                        bg-[#f7f8fa]
                        px-3.5
                        py-1.5
                        text-[11px]
                        font-medium
                        leading-4
                        text-[#5d7192]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTIONS */}
              <div
                className="
                  flex
                  flex-col
                  items-start
                  gap-3
                  pt-6

                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center
                  sm:gap-4
                "
              >
                <Link
                  href="/integrations-directory"
                  className="
                    inline-flex
                    min-h-10
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#091127]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    leading-5
                    !text-white
                    shadow-[0_4px_12px_rgba(15,23,42,0.10)]
                    transition-colors
                    duration-150
                    hover:bg-[#17213a]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#7890b2]
                    focus:ring-offset-2

                    sm:w-auto
                  "
                >
                  Explore integrations
                </Link>

                <Link
                  href="/developers-api-overview"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    py-2
                    text-sm
                    font-medium
                    leading-5
                    text-[#45658f]
                    transition-colors
                    duration-150
                    hover:text-[#091127]
                    focus:outline-none
                  "
                >
                  <span>API overview</span>

                  <span
                    className="
                      transition-transform
                      duration-150
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* GLOBAL READINESS */}
            <div
              className="
                flex
                min-h-[330px]
                flex-col
                justify-between
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                transition-all
                duration-200
                hover:border-[#cbd5e1]
                hover:shadow-[0_12px_28px_rgba(15,23,42,0.07),0_2px_4px_rgba(15,23,42,0.04)]
                sm:p-7
              "
            >
              <div className="flex w-full flex-col gap-3">
                <h3
                  className="
                    !m-0
                    text-[18px]
                    font-semibold
                    leading-6
                    text-[#091127]
                    sm:text-xl
                  "
                >
                  Global readiness
                </h3>

                <p
                  className="
                    !m-0
                    max-w-[540px]
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  Multi-currency records, localised documents, multi-entity
                  control and published jurisdiction availability.
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {globalReadinessTags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-[#dfe5ee]
                        bg-[#f7f8fa]
                        px-3.5
                        py-1.5
                        text-[11px]
                        font-medium
                        leading-4
                        text-[#5d7192]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION */}
              <div className="pt-6">
                <Link
                  href="/global-billing"
                  className="
                    inline-flex
                    min-h-10
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#cbd5e1]
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    leading-5
                    !text-[#091127]
                    transition-colors
                    duration-150
                    hover:border-[#7890b2]
                    hover:bg-[#f7f8fa]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#7890b2]
                    focus:ring-offset-2

                    sm:w-auto
                  "
                >
                  Explore global billing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}