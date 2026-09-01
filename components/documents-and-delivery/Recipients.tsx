"use client";

import Link from "next/link";

const contactPurposes = [
  {
    title: "Billing contact",
    description:
      "Receives invoices, credit notes and statements as routine billing correspondence.",
  },
  {
    title: "Finance contact",
    description:
      "Receives finance-facing documents where that separation is configured.",
  },
  {
    title: "Legal contact",
    description:
      "Receives documents that your policy routes to a legal recipient.",
  },
  {
    title: "Delivery contact",
    description:
      "A destination used specifically for document transport rather than commercial dialogue.",
  },
  {
    title: "Escalation contact",
    description:
      "Used when the primary route fails or a follow-up escalates.",
  },
  {
    title: "Fallback endpoint",
    description:
      "An alternate approved destination, used only where it has been configured.",
  },
];

const endpointTypes = [
  {
    title: "Email address",
    description:
      "The most common route, with provider evidence that varies by provider.",
  },
  {
    title: "Postal address",
    description:
      "Where a print or postal route is supported for that document and market.",
  },
  {
    title: "Portal identity",
    description:
      "A customer identity that documents are published to rather than sent at.",
  },
  {
    title: "API endpoint",
    description:
      "A system destination for programmatic document handoff.",
  },
  {
    title: "Other approved route",
    description:
      "Any additional channel that has been verified for your configuration.",
  },
];

const recordedPerEndpoint = [
  {
    title: "Authority and consent",
    description:
      "Whether this recipient is permitted to receive this class of document.",
  },
  {
    title: "Verification state",
    description:
      "Whether the endpoint itself has been verified, where verification applies.",
  },
  {
    title: "Language and channel preference",
    description:
      "The preferred document language and route for this recipient.",
  },
  {
    title: "Effective dates and status",
    description:
      "When the endpoint is valid, and whether it is currently active.",
  },
  {
    title: "Source",
    description:
      "Where the endpoint came from — manual entry, import or an approved integration.",
  },
];

export default function Recipients() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-28 xl:py-24">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-9">
          {/* Hero */}
          <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-end lg:gap-16">
            <div className="flex w-full flex-1 flex-col items-start gap-5 pt-2.5 pb-5">
              <div className="relative h-4 w-28">
                <div className="absolute left-0 top-[7.94px] h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

                <div className="absolute left-[30px] top-[-1px] whitespace-nowrap text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                  Recipients
                </div>
              </div>

              <div className="w-full max-w-[638px]">
                <h2 className="text-4xl font-medium leading-tight text-sky-950 sm:text-5xl sm:leading-[53.82px]">
                  Who receives it, where,
                  <br className="hidden sm:block" />
                  and on what authority.
                </h2>
              </div>
            </div>

            <div className="w-full max-w-[529px]">
              <p className="text-base font-normal leading-8 text-color-azure-35">
                A contact is never automatically authorized for every
                document. Purpose, authority and verification are separate
                attributes.
              </p>
            </div>
          </div>

          {/* Contact purpose label */}
          <div className="relative h-16 w-40">
            <div className="absolute left-0 top-[23.93px] h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

            <div className="absolute left-[30px] top-[15px] whitespace-nowrap text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
              Contact purpose
            </div>
          </div>

          {/* Contact purpose cards */}
          <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl bg-zinc-200 outline outline-1 outline-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {contactPurposes.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[170px] flex-col items-start gap-1.5 bg-white px-5 pt-5 pb-6"
              >
                <div className="w-full pb-1">
                  <h3 className="text-sm font-semibold leading-6 text-sky-950">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm font-normal leading-5 text-color-azure-35">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Two-column information */}
          <div className="flex w-full flex-col items-start gap-12 pt-4 lg:flex-row lg:gap-16">
            {/* Endpoint types */}
            <div className="flex w-full max-w-[526px] flex-col items-start gap-1.5">
              <div className="w-full">
                <h3 className="text-lg font-semibold leading-6 text-sky-950">
                  Endpoint types
                </h3>
              </div>

              <div className="flex w-full flex-col">
                {endpointTypes.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex w-full flex-col gap-3 py-4 sm:flex-row sm:items-start sm:gap-6 ${
                      index !== endpointTypes.length - 1
                        ? "border-b border-color-grey-93-4"
                        : ""
                    }`}
                  >
                    <div className="w-full shrink-0 sm:w-36">
                      <h4 className="text-sm font-semibold leading-6 text-sky-950">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-normal leading-6 text-color-azure-35">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is recorded */}
            <div className="flex w-full max-w-[526px] flex-col items-start gap-1.5">
              <div className="w-full">
                <h3 className="text-lg font-semibold leading-6 text-sky-950">
                  What is recorded per endpoint
                </h3>
              </div>

              <div className="flex w-full flex-col">
                {recordedPerEndpoint.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex w-full flex-col gap-3 py-4 sm:flex-row sm:items-start sm:gap-6 ${
                      index !== recordedPerEndpoint.length - 1
                        ? "border-b border-color-grey-93-4"
                        : ""
                    }`}
                  >
                    <div className="w-full shrink-0 sm:w-36">
                      <h4 className="text-sm font-semibold leading-6 text-sky-950">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-normal leading-6 text-color-azure-35">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recipient boundary */}
              <div className="mt-2 w-full rounded-tr-2xl rounded-br-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-7 py-7">
                <div className="flex flex-col items-start gap-2">
                  <div className="w-full">
                    <div className="text-[9.9px] font-normal uppercase leading-4 tracking-wide text-color-azure-44">
                      Recipient boundary
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="text-sm font-normal leading-7 text-sky-950">
                      Address or email validation does not prove legal identity
                      or receipt. It confirms an endpoint is well-formed and,
                      where supported, reachable — nothing about who is behind
                      it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center pt-4">
            <Link
              href="/customer-records"
              className="inline-flex h-11 min-w-[220px] items-center justify-center rounded-lg border border-sky-950 bg-sky-950 px-5 py-2.5 text-base font-normal leading-6 text-white no-underline transition-opacity hover:opacity-90"
            >
              <span className="whitespace-nowrap text-center text-white">
                Explore Customer Records
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}