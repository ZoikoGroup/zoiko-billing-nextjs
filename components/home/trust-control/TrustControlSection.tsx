import Image from "next/image";
import { SectionLabel } from "../shared";

const proofCards = [
  "Multi-currency and entity-aware billing",
  "Role-based access and approvals",
  "Preserved audit history",
  "Integration-ready architecture",
];

const lifecycle = [
  ["Customer", "Account · Contacts · Terms"],
  ["Charge", "Price · Quantity · Version"],
  ["Invoice", "Approve · Issue · Deliver"],
  ["Payment", "Reference · Outcome"],
  ["Reconciliation", "Match · Exception"],
  ["Record", "Audit · Retention"],
];

export function TrustControlSection() {
  return (
    <section className="soft-section platform-proof" id="platform">
      <div className="section-shell platform-proof-grid">
        <div className="proof-left">
          <div className="proof-card-grid">
            {proofCards.map((title, index) => (
              <article className="proof-card" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <a href="#features">Show detail</a>
              </article>
            ))}
          </div>
          <div className="proof-demo-image">
            <Image src="/images/trust-control/frame-1.png" alt="Zoiko Billing platform workspace" fill sizes="(max-width: 1000px) 100vw, 45vw" />
          </div>
        </div>

        <div className="proof-right">
          <SectionLabel>Platform proof</SectionLabel>
          <h2>Control that finance<br />teams can trust.</h2>
          <p>Designed for controlled financial operations across teams, entities, and markets.</p>
          <div className="proof-actions">
            <a className="button proof-primary" href="#features">Explore the Platform</a>
            <a className="proof-link" href="#contact">Visit the Trust Center <span>→</span></a>
          </div>
          <div className="lifecycle-card">
            <div className="lifecycle-heading">Billing lifecycle signal <span>● Diagram</span></div>
            <ol>
              {lifecycle.map(([title, detail], index) => (
                <li key={title}>
                  <span>{index + 1}</span>
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
