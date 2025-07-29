import { RoomCard } from "@/components/RoomCard";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious room with a great view, king-size bed and balcony.",
    price: 120,
    image: "/images/deluxe-suite.jpg",
  },
  {
    id: 2,
    name: "Standard Room",
    description: "Cozy room with queen-size bed and modern amenities.",
    price: 80,
    image: "/images/standard-room.jpg",
  },
  {
    id: 3,
    name: "Family Room",
    description: "Perfect for families. Two queen beds and a sitting area.",
    price: 150,
    image: "/images/family-room.jpg",
  },
];

export default function RoomsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 text-center">Available Rooms</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
