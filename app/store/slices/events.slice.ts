import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getEvents, createEvent } from "@/app/lib/api/events"; // adjust path
import type { FormProps } from "@/app/components/new-event/models";
import type { EventProps } from "@/app/components/event-list/models";

interface EventsState {
  events: EventProps[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: EventsState = {
  events: [],
  status: "idle",
};

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  return await getEvents();
});

export const createEventThunk = createAsyncThunk("events/createEvent", async (eventData: FormProps) => {
  const res = await createEvent(eventData);
  return res.event;
});

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<EventProps[]>) => {
        state.status = "succeeded";
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(createEventThunk.fulfilled, (state, action: PayloadAction<EventProps>) => {
        state.events.push(action.payload);
      });
  },
});

export default eventsSlice.reducer;
