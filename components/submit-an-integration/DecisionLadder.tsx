import { Section, SectionHeading, heading } from "./shared";

type Step = {
  n: number;
  decision: string;
  authority: string;
  notMeaning: React.ReactNode;
};

const STEPS: Step[] = [
  {
    n: 1,
    decision: "Submission received",
    authority: "Integration submission service",
    notMeaning: (
      <>
        <b className="font-bold">Not valid, approved or supported.</b> Receipt is
        an acknowledgement that a record exists
      </>
    ),
  },
  {
    n: 2,
    decision: "Technical review accepted",
    authority: "Authorized technical review owner",
    notMeaning: (
      <>
        <b className="font-bold">Not automatically published or listed</b>, and
        not a partner relationship
      </>
    ),
  },
  {
    n: 3,
    decision: "Security and privacy checks passed",
    authority: "Trust, Security and Privacy",
    notMeaning: (
      <>
        <b className="font-bold">
          Not a certification and not universal compliance
        </b>{" "}
        — checks have a scope
      </>
    ),
  },
  {
    n: 4,
    decision: "Publication approved",
    authority: "Directory and publication rights",
    notMeaning: (
      <>
        <b className="font-bold">Not commercial partner benefits</b> unless a
        relationship is separately approved
      </>
    ),
  },
  {
    n: 5,
    decision: "Partner relationship approved",
    authority: "Partner relationship registry",
    notMeaning: (
      <>
        <b className="font-bold">
          Not that every submitted integration is approved
        </b>{" "}
        or technically current
      </>
    ),
  },
  {
    n: 6,
    decision: "Portal access granted",
    authority: "Partner Portal",
    notMeaning: (
      <>
        <b className="font-bold">Not implied by any earlier state.</b> Access is
        its own determination
      </>
    ),
  },
];

export default function DecisionLadder() {
  return (
    <Section tone="tint" id="decision-ladder">
      <SectionHeading
        eyebrow="Technical acceptance, publication and partnership"
        title="Six separate decisions, six separate authorities."
        intro="These are routinely assumed to be one thing. Each is decided by a different owner, and reaching one says nothing about the next."
      />

      <div className="w-full overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
        {/* Table from lg up */}
        <table className="hidden w-full table-fixed border-collapse lg:table">
          <thead>
            <tr className="bg-[#0B1B3C]">
              <th scope="col" className="w-11 border-r border-white/15" >
                <span className="sr-only">Step</span>
              </th>
              {[
                ["Decision", "w-[32%]"],
                ["Authority", "w-[18%]"],
                ["What it does not mean", ""],
              ].map(([label, w], i) => (
                <th
                  key={label}
                  scope="col"
                  className={`${w} px-3.5 py-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-white ${
                    i < 2 ? "border-r border-white/15" : ""
                  }`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {STEPS.map(({ n, decision, authority, notMeaning }) => (
              <tr key={n} className="border-t border-[#EDF1F7]">
                <td className="w-11 border-r border-[#EDF1F7] bg-[#FAFBFE] px-3.5 py-3 text-center align-middle">
                  <span
                    className={`${heading} text-sm !leading-6 !text-[#1F6FEB]`}
                  >
                    {n}
                  </span>
                </td>
                <td className="border-r border-[#EDF1F7] px-3.5 py-3 align-top text-xs font-bold !leading-5 !text-[#0F172A]">
                  {decision}
                </td>
                <td className="border-r border-[#EDF1F7] px-3.5 py-3 align-top text-xs !leading-5 !text-[#8494AC]">
                  {authority}
                </td>
                <td className="bg-[#FEFAF9] px-3.5 py-3 align-top text-xs !leading-5 !text-[#A81C1C]">
                  {notMeaning}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Stacked blocks below lg */}
        <div className="lg:hidden">
          {STEPS.map(({ n, decision, authority, notMeaning }, i) => (
            <div
              key={n}
              className={`flex flex-col gap-2 px-5 py-4 ${
                i < STEPS.length - 1 ? "border-b border-[#EDF1F7]" : ""
              }`}
            >
              <div className="flex items-baseline gap-2.5">
                <span
                  className={`${heading} shrink-0 text-sm !leading-6 !text-[#1F6FEB]`}
                >
                  {n}
                </span>
                <p className="!mb-0 min-w-0 text-sm font-bold !leading-5 !text-[#0F172A]">
                  {decision}
                </p>
              </div>
              <p className="!mb-0 text-xs !leading-5 !text-[#8494AC]">
                {authority}
              </p>
              <p className="!mb-0 rounded-md bg-[#FEFAF9] px-3 py-2 text-xs !leading-5 !text-[#A81C1C]">
                {notMeaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
