import { campusItems } from "../data";
import "./Campus.css";

export default function Campus() {
  return (
    <section className="campus">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Campus Life</span>
          <h2 className="section-title">Life at KIIT</h2>
          <p className="section-desc">
            A self-contained university township spanning 25 sq km — the complete student
            experience, from labs to stadiums to cafés.
          </p>
        </div>
        <div className="campus-bento">
          {campusItems.map((item, i) => (
            <div key={i} className={`bento-item bento-item-${i + 1}`}>
              <div className="bento-emoji">{item.emoji}</div>
              <div className="bento-tag">{item.tag}</div>
              <h3 className="bento-title">{item.title}</h3>
              <p className="bento-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
