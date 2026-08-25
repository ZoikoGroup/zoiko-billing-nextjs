import Image from "next/image";

const items = [
  {
    title: "Authentication",
    description:
      '— the exact registered method, not a generic "secure connection" label.',
  },
  {
    title: "Credential owner",
    description:
      "— customer, target, Zoiko or partner responsibility stated explicitly.",
  },
  {
    title: "Scopes",
    description:
      "— least-necessary target permissions for the registered objects and actions.",
  },
  {
    title: "Technical admin",
    description:
      "— may configure connections and mappings per role, without approving accounting entries.",
  },
  {
    title: "Financial approver",
    description:
      "— a separate authority where target or customer policy requires it.",
  },
  {
    title: "Secret handling",
    description:
      "— an approved secret service; never in URLs, analytics, logs, screenshots or support notes.",
  },
  {
    title: "Mapping changes",
    description:
      "— versioned, impact-previewed and audited.",
  },
  {
    title: "Connection test",
    description:
      "— read-only or safe test where supported; no production write unless explicit.",
  },
];

export default function IntegrationAdmin() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-32
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-10

            lg:flex-row
            lg:items-center
            lg:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3.5
              pt-2

              lg:flex-1
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-blue-600 opacity-75" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.1em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.15em]
                "
              >
                Authentication, permissions, setup &amp; security
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                text-[30px]
                font-extrabold
                leading-[1.15]
                tracking-[-0.03em]
                text-[#091127]

                sm:text-[34px]

                md:text-[36px]
                md:leading-10

                lg:max-w-[1000px]
              "
            >
              An integration admin is not an accounting approver.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-base
                sm:leading-7
              "
            >
              A technically privileged administrator is not automatically the
              period-close owner, financial controller, or the authority to
              change accounting treatment.
            </p>

            {/* RESPONSIBILITIES */}
            <div className="mt-3 flex w-full flex-col">
              {items.map((item) => (
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
                      rounded-[2px]
                      bg-blue-600
                    "
                  />

                  {/* TEXT */}
                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      flex-col

                      sm:flex-row
                      sm:items-start
                    "
                  >
                    <span
                      className="
                        shrink-0
                        text-sm
                        font-bold
                        leading-6
                        text-[#5d7192]

                        sm:mr-1
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

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              w-full

              lg:flex-1
            "
          >
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[589px]
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <div className="relative aspect-[589/580] w-full">
                <Image
                  src="/images/accounting-and-erp/admin.png"
                  alt="Integration administration and security controls"
                  fill
                  className="object-cover"
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 90vw,
                    589px
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}