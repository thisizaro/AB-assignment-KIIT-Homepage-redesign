import "./Hero.css";

const heroCards = [
  { label: "QS World University", title: "Top 601+ Global", sub: "QS World Rankings 2025", badge: "🌍 Global" },
  { label: "NAAC Accredited", title: "Grade A+", sub: "National Assessment", badge: "✅ A+" },
  { label: "Placements", title: "₹44 LPA Highest", sub: "500+ Recruiting Companies", badge: "💼 Careers" },
];

export default function Hero() {
  return (
    <section className="hero">
      {/* Background decorations */}
      <div className="hero-bg-pattern" />
      <div className="hero-glow" />

      <div className="hero-inner section-inner">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Where Success is a Tradition
          </div>

          <h1>
            Kalinga Institute of <em>Industrial Technology</em>
          </h1>

          <p className="hero-sub">
            India's premier deemed university with 32,000+ students from 50+ countries. A complete
            university ecosystem — academics, research, sports, and culture in one self-sufficient campus.
          </p>

          <div className="hero-actions">
            <a
              href="https://kiit.ac.in/admissions"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Apply for 2025 →
            </a>
            <a href="#academics" className="btn-outline">
              Explore Programs
            </a>
          </div>

          {/* Quick Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">32K+</div>
              <div className="hero-stat-label">Students</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">28</div>
              <div className="hero-stat-label">Schools</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">90%</div>
              <div className="hero-stat-label">Placements</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-card-stack">
            {heroCards.map((card, i) => (
              <div key={i} className={`hero-card hero-card-${i + 1}`}>
                <div className="hero-card-label">{card.label}</div>
                <div className="hero-card-title">{card.title}</div>
                <div className="hero-card-sub">{card.sub}</div>
                <span className="hero-card-badge">{card.badge}</span>
              </div>
            ))}
            {/* Green circle accent */}
            <div className="hero-orb" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-dot" />
      </div>
    </section>
  );
}
