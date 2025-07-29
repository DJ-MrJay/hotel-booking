"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Booking {
  id: string;
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
}

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsRef = collection(db, "bookings");
        const q = query(bookingsRef, orderBy("checkIn", "desc"));
        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Booking, "id">),
        }));
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    if (user) fetchBookings();
  }, [user]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Room</th>
                <th className="p-2 border">Check-in</th>
                <th className="p-2 border">Check-out</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-t">
                  <td className="p-2 border">{b.name}</td>
                  <td className="p-2 border">{b.email}</td>
                  <td className="p-2 border">{b.roomType}</td>
                  <td className="p-2 border">{b.checkIn}</td>
                  <td className="p-2 border">{b.checkOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
