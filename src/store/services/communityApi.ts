import { apiSlice } from "./apiSlice";

export const communitySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommunityContent: builder.query({
      query: () => "community",
    }),
  }),
});

export const { useGetCommunityContentQuery } = communitySlice;
