import Link from "next/link";

import { Section, SectionHeading, linkClass } from "./shared";

type Situation = {
  situation: string;
  route: React.ReactNode;
  why: React.ReactNode;
};

const SITUATIONS: Situation[] = [
  {
    situation: "My existing integration is broken",
    route: (
      <Link href="/integration-support" className={linkClass}>
        Integration Support
      </Link>
    ),
    why: (
      <>
        Account-specific troubleshooting —{" "}
        <b className="font-bold">not pre-publication review</b>, and this route
        cannot see your account
      </>
    ),
  },
  {
    situation: "How does the API actually work?",
    route: "Developers · API Documentation",
    why: "Implementation truth lives there; a submission form is not a documentation channel",
  },
  {
    situation: "I want a commercial relationship",
    route: (
      <Link href="/become-a-partner" className={linkClass}>
        Become a Partner
      </Link>
    ),
    why: "Relationship intent is separate from technical submission in both directions",
  },
  {
    situation: "I found a security vulnerability",
    route: (
      <Link href="/responsible-disclosure" className={linkClass}>
        Responsible Disclosure
      </Link>
    ),
    why: (
      <>
        <b className="font-bold">Never through this route.</b> Exploit detail must
        not enter a submission queue
      </>
    ),
  },
  {
    situation: "I need to send a credential",
    route: (
      <>
        None — <b className="font-bold">no route accepts one</b>
      </>
    ),
    why: (
      <>
        <b className="font-bold">No Zoiko process asks for a secret.</b> If
        something appears to, it is not us
      </>
    ),
  },
];

const COLUMNS = [
  { label: "Situation", width: "w-[22%]" },
  { label: "Route", width: "w-[22%]" },
  { label: "Why not here", width: "w-[56%]" },
];

export default function WrongRoute() {
  return (
    <Section tone="tint" gap="gap-11">
      <SectionHeading
        eyebrow="Wrong route"
        title="Five things this page does not handle."
        intro="Each has a faster destination, and two of them must never come here."
      />

      <div className="w-full overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
        {/* Table from lg up */}
        <table className="hidden w-full table-fixed border-collapse lg:table">
          <thead>
            <tr>
              {COLUMNS.map(({ label, width }) => (
                <th
                  key={label}
                  scope="col"
                  className={`${width} border-b border-[#E5EAF2] bg-[#FAFBFE] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#8494AC]`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SITUATIONS.map(({ situation, route, why }, i) => {
              const border =
                i < SITUATIONS.length - 1 ? "border-b border-[#EDF1F7]" : "";
              return (
                <tr key={situation}>
                  <td
                    className={`px-4 py-3.5 align-top text-sm font-semibold !leading-5 !text-[#0F172A] ${border}`}
                  >
                    {situation}
                  </td>
                  <td
                    className={`px-4 py-3.5 align-top text-sm !leading-5 !text-[#5B6B85] ${border}`}
                  >
                    {route}
                  </td>
                  <td
                    className={`px-4 py-3.5 align-top text-sm !leading-5 !text-[#5B6B85] ${border}`}
                  >
                    {why}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Stacked blocks below lg */}
        <div className="lg:hidden">
          {SITUATIONS.map(({ situation, route, why }, i) => (
            <div
              key={situation}
              className={`flex flex-col gap-3 px-5 py-4 ${
                i < SITUATIONS.length - 1 ? "border-b border-[#EDF1F7]" : ""
              }`}
            >
              <p className="!mb-0 text-sm font-semibold !leading-5 !text-[#0F172A]">
                {situation}
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#8494AC]">
                  Route
                </span>
                <span className="text-sm !leading-5 !text-[#5B6B85]">
                  {route}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#8494AC]">
                  Why not here
                </span>
                <span className="text-sm !leading-5 !text-[#5B6B85]">{why}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
