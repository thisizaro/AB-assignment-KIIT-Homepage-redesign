import "./MobileMenu.css";

const links = ["Home", "Academics", "Admissions", "Research", "Campus", "About", "Placements", "Contact"];

export default function MobileMenu({ open }) {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      {links.map((l) => (
        <a key={l} href="#" className="mobile-nav-link">
          {l}
        </a>
      ))}
      <a
        href="https://kiit.ac.in/admissions"
        target="_blank"
        rel="noreferrer"
        className="btn-primary mobile-cta"
      >
        Apply Now →
      </a>
    </div>
  );
}
