import Image from "next/image";

export default function SandboxLifecycle() {
  const actions = [
    {
      title: (
        <>
          Create /
          <br />
          initialize
        </>
      ),
      description:
        "Scope, owner, default data, initial permissions and expected readiness from canonical behavior",
    },
    {
      title: "Seed fixtures",
      description:
        "Preview the objects and scenarios to be created, plus dependencies",
    },
    {
      title: "Reset data",
      description:
        "Show exact destructive scope; require explicit environment confirmation; record audit evidence",
    },
    {
      title: (
        <>
          Rotate test
          <br />
          credential
        </>
      ),
      description:
        "Locked Authentication lifecycle; no secret in logs",
    },
    {
      title: "Disable sandbox",
      description:
        "State the effect on API access, event deliveries, data and collaborators",
    },
    {
      title: "Delete sandbox",
      description: (
        <>
          <strong className="font-bold">Separate from reset</strong>; disclose
          retention and recovery behavior
        </>
      ),
    },
    {
      title: (
        <>
          Snapshot /
          <br />
          restore
        </>
      ),
      description:
        "Only if supported; show scope, retention and conflict behavior",
    },
    {
      title: "Re-seed / re-run",
      description:
        "Distinguish new object identities from deterministic replay",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                Reset, seed, snapshot &amp; lifecycle
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Reset and delete are different actions.
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
              Eight lifecycle actions, and a destructive-action pattern that
              replaces the generic &quot;Are you sure?&quot; modal.
            </p>
          </div>

          {/* DESKTOP / TABLET CONTENT */}
          <div
            className="
              grid
              w-full
              max-w-[1184px]
              grid-cols-1
              gap-5

              lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
            "
          >
            {/* ACTION TABLE */}
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
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Action and required contract.
                </span>
              </div>

              {/* ACTIONS */}
              <div className="w-full">
                {actions.map((action, index) => (
                  <div
                    key={index}
                    className={`
                      grid
                      w-full
                      grid-cols-[112px_minmax(0,1fr)]
                      ${
                        index !== actions.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* ACTION */}
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {action.title}
                      </span>
                    </div>

                    {/* CONTRACT */}
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {action.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                relative
                min-h-[420px]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:min-h-[500px]

                lg:min-h-[614px]
              "
            >
              <Image
                src="/images/developer-sandbox/lifecycle.png"
                alt="Sandbox reset, seed, snapshot and lifecycle controls"
                fill
                className="object-cover"
                sizes="
                  (max-width: 1023px) 100vw,
                  (max-width: 1279px) 50vw,
                  599px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}