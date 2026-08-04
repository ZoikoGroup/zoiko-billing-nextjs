'use client';

interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    title: 'Least privilege',
    description: 'Every subject receives the narrowest access that lets them do their job.',
  },
  {
    number: '02',
    title: 'Explicit scope',
    description: 'Workspace, entity, region, record type, field, amount, action and time are all boundaries.',
  },
  {
    number: '03',
    title: 'Meaningful review',
    description: 'Where policy requires a decision, the reviewer gets the context to make a real one.',
  },
  {
    number: '04',
    title: 'Attributable execution',
    description: 'Who requested, who approved and who executed is recorded on the action.',
  },
  {
    number: '05',
    title: 'Availability varies',
    description: 'Plan, action, integration and jurisdiction all affect what is available to you.',
  },
];

export default function AccessPrinciplesSection() {
  return (
    <section className="w-full bg-slate-100 px-4 py-16 md:px-12 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-11">
        
        {/* 5-Column Grid Card Row */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 gap-px sm:grid-cols-2 lg:grid-cols-5">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="flex flex-col gap-1.5 bg-white p-5 pb-8 sm:pb-12"
            >
              {/* Item Index */}
              <span className="font-['IBM_Plex_Mono'] text-xs font-normal tracking-wide text-blue-600">
                {principle.number}
              </span>

              {/* Title */}
              <h3 className="pt-1 font-['Plus_Jakarta_Sans'] text-base font-semibold text-sky-950">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="font-['Segoe_UI'] text-sm font-normal leading-relaxed text-slate-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Operating Boundary Callout */}
        <div className="flex flex-col gap-2 rounded-r-2xl border-l-[3px] border-blue-600 bg-slate-100 p-6 sm:p-7">
          <span className="font-['IBM_Plex_Mono'] text-xs font-normal uppercase tracking-wide text-blue-600">
            Operating boundary
          </span>
          <p className="max-w-3xl font-['Segoe_UI'] text-base font-normal leading-relaxed text-sky-950">
            These are access controls, not a compliance outcome. A role title does not establish legal authority, and permission granted under current policy is not the same as being legally authorized.
          </p>
        </div>

      </div>
    </section>
  );
}