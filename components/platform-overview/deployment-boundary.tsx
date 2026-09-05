'use client';

interface DeploymentOption {
  badge: string;
  title: string;
  features: string[];
  theme: 'light' | 'dark';
}

const deploymentOptions: DeploymentOption[] = [
  {
    badge: 'Option A',
    title: 'Independent Zoiko Billing',
    features: [
      'Independent identity, configuration and product access',
      'Own subscription, onboarding, documentation and support',
      'Direct integrations with approved external systems',
      'No Zoiko One subscription required',
    ],
    theme: 'light',
  },
  {
    badge: 'Option B',
    title: 'Zoiko Billing with Zoiko One',
    features: [
      'Shared identity where approved and enabled',
      'Approved record handoffs between connected products',
      'Cross-product navigation and broader operational visibility',
      'Zoiko Billing remains a distinct product within the suite',
    ],
    theme: 'dark',
  },
];

export default function DeploymentBoundarySection() {
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
                Deployment
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
              Use Zoiko Billing independently or connect it with Zoiko One.
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
              The same billing record either way. What changes is identity,
              navigation and which approved handoffs are switched on.
            </p>
          </div>

          {/* DEPLOYMENT OPTIONS */}
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
            {deploymentOptions.map((option) => (
              <div
                key={option.title}
                className={`
                  flex
                  min-h-[330px]
                  flex-col
                  justify-between
                  gap-6
                  rounded-3xl
                  border
                  p-6
                  transition-all
                  duration-200
                  sm:p-8
                  ${
                    option.theme === 'dark'
                      ? 'border-[#1d2940] bg-[#091127] text-white shadow-[0_12px_32px_rgba(15,23,42,0.10)] hover:border-[#34425c]'
                      : 'border-[#dfe5ee] bg-white text-[#091127] shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] hover:border-[#cbd5e1] hover:shadow-[0_12px_28px_rgba(15,23,42,0.07),0_2px_4px_rgba(15,23,42,0.04)]'
                  }
                `}
              >
                <div className="flex flex-col gap-4">
                  {/* BADGE */}
                  <span
                    className={`
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      ${
                        option.theme === 'dark'
                          ? 'text-[#8da5c8]'
                          : 'text-[#7890b2]'
                      }
                    `}
                  >
                    {option.badge}
                  </span>

                  {/* TITLE */}
                  <h3
                    className={`
                      !m-0
                      text-[20px]
                      font-semibold
                      leading-6
                      ${
                        option.theme === 'dark'
                          ? 'text-white'
                          : 'text-[#091127]'
                      }
                      sm:text-2xl
                    `}
                  >
                    {option.title}
                  </h3>

                  {/* FEATURES */}
                  <ul className="!m-0 flex flex-col gap-3 pt-2">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={`
                            mt-[9px]
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            ${
                              option.theme === 'dark'
                                ? 'bg-[#8da5c8]'
                                : 'bg-[#7890b2]'
                            }
                          `}
                        />

                        <span
                          className={`
                            text-sm
                            font-normal
                            leading-6
                            ${
                              option.theme === 'dark'
                                ? 'text-[#b6c2d5]'
                                : 'text-[#5d7192]'
                            }
                          `}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-2
              border-[#7890b2]
              bg-white
              p-5
              shadow-[0_4px_14px_rgba(15,23,42,0.04)]
              sm:p-7
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
                  text-[#7890b2]
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
                  text-[#091127]
                  sm:text-base
                  sm:leading-7
                "
              >
                Zoiko One integrations are not automatically active. Shared
                data and entitlement behaviour applies only where it has been
                approved, configured and enabled for your organisation.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center pt-1">
            <a
              href="#compare-deployment"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-6
                py-3
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
              Compare deployment options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}