import Image from "next/image";
import Link from "next/link";

interface StageItem {
  stageNumber: number;
  title: string;
  description: string;
}

const stages: StageItem[] = [
  {
    stageNumber: 1,
    title: "Producer",
    description: "A billing lifecycle change occurs on a governed record.",
  },
  {
    stageNumber: 2,
    title: "Event boundary",
    description: "The event is emitted per {webhooks_spec}.",
  },
  {
    stageNumber: 3,
    title: "Endpoint",
    description: "Your receiver validates authenticity before acting.",
  },
  {
    stageNumber: 4,
    title: "Acknowledgement",
    description: "Receipt recorded — not proof of business finality.",
  },
  {
    stageNumber: 5,
    title: "Retry / exception",
    description:
      "Behavior per product policy, shown only once verified.",
  },
];

export default function EventsWebhooksSection() {
  return (
    <section id="sdks-webhooks" className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-16
          sm:px-8
          sm:py-20
          md:px-10
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
            gap-10
            sm:gap-12
          "
        >
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
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
                Events &amp; Webhooks Boundary
              </span>
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                !font-[family-name:var(--font-jakarta)]
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
              React to billing events without polling <br className="hidden sm:inline" />
              every record.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Where event delivery is supported, integrations can respond to
              defined billing lifecycle changes. Exact event types, payloads,
              delivery guarantees, signatures, retry behavior, ordering and
              replay behavior come from the Webhooks specification.
            </p>
          </div>

          {/* DESKTOP REFERENCE IMAGE (MATCHING SCREENSHOT) */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              lg:block
            "
          >
            <Image
              src="/images/developers/dao4.png"
              alt="React to billing events without polling every record"
              width={1240}
              height={460}
              priority
              className="h-auto w-full object-cover"
              sizes="1240px"
            />
          </div>

          {/* MOBILE / TABLET CONTENT */}
          <div className="block w-full space-y-6 lg:hidden">
            {/* WEBHOOK FLOW */}
            <div className="grid w-full grid-cols-1 gap-5 text-left md:grid-cols-2">
              {stages.map((stage) => (
                <div
                  key={stage.stageNumber}
                  className="
                    flex
                    min-h-[180px]
                    flex-col
                    rounded-2xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    p-5
                    shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                    sm:p-6
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Stage {stage.stageNumber}
                  </span>

                  <h3
                    className="
                      !m-0
                      mt-2
                      !font-[family-name:var(--font-jakarta)]
                      text-base
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {stage.title}
                  </h3>

                  <p
                    className="
                      !m-0
                      mt-2
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {stage.stageNumber === 2 ? (
                      <>
                        The event is emitted per{" "}
                        <code
                          className="
                            rounded-md
                            border
                            border-[#dfe5ee]
                            bg-[#f7f8fa]
                            px-1.5
                            py-0.5
                            font-mono
                            text-[10px]
                            text-[#7890b2]
                          "
                        >
                          {"{webhooks_spec}"}
                        </code>
                      </>
                    ) : stage.stageNumber === 4 ? (
                      <>
                        Receipt recorded —{" "}
                        <span className="font-bold text-[#091127]">
                          not proof of business finality
                        </span>
                        .
                      </>
                    ) : (
                      stage.description
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* FAILURE STATES */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                text-left
                shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                sm:p-6
              "
            >
              <h3
                className="
                  !m-0
                  !font-[family-name:var(--font-jakarta)]
                  text-base
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Failure states, shown only where policy supports them
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Endpoint unavailable", "Signature failure", "Retry scheduled", "Delivery exhausted", "Manual review"].map((label) => (
                  <span
                    key={label}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-md
                      border
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                      px-2.5
                      py-1.5
                      text-[11px]
                      font-medium
                      text-[#5d7192]
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-sm bg-[#7890b2]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* DELIVERY SEMANTICS */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                text-left
                shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                sm:p-6
              "
            >
              <h3
                className="
                  !m-0
                  !font-[family-name:var(--font-jakarta)]
                  text-base
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Delivery semantics are not assumed
              </h3>

              <p
                className="
                  !m-0
                  mt-2
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Retries, ordering and replay are labeled only after engineering
                verification.{" "}
                <span className="font-bold text-[#091127]">
                  Exactly-once delivery is never implied.
                </span>
              </p>

              <Link
                href="/developers-webhooks"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-1
                  text-xs
                  font-semibold
                  text-[#1D70F5]
                  transition-colors
                  hover:underline
                "
              >
                Webhooks <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}