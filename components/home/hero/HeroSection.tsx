import Image from "next/image";
import { SectionLabel } from "../shared";

const capabilities = ["Multi-currency", "Entity-aware", "Role-based", "Complete audit history"];

export function HeroSection() {
  return <section className="hero section-shell"><div className="hero-copy"><SectionLabel>Global billing and invoicing platform</SectionLabel><h1>Billing clarity from <em>invoice to<br />payment.</em></h1><p>Zoiko Billing brings charges, invoices, payments, outstanding balances, and financial records into one controlled platform—across every customer, currency, entity, and market you operate.</p><div className="hero-links"><a href="#contact">Book a Demo <span>→</span></a><a href="#features">See It in Action <span>→</span></a></div><ul className="hero-capabilities">{capabilities.map(item => <li key={item}>{item}</li>)}</ul></div><div className="hero-art"><div className="hero-image"><Image src="/images/zoiko-billing-hero-team.png" alt="Finance professionals reviewing billing operations together" fill priority sizes="(max-width: 800px) 100vw, 50vw" /><div className="workflow-icons" aria-hidden="true">{["▤","☷","●","▣","♢","▧","✓"].map((icon,index)=><span key={index}>{icon}</span>)}</div></div><div className="tour-pill"><span>60–90 second guided tour</span><a href="#features">See It in Action</a></div></div></section>;
}
