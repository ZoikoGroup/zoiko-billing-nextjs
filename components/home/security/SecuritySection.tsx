import Image from "next/image";

const plans = [
  ["Essentials", "Solo operators and small teams getting invoicing under control", "From $29/mo"],
  ["Professional", "Growing teams with recurring and usage-based billing", "From $89/mo"],
  ["Business", "Multi-entity operators needing approvals and reporting", "From $249/mo"],
  ["Enterprise", "Global finance teams with jurisdiction and integration needs", "Contact sales"],
];

export function SecuritySection() {
  return (
    <section className="commercial-section">
      <div className="section-shell commercial-shell">
        <p className="commercial-label">Commercial model</p>
        <h2>Independent when you need focus.<br />Connected when you need more.</h2>
        <div className="commercial-switch"><button className="active" type="button">Standalone</button><button type="button">Connected to Zoiko One</button></div>
        <div className="commercial-demo-image"><Image src="/images/security/div-arch-diagram.png" alt="Standalone and connected billing architecture" fill sizes="(max-width: 800px) 100vw, 1400px" /></div>
        <h3 className="pricing-heading">Choose the level of billing control your business needs.</h3>
        <div className="pricing-grid">{plans.map(([name, description, price], index) => <article className={index === 1 ? "active" : ""} key={name}><h3>{name}</h3><p>{description}</p><strong>{price}</strong></article>)}</div>
        <a className="pricing-link" href="#contact">View Full Pricing <span>→</span></a>
      </div>
    </section>
  );
}
