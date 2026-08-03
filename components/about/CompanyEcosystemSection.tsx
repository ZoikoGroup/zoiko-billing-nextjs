'use client';

import React from 'react';

export default function CompanyEcosystemSection() {
  return (
    <section id="company" className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start justify-start gap-11">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                Company and ecosystem
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Who owns it, who runs it, <br />
              and how it all relates.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Zoiko Billing is a product platform. Zoiko Tech Inc is the operating
              company. Zoiko Group is the group context. A Zoiko One subscription
              is not required to use standalone Zoiko Billing.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-7">
            <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold text-sky-950 dark:text-white">
                <img className="w-28 h-10"   src="/images/zoikobilling-logo-svg 1.png" ></img>
              </span>
              <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                The product and commercial platform used by customers to manage
                billing and invoicing operations.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold text-sky-950 dark:text-white">
                <img className="w-28 h-10"   src="/images/about/ZoikoTech_Logo_SVG 1.png" ></img>
              </span>
              <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                The company responsible for owning, developing, operating and
                commercially delivering Zoiko Billing.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold text-sky-950 dark:text-white">
                <img className="w-28 h-10"   src="/images/about/Group 121212170.png" ></img>
              </span>
              <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                The wider group within which Zoiko Tech Inc and the broader Zoiko
                technology portfolio operate.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-1">
                                <img className="w-40 h-13"   src="/images/about/Zoiko One home.png" ></img>

              </div>
              <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                A separate integrated business platform through which Zoiko Billing
                may also be available.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-sky-900 bg-sky-950 p-8 shadow-xl lg:col-span-5 sm:p-10">
            <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-medium uppercase tracking-wider text-cyan-400">
              Ownership and operating model
            </span>

            <div className="relative flex flex-col items-stretch gap-3">
              <div className="flex flex-col gap-1 rounded-xl border border-white/20 bg-white p-5 text-slate-900 shadow-md">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-bold text-sky-950">
                <img className="w-28 h-10"   src="/images/about/Group 121212170.png" ></img>
                </span>
                <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                  Group context
                </span>
              </div>

              <div className="ml-8 h-4 w-0.5 self-start bg-cyan-400/50" />

              <div className="flex flex-col gap-1 rounded-xl border border-white/20 bg-white p-5 text-slate-900 shadow-md">
                                <img className="w-28 h-10"   src="/images/about/ZoikoTech_Logo_SVG 1.png" ></img>

                <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                  Operating company
                </span>
              </div>

              <div className="ml-8 h-4 w-0.5 self-start bg-cyan-400/50" />

              <div className="flex flex-col gap-1 rounded-xl border-2 border-cyan-400 bg-white p-5 text-slate-900 shadow-lg">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-bold text-sky-950">
                <img className="w-28 h-10"   src="/images/zoikobilling-logo-svg 1.png" ></img>
                </span>
                <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                  Product platform
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:p-9">
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sky-950 text-lg font-semibold text-white shadow-sm dark:bg-blue-600">
              LM
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-semibold text-sky-950 dark:text-white">
                Lennox McLeod
              </h3>
              <p className="font-['IBM_Plex_Mono',monospace] text-xs font-normal tracking-wide text-blue-600 dark:text-blue-400">
                Founder and Executive Chairman
              </p>
            </div>
          </div>

          <button
            type="button"
            className="shrink-0 cursor-pointer rounded-lg border border-zinc-300 px-5 py-2.5 font-['Segoe_UI',sans-serif] text-base font-normal text-sky-950 transition-colors duration-150 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            View Leadership
          </button>
        </div>
      </div>
    </section>
  );
}
