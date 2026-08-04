import React from 'react';
import Image from 'next/image';

export default function BuildingBlocksSection() {
  return (
    <section className="w-full bg-white px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-sky-600">
                Building blocks
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-medium leading-tight font-sans text-sky-950 sm:text-4xl lg:text-5xl">
              Build workflows from explicit, reviewable parts.
            </h2>
          </div>

          <div className="max-w-lg lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Six concepts are shared by every supported workflow. Select one to
              see what it covers.
            </p>
          </div>
        </div>

        <div className="w-full pt-4">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
            <Image
              src={encodeURI('/images/automation/div.anat.png')}
              alt="Interactive workflow building blocks diagram"
              width={1116}
              height={467}
              className="h-auto w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
