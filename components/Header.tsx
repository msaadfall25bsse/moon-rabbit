"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/header.css";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", isGold: false },
    { name: "Tours", href: "/tour", isGold: false },
    { name: "Vehicles", href: "/vehicles", isGold: false },
    { name: "Accommodations", href: "/accommodation", isGold: false },
    { name: "Contact", href: "/contact", isGold: false },
    { name: "Mining", href: "/mining", isGold: true },
  ];

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo Placement */}
        <div className="logo-wrapper">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Moon Rabbit Logo"
              className="logo-image"
              onError={(e) => {
                // Fallback text if logo image is not yet uploaded in public/images/
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent && !parent.querySelector(".logo-text-placeholder")) {
                  const span = document.createElement("span");
                  span.className = "logo-text-placeholder";
                  span.textContent = "MOON RABBIT";
                  parent.appendChild(span);
                }
              }}
            />
          </Link>
        </div>

        {/* Desktop Main Navigation */}
        <nav className="main-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.href}
                  className={`nav-item ${item.isGold ? "gold-menu-item" : ""}`}
                >
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(true)}
          aria-label="Toggle Navigation Menu"
        >
          <div className="hamburger-icon">
            <span />
            <span />
            <span />
          </div>
        </button>

        {/* Mobile Slide-out Drawer */}
        <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
          <button
            className="mobile-drawer-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Navigation Menu"
          >
            &times;
          </button>
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`mobile-nav-link ${item.isGold ? "gold-link" : ""} ${
                      isActive ? "active" : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Backdrop for Mobile Drawer */}
        {mobileOpen && (
          <div
            className="backdrop"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
