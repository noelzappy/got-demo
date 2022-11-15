import { transformResponse } from "app/utils/data";
import { api } from "../api";

export const charactersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCharacters: build.query({
      query: ({ page = 1, pageSize = 10 }) =>
        `/characters?page=${page}&pageSize=${pageSize}`,
      transformResponse,
    }),

    getCharacter: build.query({
      query: (id) => `/characters/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCharacterQuery } = charactersApi;
