"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin/login");
    }
  }, [loading, user, router]);

  if (loading || !user) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Welcome, {user.email}</h1>
      <button
        className="bg-red-500 text-white px-4 py-2"
        onClick={() => signOut(auth)}
      >
        Logout
      </button>
      <div className="mt-6">
        {/* You can render the bookings data here */}
        <p>This is the admin panel content.</p>
      </div>
    </div>
  );
}
