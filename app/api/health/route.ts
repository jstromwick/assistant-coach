import { NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await getMongoClientPromise();
    await client.db("admin").command({ ping: 1 });
    return NextResponse.json({ status: "ok", db: "connected" });
  } catch (error) {
    console.error("Health check: MongoDB connection failed", error);
    return NextResponse.json(
      { status: "error", db: "unreachable" },
      { status: 503 },
    );
  }
}
