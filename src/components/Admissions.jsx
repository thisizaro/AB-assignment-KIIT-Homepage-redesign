import { deadlines, admissionSteps } from "../data";
import "./Admissions.css";

export default function Admissions() {
  return (
    <section className="admissions">
      <div className="section-inner">
        <div className="admissions-inner">
          {/* Left */}
          <div>
            <span className="section-tag">Admissions 2025</span>
            <h2 className="section-title admissions-title">Begin Your KIIT Journey</h2>
            <p className="admissions-desc">
              Applications for 2025–26 are open. Apply through KIIT-EE or direct merit-based
              admission. KIIT offers more than 200 programs across 28 schools.
            </p>

            <div className="steps">
              {admissionSteps.map((step, i) => (
                <div key={i} className="step">
                  <div className="step-num">{i + 1}</div>
                  <div className="step-content">
                    <div className="step-title">{step.title}</div>
                    <div className="step-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="admissions-actions">
              <a
                href="https://kiit.ac.in/admissions"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Apply Now →
              </a>
              <a href="#" className="btn-outline">
                Download Brochure
              </a>
            </div>
          </div>

          {/* Right card */}
          <div className="admissions-card">
            <div className="admissions-card-header">
              <div className="admissions-card-icon">📅</div>
              <div>
                <div className="admissions-card-title">Application Deadlines</div>
                <div className="admissions-card-sub">2025–26 Academic Year</div>
              </div>
            </div>

            <div className="deadline-list">
              {deadlines.map((d, i) => (
                <div key={i} className="deadline-item">
                  <div>
                    <div className="deadline-name">{d.name}</div>
                    <div className="deadline-date">{d.date}</div>
                  </div>
                  <span className={`deadline-tag deadline-tag--${d.tag === "Closing Soon" ? "urgent" : "open"}`}>
                    {d.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="admissions-helpline">
              <div className="admissions-helpline-label">Need help with admissions?</div>
              <div className="admissions-helpline-num">📞 1800-345-6789 (Toll Free)</div>
              <div className="admissions-helpline-hours">Mon–Sat, 9 AM to 6 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
