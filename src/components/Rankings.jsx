import { rankings } from "../data";
import "./Rankings.css";

export default function Rankings() {
  return (
    <section className="rankings">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Recognition</span>
          <h2 className="section-title">Nationally & Globally Ranked</h2>
          <p className="section-desc">
            Recognised by India's top ranking bodies and esteemed global organisations for academic
            excellence, research output, and innovation.
          </p>
        </div>
        <div className="rankings-grid">
          {rankings.map((r, i) => (
            <div key={i} className="rank-card">
              <span className="rank-badge">{r.badge}</span>
              <div className="rank-body">
                {r.rank}
                <span>{r.suffix}</span>
              </div>
              <div className="rank-label">{r.label}</div>
              <div className="rank-source">{r.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
