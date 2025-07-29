"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";

export function Header() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/our-hotel-logo.svg" alt="Hotel Logo" height={50} />
        </Link>

        <div className="space-x-6 text-gray-700 font-medium">
          <Link href="/rooms" className="hover:text-blue-600 transition">
            Rooms
          </Link>
          <Link href="/booking" className="hover:text-blue-600 transition">
            Booking
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="text-red-600 hover:underline"
            >
              Logout
            </button>
          ) : (
            <Link href="/admin" className="hover:underline">
              Admin
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
