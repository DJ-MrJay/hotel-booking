type Room = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export function RoomCard({ room }: { room: Room }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{room.description}</p>
        <p className="text-lg font-bold mb-4">${room.price} / night</p>
        <a
          href="/booking"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
