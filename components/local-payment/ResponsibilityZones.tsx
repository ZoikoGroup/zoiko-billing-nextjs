import { Section, SectionHeading, SectionImage } from "./shared";

export default function ResponsibilityZones() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Responsibility, legal-role & systems boundary"
        title="Six zones, and what must never be inferred about each."
        intro="The right-hand column is the substance — every entry is a role or capability a reader would otherwise assume."
      />

      <div className="w-full pt-2">
        <SectionImage
          src="/images/local-payment/responsibility-zones.png"
          alt="Six responsibility zones — business, authority, finance, people, market and infrastructure — around a central safeguard"
          width={1232}
          height={640}
        />
      </div>
    </Section>
  );
}
