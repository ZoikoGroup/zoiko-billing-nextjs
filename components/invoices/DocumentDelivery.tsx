const deliveryStates = [
  {
    symbol: "–",
    title: "Queued",
    description:
      "Accepted for processing but not yet rendered or sent.",
    tone: "neutral",
  },
  {
    symbol: "›",
    title: "Rendering",
    description:
      "The approved template is being generated for this document.",
    tone: "active",
  },
  {
    symbol: "i",
    title: "Ready",
    description:
      "Rendered and available, awaiting the configured channel.",
    tone: "ready",
  },
  {
    symbol: "›",
    title: "Sent",
    description:
      "Handed to the provider or channel. This is not proof of receipt.",
    tone: "active",
  },
  {
    symbol: "✓",
    title: "Delivered where verified",
    description:
      "The provider confirmed delivery. Recorded only when actually verified.",
    tone: "success",
  },
  {
    symbol: "!",
    title: "Failed",
    description:
      "The attempt did not complete. Retry, alternate channel or manual recovery applies.",
    tone: "error",
  },
  {
    symbol: "!",
    title: "Bounced",
    description:
      "The recipient endpoint rejected the message on delivery.",
    tone: "error",
  },
  {
    symbol: "!",
    title: "Rejected",
    description:
      "The provider or recipient system refused to accept the document.",
    tone: "error",
  },
  {
    symbol: "–",
    title: "Unknown",
    description:
      "No verified outcome is available. Shown as unknown rather than assumed.",
    tone: "neutral",
  },
];

const recoveryItems = [
  {
    title: "Retry under policy",
    description:
      "Automatic retry where the failure class allows it, without duplicate issue.",
  },
  {
    title: "Alternate channel",
    description:
      "Fall back to another approved channel where one is configured.",
  },
  {
    title: "Resend",
    description:
      "Resend the issued document without altering its content or number.",
  },
  {
    title: "Manual recovery",
    description:
      "Route to an owner when automated recovery is not appropriate.",
  },
  {
    title: "Timestamped evidence",
    description:
      "Delivery timestamps are recorded only when the outcome is verified.",
  },
  {
    title: "Recipient protection",
    description:
      "Sensitive content and recipient data are protected in transit and in logs.",
  },
];

const toneClasses = {
  neutral: "border-[#dfe5ee] bg-[#f7f8fa]",
  active: "border-[#c8dbe7] bg-[#f7f8fa]",
  ready: "border-[#d8dfe5] bg-[#f4f5f6]",
  success: "border-[#c7d9d3] bg-[#f1f5f3]",
  error: "border-[#e4caca] bg-[#f8f3f3]",
};

export default function DocumentDelivery() {
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
            max-w-[1220px]
            flex-col
            items-start
            gap-8

            sm:gap-9
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8

              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2
                pb-2

                lg:pb-5
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27c7d9]
                    to-[#5c83aa]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#5c83aa]

                    sm:text-xs
                  "
                >
                  Delivery
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[34px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#091127]

                  sm:text-[40px]

                  md:text-[44px]

                  lg:text-[48px]
                "
              >
                Separate issue, sending and verified delivery.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                  sm:leading-8
                "
              >
                Three different facts that are often collapsed into one. A
                document can be issued and never sent, or sent and never
                delivered.
              </p>
            </div>
          </div>

          {/* DELIVERY STATE FLOW */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#e5e7eb]
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-px
                pt-1

                sm:grid-cols-2

                lg:grid-cols-3

                xl:grid-cols-9
              "
            >
              {deliveryStates.map((state) => (
                <div
                  key={state.title}
                  className="
                    flex
                    min-h-[142px]
                    flex-col
                    items-start
                    gap-2
                    bg-white
                    p-5
                  "
                >
                  <div
                    className={`
                      flex
                      min-h-8
                      items-center
                      rounded-full
                      border
                      px-3
                      ${toneClasses[state.tone as keyof typeof toneClasses]}
                    `}
                  >
                    <span
                      className="
                        mr-2
                        text-xs
                        font-medium
                        leading-4
                        text-[#5d7192]
                      "
                    >
                      {state.symbol}
                    </span>

                    <span
                      className="
                        text-xs
                        font-medium
                        uppercase
                        leading-5
                        tracking-[0.08em]
                        text-[#5d7192]
                      "
                    >
                      {state.title}
                    </span>
                  </div>

                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {state.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RECOVERY + IMAGE */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-10
              pt-3

              lg:flex-row
              lg:gap-12

              xl:gap-16
            "
          >
            {/* RECOVERY */}
            <div className="w-full flex-1">
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                Recovery and evidence
              </h3>

              <div className="mt-3 flex w-full flex-col">
                {recoveryItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`
                      flex
                      w-full
                      flex-col
                      gap-2
                      py-4

                      sm:flex-row
                      sm:items-start
                      sm:gap-6

                      ${
                        index !== recoveryItems.length - 1
                          ? "border-b border-[#dfe5ee]"
                          : ""
                      }
                    `}
                  >
                    <div className="w-full shrink-0 sm:w-[145px]">
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    <p
                      className="
                        !m-0
                        flex-1
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_4px_14px_rgba(14,33,27,0.04),0_1px_2px_rgba(14,33,27,0.05)]

                lg:max-w-[526px]
              "
            >
              <img
                src="/images/invoices/delivery-recovery.png"
                alt="Delivery recovery and evidence"
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* DELIVERY BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#5c83aa]
              bg-[#f7f8fa]
              px-5
              py-7

              sm:px-6

              md:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-normal
                uppercase
                leading-4
                tracking-[0.08em]
                text-[#5c83aa]
              "
            >
              Delivery boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-6
                text-[#091127]

                sm:text-base
                sm:leading-7
              "
            >
              A sent state is not proof of delivery or receipt. Zoiko Billing
              publishes no universal provider support and no delivery
              guarantee; available channels and verification depend on your
              configuration and provider.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full items-center">
            <a
              href="#documents-delivery"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-sm
                font-normal
                leading-6
                text-white
                transition-opacity
                hover:opacity-90
              "
            >
              Explore Documents &amp; Delivery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}