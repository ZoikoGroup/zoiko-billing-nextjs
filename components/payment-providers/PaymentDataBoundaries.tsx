import Image from "next/image";

const boundaries = [
  {
    title: "Payment method type",
    description:
      "— a registered high-level type where provider capability supports it, never inferred from a provider name or country.",
  },
  {
    title: "Provider customer reference",
    description:
      "— an external opaque reference, not proof of identity or account ownership.",
  },
  {
    title: "Instrument token",
    description:
      "— an opaque provider-issued reference; raw secret values are never exposed unnecessarily.",
  },
  {
    title: "Masked descriptor",
    description:
      "— provider-returned display metadata only where safe and authorized, and never reconstructed into a credential.",
  },
  {
    title: "Billing address context",
    description:
      "— only the minimum the workflow requires.",
  },
  {
    title: "Verification result",
    description:
      "— a provider result or reference, never relabeled as a universal fraud or identity decision.",
  },
  {
    title: "Sensitive credentials",
    description:
      "— avoided unless an explicit architecture and security authority requires otherwise.",
  },
];

export default function PaymentDataBoundaries() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
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
            gap-10

            lg:flex-row
            lg:items-center
            lg:gap-12

            xl:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full min-w-0 flex-1">
            <div
              className="
                flex
                flex-col
                items-start
                gap-3.5
                pt-2
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
                    tracking-[0.16em]
                    text-[#7890b2]

                    sm:text-xs
                    sm:tracking-[0.18em]
                  "
                >
                  Payment methods, instruments, tokens &amp; data boundaries
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  !text-[30px]
                  !font-extrabold
                  !leading-[1.2]
                  !tracking-[-0.03em]
                  !text-[#091127]

                  sm:!text-[34px]

                  md:!text-[36px]
                "
              >
                References and tokens, not card data.
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
                Provider-issued opaque references are used where the
                architecture supports them. There is no claim that Zoiko
                Billing stores card numbers or eliminates your obligations or
                the provider&apos;s.
              </p>

              {/* BOUNDARIES */}
              <div className="mt-1.5 flex w-full flex-col">
                {boundaries.map((item) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      w-full
                      items-start
                      gap-3
                      py-3

                      sm:gap-4
                      sm:py-3.5
                    "
                  >
                    {/* BULLET */}
                    <span
                      className="
                        mt-[9px]
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

                          sm:mr-2
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

          {/* RIGHT IMAGE */}
          <div
            className="
              w-full
              flex-1

              lg:max-w-[589px]
            "
          >
            <div
              className="
                relative
                aspect-[589/445]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
              "
            >
              <Image
                src="/images/payment-providers/data.png"
                alt="Payment methods, instruments, tokens and data boundaries"
                fill
                className="object-cover"
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 90vw,
                  (max-width: 1279px) 44vw,
                  589px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}