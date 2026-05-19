import { footerLinks } from "../data";
import kiitLogo from "../assets/kiit-logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="section-inner">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <img src={kiitLogo} alt="KIIT University" className="footer-logo" />
              <p className="footer-brand-desc">
                Kalinga Institute of Industrial Technology — A Deemed to be University (U/S 3 of UGC
                Act, 1956). Committed to knowledge, innovation and societal impact since 1992.
              </p>
              <div className="footer-social">
                {[
                  { icon: "𝕏", label: "Twitter" },
                  { icon: "in", label: "LinkedIn" },
                  { icon: "f", label: "Facebook" },
                  { icon: "▶", label: "YouTube" },
                ].map((s) => (
                  <a key={s.label} href="#" className="social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="footer-accreditation">
                <span className="accreditation-badge">NAAC A+</span>
                <span className="accreditation-badge">QS ★★★★★</span>
                <span className="accreditation-badge">NIRF #17</span>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer-col">
                <h4 className="footer-col-title">{title}</h4>
                <ul className="footer-col-list">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom-wrapper">
        <div className="section-inner">
          <div className="footer-bottom">
            <span>© 2025 KIIT Deemed to be University. All rights reserved. | Bhubaneswar, Odisha, India</span>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Accessibility</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
