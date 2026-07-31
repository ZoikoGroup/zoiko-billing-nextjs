import type { ReactNode } from "react";

export function ArrowLink({ children }: { children: ReactNode }) {
  return <a className="arrow-link" href="#contact">{children} <span aria-hidden="true">→</span></a>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label"><span />{children}</p>;
}

export function ProductVisual({ variant = "blue", compact = false }: { variant?: "blue" | "dark" | "purple"; compact?: boolean }) {
  return (
    <div className={`product-visual ${variant} ${compact ? "compact" : ""}`} aria-hidden="true">
      <div className="visual-top"><i /><i /><i /><b>Zoiko Billing</b></div>
      <div className="visual-body">
        <div className="visual-side">{[1,2,3,4,5].map((item) => <i key={item} />)}</div>
        <div className="visual-content"><span className="visual-kicker" /><strong>Billing overview</strong><div className="visual-chart">{[38,58,44,75,62,88,68].map((height, index) => <i key={index} style={{height: `${height}%`}} />)}</div><div className="visual-rows"><i /><i /><i /></div></div>
      </div>
    </div>
  );
}

export function ActionButtons() {
  return <div className="button-row"><a className="button primary" href="#contact">Book a demo</a><a className="button text" href="#features">Explore the platform <span>→</span></a></div>;
}
