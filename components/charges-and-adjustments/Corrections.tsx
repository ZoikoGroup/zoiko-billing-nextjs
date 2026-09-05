"use client";

import Link from "next/link";

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
    control:
      "Original line and document, reason, amount, tax and approval.",
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
    treatment: "Show policy, reviewer, amount, reason and due time.",
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
    meaning: "The definition or eligibility is no longer effective.",
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
    treatment: "Show owner, error class, retry or manual recovery.",
  },
];

const stateStyles: Record<AmountState["variant"], string> = {
  neutral: "bg-[#f7f8fa] text-[#5d7192] border-[#dfe5ee]",
  error: "bg-[#faf7f7] text-[#a45b5b] border-[#ead7d7]",
  warning: "bg-[#faf9f5] text-[#9a7b48] border-[#e8dfc9]",
  success: "bg-[#f7f8fa] text-[#456b9c] border-[#d8e0e9]",
  info: "bg-[#f7f8fa] text-[#4f78a5] border-[#dfe5ee]",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
        {children}
      </span>

      <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
    </div>
  );
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        border-b
        border-[#dfe5ee]
        bg-[#fafbfc]
        px-4
        py-3.5
      "
    >
      <span
        className="
          text-[10px]
          font-bold
          uppercase
          leading-4
          tracking-[0.12em]
          text-[#7890b2]
        "
      >
        {children}
      </span>
    </div>
  );
}

function StateBadge({ item }: { item: AmountState }) {
  return (
    <span
      className={`
        inline-flex
        h-7
        items-center
        gap-2
        rounded-full
        border
        px-2.5
        font-mono
        text-[10px]
        font-medium
        uppercase
        leading-4
        tracking-wide
        ${stateStyles[item.variant]}
      `}
    >
      <span className="text-xs leading-3">{item.icon}</span>
      {item.state}
    </span>
  );
}

export default function Corrections() {
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
              max-w-[760px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            <SectionLabel>Corrections</SectionLabel>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
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
              Correct issued amounts without erasing their history.
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
              Before issue, revise the draft. After issue, create a
              relationship. The path depends on what went wrong and how far
              the amount has travelled.
            </p>
          </div>

          {/* CORRECTION PATHS */}
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
            {/* TABLE TITLE */}
            <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-3.5">
              <p
                className="
                  !m-0
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.12em]
                  text-[#7890b2]
                "
              >
                Correction paths · what to do when an amount is wrong
              </p>
            </div>

            {/* DESKTOP HEADER */}
            <div
              className="
                hidden
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                md:grid
                md:grid-cols-[minmax(180px,1fr)_minmax(280px,1.8fr)_minmax(320px,2.3fr)]
              "
            >
              <TableHeader>Situation</TableHeader>
              <TableHeader>Permitted direction</TableHeader>
              <TableHeader>Control</TableHeader>
            </div>

            {/* CORRECTION ROWS */}
            {correctionPaths.map((item, index) => (
              <div
                key={item.situation}
                className={`
                  grid
                  grid-cols-1

                  md:grid-cols-[minmax(180px,1fr)_minmax(280px,1.8fr)_minmax(320px,2.3fr)]

                  ${
                    index !== correctionPaths.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* SITUATION */}
                <div className="px-4 py-4">
                  <span
                    className="
                      mb-1
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]

                      md:hidden
                    "
                  >
                    Situation
                  </span>

                  <p className="!m-0 text-sm leading-6 text-[#091127]">
                    {item.situation}
                  </p>
                </div>

                {/* DIRECTION */}
                <div className="px-4 py-4">
                  <span
                    className="
                      mb-1
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]

                      md:hidden
                    "
                  >
                    Permitted direction
                  </span>

                  <p className="!m-0 text-sm leading-6 text-[#5d7192]">
                    {item.direction}
                  </p>
                </div>

                {/* CONTROL */}
                <div className="px-4 py-4">
                  <span
                    className="
                      mb-1
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]

                      md:hidden
                    "
                  >
                    Control
                  </span>

                  <p className="!m-0 text-sm leading-6 text-[#5d7192]">
                    {item.control}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* AMOUNT STATES */}
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
            {/* TABLE TITLE */}
            <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-3.5">
              <p
                className="
                  !m-0
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.12em]
                  text-[#7890b2]
                "
              >
                Amount-component states and required treatment
              </p>
            </div>

            {/* DESKTOP HEADER */}
            <div
              className="
                hidden
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                md:grid
                md:grid-cols-[minmax(180px,1fr)_minmax(320px,2.2fr)_minmax(280px,1.8fr)]
              "
            >
              <TableHeader>State</TableHeader>
              <TableHeader>Meaning</TableHeader>
              <TableHeader>Required treatment</TableHeader>
            </div>

            {/* STATE ROWS */}
            {amountStates.map((item, index) => (
              <div
                key={item.state}
                className={`
                  grid
                  grid-cols-1

                  md:grid-cols-[minmax(180px,1fr)_minmax(320px,2.2fr)_minmax(280px,1.8fr)]

                  ${
                    index !== amountStates.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* STATE */}
                <div className="px-4 py-4">
                  <span
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]

                      md:hidden
                    "
                  >
                    State
                  </span>

                  <StateBadge item={item} />
                </div>

                {/* MEANING */}
                <div className="px-4 py-4">
                  <span
                    className="
                      mb-1
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]

                      md:hidden
                    "
                  >
                    Meaning
                  </span>

                  <p className="!m-0 text-sm leading-6 text-[#5d7192]">
                    {item.meaning}
                  </p>
                </div>

                {/* TREATMENT */}
                <div className="px-4 py-4">
                  <span
                    className="
                      mb-1
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]

                      md:hidden
                    "
                  >
                    Required treatment
                  </span>

                  <p className="!m-0 text-sm leading-6 text-[#5d7192]">
                    {item.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CORRECTION BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-[#f7f8fa]
              px-5
              py-5

              sm:px-7
              sm:py-6
            "
          >
            <span
              className="
                block
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Correction boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Credit, reversal, refund, write-off and payment correction are
              distinct concepts. Issued amounts are never silently
              overwritten, and an adjustment on its own never moves money.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full items-center justify-start">
            <Link
              href="/invoices"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-base
                font-normal
                leading-6
                !text-white
                transition-opacity
                duration-200
                hover:opacity-90
              "
            >
              Explore Invoices &amp; Credit Notes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}