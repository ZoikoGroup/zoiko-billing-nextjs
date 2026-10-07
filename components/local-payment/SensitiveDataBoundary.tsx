import { Section, SectionHeading, SectionImage } from "./shared";

export default function SensitiveDataBoundary() {
  return (
    <Section tone="dark" className="lg:gap-8">
      <SectionHeading
        dark
        eyebrow="Evidence, privacy & sensitive-data boundaries"
        title="What may appear, and what never does."
        intro="A payment surface is where sensitive data leaks into a mockup most easily, because realistic examples make the design look finished."
      />

      <SectionImage
        src="/images/local-payment/sensitive-data-boundary.png"
        alt="A governance screen kept behind a lock shield, with card, identity, balance and document data blocked on the far side"
        width={1232}
        height={640}
      />
    </Section>
  );
}
