import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "@/app/store/slices/events.slice";
import { RootState } from "@/app/store/store";
import { AppDispatch } from "@/app/store/store";

export const useMain = () => {
  const data = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  const allEvents = data.events;
  return { allEvents };
};
