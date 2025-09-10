import { NextResponse, NextRequest } from "next/server";
import data from "@/data/events.json";
// import { type EventProps } from "@/app/components/event-list/models";

export async function GET(_, { params }) {
  // const data = rawData as EventProps[];

  const event = data.find((e) => String(e.id) === params.id);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}
