export default function MiningNav() {
  const sections = [
    { label: "Maps", target: "#mining-maps" },
    { label: "Equipment", target: "#mining-equipment" },
    { label: "Team", target: "#mining-team" },
    { label: "Methodology", target: "#mining-methodology" },
    { label: "Investment", target: "#mining-investment" },
    { label: "Contact", target: "#mining-contact" },
  ];

  return (
    <nav className="mining-nav-bar" aria-label="Mining Internal Navigation">
      <div className="container mining-nav-container">
        {sections.map((item) => (
          <a key={item.label} href={item.target} className="mining-nav-link">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
