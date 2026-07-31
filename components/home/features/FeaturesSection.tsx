import Image from "next/image";
import { SectionLabel } from "../shared";

const features = [
  { category: "Invoices", title: "Create, approve, issue, and preserve every version", text: "Nothing leaves the platform without the approval its value requires, and every version stays on the record.", bullets: ["Approval thresholds and maker-checker", "Delivery and view state confirmed", "Credit and correct without overwriting history"], image: "div(1).png", link: "View All Features", secondaryLink: "Create Your Account" },
  { category: "Charges and billing models", title: "Define approved prices, terms, dates, and discounts once", text: "Charges reference a released price and version, so the same agreement always bills the same way.", bullets: ["One-time, recurring, usage-derived, contract-driven", "Customer terms, effective dates, and proration", "Versions retained so old invoices stay explainable"], image: "div(2).png", link: "See billing models" },
  { category: "Payments and reconciliation", title: "Track outcomes, not assumptions", text: "Every outcome attaches to the invoice with its reference. Anything unmatched becomes a reviewable exception.", bullets: ["References, value dates, provider responses", "Short-payment and unidentified-receipt exceptions", "Refunds and reversals kept in sequence"], image: "div(3).png", link: "See payment integrations" },
  { category: "Outstanding balances", title: "Aging, reminders, disputes, and action queues in one place", text: "Contact attempts log against the balance, not a mailbox. Open disputes suppress reminders.", bullets: ["Aging buckets with owner and next action", "Reminders that stop when a dispute is raised", "Payment plans where formally approved"], image: "outstanding-balances.png", link: "See reporting" },
  { category: "Automation and audit", title: "No automated financial action is concealed", text: "Every action is attributable to a rule and version. A suggestion is never shown as an executed financial action.", bullets: ["Scheduled runs with validation holds", "Approvals and exception routing", "Actor, rule, version, and previous state"], image: "automation-audit.png", link: "Read the control model" },
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
                <div className="feature-actions">
                  <a className={index === 0 ? "feature-primary-link" : "arrow-link"} href="#contact">{feature.link}{index !== 0 && <span aria-hidden="true"> →</span>}</a>
                  {feature.secondaryLink && <a className="arrow-link" href="#contact">{feature.secondaryLink} <span aria-hidden="true">→</span></a>}
                </div>
              </div>
              <div className="feature-demo-image"><Image src={`/images/features/${feature.image}`} alt={`${feature.category} workflow in Zoiko Billing`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
