import React from "react";

interface PrincipleRow {
  principle: string;
  requiredTreatment: React.ReactNode;
}

const principleRows: PrincipleRow[] = [
  {
    principle: "Issued history remains issued",
    requiredTreatment: (
      <>
        Distinguish draft changes from actions affecting an already issued record —{" "}
        <span className="font-bold text-[#091127]">
          never imply issued evidence can be silently rewritten
        </span>
      </>
    ),
  },
  {
    principle: "Allocation is not invoice mutation",
    requiredTreatment:
      "Payment application and invoice identity stay visually and structurally separate",
  },
  {
    principle: "Permissions are contextual",
    requiredTreatment: (
      <>
        Identity, role or scope, object and action, and workflow state are distinct
        concerns —{" "}
        <span className="font-bold text-[#091127]">not one admin key</span>
      </>
    ),
  },
  {
    principle: "Approvals are not cosmetic",
    requiredTreatment:
      "Where an action requires approval, describe the approval boundary rather than implying a direct write",
  },
  {
    principle: "Exceptions remain visible",
    requiredTreatment:
      "Failed, partial, pending, unknown and needs-review outcomes stay inspectable rather than normalized into success",
  },
  {
    principle: "Exports are data releases",
    requiredTreatment:
      "Preserve requester, purpose, permission and retention framing where product surfaces expose data",
  },
  {
    principle: "Audit follows meaningful change",
    requiredTreatment:
      "Point to audit capabilities for financial-impacting changes without overpromising universal logging",
  },
];

export default function GovernanceIntegritySection() {
  return (
    <section
      id="governance"
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
                Governance &amp; Billing Integrity
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
              API convenience does not bypass billing truth.
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
              The same lifecycle, ownership, approval and evidence rules that
              govern the product govern the integration.
            </p>
          </div>

          {/* GOVERNANCE TABLE CARD */}
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
            {/* CARD INTRO */}
            <div
              className="
                border-b
                border-[#edf0f4]
                bg-[#f7f8fa]
                px-5
                py-4
                sm:px-6
                sm:py-5
                md:px-7
              "
            >
              <p
                className="
                  !m-0
                  text-xs
                  font-normal
                  leading-5
                  text-[#7890b2]
                  sm:text-sm
                "
              >
                Seven principles and the page treatment each requires.
              </p>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse">
                <thead>
                  <tr className="border-b border-[#dfe5ee] bg-[#f7f8fa]">
                    <th
                      scope="col"
                      className="
                        w-[34%]
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
                      Principle
                    </th>

                    <th
                      scope="col"
                      className="
                        w-[66%]
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
                      Required treatment
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {principleRows.map((row) => (
                    <tr
                      key={row.principle}
                      className="
                        border-b
                        border-[#edf0f4]
                        transition-colors
                        last:border-b-0
                        hover:bg-[#f7f8fa]/70
                      "
                    >
                      {/* PRINCIPLE */}
                      <td
                        className="
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
                        {row.principle}
                      </td>

                      {/* TREATMENT */}
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
                        {row.requiredTreatment}
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