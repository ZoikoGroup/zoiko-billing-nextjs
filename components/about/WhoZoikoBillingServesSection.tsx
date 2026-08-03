'use client';

import React from 'react';

interface ProfileCard {
  title: string;
  description: string;
  workflow: string;
}

const profiles: ProfileCard[] = [
  {
    title: 'Growing businesses',
    description: 'Replace informal invoicing with controlled billing.',
    workflow: 'Customer -> charge -> invoice -> payment status -> balance',
  },
  {
    title: 'Professional services',
    description:
      'Project, milestone, retainer, time-supported and recurring billing.',
    workflow: 'Engagement terms -> approved charge -> client invoice',
  },
  {
    title: 'SaaS and digital services',
    description:
      'Subscription, recurring, usage, plan-change, credit and payment workflows.',
    workflow: 'Plan or usage event -> billing rule -> invoice and payment status',
  },
  {
    title: 'Agencies and consultancies',
    description:
      'Retainers, projects, pass-through costs, approvals and receivables.',
    workflow: 'Client account -> approved costs -> invoice -> balance',
  },
  {
    title: 'Multi-entity organizations',
    description:
      'Entity, currency, market, template, permission and reporting control.',
    workflow: 'Entity selection -> market configuration -> invoice and reporting',
  },
  {
    title: 'Enterprise finance teams',
    description:
      'Roles, approvals, audit history, integrations and consolidated reporting.',
    workflow: 'Controlled workflow -> integration -> evidence and reporting',
  },
  {
    title: 'Accounts receivable',
    description:
      'Delivery, reminders, disputes, payment matching and collection activity.',
    workflow: 'Invoice -> due date -> reminder -> payment or resolution',
  },
  {
    title: 'Revenue operations',
    description:
      'Connect agreements, pricing, usage and billing events.',
    workflow: 'Commercial record -> charge event -> billing result',
  },
  {
    title: 'Developers and technology teams',
    description:
      'APIs, webhooks, sandbox, data exchange and monitoring.',
    workflow: 'System event -> API -> billing record -> webhook outcome',
  },
];

export default function WhoZoikoBillingServesSection() {
  return (
    <section className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start justify-start gap-12">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                Who Zoiko Billing serves
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Find the shape of your <br />
              own billing here.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Nine profiles, each with the billing need that usually brings them
              to the platform and the workflow they run.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-semibold leading-5 text-sky-950 dark:text-slate-100">
                  {profile.title}
                </h3>
                <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                  {profile.description}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-3.5 dark:border-slate-800">
                <span className="block font-['IBM_Plex_Mono',monospace] text-[11px] font-normal leading-5 tracking-tight text-blue-600 dark:text-blue-400">
                  {profile.workflow}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
