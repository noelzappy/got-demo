import { transformResponse } from "app/utils/data";
import { api } from "../api";

export const housesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHouses: build.query({
      query: ({ page = 1, pageSize = 20 }) => ({
        url: "/houses",
        params: {
          page,
          pageSize,
        },
      }),
      transformResponse,
    }),

    getHouse: build.query({
      query: (id) => ({
        url: "/houses",
        params: {
          id,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetHouseQuery } = housesApi;
