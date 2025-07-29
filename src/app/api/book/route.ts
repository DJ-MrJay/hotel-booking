import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const docRef = await addDoc(collection(db, "bookings"), body);
    return NextResponse.json({ message: "Booking saved", id: docRef.id });
  } catch (error) {
    console.error("Error saving booking:", error);
    return NextResponse.json({ error: "Booking failed" }, { status: 500 });
  }
}
