import { transformResponse } from "app/utils/data";
import { api } from "../api";

export const booksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: ({ page = 1, pageSize = 20 }) =>
        `/books?page=${page}&pageSize=${pageSize}`,
      transformResponse,
    }),

    getBook: build.query({
      query: (id) => `/books/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetBookQuery } = booksApi;
