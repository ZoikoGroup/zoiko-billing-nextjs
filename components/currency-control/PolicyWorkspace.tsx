import { Section, SectionHeading, SectionImage } from "./shared";

export default function PolicyWorkspace() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Illustrative currency policy workspace"
        title="What governed currency configuration looks like."
        intro={
          <>
            <strong className="font-bold">
              Every record uses specimen labels and no live support or capability
              is implied.
            </strong>{" "}
            Currency identifiers are placeholders —{" "}
            <strong className="font-bold">
              no currency is named anywhere in this mockup
            </strong>
            .
          </>
        }
      />

      <div className="w-full pt-2">
        <SectionImage
          src="/images/currency-control/policy-workspace.png"
          alt="Placeholder currency tokens feeding a central policy record, linked to an owning team and an approving authority"
          width={1228}
          height={610}
        />
      </div>
    </Section>
  );
}
