"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "single",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          checkIn: "",
          checkOut: "",
          roomType: "single",
        });
      }
    } catch (err) {
      console.error("Booking error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && <p className="text-green-600">Booking submitted successfully!</p>}
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="checkIn"
        type="date"
        value={form.checkIn}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="checkOut"
        type="date"
        value={form.checkOut}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <select
        name="roomType"
        value={form.roomType}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
}
