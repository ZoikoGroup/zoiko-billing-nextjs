import Image from "next/image";

const accessInputs = [
  {
    title: "Identity",
    description: "— the user or service identity.",
  },
  {
    title: "Role",
    description: "— an input to the decision, not the final answer.",
  },
  {
    title: "Entity scope",
    description:
      "— one entity, an approved group, or an explicitly delegated scope.",
  },
  {
    title: "Action",
    description:
      "— view, create, propose, edit, approve, issue, export, administer, override or revoke.",
  },
  {
    title: "Object or field",
    description:
      "— customer, profile, invoice, payment, document, currency config, entity config, report or integration.",
  },
  {
    title: "Workflow state",
    description:
      "— draft, pending approval, issued, reconciled, closed.",
  },
  {
    title: "Purpose & sensitivity",
    description:
      "— an additional policy constraint where required.",
  },
  {
    title: "Effective period",
    description:
      "— start and end, temporary delegation, and emergency-access expiry.",
  },
];

export default function EntityControls() {
  return (
    <section className="w-full px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
        {/* Visual */}
        <div className="order-2 w-full rounded-3xl bg-color-grey-93-7 p-3 sm:p-4 lg:order-1 lg:flex-1">
          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/global-billing/entity-controls.png"
              alt="Entity-level controls"
              width={548}
              height={543}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 flex w-full flex-col items-start gap-3.5 pt-2 pb-4 lg:order-2 lg:flex-1">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-blue-600 opacity-75" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Entity-level controls
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-extrabold leading-8 text-color-azure-11-2 sm:text-3xl sm:leading-9">
            The assigned role is an input, not the permission.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Effective access is computed from eight inputs together. Country,
            language, entity membership, seniority and job title must never
            silently grant broad financial permissions.
          </p>

          {/* Access Inputs */}
          <div className="mt-1.5 flex w-full flex-col">
            {accessInputs.map((item) => (
              <div
                key={item.title}
                className="flex w-full items-start gap-3 py-2 sm:gap-4"
              >
                {/* Bullet */}
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-blue-600" />

                {/* Text */}
                <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-2">
                  <span className="shrink-0 text-sm font-bold leading-6 text-color-azure-44-3">
                    {item.title}
                  </span>

                  <span className="text-sm font-normal leading-6 text-color-azure-44-3">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}