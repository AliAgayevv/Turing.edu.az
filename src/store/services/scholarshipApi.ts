import { apiSlice } from "./apiSlice";

export const schoolarshipApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getScholarship: builder.query({
      query: () => "schoolarship", // Removed unused parameter
    }),
    getScholarshipById: builder.query({
      query: (id) => `schoolarship/${id}`,
    }),
  }),
});

export const { useGetScholarshipByIdQuery, useGetScholarshipQuery } =
  schoolarshipApi;
