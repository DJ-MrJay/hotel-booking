import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book a Room</h1>
      <BookingForm />
    </section>
  );
}
