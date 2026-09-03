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
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-8

              sm:gap-10

              lg:flex-row
              lg:items-center
              lg:gap-14
            "
          >
            {/* ================= VISUAL ================= */}
            <div
              className="
                order-2
                w-full
                rounded-3xl
                bg-[#edf0f4]
                p-3

                sm:p-4

                lg:order-1
                lg:flex-1
              "
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/global-billing/entity-controls.png"
                  alt="Entity-level controls"
                  width={548}
                  height={543}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 548px"
                />
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div
              className="
                order-1
                flex
                w-full
                flex-col
                items-start
                gap-3
                pt-2
                pb-4

                lg:order-2
                lg:flex-1
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
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
                  Entity-level controls
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  w-full
                  text-[30px]
                  font-extrabold
                  leading-[1.2]
                  tracking-[-0.035em]
                  text-[#091127]

                  sm:text-[34px]

                  md:text-[36px]

                  lg:text-[40px]
                "
              >
                The assigned role is an input, not the permission.
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
                Effective access is computed from eight inputs together.
                Country, language, entity membership, seniority and job title
                must never silently grant broad financial permissions.
              </p>

              {/* ================= ACCESS INPUTS ================= */}
              <div className="mt-1.5 flex w-full flex-col">
                {accessInputs.map((item) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      w-full
                      items-start
                      gap-3
                      py-2

                      sm:gap-4
                    "
                  >
                    {/* BULLET */}
                    <span
                      className="
                        mt-2
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-xs
                        bg-blue-600
                      "
                    />

                    {/* TEXT */}
                    <div
                      className="
                        flex
                        flex-1
                        flex-col
                        gap-0.5

                        sm:flex-row
                        sm:items-start
                        sm:gap-2
                      "
                    >
                      <span
                        className="
                          shrink-0
                          text-sm
                          font-bold
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.title}
                      </span>

                      <span
                        className="
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}