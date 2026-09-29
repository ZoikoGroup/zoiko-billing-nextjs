interface SecurityRequirementItem {
  title: string;
  detail: string;
}

const securityRequirementItems: SecurityRequirementItem[] = [
  {
    title: "Authentication method",
    detail: "— the exact registered CRM integration method.",
  },
  {
    title: "Service principal",
    detail:
      "— a named owner and purpose; broad human admin credentials are not reused.",
  },
  {
    title: "Scopes",
    detail: "— least-necessary objects, actions and fields.",
  },
  {
    title: "Tenant mapping",
    detail:
      "— the CRM organization maps to the correct Billing tenant and entity, server-controlled.",
  },
  {
    title: "Secrets",
    detail:
      "— an approved secret service; never in logs, analytics, URLs or support notes.",
  },
  {
    title: "Webhook verification",
    detail: "— a registered authenticity or signature method.",
  },
  {
    title: "Field filtering",
    detail:
      "— a server-side allowlist before any outbound CRM payload.",
  },
  {
    title: "Audit",
    detail:
      "— connection, mapping, scope, field-map, credential and lifecycle changes historically attributable.",
  },
];

export default function CrmAuthenticationPermissionsSetupSection() {
  return (
    <section
      id="security-setup"
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
              max-w-[760px]
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
                  tracking-[0.16em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Authentication, Permissions, Setup &amp; Security
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
              Integration identity is a technical connection, not a Billing
              permission.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[700px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              CRM authentication, single sign-on, owner mapping and group
              membership never satisfy Billing authorization. Those
              permissions stay governed separately.
            </p>
          </div>

          {/* CONTENT CARD */}
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
            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[220px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Requirement
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Security Detail
                  </span>
                </div>
              </div>

              {securityRequirementItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid grid-cols-[220px_minmax(0,1fr)] ${
                    index !== securityRequirementItems.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-2.5 px-5 py-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.title}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span className="text-sm leading-6 text-[#5d7192]">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {securityRequirementItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 p-5 ${
                    index !== securityRequirementItems.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

                  <div className="min-w-0">
                    <p className="!m-0 text-sm font-semibold leading-5 text-[#091127]">
                      {item.title}
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECURITY PRINCIPLE */}
          <div
            className="
              w-full
              max-w-[1240px]
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
            <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
              Security principle
            </p>

            <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
              A CRM integration establishes technical connectivity. Billing
              permissions remain independently controlled through Billing
              roles, scopes, entity mapping and server-side authorization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}