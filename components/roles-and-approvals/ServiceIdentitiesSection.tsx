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
    <section className="w-full bg-white px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[28px] bg-slate-950 px-6 py-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)] sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:gap-16">
              <div className="flex max-w-2xl flex-col gap-4">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wider text-cyan-300">
                    Service identities
                  </span>
                </div>

                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                  Machines get accountability too.
                </h2>
              </div>

              <p className="max-w-md font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
                Integrations and workflows act under dedicated service
                identities with their own scopes, limits and evidence - never a
                shared human login.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition-colors hover:border-cyan-400/40 hover:bg-white/[0.07]"
                >
                  <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="font-['Segoe_UI'] text-xs font-normal leading-relaxed text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-white">
                    Where service identities operate
                  </h3>
                  <p className="font-['Segoe_UI'] text-sm font-normal leading-relaxed text-slate-300">
                    Each connector declares the scopes it needs, and each action
                    it takes is attributable back to the service identity and
                    the context that triggered it.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {CONNECTOR_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-['IBM_Plex_Mono'] text-xs font-normal text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/integrations"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-5 py-2.5 font-['Segoe_UI'] text-slate-900 transition-colors hover:bg-slate-100"
                  >
                    Explore integrations
                  </Link>

                  <Link
                    href="/zoiko-one"
                    className="inline-flex items-center gap-1.5 font-['Segoe_UI'] text-base font-normal text-cyan-300 transition-colors hover:text-cyan-200 focus:outline-none"
                  >
                    Zoiko One
                    <span className="font-['IBM_Plex_Mono'] font-bold">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04),0px_1px_2px_0px_rgba(14,33,27,0.05)]">
                <Image
                  src="/images/roles-and-approvals/div.revcard (3).png"
                  alt="Service identities architecture and scope diagram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 rounded-r-2xl border-l-[3px] border-cyan-400 bg-white/5 p-6 sm:p-7">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-normal uppercase tracking-wide text-cyan-300">
                Machine-access boundary
              </span>
              <p className="max-w-4xl font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-200">
                Secrets are never exposed and machine access is never
                unrestricted. Connector and identity-provider behaviour varies
                by integration and is stated in the governed integration
                registry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
