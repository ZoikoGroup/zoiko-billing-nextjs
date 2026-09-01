"use client";

type CorrectionPath = {
  situation: string;
  direction: string;
  control: string;
};

type AmountState = {
  state: string;
  icon: string;
  variant: "neutral" | "error" | "warning" | "success" | "info";
  meaning: string;
  treatment: string;
};

const correctionPaths: CorrectionPath[] = [
  {
    situation: "Incorrect draft amount",
    direction: "Edit, replace or remove it before issue.",
    control: "Permission, source and draft-version history.",
  },
  {
    situation: "Approved but unissued amount",
    direction: "Return, revise and reapprove if required.",
    control: "Version and approval invalidation or renewal.",
  },
  {
    situation: "Issued overcharge",
    direction: "Create a supported credit or correction relation.",
    control: "Original line and document, reason, amount, tax and approval.",
  },
  {
    situation: "Issued undercharge",
    direction:
      "Create an additional approved charge or supported corrective document.",
    control:
      "Source, reason, customer and contract context, with legal or tax review where required.",
  },
  {
    situation: "Discount no longer eligible",
    direction:
      "Apply only through a supported prospective or corrective process.",
    control: "Issued history is never silently altered.",
  },
  {
    situation: "Payment or refund required",
    direction:
      "Resolve in Payments & Reconciliation or the approved payment process.",
    control: "An adjustment alone does not create cash movement.",
  },
];

const amountStates: AmountState[] = [
  {
    state: "Draft",
    icon: "–",
    variant: "neutral",
    meaning: "Amount or rule is being prepared and has no issued effect.",
    treatment: "Editable by permission. Preserve source and version.",
  },
  {
    state: "Validation failed",
    icon: "!",
    variant: "error",
    meaning:
      "Required source, rule, currency, dates or calculation context is invalid.",
    treatment: "Block application and identify the exact issues.",
  },
  {
    state: "Pending approval",
    icon: "•",
    variant: "warning",
    meaning: "Configured review is required.",
    treatment:
      "Show policy, reviewer, amount, reason and due time.",
  },
  {
    state: "Approved",
    icon: "✓",
    variant: "success",
    meaning:
      "The current version may be applied in the permitted context.",
    treatment: "Preserve version, decision and effective scope.",
  },
  {
    state: "Applied to draft",
    icon: "i",
    variant: "info",
    meaning: "The amount is connected to a draft billing document.",
    treatment:
      "Allow controlled draft revision and prevent duplicate application.",
  },
  {
    state: "Issued context",
    icon: "✓",
    variant: "success",
    meaning: "The amount is part of an issued billing relationship.",
    treatment:
      "Preserve original evidence. Corrections use governed relationships.",
  },
  {
    state: "Superseded / expired",
    icon: "–",
    variant: "neutral",
    meaning:
      "The definition or eligibility is no longer effective.",
    treatment: "Block new use and retain history.",
  },
  {
    state: "Corrected / reversed",
    icon: "i",
    variant: "info",
    meaning:
      "A related amount changes the original operational effect.",
    treatment:
      "Show original, correction, reason and remaining relationship.",
  },
  {
    state: "Failed / unresolved",
    icon: "!",
    variant: "error",
    meaning: "Calculation or application could not complete.",
    treatment:
      "Show owner, error class, retry or manual recovery.",
  },
];

const stateStyles: Record<
  AmountState["variant"],
  string
> = {
  neutral:
    "bg-color-grey-97-2 text-color-azure-35 border-zinc-200",
  error:
    "bg-color-grey-95-7 text-color-red-40 border-color-red-87",
  warning:
    "bg-color-grey-94-3 text-color-orange-37 border-color-orange-81-2",
  success:
    "bg-color-grey-97-2 text-color-azure-44 border-color-azure-86",
  info:
    "bg-color-grey-97-3 text-color-blue-50 border-color-grey-92-2",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

      <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
        {children}
      </span>
    </div>
  );
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-color-grey-99 px-3.5 py-2 font-['IBM_Plex_Mono'] text-[9.8px] font-medium uppercase leading-4 tracking-wide text-color-azure-55">
      {children}
    </div>
  );
}

function StateBadge({
  item,
}: {
  item: AmountState;
}) {
  return (
    <span
      className={`inline-flex h-7 items-center gap-2 rounded-full border px-2.5 font-['IBM_Plex_Mono'] text-[10.2px] font-medium uppercase leading-4 tracking-wide ${stateStyles[item.variant]}`}
    >
      <span className="text-xs leading-3">{item.icon}</span>
      {item.state}
    </span>
  );
}

export default function Corrections() {
  return (
    <section className="w-full bg-color-white-solid">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 py-16 sm:px-10 lg:px-16 xl:px-28 xl:py-24">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-11 px-0 xl:px-12">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-end lg:gap-16">
            <div className="flex flex-1 flex-col items-start gap-5">
              <SectionLabel>Corrections</SectionLabel>

              <h2 className="max-w-[638px] text-4xl font-medium leading-tight tracking-tight text-sky-950 sm:text-5xl sm:leading-[53.82px]">
                Correct issued amounts
                <br className="hidden sm:block" />
                without erasing their
                <br className="hidden sm:block" />
                history.
              </h2>
            </div>

            <div className="w-full max-w-[528px]">
              <p className="text-base font-normal leading-8 text-color-azure-35">
                Before issue, revise the draft. After issue, create a
                relationship. The path depends on what went wrong and how far
                the amount has travelled.
              </p>
            </div>
          </div>

          {/* Correction paths */}
          <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-color-white-solid">
            <div className="border-b border-zinc-200 bg-color-grey-97-2 px-5 py-3.5">
              <p className="font-['IBM_Plex_Mono'] text-[10.1px] uppercase leading-4 tracking-wide text-color-azure-35">
                Correction paths · what to do when an amount is wrong
              </p>
            </div>

            <div className="hidden grid-cols-[minmax(180px,1fr)_minmax(280px,1.8fr)_minmax(320px,2.3fr)] border-b border-zinc-200 bg-color-grey-99 md:grid">
              <TableHeader>Situation</TableHeader>
              <TableHeader>Permitted direction</TableHeader>
              <TableHeader>Control</TableHeader>
            </div>

            {correctionPaths.map((item, index) => (
              <div
                key={item.situation}
                className={`grid grid-cols-1 md:grid-cols-[minmax(180px,1fr)_minmax(280px,1.8fr)_minmax(320px,2.3fr)] ${
                  index !== correctionPaths.length - 1
                    ? "border-b border-color-grey-93-4"
                    : ""
                }`}
              >
                <div className="px-3.5 py-3.5 md:py-4">
                  <span className="mb-1 block font-['IBM_Plex_Mono'] text-[9.8px] uppercase tracking-wide text-color-azure-55 md:hidden">
                    Situation
                  </span>

                  <p className="text-sm leading-5 text-sky-950">
                    {item.situation}
                  </p>
                </div>

                <div className="px-3.5 py-3.5 md:py-4">
                  <span className="mb-1 block font-['IBM_Plex_Mono'] text-[9.8px] uppercase tracking-wide text-color-azure-55 md:hidden">
                    Permitted direction
                  </span>

                  <p className="text-sm leading-5 text-sky-950">
                    {item.direction}
                  </p>
                </div>

                <div className="px-3.5 py-3.5 md:py-4">
                  <span className="mb-1 block font-['IBM_Plex_Mono'] text-[9.8px] uppercase tracking-wide text-color-azure-55 md:hidden">
                    Control
                  </span>

                  <p className="text-sm leading-5 text-sky-950">
                    {item.control}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Amount states */}
          <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-color-white-solid">
            <div className="border-b border-zinc-200 bg-color-grey-97-2 px-5 py-3.5">
              <p className="font-['IBM_Plex_Mono'] text-[10.1px] uppercase leading-4 tracking-wide text-color-azure-35">
                Amount-component states and required treatment
              </p>
            </div>

            <div className="hidden grid-cols-[minmax(180px,1fr)_minmax(320px,2.2fr)_minmax(280px,1.8fr)] border-b border-zinc-200 bg-color-grey-99 md:grid">
              <TableHeader>State</TableHeader>
              <TableHeader>Meaning</TableHeader>
              <TableHeader>Required treatment</TableHeader>
            </div>

            {amountStates.map((item, index) => (
              <div
                key={item.state}
                className={`grid grid-cols-1 md:grid-cols-[minmax(180px,1fr)_minmax(320px,2.2fr)_minmax(280px,1.8fr)] ${
                  index !== amountStates.length - 1
                    ? "border-b border-color-grey-93-4"
                    : ""
                }`}
              >
                <div className="px-3.5 py-3.5 md:py-4">
                  <span className="mb-2 block font-['IBM_Plex_Mono'] text-[9.8px] uppercase tracking-wide text-color-azure-55 md:hidden">
                    State
                  </span>

                  <StateBadge item={item} />
                </div>

                <div className="px-3.5 py-3.5 md:py-4">
                  <span className="mb-1 block font-['IBM_Plex_Mono'] text-[9.8px] uppercase tracking-wide text-color-azure-55 md:hidden">
                    Meaning
                  </span>

                  <p className="text-sm leading-5 text-sky-950">
                    {item.meaning}
                  </p>
                </div>

                <div className="px-3.5 py-3.5 md:py-4">
                  <span className="mb-1 block font-['IBM_Plex_Mono'] text-[9.8px] uppercase tracking-wide text-color-azure-55 md:hidden">
                    Required treatment
                  </span>

                  <p className="text-sm leading-5 text-sky-950">
                    {item.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Boundary */}
          <div className="w-full rounded-r-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-7 py-7">
            <div className="flex flex-col gap-2">
              <p className="font-['IBM_Plex_Mono'] text-[9.9px] uppercase leading-4 tracking-wide text-color-azure-44">
                Correction boundary
              </p>

              <p className="max-w-[761px] text-base font-normal leading-7 text-sky-950">
                Credit, reversal, refund, write-off and payment correction are
                distinct concepts. Issued amounts are never silently
                overwritten, and an adjustment on its own never moves money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}