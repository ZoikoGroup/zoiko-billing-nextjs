export default function BillingControlModel() {
  const dimensions = [
    {
      number: "01",
      title: "Policy",
      description:
        "The rule, commercial decision or operating instruction that should be applied consistently.",
      failure: "Fails as: drift nobody authorized",
    },
    {
      number: "02",
      title: "Ownership",
      description:
        "The accountable business or technical responsibility for maintaining the decision.",
      failure: "Fails as: a rule nobody can change",
    },
    {
      number: "03",
      title: "Approval",
      description:
        "The review required before a material change becomes effective.",
      failure: "Fails as: changes that surprise people",
    },
    {
      number: "04",
      title: "Exception",
      description:
        "A controlled deviation with a reason, owner, scope and resolution path.",
      failure: "Fails as: the exception becoming the rule",
    },
    {
      number: "05",
      title: "Evidence",
      description:
        "Context that explains the decision, change, review and supporting source.",
      failure: "Fails as: a decision nobody can explain",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
                Five-part billing control model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
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
              Five dimensions, and each one fails
             
              differently.
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
              <span className="font-bold">
                A recommended operating framework — not verified Zoiko Billing
                product
                <br className="hidden sm:block" />
                modules or database objects.
              </span>{" "}
              Select a dimension to focus the workspace below.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              flex
              w-full
              items-stretch
              justify-center
              gap-3
              pt-5

              flex-col

              sm:grid
              sm:grid-cols-2

              lg:flex
              lg:flex-row
            "
          >
            {dimensions.map((dimension, index) => (
              <div
                key={dimension.number}
                className={`
                  flex
                  w-full
                  min-w-0
                  flex-col
                  items-start
                  rounded-2xl
                  px-4
                  py-6
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  outline
                  outline-1
                  outline-offset-[-1px]

                  lg:w-56
                  lg:shrink-0

                  ${
                    index === 0
                      ? "bg-[#f1f3f6] outline-blue-600"
                      : "bg-white outline-[#dfe5ee]"
                  }
                `}
              >
                {/* NUMBER */}
                <div className="flex w-full flex-col items-start">
                  <span
                    className="
                      text-[10px]
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {dimension.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mt-[5px] flex w-full flex-col items-start">
                  <h3
                    className="
                      !m-0
                      w-full
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {dimension.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="flex w-full flex-col items-start pb-1.5 pt-[1.25px]">
                  <p
                    className="
                      !m-0
                      w-full
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {dimension.description}
                  </p>
                </div>

                {/* FAILURE */}
                <div
                  className="
                    flex
                    w-full
                    flex-col
                    items-start
                    border-t
                    border-[#edf0f4]
                    pt-2
                  "
                >
                  <p
                    className="
                      !m-0
                      w-full
                      text-xs
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {dimension.failure}
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