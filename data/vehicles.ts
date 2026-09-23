export interface VehicleItem {
  id: string;
  name: string;
  category: string;
  capacity: string;
  description: string;
  image: string;
}

export const VEHICLES_DATA: VehicleItem[] = [
  {
    id: "vehicle-01",
    name: "Toyota Land Cruiser V8",
    category: "4x4 SUV",
    capacity: "5 Persons",
    description: "Heavy-duty luxury 4x4 built for high-altitude mountain passes, rugged terrain, and ultimate comfort.",
    image: "/images/vehicles/vehicle-01.jpg",
  },
  {
    id: "vehicle-02",
    name: "Toyota Hilux Revo",
    category: "4x4 Pickup",
    capacity: "4 Persons",
    description: "High-clearance double-cabin 4x4 ideal for off-road tracks, luggage capacity, and remote expeditions.",
    image: "/images/vehicles/vehicle-02.jpg",
  },
  {
    id: "vehicle-03",
    name: "Toyota Prado",
    category: "4x4 SUV",
    capacity: "5 Persons",
    description: "Versatile four-wheel-drive vehicle offering smooth highway transit and dependable mountain maneuverability.",
    image: "/images/vehicles/vehicle-03.jpg",
  },
  {
    id: "vehicle-04",
    name: "Toyota Coaster Saloon",
    category: "Coaster Bus",
    capacity: "22 Persons",
    description: "Spacious air-conditioned mini-bus designed for group travel along Karakoram Highway and scenic valley routes.",
    image: "/images/vehicles/vehicle-04.jpg",
  },
  {
    id: "vehicle-05",
    name: "Toyota HiAce Grand Cabin",
    category: "Executive Van",
    capacity: "12 Persons",
    description: "High-roof luxury passenger van providing ample legroom and reclining seats for family and group tours.",
    image: "/images/vehicles/vehicle-05.jpg",
  },
  {
    id: "vehicle-06",
    name: "Airfare Booking & Flight Charter",
    category: "Air Service",
    capacity: "Direct Flights",
    description: "Seamless domestic flight bookings to Gilgit and Skardu airports with scenic views of Nanga Parbat and K2.",
    image: "/images/vehicles/vehicle-06.jpg",
  },
  {
    id: "vehicle-07",
    name: "Luxury Green Line Bus",
    category: "Express Transport",
    capacity: "Executive Seating",
    description: "Premium long-distance highway travel connecting Islamabad to Northern gateways with luxury amenities.",
    image: "/images/vehicles/vehicle-07.jpg",
  },
  {
    id: "vehicle-08",
    name: "All-Terrain Mountain Bikes",
    category: "Adventure Gear",
    capacity: "Single Rider",
    description: "Professional multi-gear mountain bicycles available for alpine trail rides, valley exploration, and downhill routes.",
    image: "/images/vehicles/vehicle-08.jpg",
  },
  {
    id: "vehicle-09",
    name: "River Kayaks",
    category: "Watercraft",
    capacity: "1 - 2 Persons",
    description: "High-grade river kayaks engineered for navigating calm lakes like Attabad and gentle river stretches.",
    image: "/images/vehicles/vehicle-09.jpg",
  },
  {
    id: "vehicle-10",
    name: "Inflatable Rafts",
    category: "Watercraft",
    capacity: "6 - 8 Persons",
    description: "Heavy-duty inflatable white-water rafting boats complete with safety riggings for river adventures.",
    image: "/images/vehicles/vehicle-10.jpg",
  },
  {
    id: "vehicle-11",
    name: "Safety Life Jackets",
    category: "Safety Equipment",
    capacity: "Universal Fit",
    description: "Certified high-buoyancy life vests provided for all lake boating, kayaking, and river rafting excursions.",
    image: "/images/vehicles/vehicle-11.jpg",
  },
];
