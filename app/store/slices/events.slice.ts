import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getEvents } from "@/app/lib/api/events";
import { EventProps } from "@/app/components/event-list/models";

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

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<EventProps>) {
      state.events.push(action.payload);
    },
  },
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
      });
  },
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
