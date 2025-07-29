import FadeCarousel from "@/components/FadeCarousel";

export default function HomePage() {
  const images = [
    {
      src: "/images/lobby.jpg",
      alt: "Lobby View",
    },
    {
      src: "/images/room-interior.jpg",
      alt: "Room Interior",
    },
    {
      src: "/images/swimming-pool.jpg",
      alt: "Swimming Pool",
    },
  ];

  // Verify these images exist at public/images/
  console.log('Checking images at:', images.map(img => process.env.NODE_ENV === 'development' ? 
    `public${img.src}` : img.src));

  return (
    <div className="min-h-screen">
      {/* Carousel with fixed height */}
      <FadeCarousel images={images} autoPlay interval={3000} />
      
      {/* Content section - make sure it's not hidden */}
      <section className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Hotel</h1>
        <p className="text-lg mb-6">Enjoy a comfortable and relaxing stay</p>
        <a
          href="/booking"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Book a Room
        </a>
      </section>
    </div>
  );
}