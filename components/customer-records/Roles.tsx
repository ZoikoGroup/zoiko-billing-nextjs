const roles = [
  {
    role: "Billing Admin",
    rights: "Create and edit approved profile, contact and context fields.",
    restricted:
      "Merge, retention or deletion, and high-risk ownership change may require elevated permission",
  },
  {
    role: "AR / Finance Operator",
    rights:
      "View the context needed for receivables and payment work; update limited operational fields.",
    restricted: "No broad identity, contact or tax changes by default",
  },
  {
    role: "Document / Billing Operator",
    rights: "Use approved delivery and profile context.",
    restricted: "Cannot silently change authoritative customer identity",
  },
  {
    role: "Manager / Approver",
    rights: "Review and approve high-impact changes and exceptions.",
    restricted: "No unrestricted system-admin access implied",
  },
  {
    role: "Integration Admin",
    rights: "Manage mappings, health and sync behavior.",
    restricted:
      "Cannot redefine business authority without approved configuration",
  },
  {
    role: "Privacy / Compliance Admin",
    rights:
      "Handle rights, restriction, retention and deletion workflows per policy.",
    restricted: "No billing or commercial override",
  },
  {
    role: "Auditor",
    rights: "Read history and evidence within scope.",
    restricted: "No edit",
  },
  {
    role: "Support Admin",
    rights:
      "Scoped break-fix access with reason, time bound, audit and privacy policy.",
    restricted: "No unlogged permanent change",
  },
];

export default function Roles() {
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
              max-w-[1000px]
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
                Roles, permissions, approvals &amp; controls
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
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
              High-risk actions need authority, reason and a record.
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
              Merges, identity-affecting edits, ownership changes, exports and
              retention actions all require least-privilege permission and
              leave evidence.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div className="grid grid-cols-[20%_40%_40%] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Role
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Typical rights
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Restricted actions
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {roles.map((item, index) => (
                <div
                  key={item.role}
                  className={`
                    grid
                    grid-cols-[20%_40%_40%]
                    ${
                      index !== roles.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* ROLE */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.role}
                    </p>
                  </div>

                  {/* RIGHTS */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.rights}
                    </p>
                  </div>

                  {/* RESTRICTED */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.restricted}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {roles.map((item, index) => (
                <div
                  key={item.role}
                  className={`
                    p-5
                    ${
                      index !== roles.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* ROLE */}
                  <h3
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {item.role}
                  </h3>

                  {/* TYPICAL RIGHTS */}
                  <div className="mt-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Typical rights
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.rights}
                    </p>
                  </div>

                  {/* RESTRICTED ACTIONS */}
                  <div className="mt-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Restricted actions
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.restricted}
                    </p>
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