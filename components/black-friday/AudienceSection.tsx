import Image from "next/image";

import { ExploreButton, SectionIntro } from "./shared";

const audiences = [
  { label: "Founders", src: "audience-founders" },
  { label: "CFOs", src: "audience-cfos" },
  { label: "Finance controllers", src: "audience-finance-controllers" },
  { label: "Revenue-operations leads", src: "audience-revenue-operations" },
  { label: "Subscription-service businesses", src: "audience-subscription-businesses" },
];

export default function AudienceSection() {
  return (
    <section className="mx-auto w-full max-w-[1140px] px-5 pt-20 sm:px-6 lg:pt-28">
      <SectionIntro
        title="Built for the people who run revenue"
        intro="For finance and revenue teams who want clearer billing without more spreadsheets and reconciliations."
      />

      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {audiences.map((a) => (
          <li key={a.label} className="relative flex aspect-[206/275] items-end overflow-hidden bg-[#0f2a47] p-4">
            <Image
              src={`/images/black-friday/${a.src}.webp`}
              alt=""
              fill
              sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 210px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1730]/90 via-[#0a1730]/15 to-transparent" />
            <span className="relative text-lg font-semibold leading-6 text-white">{a.label}</span>
          </li>
        ))}
      </ul>

      {/* Why now */}
      <div className="mt-5 grid lg:grid-cols-[1.35fr_1fr]">
        <div className="flex flex-col items-start gap-3.5 bg-[#1a62f0] px-7 py-11 sm:px-9">
          <p className="!mb-0 text-base font-semibold !leading-6 !text-[#e3ecfd]">Why now</p>
          <h2 className="!mb-0 !text-3xl !font-bold !leading-tight !tracking-normal text-white sm:!text-4xl sm:!leading-10">
            Your revenue workflows
            <br className="hidden sm:block" /> deserve a simpler view.
          </h2>
          <p className="!mb-0 max-w-96 text-base !leading-6 !text-[#eef3fd]">
            Fewer spreadsheets. Fewer reconciliations. Billing, invoices, collections and revenue operations kept in
            one disciplined workflow.
          </p>
          <ExploreButton className="mt-2" />
        </div>
        <div className="relative min-h-72 bg-[#0f2a47]">
          <Image
            src="/images/black-friday/why-now-team-meeting.webp"
            alt="A small team working through documents in a bright meeting room"
            fill
            sizes="(max-width: 1023px) 100vw, 475px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1730]/[0.12]" />
        </div>
      </div>
    </section>
  );
}
