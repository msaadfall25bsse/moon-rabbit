"use client";

import Link from "next/link";
import { TourItem } from "@/data/tours";

interface TourCardProps {
  tour: TourItem;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="tour-item">
      <figure className="tour-caption-figure">
        <Link href={tour.link} className="tour-link">
          <div className="tour-img-wrapper">
            <img
              src={tour.image}
              alt={tour.title}
              className="tour-card-img elementor-animation-grow"
              onError={(e) => {
                e.currentTarget.style.opacity = "0.25";
              }}
            />
          </div>
        </Link>
        <figcaption className="tour-caption-text">{tour.title}</figcaption>
      </figure>
    </div>
  );
}
