const primaryColumns = [
  { title: "Product", links: ["Invoicing", "Charges and Billing Models", "Payments and Reconciliation", "Outstanding Balances", "Automation and Controls", "Reporting", "Customer Portal", "Global Billing"] },
  { title: "Solutions", links: ["Professional Services", "SaaS and Digital Services", "Agencies", "Multi-Entity Businesses", "Global Businesses", "Enterprise Finance"] },
  { title: "Developers and Integrations", className: "developers", links: ["API Documentation", "Webhooks", "Sandbox", "Integrations", "Developer Support", "System Status"] },
];

const secondaryColumns = [
  { title: "Resources", links: ["Product Tour", "Help Center", "Billing Guides", "Customer Stories", "Product Updates", "FAQ", "Contact Support"] },
  { title: "Company", links: ["About Zoiko Billing", "Zoiko Tech", "Zoiko Group", "Careers", "Partners", "Contact"] },
  { title: "Legal and Trust", className: "legal", links: ["Trust Center", "Security", "Privacy Notice", "Cookie Notice", "Terms", "Acceptable Use", "Data Processing Addendum", "Subprocessors", "Accessibility", "Regional Terms", "Do Not Sell or Share My Personal Information"] },
];

export function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-primary">
          <div className="footer-brand">
            <a className="footer-brand-logo" href="#" aria-label="Zoiko Billing home"><b>ZOIKO</b><span>BILLING</span></a>
            <p className="brand-description">One controlled billing record, from charge to payment.</p>
            <div className="preference-links"><a href="#">Region / Language</a><a href="#">Cookie Preferences</a><a href="#">Privacy Choices</a><a href="#">Accessibility Feedback</a></div>
          </div>
          {primaryColumns.map(column => <nav className={`footer-column ${column.className ?? ""}`} aria-label={column.title} key={column.title}><h2>{column.title}</h2>{column.links.map(link => <a href="#" key={link}>{link}</a>)}</nav>)}
        </div>
        <div className="footer-divider" />
        <div className="footer-secondary">
          {secondaryColumns.map(column => <nav className={`footer-column ${column.className ?? ""}`} aria-label={column.title} key={column.title}><h2>{column.title}</h2>{column.links.map(link => <a href="#" key={link}>{link}</a>)}</nav>)}
        </div>
        <div className="footer-divider bottom-divider" />
        <div className="footer-bottom"><p>© 2026 Zoiko Billing. Zoiko Billing is a platform owned and operated by Zoiko Tech Inc, a Zoiko Group company. All rights reserved.</p><a className="system-status" href="#" aria-label="System status: all systems operational"><span className="status-dot" aria-hidden="true" />All systems operational</a></div>
      </div>
    </footer>
  );
}
