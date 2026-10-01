import Image from "next/image";

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

interface ScenarioItem {
  id: number;
  title: string;
  badge?: {
    text: string;
    variant: "permitted" | "blocked" | "no-effect";
  };
  note?: string;
  description?: string;
}

const scenarioItems: ScenarioItem[] = [
  {
    id: 1,
    title: "CRM account owner opens the linked billing account",
    badge: {
      text: "Permitted",
      variant: "permitted",
    },
    note: "— read access granted by a mapped Billing role",
  },
  {
    id: 2,
    title: "Same owner edits payment terms",
    badge: {
      text: "Blocked",
      variant: "blocked",
    },
    note: "— CRM ownership grants no Billing permission",
  },
  {
    id: 3,
    title: "CRM admin group is added",
    badge: {
      text: "No effect",
      variant: "no-effect",
    },
    note: "— group membership does not union with Billing rights",
  },
  {
    id: 4,
    title: "Outbound payload assembled",
    description:
      "A server-side allowlist filters fields before anything leaves Billing",
  },
];

export default function CrmAuthenticationPermissionsSetupSection() {
  return (
    <section
      id="security-setup"
      className="w-full bg-[#f7f8fa] font-[family-name:var(--font-inter)]"
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
            grid
            w-full
            max-w-[1240px]
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-12
            xl:gap-16
          "
        >
          {/* LEFT COLUMN: INTRO, LIST, AND MOBILE CARD */}
          <div className="flex flex-col items-start gap-4">
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-6 shrink-0 rounded-full bg-[#1D70F5]" />

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
            </div>

            {/* DESKTOP HEADING (Unchanged for lg+) */}
            <h2
              className="!font-[family-name:var(--font-jakarta)] 
                !m-0
                hidden
                lg:block
                !text-[38px]
                xl:!text-[40px]
                !font-extrabold
                !leading-[1.18]
                !tracking-[-0.035em]
                !text-[#091127]
              "
            >
              Integration identity is a technical<br />
              connection, not a Billing<br />
              permission.
            </h2>

            {/* MOBILE HEADING */}
            <h2
              className="!font-[family-name:var(--font-jakarta)] 
                !m-0
                block
                lg:hidden
                !text-[24px]
                sm:!text-[30px]
                !font-extrabold
                !leading-[1.22]
                !tracking-[-0.03em]
                !text-[#091127]
              "
            >
              Integration identity is a technical connection, not a Billing permission.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                max-w-[500px]
                text-[14px]
                font-normal
                leading-[1.65]
                text-[#5d7192]
                sm:text-base
              "
            >
              CRM authentication, single sign-on, owner mapping and group
              membership never satisfy Billing authorization. Those
              permissions stay governed separately.
            </p>

            {/* BULLETED REQUIREMENTS LIST */}
            <ul className="!m-0 !mt-2 flex w-full flex-col gap-2.5 !p-0 list-none">
              {securityRequirementItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-2.5 text-[13px] leading-6 text-[#5d7192] sm:text-sm"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-[#1D70F5]" />
                  <span>
                    <strong className="font-semibold text-[#091127]">
                      {item.title}
                    </strong>{" "}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>

            {/* MOBILE ONLY: Identity is not permission, illustrated Card */}
            <div className="mt-4 block w-full rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.06)] lg:hidden">
              <h3 className="!m-0 text-sm sm:text-base font-bold text-[#091127] !font-[family-name:var(--font-jakarta)]">
                Identity is not permission, illustrated
              </h3>
              <p className="!m-0 mt-1 text-xs text-[#7890b2]">
                Synthetic scenario on Example CRM A.
              </p>

              <div className="mt-4 space-y-4 divide-y divide-[#edf0f4]">
                {scenarioItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3.5 ${
                      idx > 0 ? "pt-4" : ""
                    }`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#dfe5ee] bg-white text-xs font-bold text-[#091127] shadow-sm">
                      {item.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="!m-0 text-xs sm:text-[13px] font-bold text-[#091127]">
                        {item.title}
                      </h4>
                      {item.badge && (
                        <div className="mt-1 flex flex-wrap items-center gap-1.5">
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-semibold border ${
                              item.badge.variant === "permitted"
                                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                : "border-rose-200 bg-rose-50 text-rose-700"
                            }`}
                          >
                            {item.badge.text}
                          </span>
                          <span className="text-xs text-[#5d7192]">
                            {item.note}
                          </span>
                        </div>
                      )}
                      {item.description && (
                        <p className="!m-0 mt-1 text-xs text-[#5d7192]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ILLUSTRATION (DESKTOP ONLY) */}
          <div className="hidden w-full overflow-hidden rounded-2xl shadow-xl lg:block">
            <Image
              src="/images/crm-platforms/crm6.png"
              alt="Integration identity is a technical connection, not a Billing permission"
              width={700}
              height={580}
              priority
              className="h-auto w-full object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}