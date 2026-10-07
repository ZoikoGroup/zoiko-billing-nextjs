import { Section, SectionHeading, SectionImage } from "./shared";

export default function RegistryWorkspace() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Illustrative inter-entity billing workspace"
        title="Relationship registry and charge instructions."
        intro={
          <>
            <strong className="font-bold">
              No entity name, amount, tax treatment or account code appears.
            </strong>{" "}
            Identifiers are stable UI placeholders, and{" "}
            <strong className="font-bold">no row implies a live capability</strong>.
          </>
        }
      />

      <div className="w-full pt-2">
        <SectionImage
          src="/images/inter-entity-billing/registry-workspace.png"
          alt="An entity campus feeding a central relationship registry, with charge instructions routed to team, authority and system reviewers"
          width={1228}
          height={636}
        />
      </div>
    </Section>
  );
}
