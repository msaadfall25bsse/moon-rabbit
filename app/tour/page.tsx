import TourCard from "@/components/TourCard";
import { TOURS_DATA } from "@/data/tours";
import "@/styles/tours.css";

export default function ToursPage() {
  return (
    <main>
      {/* Tours Header Banner */}
      <section className="tours-hero">
        <div className="container">
          <h1 className="tours-title">Tours</h1>
          <p className="tours-subtitle">
            All-inclusive mystical guided tour packages across the bewildering scenery of Northern Pakistan.
          </p>
        </div>
      </section>

      {/* Tour Packages Grid Section */}
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
