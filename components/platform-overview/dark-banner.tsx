import React from 'react';

interface StageItem {
  stage: string;
  title: string;
  description: string;
}

const stages: StageItem[] = [
  {
    stage: 'STAGE 01',
    title: 'Customer',
    description: 'Billing profile, contacts and terms',
  },
  {
    stage: 'STAGE 02',
    title: 'Charge',
    description: 'Line items, fees, discounts and corrections',
  },
  {
    stage: 'STAGE 03',
    title: 'Invoice',
    description: 'Approved billing documents and credit notes',
  },
  {
    stage: 'STAGE 04',
    title: 'Delivery',
    description: 'Generation, sending and delivery records',
  },
  {
    stage: 'STAGE 05',
    title: 'Payment record',
    description: 'Recorded outcomes and allocation',
  },
  {
    stage: 'STAGE 06',
    title: 'Reconciliation',
    description: 'Matching and exception review',
  },
  {
    stage: 'STAGE 07',
    title: 'Outstanding balance',
    description: 'Ageing and collection visibility',
  },
  {
    stage: 'STAGE 08',
    title: 'Reporting',
    description: 'Billing, payment and receivables reporting',
  },
];

export default function ConnectedRecordSection() {
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
          "
        >
          {/* MAIN CONTAINER */}
          <div
            className="
              w-full
              rounded-3xl
              border
              border-[#dfe5ee]
              bg-[#091127]
              p-5
              shadow-[0_12px_32px_rgba(15,23,42,0.08)]
              sm:p-7
              md:p-9
              lg:p-10
            "
          >
            <div
              className="
                flex
                w-full
                flex-col
                gap-8
                sm:gap-10
                md:gap-11
              "
            >
              {/* SECTION HEADER */}
              <div
                className="
                  flex
                  w-full
                  flex-col
                  items-center
                  gap-3
                  text-center
                "
              >
                {/* EYEBROW */}
                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-60" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.16em]
                      text-[#8da5c8]
                      sm:text-xs
                      sm:tracking-[0.18em]
                    "
                  >
                    The connected record
                  </span>

                  <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-60" />
                </div>

                {/* HEADING */}
                <h2
                  className="
                    !m-0
                    w-full
                    max-w-[820px]
                    !text-[30px]
                    !font-extrabold
                    !leading-[1.2]
                    !tracking-[-0.035em]
                    !text-white
                    sm:!text-[34px]
                    md:!text-[36px]
                    lg:!text-[40px]
                  "
                >
                  Keep the billing record connected from customer to payment.
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
                    text-[#b6c2d5]
                    sm:text-base
                  "
                >
                  A conceptual view of how records connect. Real sequencing
                  varies by customer, provider, entity and jurisdiction.
                </p>
              </div>

              {/* STAGES */}
              <div
                className="
                  grid
                  w-full
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                  sm:gap-4
                  md:grid-cols-3
                  lg:grid-cols-4
                "
              >
                {stages.map((item) => (
                  <div
                    key={item.stage}
                    className="
                      flex
                      min-h-[145px]
                      flex-col
                      justify-between
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-5
                      transition-all
                      duration-200
                      hover:border-white/20
                      hover:bg-white/[0.07]
                    "
                  >
                    {/* STAGE LABEL */}
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.14em]
                        text-[#8da5c8]
                      "
                    >
                      {item.stage}
                    </span>

                    {/* CONTENT */}
                    <div className="mt-5 flex flex-col gap-1.5">
                      <h3
                        className="
                          !m-0
                          text-[15px]
                          font-semibold
                          leading-5
                          text-white
                          sm:text-base
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-6
                          text-[#9eabc0]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* BOUNDARY CALLOUT */}
              <div
                className="
                  rounded-r-2xl
                  border-l-2
                  border-[#7890b2]
                  bg-white/[0.04]
                  p-5
                  sm:p-6
                  md:p-7
                "
              >
                <div className="flex flex-col gap-2">
                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#8da5c8]
                    "
                  >
                    Boundary
                  </span>

                  <p
                    className="
                      !m-0
                      max-w-[1000px]
                      text-sm
                      font-normal
                      leading-6
                      text-[#d0d7e3]
                      sm:text-base
                      sm:leading-7
                    "
                  >
                    This journey is conceptual. Zoiko Billing records and
                    reconciles payments through approved providers; it does
                    not process every payment, file taxes or replace
                    accounting software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}