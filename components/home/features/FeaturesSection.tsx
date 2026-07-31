import Image from "next/image";
import { ArrowLink, SectionLabel } from "../shared";

const features = [
  { category: "Invoice control", title: "Create, approve, issue, and preserve every action", text: "Every invoice moves through a deliberate workflow with clear ownership from draft to delivery.", bullets: ["Controlled creation and approval", "Version history for every change", "Clear issue and delivery status"] },
  { category: "Terms and policy", title: "Define approval points, terms, dates, and discounts once", text: "Billing rules stay consistent across customers, entities, and teams without repeated manual setup.", bullets: ["Reusable commercial terms", "Entity-aware approval routes", "Consistent dates and discounts"] },
  { category: "Outcome tracking", title: "Track outcomes, not assumptions", text: "Every invoice and payment carries a visible status, owner, and complete operational history.", bullets: ["Live status across the lifecycle", "Clear ownership at every stage", "Evidence for every outcome"] },
  { category: "Collections control", title: "Aging, reminders, disputes, and action queues in one place", text: "Collections teams see what requires attention and coordinate the next action from one record.", bullets: ["Prioritized action queues", "Coordinated customer reminders", "Connected dispute history"] },
  { category: "Automation and audit", title: "No automated financial action is concealed", text: "Every action is attributable to a rule and version. A suggestion is never shown as an executed financial action.", bullets: ["Scheduled runs with validation holds", "Approvals and exception routing", "Actor, rule, version, and previous state"] },
];

export function FeaturesSection() {
  return (
    <section className="soft-section features" id="features">
      <div className="section-shell">
        <div className="centered heading-block"><SectionLabel>One workspace</SectionLabel><h2>Everything your team needs to run billing with control.</h2><p className="lead">From invoice creation to payment reconciliation, every workflow stays connected.</p></div>
        <div className="feature-stack">
          {features.map((feature, index) => (
            <article className={`feature-row ${index % 2 === 0 ? "left" : "right"}`} key={feature.title}>
              <div className="feature-copy">
                <div className="feature-label"><span>0{index + 1}</span>{feature.category}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <ul>{feature.bullets.map(item => <li key={item}>{item}</li>)}</ul>
                <ArrowLink>{index === 4 ? "Read the control model" : "Learn more"}</ArrowLink>
              </div>
              <div className="feature-demo-image"><Image src="/images/zoiko-billing-hero-team.png" alt={`Demo image for ${feature.category}`} fill sizes="(max-width: 800px) 100vw, 620px" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
