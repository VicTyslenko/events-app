import { useEffect, useState } from "react";
import { getEvents } from "@/app/lib/api/events";
import type { EventProps } from "@/app/components/event-list/models";

export const useMain = () => {
  const [allEvents, setAllEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    getEvents().then(setAllEvents);
  }, []);

  return { allEvents };
};
