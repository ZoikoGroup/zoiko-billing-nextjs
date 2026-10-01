import React from "react";

interface LifecycleRow {
  stage: string;
  devResponsibility: string;
  zoikoResponsibility: React.ReactNode;
}

const lifecycleRows: LifecycleRow[] = [
  {
    stage: "Discover",
    devResponsibility:
      "Confirm API fit, resources and source-of-truth boundaries.",
    zoikoResponsibility: "Capability map plus documentation handoff",
  },
  {
    stage: "Authorize",
    devResponsibility:
      "Set up identity, credentials, permissions and environment access.",
    zoikoResponsibility:
      "Authentication handoff plus scope boundary",
  },
  {
    stage: "Model",
    devResponsibility:
      "Map external objects and fields to supported billing objects and states.",
    zoikoResponsibility: (
      <>
        Object-domain guidance —{" "}
        <span className="font-bold text-[#091127]">
          no undocumented mappings
        </span>
      </>
    ),
  },
  {
    stage: "Build",
    devResponsibility:
      "Implement requests, validation, events and error handling.",
    zoikoResponsibility:
      "Documentation, webhooks and examples handoffs",
  },
  {
    stage: "Test",
    devResponsibility:
      "Exercise supported flows with nonproduction data where available.",
    zoikoResponsibility: "Developer Sandbox handoff",
  },
  {
    stage: "Launch",
    devResponsibility:
      "Validate production configuration, permissions, ownership and observability.",
    zoikoResponsibility:
      "A production-readiness checklist pattern",
  },
  {
    stage: "Operate",
    devResponsibility:
      "Monitor failures, version changes, deprecations, retries and business exceptions.",
    zoikoResponsibility:
      "Reliability and change section plus support routes",
  },
  {
    stage: "Evolve",
    devResponsibility:
      "Adopt new capabilities without breaking existing integrations.",
    zoikoResponsibility:
      "Version, deprecation and change-log discipline",
  },
];

export default function IntegrationLifecycleSection() {
  return (
    <section
      id="lifecycle"
      className="w-full bg-[#f7f8fa]"
    >
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
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
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
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Integration Lifecycle
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              Eight stages, with responsibility named on both sides.
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
                text-[#5d7192]
                sm:text-base
              "
            >
              What the developer owns, and what this page owes them at each
              stage.
            </p>
          </div>

          {/* LIFECYCLE TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              text-left
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
            "
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-[#dfe5ee] bg-[#f7f8fa]">
                    <th
                      scope="col"
                      className="
                        w-[17%]
                        px-5
                        py-4
                        text-left
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#7890b2]
                        sm:px-6
                        md:px-7
                      "
                    >
                      Stage
                    </th>

                    <th
                      scope="col"
                      className="
                        w-[41.5%]
                        px-5
                        py-4
                        text-left
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#7890b2]
                        sm:px-6
                        md:px-7
                      "
                    >
                      Developer responsibility
                    </th>

                    <th
                      scope="col"
                      className="
                        w-[41.5%]
                        px-5
                        py-4
                        text-left
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#7890b2]
                        sm:px-6
                        md:px-7
                      "
                    >
                      Zoiko Billing page responsibility
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {lifecycleRows.map((row) => (
                    <tr
                      key={row.stage}
                      className="
                        border-b
                        border-[#edf0f4]
                        transition-colors
                        last:border-b-0
                        hover:bg-[#f7f8fa]/70
                      "
                    >
                      {/* STAGE */}
                      <td
                        className="
                          whitespace-nowrap
                          px-5
                          py-5
                          align-top
                          text-xs
                          font-bold
                          leading-6
                          text-[#091127]
                          sm:px-6
                          sm:py-6
                          sm:text-sm
                          md:px-7
                        "
                      >
                        {row.stage}
                      </td>

                      {/* DEVELOPER RESPONSIBILITY */}
                      <td
                        className="
                          px-5
                          py-5
                          align-top
                          text-xs
                          font-normal
                          leading-6
                          text-[#5d7192]
                          sm:px-6
                          sm:py-6
                          sm:text-sm
                          md:px-7
                        "
                      >
                        {row.devResponsibility}
                      </td>

                      {/* ZOIKO RESPONSIBILITY */}
                      <td
                        className="
                          px-5
                          py-5
                          align-top
                          text-xs
                          font-normal
                          leading-6
                          text-[#5d7192]
                          sm:px-6
                          sm:py-6
                          sm:text-sm
                          md:px-7
                        "
                      >
                        {row.zoikoResponsibility}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}