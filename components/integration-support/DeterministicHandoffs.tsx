export default function DeterministicHandoffs() {
  const routes = [
    {
      title: "Public technical question",
      description: (
        <>
          Developers owns the contract. A case would deliver a
          <br className="hidden sm:block" /> slower copy of a published answer.
        </>
      ),
    },
    {
      title: "Credential or secret exposure",
      description: (
        <>
          Rotate through the approved account control.{" "}
          <strong>
            Support
            <br className="hidden sm:block" /> cannot recover or reset a secret
            for you.
          </strong>
        </>
      ),
    },
    {
      title: "Access or identity",
      description: (
        <>
          <a
            href="#"
            className="font-semibold text-[#526f98] underline-offset-2"
          >
            Account Access
          </a>
          . Support does not define or bypass
          <br className="hidden sm:block" /> identity methods.
        </>
      ),
    },
    {
      title: "Suspected outage",
      description: (
        <>
          System Status. Live operational state is never asserted in
          <br className="hidden sm:block" /> support content.
        </>
      ),
    },
    {
      title: "Provider capability",
      description: (
        <>
          The approved provider authority. Coverage and
          <br className="hidden sm:block" /> contractual commitments are not
          invented here.
        </>
      ),
    },
    {
      title: "Account billing",
      description: (
        <>
          <a
            href="#"
            className="font-semibold text-[#526f98] underline-offset-2"
          >
            Billing Support
          </a>{" "}
          for commercial matters on your own
          <br className="hidden sm:block" /> subscription.
        </>
      ),
    },
  ];

  return (
    <section className="w-full">
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

          xl:px-24
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
                Deterministic handoffs
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
              Six routes that are decided, not
              <br className="hidden sm:block" /> ranked.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              These intents do not compete with search results or case
              creation — they take priority.
            </p>
          </div>

          {/* ROUTES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:gap-4

              lg:grid-cols-2
              lg:gap-4
          "
          >
            {routes.map((route) => (
              <div
                key={route.title}
                className="
                  flex
                  min-h-[136px]
                  w-full
                  flex-col
                  items-start
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    w-full
                    font-['Plus_Jakarta_Sans']
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {route.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    w-full
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {route.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}