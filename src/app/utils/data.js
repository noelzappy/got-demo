export function transformResponse(res, meta) {
  const links = meta.response.headers.get("Link");
  const next = links?.split(",").find((link) => link.includes('rel="next"'));
  const lastPage = links
    ?.split(",")
    .find((link) => link.includes('rel="last"'));

  const lastPageNumber = lastPage.split("page=").pop().split("&")[0];
  const nextPageNumber = next.split("page=").pop().split("&")[0];

  return {
    res,
    meta: {
      nextPage: next ? parseInt(nextPageNumber) : undefined,
      lastPage: lastPage ? parseInt(lastPageNumber) : undefined,
    },
  };
}
