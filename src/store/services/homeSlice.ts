import { apiSlice } from "./apiSlice";

export const homeSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomeContent: builder.query({
      query: () => "home",
    }),
  }),
});

export const { useGetHomeContentQuery } = homeSlice;
