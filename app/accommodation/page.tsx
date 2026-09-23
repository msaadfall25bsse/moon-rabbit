"use client";

import AccommodationCard from "@/components/AccommodationCard";
import {
  OFFICIAL_RESIDENCE,
  APPROVED_HOTELS,
  TENTS_DATA,
  ACCOMMODATION_BANNERS,
} from "@/data/accommodations";
import "@/styles/accommodation.css";

export default function AccommodationPage() {
  return (
    <main className="accommodation-page">
      {/* 1. Official Residence Section */}
      <section className="acc-section acc-residence-section">
        <div className="container">
          <div className="acc-banner-wrapper">
            <img
              src={ACCOMMODATION_BANNERS.residenceBanner}
              alt="Moon Rabbit Official Residence"
              className="acc-section-banner"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="acc-single-card-container">
            <AccommodationCard item={OFFICIAL_RESIDENCE} />
          </div>
        </div>
      </section>

      {/* 2. Moonrabbit Approved Hotels & Guest Houses Section */}
      <section className="acc-section acc-hotels-section">
        <div className="container">
          <div className="acc-banner-wrapper">
            <img
              src={ACCOMMODATION_BANNERS.hotelsBanner}
              alt="Moonrabbit Approved Hotels & Guest Houses"
              className="acc-section-banner"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="mr-grid">
            {APPROVED_HOTELS.map((hotel) => (
              <AccommodationCard key={hotel.id} item={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tents Section */}
      <section className="acc-section acc-tents-section">
        <div className="container">
          <div className="acc-banner-wrapper">
            <img
              src={ACCOMMODATION_BANNERS.tentsBanner}
              alt="Tents Available"
              className="acc-section-banner"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="acc-single-card-container">
            <AccommodationCard item={TENTS_DATA} />
          </div>
        </div>
      </section>
    </main>
  );
}
