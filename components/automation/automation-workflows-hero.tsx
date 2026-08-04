import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AutomationWorkflowsHero() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col items-start space-y-6 lg:col-span-6">
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-sky-600">
              Automation & Workflows
            </span>
          </div>

          <h1 className="text-4xl font-medium leading-tight tracking-tight font-sans sm:text-5xl lg:text-6xl">
            <span className="text-sky-950">Automate repeatable billing work </span>
            <span className="text-sky-600">without losing control.</span>
          </h1>

          <p className="max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Zoiko Billing supports explicit rules, reminders, assignments and review
            steps around billing events, with clear triggers, permitted actions,
            owners, exception paths and audit history.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#create-account"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-base font-medium !text-white shadow-sm transition-colors hover:bg-sky-500 hover:!text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Create Account
            </Link>
            <Link
              href="#book-demo"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-base font-medium !text-sky-950 shadow-sm transition-colors hover:bg-slate-100 hover:!text-sky-950 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl sm:p-6">
            <Image
              src={encodeURI('/images/automation/showing an approved trigger.png')}
              alt="Automation and Workflows UI Preview"
              width={500}
              height={389}
              priority
              className="h-auto w-full rounded-2xl border border-slate-200 object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
