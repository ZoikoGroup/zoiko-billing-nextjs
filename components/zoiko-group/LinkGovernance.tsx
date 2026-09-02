import { Section, SectionHeading } from "./shared";

const RULES: { element: string; requirement: React.ReactNode }[] = [
  {
    element: "Canonical destination",
    requirement: (
      <>
        Resolved at runtime or build from the Corporate Navigation Registry —{" "}
        <b className="font-bold">never hardcoded</b>
      </>
    ),
  },
  {
    element: "Link markup",
    requirement:
      "A standard crawlable anchor. Where the domain changes, the accessible name or a supplemental indicator communicates the transition",
  },
  {
    element: "New tab",
    requirement: (
      <>
        <b className="font-bold">
          Not forced solely because the domain changes.
        </b>{" "}
        If policy requires it, the link announces &ldquo;opens in a new tab&rdquo;
      </>
    ),
  },
  {
    element: "Tracking parameters",
    requirement: (
      <>
        <b className="font-bold">
          No opaque tracking that changes canonical.
        </b>{" "}
        Approved campaign parameters must not expose user identity
      </>
    ),
  },
  {
    element: "Redirects",
    requirement: (
      <>
        Any route replacement requires coordinated navigation, canonical,
        sitemap, structured data and analytics updates{" "}
        <b className="font-bold">on both sides</b>
      </>
    ),
  },
  {
    element: "Locale",
    requirement: (
      <>
        Preserve the user&apos;s locale where a supported mapping exists.{" "}
        <b className="font-bold">
          Never infer jurisdiction or contractual terms from language
        </b>
      </>
    ),
  },
];

export default function LinkGovernance() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Link & locale governance"
        title="Six rules for a cross-domain corporate link."
        intro="A navigation entry crossing a domain boundary carries requirements an internal link does not."
      />

      <div className="w-full overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
        {/* Table from lg up */}
        <table className="hidden w-full table-fixed border-collapse lg:table">
          <thead>
            <tr>
              <th
                scope="col"
                className="w-[18%] border-b border-[#E5EAF2] bg-[#FAFBFE] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#8494AC]"
              >
                Element
              </th>
              <th
                scope="col"
                className="w-[82%] border-b border-[#E5EAF2] bg-[#FAFBFE] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#8494AC]"
              >
                Requirement
              </th>
            </tr>
          </thead>
          <tbody>
            {RULES.map(({ element, requirement }, i) => {
              const border =
                i < RULES.length - 1 ? "border-b border-[#EDF1F7]" : "";
              return (
                <tr key={element}>
                  <td
                    className={`px-4 py-3.5 align-top text-sm font-semibold !leading-5 !text-[#0F172A] ${border}`}
                  >
                    {element}
                  </td>
                  <td
                    className={`px-4 py-3.5 align-top text-sm !leading-5 !text-[#5B6B85] ${border}`}
                  >
                    {requirement}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Stacked blocks below lg */}
        <div className="lg:hidden">
          {RULES.map(({ element, requirement }, i) => (
            <div
              key={element}
              className={`flex flex-col gap-2 px-5 py-4 ${
                i < RULES.length - 1 ? "border-b border-[#EDF1F7]" : ""
              }`}
            >
              <p className="!mb-0 text-sm font-semibold !leading-5 !text-[#0F172A]">
                {element}
              </p>
              <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">
                {requirement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
