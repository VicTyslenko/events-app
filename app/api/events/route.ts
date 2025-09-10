import { NextResponse } from "next/server";
import rawData from "@/data/events.json";
import type { EventProps } from "@/app/components/event-list/models";

export async function GET() {
  const data = rawData as EventProps[];
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const data = rawData as EventProps[];
  try {
    const body = await req.json();

    const newEvent = {
      id: data.length + 1,
      ...body,
    };

    data.push(newEvent);

    return NextResponse.json({
      message: "Event added successfully",
      event: newEvent,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
