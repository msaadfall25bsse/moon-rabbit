import Link from "next/link";
import "@/styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3 className="footer-title">MOON RABBIT</h3>
          <p className="footer-subtitle">
            Mystical Guided Tours & Mineral Exploration in Northern Pakistan
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer Navigation">
          <Link href="/" className="footer-nav-link">
            Home
          </Link>
          <Link href="/tour" className="footer-nav-link">
            Tours
          </Link>
          <Link href="/vehicles" className="footer-nav-link">
            Vehicles
          </Link>
          <Link href="/accommodation" className="footer-nav-link">
            Accommodations
          </Link>
          <Link href="/contact" className="footer-nav-link">
            Contact
          </Link>
          <Link href="/mining" className="footer-nav-link">
            Mining
          </Link>
        </nav>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Moon Rabbit. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
