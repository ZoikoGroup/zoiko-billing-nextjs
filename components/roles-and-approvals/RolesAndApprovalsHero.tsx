'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RolesAndApprovalsHero() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        
        {/* Left Copy & Action Column */}
        <div className="flex w-full flex-col gap-6 lg:max-w-xl">
          
          {/* Tag / Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wider text-blue-600">
              Roles &amp; Approvals
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-['Plus_Jakarta_Sans'] text-4xl font-medium leading-tight text-sky-950 sm:text-5xl md:text-6xl md:leading-[1.1]">
            Make sensitive billing actions{' '}
            <span className="text-blue-600">
              reviewable and attributable.
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Zoiko Billing helps define who may view, prepare, approve, execute,
            and audit billing actions, using scoped roles, explicit
            permissions, review policies, delegated authority, and durable
            evidence.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/signup"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 font-['Segoe_UI'] text-base font-normal text-white transition-colors hover:bg-blue-700"
            >
              Create Account
            </Link>

            <Link
              href="/demo"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-zinc-200 px-5 py-2.5 font-['Segoe_UI'] text-base font-normal text-sky-950 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              Book a Demo
            </Link>
          </div>

        </div>

        {/* Right Preview Card / Visual Column */}
        <div className="relative w-full overflow-hidden  p-6 sm:p-7 lg:max-w-xl">
          
          {/* Subtle Background Glow Accent */}
          <div 
            className="pointer-events-none absolute inset-0 opacity-20 " 
            aria-hidden="true" 
          />

          {/* Hero Image Container */}
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0px_22px_50px_-20px_rgba(14,33,27,0.24),0px_2px_6px_0px_rgba(14,33,27,0.06)]">
            <Image
              src="/images/roles-and-approvals/hero-roles.png"
              alt="Roles and Approvals interface dashboard preview"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}