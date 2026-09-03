export default function AfterApplying() {
  const mayItems = [
    {
      title: (
        <>
          Acknowledge
          <br />
          receipt
        </>
      ),
      description: (
        <>
          Where the backend returns an acknowledgement —{" "}
          <strong>not a promise of a reply</strong>
        </>
      ),
    },
    {
      title: (
        <>
          Request
          <br />
          clarification
        </>
      ),
      description: "Targeted questions about what you submitted",
    },
    {
      title: "Route your intent",
      description: "To the destination that can actually act on it",
    },
    {
      title: (
        <>
          Ask for due
          <br />
          diligence
        </>
      ),
      description: (
        <>
          <strong>Later, in a controlled workflow</strong> with its own
          handling — if the relationship reaches that stage
        </>
      ),
    },
    {
      title: (
        <>
          Decline to
          <br />
          proceed
        </>
      ),
      description:
        "In source-approved wording, without an invented reason",
    },
  ];

  const willNotItems = [
    {
      title: "Ask for credentials",
      description: "Never, at any stage, through any partner route",
      bold: true,
    },
    {
      title: (
        <>
          Grant portal access on
          <br />
          submission
        </>
      ),
      description: "Portal availability is separately source-approved",
    },
    {
      title: "List you publicly",
      description: (
        <>
          Requires an approved relationship and
          <br className="hidden lg:block" /> publication rights
        </>
      ),
      bold: true,
    },
    {
      title: "Promise a timeline",
      description: "No response time or review duration is published",
    },
    {
      title: "Bundle marketing consent",
      description: "Consent is optional, separate and off by default",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
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
                After applying
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
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
              What happens, and what will never
              <br className="hidden sm:block" />
              happen.
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
              Five things the process may do, and four things it will not.
            </p>
          </div>

          {/* PANELS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              pt-2

              lg:grid-cols-2
            "
          >
            {/* PROCESS MAY */}
            <ProcessPanel
              title="The process may."
              items={mayItems}
            />

            {/* PROCESS WILL NOT */}
            <ProcessPanel
              title="The process will not."
              items={willNotItems}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type ProcessItem = {
  title: React.ReactNode;
  description: React.ReactNode;
  bold?: boolean;
};

type ProcessPanelProps = {
  title: string;
  items: ProcessItem[];
};

function ProcessPanel({ title, items }: ProcessPanelProps) {
  return (
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
      {/* PANEL HEADER */}
      <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-4">
        <span className="text-sm font-normal leading-5 text-[#5d7192]">
          {title}
        </span>
      </div>

      {/* ITEMS */}
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              grid
              grid-cols-1
              sm:grid-cols-[160px_minmax(0,1fr)]
              ${
                index !== items.length - 1
                  ? "border-b border-[#edf0f4]"
                  : ""
              }
            `}
          >
            {/* ITEM TITLE */}
            <div className="px-4 py-3.5">
              <span
                className="
                  text-sm
                  font-semibold
                  leading-5
                  text-[#091127]
                "
              >
                {item.title}
              </span>
            </div>

            {/* ITEM DESCRIPTION */}
            <div className="px-4 py-3.5">
              <span
                className={`
                  text-sm
                  leading-5
                  ${
                    item.bold
                      ? "font-bold text-[#5d7192]"
                      : "font-normal text-[#5d7192]"
                  }
                `}
              >
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}