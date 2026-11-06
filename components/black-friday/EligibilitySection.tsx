import Image from "next/image";

import { ExploreButton } from "./shared";

const eligibility = [
  { label: "Eligible plan", value: "Annual platform subscription" },
  { label: "Duration", value: "First eligible subscription year" },
  { label: "Who", value: "New customers only" },
  { label: "Payment basis", value: "Annual prepayment" },
];

const notDiscounted = ["Transaction fees", "Payment-processor fees", "Statutory pass-through fees"];

function PhotoPanel({ src, children }: { src: string; children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-[460px] flex-col overflow-hidden bg-[#0f2a47] px-8 py-11">
      <Image src={src} alt="" fill sizes="(max-width: 767px) 100vw, 385px" className="object-cover" />
      <div className="absolute inset-0 bg-[#0a1730]/[0.82]" />
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  );
}

export default function EligibilitySection() {
  return (
    <section aria-labelledby="bf-eligibility-title" className="mx-auto w-full max-w-[1140px] px-5 pt-20 sm:px-6 lg:pt-28">
      <div className="grid md:grid-cols-3">
        <div className="flex min-h-[460px] flex-col items-center justify-center gap-4 bg-[#00b8d6] px-6 py-12 text-center">
          <p className="!mb-0 text-base !leading-6 tracking-[4.5px] !text-[#082f49]">PLAN QUALIFICATION</p>
          <h2
            id="bf-eligibility-title"
            className="!mb-0 !text-5xl !font-bold !leading-[52px] !tracking-normal text-[#082f49]"
          >
            Who the offer is for
          </h2>
          <p className="!mb-0 max-w-64 text-base !leading-6 !text-[#082f49]">
            Eligibility is confirmed per account before any saving applies.
          </p>
          <ExploreButton tone="navy" className="mt-2" />
        </div>

        <PhotoPanel src="/images/black-friday/eligibility-team-meeting.webp">
          <h3 className="!mb-0 text-xl font-semibold leading-9 text-white">Eligibility</h3>
          <dl className="mt-5 flex flex-col gap-4">
            {eligibility.map((e) => (
              <div key={e.label} className="flex flex-col gap-1">
                <dt className="text-xs leading-5 text-[#a9bfdc]">{e.label}</dt>
                <dd className="text-base leading-6 text-white">{e.value}</dd>
              </div>
            ))}
          </dl>
        </PhotoPanel>

        <PhotoPanel src="/images/black-friday/eligibility-growth-chart.webp">
          <h3 className="!mb-0 text-xl font-semibold leading-9 text-white">Not discounted</h3>
          <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 marker:text-[#a9bfdc]">
            {notDiscounted.map((item) => (
              <li key={item} className="text-base leading-6 text-[#e9eef5]">
                {item}
              </li>
            ))}
          </ul>
          <p className="!mb-0 mt-auto pt-10 text-sm !leading-6 !text-[#a9bfdc]">
            Final plan details and any saving are confirmed in your offer terms.
          </p>
        </PhotoPanel>
      </div>
    </section>
  );
}
