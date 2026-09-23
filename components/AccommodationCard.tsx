"use client";

import { useState } from "react";
import { AccommodationItem } from "@/data/accommodations";

interface AccommodationCardProps {
  item: AccommodationItem;
}

export default function AccommodationCard({ item }: AccommodationCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = item.images && item.images.length > 0 ? item.images : [];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mr-card">
      <div className="mr-card-img">
        {images.length > 0 ? (
          <>
            <img
              src={images[currentIdx]}
              alt={`${item.name} - ${currentIdx + 1}`}
              onError={(e) => {
                // If user has not uploaded this specific image yet, display a subtle dark background
                e.currentTarget.style.opacity = "0.2";
              }}
            />
            {images.length > 1 && (
              <div className="mr-carousel-controls">
                <button
                  type="button"
                  className="mr-carousel-btn mr-carousel-prev"
                  onClick={handlePrev}
                  aria-label="Previous Image"
                >
                  &#10094;
                </button>
                <button
                  type="button"
                  className="mr-carousel-btn mr-carousel-next"
                  onClick={handleNext}
                  aria-label="Next Image"
                >
                  &#10095;
                </button>
                <div className="mr-carousel-dots">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`mr-dot ${idx === currentIdx ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIdx(idx);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="mr-img-placeholder" />
        )}
      </div>

      <h3 className="mr-card-title">{item.name}</h3>
      <p className="mr-card-text">{item.location}</p>
    </div>
  );
}
