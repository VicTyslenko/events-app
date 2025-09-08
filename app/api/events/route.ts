import { NextResponse } from "next/server";
import data from "@/data/events.json";

export async function GET() {
  return NextResponse.json(data);
}

export async function PUT(req: Request) {
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
