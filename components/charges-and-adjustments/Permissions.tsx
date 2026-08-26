"use client";

const actions = [
  {
    number: "01",
    title: "Create and edit draft amounts",
    description:
      "Prepare charges, fees and adjustments that have no issued effect yet.",
  },
  {
    number: "02",
    title: "Apply a discount or fee",
    description:
      "Attach a reduction or additional amount within the permitted eligibility and scope.",
  },
  {
    number: "03",
    title: "Change price, rate, quantity or dates",
    description:
      "Alter the inputs that determine the calculated result.",
  },
  {
    number: "04",
    title: "Override a calculated result",
    description:
      "Replace a computed value manually, with a recorded reason and authority.",
  },
  {
    number: "05",
    title: "Create an issued correction or credit",
    description:
      "Produce a governed correction against an already-issued amount.",
  },
  {
    number: "06",
    title: "Apply a write-off",
    description:
      "Restricted balance treatment where supported, separated from document correction.",
  },
  {
    number: "07",
    title: "Approve within threshold",
    description:
      "Decide requests up to the authority delegated for that amount, type and context.",
  },
  {
    number: "08",
    title: "Read without changing",
    description:
      "Review amounts, calculations and evidence with no ability to alter them.",
  },
];

const thresholds = [
  {
    title: "Amount",
    value: "absolute value",
    width: "sm:w-44",
  },
  {
    title: "Percentage",
    value: "of the base",
    width: "sm:w-44",
  },
  {
    title: "Type",
    value: "charge, fee, discount, credit",
    width: "sm:w-64",
  },
  {
    title: "Source",
    value: "manual, integration, schedule",
    width: "sm:w-64",
  },
  {
    title: "Entity",
    value: "issuing legal entity",
    width: "sm:w-52",
  },
  {
    title: "Risk",
    value: "configured risk class",
    width: "sm:w-52",
  },
];

export default function Permissions() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] bg-color-grey-97-2 px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-0 lg:px-12">

          {/* HEADER */}
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">

            {/* LEFT */}
            <div className="min-w-0 flex-1 pt-2.5 pb-5">
              <div className="flex flex-col items-start gap-5">

                {/* EYEBROW */}
                <div className="relative h-4 w-64">
                  <div className="absolute left-0 top-[7.94px] h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

                  <span className="absolute left-[30px] top-[-1px] whitespace-nowrap font-['IBM_Plex_Mono'] text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                    Permissions and thresholds
                  </span>
                </div>

                {/* HEADING */}
                <div className="w-full max-w-[638.15px]">
                  <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-medium leading-[1.12] tracking-[-0.02em] text-sky-950 sm:text-[42px] lg:text-5xl lg:leading-[53.82px]">
                    Require review when
                    <br className="hidden sm:block" />
                    amount, type or context
                    <br className="hidden sm:block" />
                    makes it necessary.
                  </h2>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[528.77px] flex-1">
              <p className="font-['Segoe_UI'] text-base font-normal leading-8 text-color-azure-35">
                Eight amount actions are governed separately, because creating
                a draft charge and overriding a calculated result are not the
                same risk.
              </p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 pt-6">

            {actions.map((action) => (
              <div
                key={action.number}
                className="flex min-h-[96px] w-full items-start gap-4 bg-color-white-solid px-6 py-5 sm:min-h-[128px]"
              >
                {/* NUMBER */}
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-color-azure-87 bg-color-grey-97-2">
                  <span className="font-['IBM_Plex_Mono'] text-[9.6px] font-semibold leading-4 text-color-azure-44">
                    {action.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="w-full max-w-[464px]">
                  <h3 className="mb-1 font-['Plus_Jakarta_Sans'] text-base font-semibold leading-6 text-sky-950">
                    {action.title}
                  </h3>

                  <p className="font-['Segoe_UI'] text-sm font-normal leading-6 text-color-azure-35">
                    {action.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* THRESHOLD HEADING */}
          <div className="flex h-8 items-end">
            <div className="mr-[10px] h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

            <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
              Thresholds can be set on
            </span>
          </div>

          {/* THRESHOLD CHIPS */}
          <div className="flex w-full flex-wrap gap-3">
            {thresholds.map((item) => (
              <div
                key={item.title}
                className={`${item.width} flex min-h-11 items-center rounded-full border border-zinc-200 bg-color-white-solid px-4 py-2`}
              >
                <span className="shrink-0 font-['IBM_Plex_Mono'] text-xs font-semibold leading-4 text-color-azure-44">
                  {item.title}
                </span>

                <span className="ml-4 font-['IBM_Plex_Mono'] text-xs font-normal leading-4 text-color-azure-35">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* APPROVAL BOUNDARY */}
          <div className="flex w-full flex-col items-start gap-2 rounded-tr-2xl rounded-br-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-7 pt-9 pb-8">

            {/* LABEL */}
            <div className="w-full">
              <span className="font-['IBM_Plex_Mono'] text-[9.9px] font-normal uppercase leading-4 tracking-wide text-color-azure-44">
                Approval boundary
              </span>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[761.07px]">
              <p className="font-['Segoe_UI'] text-base font-normal leading-7 text-sky-950">
                Approval applies to the exact amount, version, context and
                proposed effect that was reviewed. A configured approval
                policy is a control, not a universal compliance guarantee.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full items-center justify-start">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-sky-950 bg-sky-950 px-5 py-2 font-['Segoe_UI'] text-base font-normal leading-6 text-white outline outline-1 outline-offset-[-1px] outline-sky-950 transition-colors hover:bg-sky-900"
            >
              <span className="!text-white">
                Explore Roles &amp; Approvals
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}