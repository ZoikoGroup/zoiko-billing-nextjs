import { Section, SectionHeading, SectionImage } from "./shared";

export default function PathWorkspace() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Local payment path workspace"
        title="Governance of paths, not a processing console."
        intro={
          <>
            <strong className="font-bold">
              No card number, bank detail, wallet identifier, token, payer name,
              address, transaction value or provider secret appears
            </strong>{" "}
            — and no row represents a live transaction.
          </>
        }
      />

      <div className="w-full pt-2">
        <SectionImage
          src="/images/local-payment/path-workspace.png"
          alt="Business, team, document and infrastructure sources routed through a central reviewer to confirmed and blocked payment paths"
          width={1228}
          height={621}
        />
      </div>
    </Section>
  );
}
