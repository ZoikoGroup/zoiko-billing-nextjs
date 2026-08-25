export default function ListingCards() {
  const rows = [
    {
      element: "Name, provider, category",
      behavior: "Canonical listing identity",
    },
    {
      element: "Relationship / model",
      behavior:
        "Native, provider, partner, API or file method per registry — no implied endorsement",
    },
    {
      element: "Capability summary",
      behavior: "Only verified objects, actions and outcomes",
    },
    {
      element: "Direction",
      behavior: (
        <>
          Stated in words —{" "}
          <strong className="font-bold">
            no unlabeled arrow carrying the meaning
          </strong>
        </>
      ),
    },
    {
      element: "Availability",
      behavior:
        "Current status plus the material limitation when Limited or Partner-supported",
    },
    {
      element: "Region & plan",
      behavior:
        'Concise current applicability, or "see details" where complex',
    },
    {
      element: "Authentication",
      behavior: "Method label, or a route to security and setup detail",
    },
    {
      element: "Operational state",
      behavior: (
        <>
          Current status —{" "}
          <strong className="font-bold">
            never merged with availability
          </strong>
        </>
      ),
    },
    {
      element: "Certification",
      behavior:
        'Only a named current scheme; otherwise omitted rather than labeled "uncertified"',
    },
    {
      element: "Verified",
      behavior: "The last verification date",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-8
          px-5
          py-12

          sm:px-8
          sm:py-16
          sm:gap-10

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
          xl:gap-11
        "
      >
        {/* HEADING */}
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
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-[#7890b2] opacity-40" />

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
              Results &amp; listing cards
            </span>

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.025em]
              text-[#091127]

              sm:text-[34px]

              md:text-[36px]
            "
          >
            A card is an evaluation summary, not a purchase tile.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              pt-1
              text-center
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            &quot;Install now&quot; and &quot;one-click connect&quot; appear only
            when the authenticated setup path, permissions, prerequisites,
            failure handling and support model are production-ready.
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
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* HEADER */}
              <div className="grid grid-cols-[320px_minmax(0,1fr)] bg-[#fafbfc]">
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#7890b2]
                  "
                >
                  Element
                </div>

                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#7890b2]
                  "
                >
                  Required behavior
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.element}
                  className={`
                    grid
                    grid-cols-[320px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#eef1f5]"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {row.element}
                  </div>

                  <div
                    className="
                      px-4
                      py-3.5
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {row.behavior}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE HINT */}
        <p className="text-xs font-normal text-[#7890b2] sm:hidden">
          Swipe horizontally to view the full table.
        </p>
      </div>
    </section>
  );
}