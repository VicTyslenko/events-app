import { useEffect, useState } from "react";

import type { EventProps } from "../event-list/models";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "@/app/store/slices/events.slice";
import { RootState } from "@/app/store/store";
import { AppDispatch } from "@/app/store/store";

export const useMain = () => {
  const data = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch<AppDispatch>();

  const [filteredEvents, setFilteredEvents] = useState<EventProps[]>([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (!value) {
      setFilteredEvents([]);
      return;
    }
    const filtered = data.events.filter((el) => el.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredEvents(filtered);
  };

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const allEvents = search ? filteredEvents : data.events;

  const sortedByTitleLength = [...allEvents].sort((a, b) => a.title.length - b.title.length);

  return { events: sortedByTitleLength, handleSearch };
};
