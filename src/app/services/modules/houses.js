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

export const housesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHouses: build.query({
      query: ({ page = 1, pageSize = 10 }) =>
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
