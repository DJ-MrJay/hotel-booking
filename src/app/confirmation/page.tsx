export default function ConfirmationPage() {
  return (
    <section className="text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="text-lg">
        Thank you for your reservation. We look forward to hosting you.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Back to Home
      </a>
    </section>
  );
}
