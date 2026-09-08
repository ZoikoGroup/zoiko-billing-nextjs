'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ServiceFeature {
  id: string;
  title: string;
  description: string;
}

const SERVICE_FEATURES: ServiceFeature[] = [
  {
    id: 'dedicated-identity',
    title: 'Dedicated identity',
    description:
      'A named service identity per integration or workflow, not a shared user account or password.',
  },
  {
    id: 'minimum-scope',
    title: 'Minimum scope',
    description:
      'Only the connector and action scopes the integration actually needs.',
  },
  {
    id: 'credential-lifecycle',
    title: 'Credential lifecycle',
    description:
      'Tokens and credentials are issued, stored and rotated through approved systems.',
  },
  {
    id: 'initiating-context',
    title: 'Initiating context retained',
    description:
      'The workflow or user that caused the action stays attached to the record.',
  },
  {
    id: 'rate-limits',
    title: 'Rate and volume limits',
    description:
      'Rate, volume, entity and action limits constrain what a service can do.',
  },
  {
    id: 'revocation-rotation',
    title: 'Revocation and rotation',
    description:
      'Credentials can be rotated or revoked, with defined failure handling.',
  },
  {
    id: 'identity-providers',
    title: 'Identity providers',
    description:
      'Approved identity-provider participation only, with behaviour varying by integration.',
  },
  {
    id: 'zoiko-one',
    title: 'Zoiko One participation',
    description:
      'Shared identity and approved handoffs where enabled. Zoiko Billing stays independently deployable.',
  },
];

const CONNECTOR_TAGS = [
  'Payment Providers',
  'Accounting & ERP',
  'CRM Platforms',
  'Authentication',
];

export default function ServiceIdentitiesSection() {
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
                Service identities
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
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
              Machines get accountability too.
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
              Integrations and workflows act under dedicated service
              identities with their own scopes, limits and evidence — never a
              shared human login.
            </p>
          </div>

          {/* SERVICE FEATURES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {SERVICE_FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="
                  flex
                  min-h-[160px]
                  flex-col
                  gap-2
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <h3
                  className="
                    !m-0
                    text-sm
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CONNECTOR INFORMATION */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-8

              lg:grid-cols-2
              lg:items-center
              lg:gap-11
            "
          >
            {/* CONTENT */}
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]

                    sm:text-lg
                  "
                >
                  Where service identities operate
                </h3>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]

                    sm:text-base
                    sm:leading-7
                  "
                >
                  Each connector declares the scopes it needs, and each action
                  it takes is attributable back to the service identity and the
                  context that triggered it.
                </p>
              </div>

              {/* CONNECTOR TAGS */}
              <div className="flex flex-wrap gap-2">
                {CONNECTOR_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-3.5
                      py-1.5
                      text-xs
                      font-medium
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  pt-1
                "
              >
                <Link
                  href="/integration-availability"
                  className="
                    inline-flex
                    min-h-[44px]
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#091127]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    !text-white
                    transition-opacity
                    hover:opacity-90
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#091127]
                    focus:ring-offset-2
                  "
                >
                  Explore integrations
                </Link>

                <Link
                  href="/zoiko-billing-plus-zoiko-one"
                  className="
                    inline-flex
                    min-h-[44px]
                    items-center
                    justify-center
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#5d7192]
                    transition-colors
                    hover:text-[#091127]
                  "
                >
                  Zoiko One
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                relative
                aspect-[4/3]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <Image
                src="/images/roles-and-approvals/div.revcard (3).png"
                alt="Service identities architecture and scope diagram"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* MACHINE ACCESS BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              p-5

              sm:p-6

              md:p-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]
              "
            >
              Machine-access boundary
            </span>

            <p
              className="
                !m-0
                w-full
                max-w-4xl
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-base
                sm:leading-7
              "
            >
              Secrets are never exposed and machine access is never
              unrestricted. Connector and identity-provider behaviour varies
              by integration and is stated in the governed integration
              registry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}