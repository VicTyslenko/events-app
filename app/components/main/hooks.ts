import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "@/app/store/slices/events.slice";
import { RootState } from "@/app/store/store";
import { AppDispatch } from "@/app/store/store";
import { EventsProps } from "../event-list/models";

export const useMain = () => {
  const data: EventsProps = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch<AppDispatch>();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const handleSearchDate = (value: Date | null) => {
    setSelectedDate(value);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filtered = data.events.filter((el) => {
    const matchText = search ? el.title.toLowerCase().includes(search.toLowerCase()) : true;
    const matchDate = selectedDate ? el.date === selectedDate.toISOString().split("T")[0] : true;

    return matchText && matchDate;
  });

  const sortedByTitleLength = [...filtered].sort((a, b) => a.title.length - b.title.length);

  return { events: sortedByTitleLength, handleSearch, handleSearchDate };
};
