import { Mountain } from "@/data/mountains";

interface MountainCardProps {
  mountain: Mountain;
}

export default function MountainCard({ mountain }: MountainCardProps) {
  return (
    <div
      className="mountain-card"
      style={{
        backgroundImage: `url(${mountain.image})`,
      }}
    >
      <div className="mountain-card-inner">
        <h3 className="mountain-card-title">{mountain.title}</h3>
        {mountain.heightMeters ? (
          <div className="mountain-card-stats">
            <p>{mountain.heightMeters}</p>
            <p>{mountain.heightFeet}</p>
            <p className="mountain-card-range">{mountain.range}</p>
          </div>
        ) : (
          <div>
            <p className="mountain-card-desc">{mountain.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
