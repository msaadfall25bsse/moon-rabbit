"use client";

import { MINING_NAV_LINKS } from "@/data/mining";

export default function MiningNav() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mining-nav-bar" aria-label="Mining Internal Navigation">
      <div className="container mining-nav-container">
        {MINING_NAV_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.target}
            className="mining-nav-link"
            onClick={(e) => handleScroll(e, item.target)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
