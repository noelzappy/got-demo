import { transformResponse } from "app/utils/data";
import { api } from "../api";

export const charactersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCharacters: build.query({
      query: ({ page = 1, pageSize = 20 }) => ({
        url: "/characters",
        params: {
          page,
          pageSize,
        },
      }),
      transformResponse,
    }),

    getCharacter: build.query({
      query: (id) => ({
        url: "/characters",
        params: {
          id,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCharacterQuery } = charactersApi;
