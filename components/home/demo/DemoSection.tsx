import { SectionLabel } from "../shared";

const chapters = [
  ["Customer setup", "0:00"],
  ["Charge creation", "0:24"],
  ["Approval", "0:51"],
  ["Invoice delivery", "1:18"],
  ["Payment status", "1:47"],
  ["Outstanding balance", "2:12"],
  ["Reporting", "2:36"],
];

export function DemoSection() {
  return (
    <section className="evidence-section">
      <div className="section-shell evidence-shell">
        <SectionLabel>Evidence</SectionLabel>
        <h2>See the complete billing workflow in action.</h2>
        <p>A guided demonstration captured from an approved environment.<br />Replaced by named case studies once verified customer evidence clears<br />publication.</p>
        <div className="evidence-grid">
          <div className="workflow-video">
            <span className="video-state">● Launch state · Guided demonstration</span>
            <button type="button" aria-label="Play complete billing workflow">▶</button>
            <div><h3>The complete billing workflow</h3><p>3:00 · silent capture · transcript available</p></div>
          </div>
          <div className="chapters-card">
            <h3>Chapters</h3>
            <ol>{chapters.map(([chapter, time], index) => <li key={chapter}><span>0{index + 1}</span><b>{chapter}</b><time>{time}</time></li>)}</ol>
            <a href="#contact">View Customer Stories <span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
