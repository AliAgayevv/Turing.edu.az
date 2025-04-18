import { apiSlice } from "./apiSlice";

export const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSpeciality: builder.query({
      query: () => "specialty", // Removed unused parameter
    }),
    getSpecialityById: builder.query({
      query: (id) => `specialty/${id}`,
    }),
  }),
});

export const { useGetSpecialityByIdQuery, useGetSpecialityQuery } = eventApi;
