import { SectionLabel } from "../shared";

const questions = [
  "What is Zoiko Billing?",
  "Who is Zoiko Billing for?",
  "Can Zoiko Billing be used without Zoiko One?",
  "Does Zoiko Billing process payments?",
  "Is Zoiko Billing available globally?",
  "How do I get started?",
];

export function FrequentlyAskedQuestionsSection() {
  return (
    <section className="answers-section">
      <div className="section-shell answers-shell">
        <div className="answers-heading"><SectionLabel>Answers</SectionLabel><h2>Questions about Zoiko Billing</h2></div>
        <div className="answers-grid">
          <div className="question-list">
            {questions.map((question, index) => <article className={index === 0 ? "open" : ""} key={question}><div><h3>{question}</h3><span>{index === 0 ? "−" : "+"}</span></div>{index === 0 && <><p>Zoiko Billing is a global billing and invoicing platform that helps businesses create invoices, manage charges, track payments, monitor outstanding balances, and maintain clear financial records.</p><a href="#">Copy link to answer</a></>}</article>)}
            <div className="faq-actions"><a className="button primary" href="#">View All FAQs</a><a className="button faq-secondary" href="#">Visit the Help Center</a></div>
          </div>
          <aside className="answer-card">
            <div className="answer-search"><span>⌕</span>How do I bill one customer from two legal entities?<i /></div>
            <div className="answer-content"><span>Answer</span><p>Hold one customer with entity-scoped billing accounts. Each invoice carries the identity, numbering, and tax mode of the entity that issued it, and group reporting consolidates across both.</p><ul><li>Multi-entity billing</li><li>Jurisdiction configuration</li><li>Multi-entity reporting</li></ul></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
