import Image from "next/image";

export default function DetailProfile() {
  const details = [
    {
      title: "Overview",
      description:
        "What connects, provider, category, integration model and relationship",
    },
    {
      title: "Verified capability",
      description:
        "Objects, actions, directions, method and key limitations",
    },
    {
      title: "Authentication & permissions",
      description:
        "Method, credential owner, scopes and revocation",
    },
    {
      title: "Availability",
      description:
        "Region, plan, environment and provider edition applicability",
    },
    {
      title: "Setup",
      description:
        "Prerequisites, owner, route, test and activation",
    },
    {
      title: "Operational status",
      description:
        "Current state and the authoritative status source",
    },
    {
      title: "Certification",
      description:
        "Named scheme, scope, issuer and effective date, or absent",
    },
    {
      title: "Support ownership",
      description:
        "Zoiko, provider, partner or shared responsibility",
    },
    {
      title: "Documentation",
      description: "Current authoritative links",
    },
    {
      title: "Verification & lifecycle",
      description:
        "Last verified date and lifecycle state",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f8f9fb]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
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
              Integration detail profile
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
            One template that works for every integration model.
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
            Native, provider-managed, partner, API or webhook, file and
            custom builds all use the same evidence blocks — so nothing
            gets a shortcut.
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            gap-5

            sm:mt-10

            md:mt-11

            lg:flex-row
            lg:items-stretch
          "
        >
          {/* DETAILS TABLE */}
          <div
            className="
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
            <div className="w-full overflow-x-auto">
              <div className="min-w-[640px]">
                {/* TABLE HEADER */}
                <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-4">
                  <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
                    Required detail blocks.
                  </p>
                </div>

                {/* DETAIL ROWS */}
                {details.map((item, index) => (
                  <div
                    key={item.title}
                    className={`
                      grid
                      grid-cols-[208px_minmax(0,1fr)]
                      ${
                        index !== details.length - 1
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
                      {item.title}
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
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white

              lg:w-[48%]
              xl:w-[49%]
            "
          >
            <div className="relative aspect-[605/607] w-full">
              <Image
                src="/images/integrations-directory/profile.png"
                alt="Integration detail profile"
                fill
                className="object-cover"
                sizes="
                  (max-width: 1023px) 100vw,
                  48vw
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}