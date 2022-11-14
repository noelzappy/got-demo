import { api } from "../api";

function transformResponse(res, meta) {
  const links = meta.response.headers.get("Link");
  const next = links?.split(",").find((link) => link.includes('rel="next"'));
  console.log("NEXT", next);

  return {
    res,
    meta: {
      nextPage: next
        ? next.split(";")[0].replace("<", "").replace(">", "")
        : null,
    },
  };
}

export const booksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: ({ page = 1, pageSize = 10 }) =>
        `/books?page=${page}&pageSize=${pageSize}`,
      transformResponse,
    }),
  }),
  overrideExisting: false,
});

export const { useGetBooksQuery } = booksApi;
