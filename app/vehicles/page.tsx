import VehicleCard from "@/components/VehicleCard";
import { VEHICLES_DATA } from "@/data/vehicles";
import "@/styles/vehicles.css";

export default function VehiclesPage() {
  return (
    <main>
      {/* Vehicles Banner Section */}
      <section className="vehicles-hero">
        <div className="container">
          <h1 className="vehicles-title">Vehicles & Equipment</h1>
          <p className="vehicles-subtitle">
            Dependable 4×4 vehicles, boats, mountain bikes, airfare, and expedition equipment for Northern Pakistan.
          </p>
        </div>
      </section>

      {/* Vehicles Grid Section */}
      <section className="vehicles-section">
        <div className="container">
          <div className="vehicles-grid">
            {VEHICLES_DATA.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
