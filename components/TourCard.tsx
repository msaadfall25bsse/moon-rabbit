"use client";

import { TourPackage } from "@/data/tours";

interface TourCardProps {
  tour: TourPackage;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="tour-card">
      <div className="tour-card-image-wrapper">
        <img
          src={tour.image}
          alt={tour.title}
          className="tour-card-img"
          onError={(e) => {
            // Hide image element if not yet uploaded in public/images/tours/
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="tour-card-body">
        <span className="tour-card-duration">{tour.duration}</span>
        <h3 className="tour-card-title">{tour.title}</h3>
        <p className="tour-card-location">{tour.location}</p>
        <p className="tour-card-desc">{tour.description}</p>
        <div className="tour-card-inclusions">
          {tour.inclusions.map((item, index) => (
            <span key={index} className="inclusion-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
