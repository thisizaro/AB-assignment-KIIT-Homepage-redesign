import { statsData } from "../data";
import "./StatsBanner.css";

export default function StatsBanner() {
  return (
    <section className="stats-banner">
      <div className="section-inner">
        <div className="stats-grid">
          {statsData.map((s, i) => (
            <div key={i} className="stat-box">
              <div className="stat-num">
                {s.num}
                {s.plus && <span className="stat-plus">+</span>}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
