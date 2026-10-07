import { Section, SectionHeading, SectionImage } from "./shared";

export default function DependencyBoundary() {
  return (
    <Section tone="dark" className="lg:gap-8">
      <SectionHeading
        dark
        eyebrow="Systems, data & dependency boundary"
        title="What currency policy depends on, and what depends on it."
        intro="Currency Control sits between commercial configuration and everything downstream that reads it."
      />

      <SectionImage
        src="/images/currency-control/dependency-boundary.png"
        alt="Commercial configuration flowing into a central currency policy, which feeds finance, regional, document, automation and team systems"
        width={1232}
        height={629}
      />
    </Section>
  );
}
