"use client";

import Link from "next/link";
import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Left Side: Moon Rabbit Logo & Spiritual Slogan Banner */}
        <div className="footer-left-col">
          <div className="footer-logo-wrap">
            <img
              src="/images/logo/MOON-RABBIT-Recovered-01-1-scaled-1-e1781016289237.webp"
              alt="Moon Rabbit Logo"
              className="footer-logo-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="footer-slogan-wrap">
            <img
              src="/images/banners/a-spiritual-journey-through-the-material-World-1.png"
              alt="A spiritual journey through the material World"
              className="footer-slogan-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Right Side: Amanita Muscaria linking to /rabbit-screen */}
        <div className="footer-right-col">
          <Link href="/rabbit-screen" className="footer-mushroom-link">
            <img
              src="/images/logo/amanita-muscaria-pic.png"
              alt="Amanita Muscaria"
              className="footer-mushroom-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
