export default function SandboxWorkspace() {
  const modules = [
    {
      title: "Environment identity",
      description:
        "Persistent non-production label, workspace context, and last configuration change.",
    },
    {
      title: "Quick-start progress",
      description:
        "Task checklist with completed, current and blocked states plus deep links.",
    },
    {
      title: "Data safety",
      description:
        "Synthetic-data status, fixture source, reset status and retention summary if canonical.",
    },
    {
      title: "Capability status",
      description:
        "Links to the fidelity matrix and any known sandbox limitations.",
    },
    {
      title: "Recent requests",
      description:
        "Safe resource description, result category, time and correlation identifier.",
    },
    {
      title: "Asynchronous activity",
      description:
        "Event summary only if supported, reusing the locked Webhooks semantics.",
    },
    {
      title: "Scenario controls",
      description:
        "Seed, reset, replay, failure and time tools — only when genuinely supported.",
    },
    {
      title: "Readiness summary",
      description:
        "Open production-readiness checks and unresolved blockers.",
    },
    {
      title: "Support",
      description: (
        <>
          Copy a safe diagnostic bundle{" "}
          <strong className="font-bold">
            without auto-attaching secrets or payloads
          </strong>
          .
        </>
      ),
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                Sandbox workspace
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Nine modules, each rendering only what is supported.
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
              A module with no canonical backing does not appear as an empty
              promise.
            </p>
          </div>

          {/* MODULES */}
          <div className="flex w-full flex-col gap-3">
            {modules.map((module) => (
              <div
                key={module.title}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <div className="flex w-full flex-col gap-1.5">
                  {/* MODULE TITLE */}
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {module.title}
                  </h3>

                  {/* MODULE DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {module.description}
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