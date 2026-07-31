import { SectionLabel } from "../shared";

const workflow = [
  ["Customer", "Account and terms", "Set"],
  ["Charge", "Released price and version", "Applied"],
  ["Invoice", "Approved and issued", "Issued"],
  ["Delivery", "Sent, delivered, viewed", "Confirmed"],
  ["Payment", "Outcome and reference", "Tracked"],
  ["Reconciliation", "Matched, exceptions raised", "Reviewed"],
  ["Record", "Preserved for audit", "Retained"],
];

export function WorkflowCallToActionSection() {
  return (
    <section className="get-started-section" id="contact">
      <div className="section-shell get-started-panel">
        <div className="get-started-copy"><SectionLabel>Get started</SectionLabel><h2>Bring every invoice,<br />payment, and<br />outstanding balance<br />into focus.</h2><p>Run billing through one controlled platform built for clear financial records, global operations, and growing commercial complexity.</p><div><a className="button primary" href="#">Create Your Account</a><a className="button get-started-secondary" href="#">Book a Demo</a></div></div>
        <div className="workflow-record">{workflow.map(([title, text, status], index) => <div className="workflow-record-row" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><b>− {status}</b></div>)}<div className="workflow-record-caption"><span>▤</span>Billing clarity from invoice to payment.</div></div>
      </div>
    </section>
  );
}
