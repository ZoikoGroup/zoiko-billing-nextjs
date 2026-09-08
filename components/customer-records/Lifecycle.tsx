import Image from "next/image";

const lifecycleSteps = [
  {
    title: "Create",
    description:
      "— minimum authoritative billing fields, with source and creator recorded.",
  },
  {
    title: "Activate",
    description:
      "— usable for permitted workflows after validation and approval gates.",
  },
  {
    title: "Update",
    description:
      "— material changes capture before and after, actor, source, reason and effective date.",
  },
  {
    title: "Schedule a future change",
    description:
      "— future values stay distinct from current state.",
  },
  {
    title: "Restrict",
    description:
      "— limit use or access without deleting history when policy requires.",
  },
  {
    title: "Close",
    description:
      "— no new billing activity where product rules say so; open items stay visible and governed.",
  },
  {
    title: "Reactivate",
    description:
      "— requires authority and effective-date treatment, with no history reset.",
  },
  {
    title: "Merge, archive, delete or anonymize",
    description:
      "— only under the relevant authority, covered in the sections below.",
  },
];

export default function Lifecycle() {
  return (
    <section className="w-full bg-white">
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
            grid
            w-full
            max-w-[1240px]
            grid-cols-1
            items-center
            gap-10

            lg:grid-cols-2
            lg:gap-14
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-3xl
              border
              border-[#dfe5ee]
              bg-[#f7f8fa]
              p-3
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:p-4
            "
          >
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/customer-records/lifecycle.png"
                alt="Customer record lifecycle"
                width={548}
                height={519}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 548px"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex w-full flex-col items-start">
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
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
                Lifecycle &amp; effective-dated change
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                mt-4
                w-full
                max-w-[1000px]
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
              Separate what is true now from what
             
              was used then.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-4
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Material historical values are never replaced without preserving
              a change event. That is what makes an issued invoice defensible
              after the account has moved on.
            </p>

            {/* LIFECYCLE LIST */}
            <div className="mt-6 flex w-full flex-col">
              {lifecycleSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex w-full items-start gap-3 py-2"
                >
                  {/* BULLET */}
                  <div className="mt-2 shrink-0">
                    <div className="h-1.5 w-1.5 rounded-sm bg-[#7890b2]" />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      flex
                      flex-1
                      flex-col

                      sm:flex-row
                      sm:items-start
                      sm:gap-2
                    "
                  >
                    <span
                      className="
                        shrink-0
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]

                        sm:min-w-fit
                      "
                    >
                      {step.title}
                    </span>

                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}