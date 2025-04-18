import { apiSlice } from "./apiSlice";

export const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "events", // Removed unused parameter
    }),
    getEventById: builder.query({
      query: (id) => `events/${id}`,
    }),
  }),
});

export const { useGetEventsQuery, useGetEventByIdQuery } = eventApi;
