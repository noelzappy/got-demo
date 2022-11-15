import { transformResponse } from "app/utils/data";
import { api } from "../api";

export const housesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHouses: build.query({
      query: ({ page = 1, pageSize = 20 }) =>
        `/houses?page=${page}&pageSize=${pageSize}`,
      transformResponse,
    }),

    getHouse: build.query({
      query: (id) => `/houses/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetHouseQuery } = housesApi;
