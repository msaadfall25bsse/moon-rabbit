"use client";

import TourCard from "@/components/TourCard";
import { TOURS_DATA } from "@/data/tours";
import "@/styles/tours.css";

export default function ToursPage() {
  return (
    <main className="tours-page">
      <div className="tours-spacer" />
      <section className="tours-section">
        <div className="container">
          <div className="tours-grid">
            {TOURS_DATA.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
