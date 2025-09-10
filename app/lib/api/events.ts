import { FormProps } from "@/app/create/new-event/models";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
import { EventProps } from "@/app/components/event-list/models";

export async function getEvents(): Promise<EventProps[]> {
  const res = await fetch(`${BASE_URL}/api/events`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }
  return res.json();
}

export async function createEvent(eventData: FormProps) {
  const response = await fetch(`${BASE_URL}/api/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error("Failed to create event");
  }

  return response.json();
}
