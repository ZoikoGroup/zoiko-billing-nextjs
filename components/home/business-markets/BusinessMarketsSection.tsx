import Image from "next/image";
import { SectionLabel } from "../shared";

const capabilities = [
  "Multi-currency operations",
  "Entity-aware billing",
  "Jurisdiction configuration",
  "Localized documents",
  "Tax and e-invoicing readiness",
  "Regional data controls",
];

export function BusinessMarketsSection() {
  return (
    <section className="business-markets" id="company">
      <div className="section-shell business-markets-grid">
        <div className="business-markets-copy">
          <SectionLabel>Global and multi-entity</SectionLabel>
          <h2>Built for business across<br />markets</h2>
          <p>Configure billing around the currencies, entities, invoice requirements, payment terms, languages, and operating rules relevant to each market.</p>
          <div className="business-capabilities">{capabilities.map(item => <div key={item}>{item}</div>)}</div>
          <div className="business-actions"><a className="button primary" href="#contact">Explore Global Billing</a><a className="button business-secondary" href="#contact">Contact Global Sales</a></div>
        </div>
        <div className="business-demo-image"><Image src="/images/zoiko-billing-hero-team.png" alt="Demo image for global billing operations" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
      </div>
    </section>
  );
}
