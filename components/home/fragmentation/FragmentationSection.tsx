import Image from "next/image";
import { SectionLabel } from "../shared";

const problems = [
  ["Charges Without Consistency", "Terms re-entered per deal, so the same agreement bills two ways."],
  ["Invoices Without Visibility", "No one can say if a document was approved, delivered, or superseded."],
  ["Collections Without Coordination", "Reminders live in inboxes. Two people chase one balance."],
  ["Records Without Continuity", "Edited files overwrite history. Audit cannot reconstruct it."],
];

const stages = ["Customer", "Charge", "Invoice", "Payment", "Reconcile", "Record"];

export function FragmentationSection() {
  return (
    <section className="fragmentation-section" id="solutions">
      <div className="section-shell fragmentation-shell">
        <SectionLabel>The operating problem</SectionLabel>
        <h2>Billing breaks when the record is fragmented.</h2>
        <p className="fragmentation-intro">Invoices in one system, payment updates in another, reminders in email, and corrections in spreadsheets create uncertainty across the billing cycle.</p>

        <div className="fragmentation-demo">
          <Image src="/images/fragmentation/div.png" alt="Billing operations system interface" fill sizes="(max-width: 800px) 100vw, 1200px" />
        </div>

        <div className="fragmentation-problems">
          {problems.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="record-panel">
          <div className="record-stages">
            {stages.map((stage, index) => <div className={index === 0 ? "active" : ""} key={stage}><span>Stage 0{index + 1}</span><b>{stage}</b></div>)}
          </div>
          <div className="record-content">
            <div><h3>One customer record, one set of terms</h3><p>Contacts, currency, terms, and entity are set once, then applied to everything issued afterwards.</p></div>
            <div className="record-demo"><Image src="/images/fragmentation/div-rec.png" alt="Connected customer billing record" fill sizes="(max-width: 800px) 100vw, 520px" /></div>
          </div>
        </div>

        <div className="fragmentation-actions"><a className="button tour-button" href="#features">Take the Product Tour</a><a className="button secondary-button" href="#features">See Why Zoiko Billing</a></div>
      </div>
    </section>
  );
}
