"use client";

import { VehicleItem } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: VehicleItem;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-card-img-wrapper">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="vehicle-card-img"
          onError={(e) => {
            // Hide image element if file not yet uploaded in public/images/vehicles/
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="vehicle-card-body">
        <span className="vehicle-card-category">{vehicle.category}</span>
        <h3 className="vehicle-card-name">{vehicle.name}</h3>
        <p className="vehicle-card-capacity">{vehicle.capacity}</p>
        <p className="vehicle-card-desc">{vehicle.description}</p>
      </div>
    </div>
  );
}
