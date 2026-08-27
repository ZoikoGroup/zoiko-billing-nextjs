"use client";

import Link from "next/link";

const channels = [
  {
    icon: "@",
    name: "Email",
    description:
      "Sends the artifact or a secure link to a verified email endpoint through an approved provider.",
    evidence: "Provider delivery evidence",
    evidenceTone: "cyan",
  },
  {
    icon: "P",
    name: "Secure portal",
    description:
      "Publishes the artifact to an approved portal identity rather than transmitting it outward.",
    evidence: "Publication and access events",
    evidenceTone: "cyan",
  },
  {
    icon: "↓",
    name: "Download",
    description:
      "Provides authorized retrieval of the artifact by a permitted recipient or user.",
    evidence: "Download event only",
    evidenceTone: "orange",
  },
  {
    icon: "{ }",
    name: "API",
    description:
      "Hands the artifact or its reference to a system destination for programmatic handling.",
    evidence: "Acceptance by endpoint",
    evidenceTone: "orange",
  },
  {
    icon: "N",
    name: "Network route",
    description:
      "Uses an approved document or e-invoicing network, where one is verified for that market.",
    evidence: "Network-specific, varies",
    evidenceTone: "orange",
  },
  {
    icon: "✉",
    name: "Print or postal",
    description:
      "Routes the artifact to a print or postal provider, where that is supported for the market.",
    evidence: "Handoff only, no receipt",
    evidenceTone: "neutral",
  },
];

const deliveryStates = [
  {
    state: "Prepared",
    symbol: "i",
    tone: "blue",
    meaning:
      "Recipient, endpoint, artifact and channel are all resolved.",
    evidence: "Release decision and idempotency context.",
  },
  {
    state: "Queued",
    symbol: "–",
    tone: "neutral",
    meaning: "The attempt awaits provider processing.",
    evidence: "Queue time, provider and cancellation rules.",
  },
  {
    state: "Submitted / sent",
    symbol: "›",
    tone: "azure",
    meaning:
      "The provider accepted or transmitted the request under its semantics.",
    evidence: "Provider reference and timestamp. No delivery claim.",
  },
  {
    state: "Published",
    symbol: "›",
    tone: "azure",
    meaning:
      "The artifact is available in an approved portal or endpoint.",
    evidence: "Publication target, access policy and time.",
  },
  {
    state: "Delivered where verified",
    symbol: "✓",
    tone: "success",
    meaning:
      "Approved provider evidence indicates delivery, within its documented meaning.",
    evidence: "Evidence type, timestamp, provider and its limitation.",
  },
  {
    state: "Opened / downloaded",
    symbol: "✓",
    tone: "success",
    meaning:
      "An access event was recorded, where the channel supports it.",
    evidence: "Event source and limitation. No acceptance claim.",
  },
  {
    state: "Bounced / rejected",
    symbol: "!",
    tone: "error",
    meaning:
      "The provider or recipient endpoint refused the attempt.",
    evidence: "Reason, endpoint and the correction or retry path.",
  },
  {
    state: "Failed",
    symbol: "!",
    tone: "error",
    meaning: "The attempt did not complete successfully.",
    evidence: "Error class, retryability, owner and next action.",
  },
  {
    state: "Unknown / unconfirmed",
    symbol: "–",
    tone: "neutral",
    meaning: "No reliable final result is available.",
    evidence: "Provider reference, elapsed time and review path.",
  },
  {
    state: "Canceled / expired",
    symbol: "–",
    tone: "neutral",
    meaning:
      "Authorized policy ended the attempt or the access window.",
    evidence: "Actor or service, reason, time and completed effects.",
  },
];

function EvidenceBadge({
  text,
  tone,
}: {
  text: string;
  tone: "cyan" | "orange" | "neutral";
}) {
  const toneClasses = {
    cyan: "bg-[#f1fbfc] border-[#c8edef] !text-[#178b96]",
    orange: "bg-[#fff8ee] border-[#f2dfbf] !text-[#a86a16]",
    neutral: "bg-[#f7f8fa] border-[#dfe5ee] !text-[#5d7192]",
  };

  return (
    <span
      className={`
        inline-flex
        max-w-full
        items-center
        rounded-full
        border
        px-2.5
        py-1
        font-mono
        text-[10px]
        leading-4
        ${toneClasses[tone]}
      `}
    >
      {text}
    </span>
  );
}

function StateBadge({
  state,
  symbol,
  tone,
}: {
  state: string;
  symbol: string;
  tone: string;
}) {
  const toneClasses: Record<string, string> = {
    blue: "bg-[#f5f8fc] border-[#dfe5ee] !text-[#3564a3]",
    neutral: "bg-[#f7f8fa] border-[#dfe5ee] !text-[#5d7192]",
    azure: "bg-[#f5f9fc] border-[#d7e5f0] !text-[#3d6d9d]",
    success: "bg-[#f5f9f8] border-[#d7e8e3] !text-[#3d7d72]",
    error: "bg-[#fff5f5] border-[#f0cccc] !text-[#bd4747]",
  };

  return (
    <span
      className={`
        inline-flex
        max-w-full
        items-center
        gap-2
        rounded-full
        border
        px-2.5
        py-1
        font-mono
        text-[10px]
        font-medium
        uppercase
        leading-4
        tracking-wide
        ${toneClasses[tone]}
      `}
    >
      <span className="text-xs">{symbol}</span>
      <span>{state}</span>
    </span>
  );
}

export default function Channels() {
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
              flex-col
              items-start
              gap-5
              text-left
              lg:flex-row
              lg:items-end
              lg:justify-between
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
                pt-2.5
                pb-5
                lg:max-w-[640px]
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
                <span className="h-px w-5 shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500" />

                <span
                  className="
                    font-mono
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    !text-[#587da9]
                    sm:text-xs
                  "
                >
                  Channels
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  w-full
                  max-w-[638px]
                  !text-[30px]
                  !font-extrabold
                  !leading-[1.2]
                  !tracking-[-0.035em]
                  !text-[#091127]
                  sm:!text-[34px]
                  md:!text-[38px]
                  lg:!text-[40px]
                "
              >
                Use each channel
                <br className="hidden sm:block" />
                according to the
                <br className="hidden sm:block" />
                evidence it can provide.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                flex-1
                lg:max-w-[529px]
              "
            >
              <p
                className="
                  !m-0
                  max-w-[529px]
                  text-[15px]
                  font-normal
                  leading-7
                  !text-[#5d7192]
                  sm:text-base
                "
              >
                Channels are not interchangeable. They differ in what they
                transport, what they can confirm, and what they can never tell
                you.
              </p>
            </div>
          </div>

          {/* CHANNEL CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {channels.map((channel) => (
              <article
                key={channel.name}
                className="
                  flex
                  min-h-[208px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_2px_8px_rgba(15,23,42,0.025)]
                "
              >
                {/* CHANNEL HEADER */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="
                      flex
                      size-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#d7e2ef]
                      bg-[#f5f7fa]
                      font-mono
                      text-[10px]
                      font-semibold
                      leading-4
                      !text-[#587da9]
                    "
                  >
                    {channel.icon}
                  </div>

                  <h3
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-5
                      !text-[#091127]
                    "
                  >
                    {channel.name}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-4
                    text-sm
                    leading-5
                    !text-[#5d7192]
                  "
                >
                  {channel.description}
                </p>

                {/* EVIDENCE */}
                <div
                  className="
                    mt-auto
                    border-t
                    border-[#edf0f4]
                    pt-3
                  "
                >
                  <p
                    className="
                      !m-0
                      mb-2
                      font-mono
                      text-[9px]
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      !text-[#7890b2]
                    "
                  >
                    Evidence available
                  </p>

                  <EvidenceBadge
                    text={channel.evidence}
                    tone={
                      channel.evidenceTone as
                        | "cyan"
                        | "orange"
                        | "neutral"
                    }
                  />
                </div>
              </article>
            ))}
          </div>

          {/* DELIVERY STATES */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
            "
          >
            {/* TABLE TITLE */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#f5f7f9]
                px-5
                py-3.5
              "
            >
              <p
                className="
                  !m-0
                  font-mono
                  text-[10px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  !text-[#5d7192]
                "
              >
                Delivery-attempt states, with required evidence
              </p>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[240px_minmax(0,1.05fr)_minmax(0,0.78fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-3.5 py-2">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      uppercase
                      leading-4
                      tracking-wide
                      !text-[#7890b2]
                    "
                  >
                    State
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-3.5 py-2">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      uppercase
                      leading-4
                      tracking-wide
                      !text-[#7890b2]
                    "
                  >
                    Meaning
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-3.5 py-2">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      uppercase
                      leading-4
                      tracking-wide
                      !text-[#7890b2]
                    "
                  >
                    Evidence or recovery
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {deliveryStates.map((item, index) => (
                <div
                  key={item.state}
                  className={`
                    grid
                    grid-cols-[240px_minmax(0,1.05fr)_minmax(0,0.78fr)]
                    ${
                      index !== deliveryStates.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-3.5 py-2.5">
                    <StateBadge
                      state={item.state}
                      symbol={item.symbol}
                      tone={item.tone}
                    />
                  </div>

                  <div className="px-3.5 py-3">
                    <p
                      className="
                        !m-0
                        text-sm
                        leading-5
                        !text-[#091127]
                      "
                    >
                      {item.meaning}
                    </p>
                  </div>

                  <div className="px-3.5 py-3">
                    <p
                      className="
                        !m-0
                        text-sm
                        leading-5
                        !text-[#091127]
                      "
                    >
                      {item.evidence}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE TABLE CARDS */}
            <div className="flex flex-col md:hidden">
              {deliveryStates.map((item, index) => (
                <div
                  key={item.state}
                  className={`
                    p-5
                    ${
                      index !== deliveryStates.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        mb-2
                        font-mono
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        !text-[#7890b2]
                      "
                    >
                      State
                    </p>

                    <StateBadge
                      state={item.state}
                      symbol={item.symbol}
                      tone={item.tone}
                    />
                  </div>

                  {/* MEANING */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        mb-1.5
                        font-mono
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        !text-[#7890b2]
                      "
                    >
                      Meaning
                    </p>

                    <p
                      className="
                        !m-0
                        text-sm
                        leading-6
                        !text-[#5d7192]
                      "
                    >
                      {item.meaning}
                    </p>
                  </div>

                  {/* EVIDENCE */}
                  <div>
                    <p
                      className="
                        !m-0
                        mb-1.5
                        font-mono
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        !text-[#7890b2]
                      "
                    >
                      Evidence or recovery
                    </p>

                    <p
                      className="
                        !m-0
                        text-sm
                        leading-6
                        !text-[#5d7192]
                      "
                    >
                      {item.evidence}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CHANNEL BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#4b82c4]
              bg-[#f1f4f7]
              px-5
              py-7
              sm:px-7
              sm:py-8
            "
          >
            <p
              className="
                !m-0
                font-mono
                text-[10px]
                uppercase
                leading-4
                tracking-wide
                !text-[#587da9]
              "
            >
              Channel boundary
            </p>

            <p
              className="
                !m-0
                mt-2
                max-w-[761px]
                text-[15px]
                font-normal
                leading-7
                !text-[#091127]
                sm:text-base
              "
            >
              Sent is not proof of delivery, and delivery is not proof of
              reading or acceptance. Channels do not all provide the same
              evidence, and availability, rate and size limits differ between
              them.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center">
            <Link
              href="#verified-providers"
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
                !text-white
                text-base
                font-normal
                leading-6
                transition-opacity
                hover:opacity-90
              "
            >
              <span className="!text-white">See verified providers</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}