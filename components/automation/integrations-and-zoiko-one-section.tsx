import React from 'react';
import Link from 'next/link';

const connectorCategories = [
  'Payment Providers',
  'Accounting & ERP',
  'CRM Platforms',
  'Banking & Reconciliation',
];

const zoikoOneFeatures = [
  'Shared identity',
  'Approved events',
  'Record handoffs',
  'Cross-product navigation',
];

export default function IntegrationsAndZoikoOneSection() {
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
              max-w-[780px]
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
                Integrations and Zoiko One
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[780px]
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
              Let approved services take part — on defined terms.
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
              External events can start a workflow, and approved connector
              actions can run inside one, with direction, timing and error
              behaviour stated up front.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            {/* CONNECTORS */}
            <div
              className="
                flex
                flex-col
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:p-6
              "
            >
              <div>
                <h3
                  className="
                    !m-0
                    text-lg
                    font-semibold
                    leading-6
                    text-[#091127]

                    sm:text-xl
                  "
                >
                  Governed connector participation
                </h3>

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
                  A verified integration event may start a workflow. An
                  approved connector action may be invoked within its permitted
                  scope. Source ownership and conflict rules stay visible.
                </p>
              </div>

              {/* CATEGORIES */}
              <div className="mt-6 flex flex-wrap gap-2">
                {connectorCategories.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                      px-3.5
                      py-2
                      text-xs
                      font-medium
                      text-[#5d7192]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/integration-availability"
                  className="
                    inline-flex
                    rounded-lg
                    bg-[#091127]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    !text-white
                    transition-colors
                    hover:bg-[#17213b]
                    hover:!text-white
                  "
                >
                  Explore integrations
                </Link>

                <Link
                  href="/developers-webhooks"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    !text-[#7890b2]
                    transition-colors
                    hover:!text-[#091127]
                  "
                >
                  Webhooks
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* ZOIKO ONE */}
            <div
              className="
                flex
                flex-col
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:p-6
              "
            >
              <div>
                <h3
                  className="
                    !m-0
                    text-lg
                    font-semibold
                    leading-6
                    text-[#091127]

                    sm:text-xl
                  "
                >
                  Zoiko One participation
                </h3>

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
                  Where enabled, Zoiko One may provide shared identity,
                  approved events, record handoffs and cross-product
                  navigation. Zoiko Billing remains independently deployable.
                </p>
              </div>

              {/* FEATURES */}
              <div className="mt-6 flex flex-wrap gap-2">
                {zoikoOneFeatures.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                      px-3.5
                      py-2
                      text-xs
                      font-medium
                      text-[#5d7192]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <div className="mt-6">
                <Link
                  href="#"
                  className="
                    inline-flex
                    rounded-lg
                    border
                    border-[#cbd5e1]
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    !text-[#091127]
                    transition-colors
                    hover:bg-[#f7f8fa]
                    hover:!text-[#091127]
                  "
                >
                  Compare deployment options
                </Link>
              </div>
            </div>
          </div>

          {/* CONNECTOR BOUNDARY */}
          <div
            className="
              w-full
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              px-5
              py-5

              sm:px-6
              sm:py-6
            "
          >
            <span
              className="
                block
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
              "
            >
              Connector boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-4xl
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-base
                sm:leading-7
              "
            >
              Connectors are not all real-time, bidirectional, idempotent or
              universally available. Direction, timing, retry and error
              behaviour are stated per connector in the governed integration
              registry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}