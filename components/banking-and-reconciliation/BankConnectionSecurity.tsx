import Image from "next/image";

export default function BankConnectionSecurity() {
  const items = [
    {
      title: (
        <>
          Authentication
          <br />
          method
        </>
      ),
      description:
        '— the exact registered source method, with no generic "secure bank link" wording.',
    },
    {
      title: (
        <>
          Connection
          <br />
          owner
        </>
      ),
      description:
        "— customer, admin, provider or partner ownership stated explicitly.",
    },
    {
      title: "Scopes",
      description:
        "— least-necessary accounts and data capabilities, with no payment-initiation scope unless a separate capability exists.",
    },
    {
      title: (
        <>
          Account
          <br />
          selection
        </>
      ),
      description:
        "— explicit source account mapping, with the server validating tenant and entity access.",
    },
    {
      title: (
        <>
          Account
          <br />
          identifiers
        </>
      ),
      description:
        "— opaque or masked display; no full account numbers in general interface or logs.",
    },
    {
      title: (
        <>
          Secrets and
          <br />
          tokens
        </>
      ),
      description:
        "— an approved secret store; never in a URL, log, analytics event or support copy.",
    },
    {
      title: (
        <>
          Authorization
          <br />
          expiry
        </>
      ),
      description:
        "— where source authorization expires, the state and reauthorization path are explicit.",
    },
    {
      title: "Audit",
      description:
        "— who connected, changed, re-authorized or disconnected an account, with scope and effective time.",
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
            mx-auto
            flex
            w-full
            max-w-[1184px]
            flex-col
            items-stretch
            gap-8

            sm:gap-10

            lg:flex-row
            lg:items-start
            lg:gap-10
          "
        >
          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-1
              flex-col
              items-start
              gap-3.5
              pt-2

              lg:min-w-0
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-2">
              <span
                className="
                  h-px
                  w-6
                  shrink-0
                  bg-[#7890b2]
                  opacity-75
                "
              />

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
                Authentication, authorization, permissions &amp; security
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                text-[28px]
                font-extrabold
                leading-[1.25]
                tracking-[-0.03em]
                text-[#091127]

                sm:text-[30px]
                sm:leading-9
              "
            >
              Account numbers are masked, and
              <br className="hidden sm:block" />
              secrets never reach the interface.
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
              A bank connection permission does not automatically grant the
              right to reconcile, override or export.
            </p>

            {/* SECURITY LIST */}
            <div className="mt-1.5 flex w-full flex-col">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="
                    grid
                    min-h-16
                    w-full
                    grid-cols-[17px_110px_1fr]
                    items-start
                    gap-0
                    py-2
                  "
                >
                  {/* BULLET */}
                  <div className="flex pt-2">
                    <span className="size-1.5 rounded-[2px] bg-[#5279a8]" />
                  </div>

                  {/* TITLE */}
                  <div className="pr-3 pt-1">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-bold
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.title}
                    </p>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="pt-1">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
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
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              lg:w-[calc(50%-20px)]
              lg:max-w-[589px]
              lg:flex-1
            "
          >
            <div className="relative aspect-[589/574] w-full">
              <Image
                src="/images/banking-and-reconciliation/bank-connection-security.png"
                alt="Bank connection authentication, authorization and security controls"
                fill
                className="object-cover"
                sizes="
                  (max-width: 1023px) 100vw,
                  50vw
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}