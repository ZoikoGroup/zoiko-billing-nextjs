"use client";

const privacyRows = [
  {
    item: "Account identifiers",
    value: "Redacted or aggregated",
  },
  {
    item: "Invoice numbers",
    value: (
      <>
        <strong className="font-bold">Redacted</strong> — a common search on
        a support-adjacent page
      </>
    ),
  },
  {
    item: "Customer names",
    value: "Redacted",
  },
  {
    item: "Payment information",
    value: (
      <>
        <strong className="font-bold">Never</strong>, in any form
      </>
    ),
  },
  {
    item: "Credentials",
    value: "Never",
  },
  {
    item: (
      <>
        Draft or private
        <br />
        metadata
      </>
    ),
    value: "Never exposed in client payloads",
  },
];

const securityRows = [
  {
    item: "Search results",
    value: "Only public-discovery-eligible records",
  },
  {
    item: "External assets",
    value: "Allowlisted domains only",
  },
  {
    item: "Downloads",
    value: "Safe MIME and filename rules, with security scanning",
  },
  {
    item: "Event join links",
    value: (
      <>
        <strong className="font-bold">
          No restricted join link in public HTML, schema, cache or analytics
        </strong>
      </>
    ),
  },
  {
    item: (
      <>
        Customer-private
        <br />
        material
      </>
    ),
    value: <strong className="font-bold">Never public</strong>,
  },
  {
    item: "Analytics",
    value: "Redacted and aggregated queries only",
  },
];

function PolicyCard({
  title,
  rows,
}: {
  title: string;
  rows: {
    item: React.ReactNode;
    value: React.ReactNode;
  }[];
}) {
  return (
    <div
      className="
        flex
        min-w-0
        flex-1
        overflow-hidden
        rounded-2xl
        border
        border-[#dfe5ee]
        bg-white
        shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
      "
    >
      <div className="flex w-full flex-col">
        {/* CARD HEADER */}
        <div
          className="
            border-b
            border-[#dfe5ee]
            bg-[#fafbfc]
            px-5
            py-4
          "
        >
          <p
            className="
              !m-0
              text-sm
              font-normal
              leading-5
              text-[#5d7192]
            "
          >
            {title}
          </p>
        </div>

        {/* ROWS */}
        <div className="flex flex-col">
          {rows.map((row, index) => (
            <div
              key={index}
              className={`
                grid
                grid-cols-[minmax(120px,0.85fr)_minmax(0,1.6fr)]
                ${
                  index !== rows.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }
              `}
            >
              {/* ITEM */}
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
                  {row.item}
                </p>
              </div>

              {/* VALUE */}
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
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchPrivacySecurity() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-5
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
              Search privacy &amp; asset security
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
            What a search box collects, and what
         
            it must not.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              pt-1
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            People type sensitive things into search boxes when they are
            trying to solve a problem.
          </p>
        </div>

        {/* POLICY TABLES */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-5
            pt-2

            lg:flex-row
          "
        >
          <PolicyCard
            title="Never captured in raw form."
            rows={privacyRows}
          />

          <PolicyCard
            title="Asset & result safety."
            rows={securityRows}
          />
        </div>
      </div>
    </section>
  );
}