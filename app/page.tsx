import MountainCard from "@/components/MountainCard";
import { MOUNTAINS_DATA } from "@/data/mountains";
import "@/styles/home.css";

export default function HomePage() {
  return (
    <main>
      {/* 1. Main Hero Section */}
      <section className="hero-section">
        <img
          src="/images/home-hero.jpg"
          alt="Northern Pakistan Scenery"
          className="hero-background"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Moon Rabbit</h1>
          <p className="hero-subtitle">
            Mystical Guided Tours & Mineral Exploration in Northern Pakistan
          </p>
        </div>
      </section>

      {/* 2. What We Do Section */}
      <section className="what-we-do-section">
        <div className="container">
          <h2 className="section-header-title">What We Do</h2>
          <div className="what-we-do-content">
            <p className="what-we-do-text">
              Moon Rabbit offers a unique Mystical Guided Tour through the
              bewildering scenery of Northern Pakistan. Our tour packages are
              all inclusive and only require a simple booking followed by your
              arrival to a local airport of your choice.
            </p>
            <p className="what-we-do-text">
              Rest assured, from arrival till your departure Moon Rabbit will
              lavish you with hospitality while providing the following
              amenities: dependable 4×4 vehicles, boats, mountain bikes, and a
              variety of picturesque accommodations along with authentic cuisine
              from all of the best restaurants in the area.
            </p>
            <p className="what-we-do-text">
              The Moon Rabbit Tour Guide is well-versed and during the journey he
              will provide all guests an interesting backstory regarding the
              people, culture, and history of the area focusing on esoteric
              knowledge transfer. We look forward to sharing a truly memorable
              life changing experience with you!
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Majestic Mountains of Pakistan Section */}
      <section className="mountains-section">
        <div className="container">
          <h2 className="mountains-section-title">
            The Majestic Mountains of Pakistan
          </h2>
          <div className="mountains-grid">
            {MOUNTAINS_DATA.map((mountain) => (
              <MountainCard key={mountain.id} mountain={mountain} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
