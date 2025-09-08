const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
import { EventsProps } from "@/app/components/event-list/models";

export async function getEvents(): Promise<EventsProps[]> {
  const res = await fetch(`${BASE_URL}/api/events`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }
  return res.json();
}
