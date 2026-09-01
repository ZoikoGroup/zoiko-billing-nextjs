import { SectionHeading, SectionImage } from "./shared";

export default function DecisionStates() {
  return (
    <section
      id="decision-states"
      className="w-full bg-[#F7F8FA] px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 lg:px-7">
        <SectionHeading
          eyebrow="Fit, review and not promised"
          title="Five decision states, and one of them says no."
          intro="A page that only describes strong fit is not helping a buyer decide. Select a state to see when it applies and what this page will actually say."
        />
        <SectionImage
          src="/images/why-zoiko-billing/decision-states.png"
          alt="A candidate assessed against fit criteria and routed to a strong fit, a qualified fit or a declined outcome"
          width={1186}
          height={595}
        />
      </div>
    </section>
  );
}
