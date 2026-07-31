import Image from "next/image";
import { SectionLabel } from "../shared";

const metrics = [
  ["Total billed", "£1,284,910"],
  ["Total collected", "£1,046,220"],
  ["Collection rate", "81.4%"],
  ["Outstanding", "£238,690"],
  ["Avg time to payment", "27.6 days"],
];

export function ReconciliationSection() {
  return (
    <section className="reconciliation-section">
      <div className="section-shell reconciliation-shell">
        <SectionLabel>Both sides of the record</SectionLabel>
        <h2>One billing record. Clear visibility on both<br />sides.</h2>
        <div className="view-switch" aria-label="Billing visibility views"><button className="active" type="button">What your team sees</button><button type="button">What your customer sees</button></div>
        <div className="visibility-panel">
          <div className="visibility-copy">
            <h3>Know what has been billed, collected, and left outstanding.</h3>
            <p>An action queue on top of the same record that produced the invoices, so reporting and collections never disagree.</p>
            <div className="visibility-metrics">{metrics.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
            <a className="button reporting-button" href="#features">See Reporting</a>
          </div>
          <div className="visibility-demo-image"><Image src="/images/reconciliation/div6.png" alt="Reporting view for billing teams" fill sizes="(max-width: 800px) 100vw, 600px" /></div>
        </div>
      </div>
    </section>
  );
}
