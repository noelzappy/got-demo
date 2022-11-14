import { api } from "../api";

function transformResponse(res, meta) {
  const links = meta.response.headers.get("Link");
  const next = links?.split(",").find((link) => link.includes('rel="next"'));

  return {
    res,
    meta: {
      nextPage: next
        ? next.split(";")[0].replace("<", "").replace(">", "")
        : null,
    },
  };
}

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
