"use client";

import { useState } from "react";
import MiningNav from "@/components/MiningNav";
import ContactForm from "@/components/ContactForm";
import {
  MINING_BANNERS,
  MINING_MAPS,
  MINING_EQUIPMENT,
  MINING_TEAM,
  MINING_METHODOLOGY,
  MINING_INVESTMENT,
} from "@/data/mining";
import "@/styles/mining.css";

export default function MiningPage() {
  const [activeLightboxImg, setActiveLightboxImg] = useState<string | null>(null);

  return (
    <main className="mining-page">
      {/* 1. Quote Banner */}
      <section className="mining-hero-quote-section">
        <div className="container">
          <div className="mining-quote-banner-wrapper">
            <img
              src={MINING_BANNERS.heroQuote}
              alt="Life is a treasure hunt, you just have to know where to look."
              className="mining-quote-banner"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. Sticky Internal Navigation */}
      <MiningNav />

      {/* 3. Section: Maps */}
      <section id="maps" className="mining-section">
        <div className="container">
          <div className="mining-banner-wrapper">
            <img
              src={MINING_BANNERS.maps}
              alt="Mining Maps"
              className="mining-section-plank"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="zone-grid">
            {MINING_MAPS.map((mapItem) => (
              <div key={mapItem.id} className="zone-card">
                <img
                  src={mapItem.image}
                  alt={mapItem.zone}
                  className="zone-map open-lightbox"
                  onClick={() => setActiveLightboxImg(mapItem.image)}
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0.2";
                  }}
                />
                <div className="zone-content">
                  <h3>{mapItem.zone}</h3>
                  <p>{mapItem.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section: Equipment */}
      <section id="equipment" className="mining-section">
        <div className="container">
          <div className="mining-banner-wrapper">
            <img
              src={MINING_BANNERS.equipment}
              alt="Mining Equipment"
              className="mining-section-plank"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="equipment-grid">
            {MINING_EQUIPMENT.map((eq) => (
              <div key={eq.id} className="equipment-card">
                <div className="equipment-img-wrapper">
                  <img
                    src={eq.image}
                    alt={eq.name}
                    className="equipment-img"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0.2";
                    }}
                  />
                </div>
                <div className="equipment-content">
                  <h2 className="equipment-title">{eq.name}</h2>
                  <h3 className="equipment-subtitle">{eq.subtitle}</h3>
                  <p className="equipment-desc">{eq.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: Team */}
      <section id="team" className="mining-section">
        <div className="container">
          <div className="mining-banner-wrapper">
            <img
              src={MINING_BANNERS.team}
              alt="Mining Team"
              className="mining-section-plank"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="team-grid">
            {MINING_TEAM.map((member) => (
              <div key={member.id} className="team-card">
                <img
                  src={member.image}
                  alt={member.role}
                  className="team-img"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0.2";
                  }}
                />
                <div className="team-content">
                  <h3>{member.role}</h3>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section: Methodology */}
      <section id="methodology" className="mining-section">
        <div className="container">
          <div className="mining-banner-wrapper">
            <img
              src={MINING_BANNERS.methodology}
              alt="Mining Methodology"
              className="mining-section-plank"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="method-grid">
            {MINING_METHODOLOGY.map((m) => (
              <div key={m.step} className="method-card">
                <div className="method-content">
                  <span className="step">{m.step}</span>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section: Investment */}
      <section id="investment" className="mining-section">
        <div className="container">
          <div className="mining-banner-wrapper">
            <img
              src={MINING_BANNERS.investment}
              alt="Mining Investment"
              className="mining-section-plank"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="invest-grid">
            {MINING_INVESTMENT.map((inv) => (
              <div
                key={inv.id}
                className={`invest-card ${inv.highlighted ? "highlighted" : ""}`}
              >
                <div className="invest-content">
                  <h3>{inv.title}</h3>
                  <p>{inv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Section: Contact */}
      <section id="contact" className="mining-section mining-contact-section">
        <div className="container">
          <div className="mining-banner-wrapper">
            <img
              src={MINING_BANNERS.contact}
              alt="Mining Contact"
              className="mining-section-plank"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="mining-contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Lightbox */}
      {activeLightboxImg && (
        <div
          className="lightbox active"
          onClick={() => setActiveLightboxImg(null)}
        >
          <span
            className="lightbox-close"
            onClick={() => setActiveLightboxImg(null)}
          >
            &times;
          </span>
          <img src={activeLightboxImg} alt="Enlarged Geological Map" />
        </div>
      )}
    </main>
  );
}
