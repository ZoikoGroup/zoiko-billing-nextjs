'use client';

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Set the context',
    description:
      'Business, entity, currency and billing configuration for the markets you operate.',
  },
  {
    number: '02',
    title: 'Create or connect customers',
    description:
      'Billing profiles, contacts and terms, entered directly or through an approved integration.',
  },
  {
    number: '03',
    title: 'Create approved charges',
    description:
      'Charges and documents built from approved rules and routed for approval where required.',
  },
  {
    number: '04',
    title: 'Deliver the records',
    description:
      'Issue through configured channels and keep the delivery outcome on the record.',
  },
  {
    number: '05',
    title: 'Record and reconcile payments',
    description:
      'Capture outcomes from supported sources, allocate them and review exceptions.',
  },
  {
    number: '06',
    title: 'Review balances and reports',
    description:
      'Ageing, receivables activity and reporting with stated source, period and entity.',
  },
  {
    number: '07',
    title: 'Correct with history intact',
    description:
      'Apply approved corrections while the original event and reason remain traceable.',
  },
];

export default function HowItWorksSection() {
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
                How it works
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
              The controlled operating sequence.
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
              A summary of how teams run Zoiko Billing. This is an overview,
              not an onboarding checklist for the authenticated product.
            </p>
          </div>

          {/* STEPS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              sm:gap-5
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
                  justify-start
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
                  sm:p-6
                "
              >
                {/* STEP NUMBER */}
                <div
                  className="
                    flex
                    h-7
                    min-w-7
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                    px-2
                    text-[10px]
                    font-bold
                    leading-4
                    text-[#7890b2]
                  "
                >
                  {step.number}
                </div>

                {/* STEP CONTENT */}
                <div className="mt-4 flex flex-col gap-2">
                  <h3
                    className="
                      !m-0
                      text-[15px]
                      font-semibold
                      leading-5
                      text-[#091127]
                      sm:text-base
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}