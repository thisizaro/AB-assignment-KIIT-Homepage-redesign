import { academics } from "../data";
import "./Academics.css";

export default function Academics() {
  return (
    <section className="academics" id="academics">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Schools & Programs</span>
          <h2 className="section-title">World-Class Academic Programs</h2>
          <p className="section-desc">
            28 schools offering undergraduate, postgraduate and doctoral programs across Engineering,
            Management, Health Sciences, Law, Design, and more.
          </p>
        </div>
        <div className="academics-grid">
          {academics.map((a, i) => (
            <div key={i} className="academic-card">
              <div className="academic-card-header">
                <div className="academic-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
              <div className="academic-card-footer">
                <div className="academic-stat-group">
                  <div className="academic-mini-stat">
                    <span className="academic-mini-num">{a.programs}</span>
                    <span className="academic-mini-label">Programs</span>
                  </div>
                  <div className="academic-mini-stat">
                    <span className="academic-mini-num">{a.faculty}</span>
                    <span className="academic-mini-label">Faculty</span>
                  </div>
                </div>
                <a href="#" className="card-link">
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
