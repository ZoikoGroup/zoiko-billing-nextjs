import Image from "next/image";
import { SectionLabel } from "../shared";

export function IntegrationsSection() {
  return (
    <section className="integrations-section" id="resources">
      <div className="section-shell integrations-panel">
        <div className="integrations-copy">
          <SectionLabel>Integrations and developers</SectionLabel>
          <h2>Connect billing to the systems your business already uses.</h2>
          <p>Approved connectors, APIs, and webhooks for customer, payment, accounting, tax, commerce, and usage systems.</p>
        </div>
        <div className="integrations-demo-image"><Image src="/images/zoiko-billing-hero-team.png" alt="Demo image for connected billing integrations" fill sizes="(max-width: 800px) 100vw, 1200px" /></div>
        <div className="integrations-buttons"><a className="button integrations-primary" href="#contact">Explore Integrations</a><a className="button integrations-secondary" href="#contact">Read API Documentation</a></div>
      </div>
    </section>
  );
}
