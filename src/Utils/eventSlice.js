import { createSlice } from "@reduxjs/toolkit";
import {
    events1, events2, events3, events4, events5, events6, events7, events8, events9, events10
} from "../components/Mockdata";

const allEvents = [events1, events2, events3, events4, events5, events6, events7, events8, events9, events10];

export const eventSlice = createSlice({
    name: "events",
    initialState: {
        eventCards: [],
        currentEventSet: 0,
        showShimmer: false,
        allLoaded: false
    },
    reducers: {
        loadMoreEvents: (state) => {
            const { currentEventSet } = state;

            // Check if all events have been loaded
            if (currentEventSet >= allEvents.length) {
                state.allLoaded = true;
                return;
            }

            // Load the current set of events directly
            state.eventCards = [...state.eventCards, ...allEvents[currentEventSet]];
            state.currentEventSet += 1;

         
        }
    }
});

export const { loadMoreEvents } = eventSlice.actions;
export default eventSlice.reducer;
