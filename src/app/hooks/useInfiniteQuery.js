import { useEffect, useRef, useState } from "react";

function useInfiniteQuery(endpoint, params = { page: 1 }) {
  const nextPage = useRef(null);
  const [pages, setPages] = useState(undefined);
  const [trigger, result] = endpoint.useLazyQuery();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    nextPage.current = params.page;
    trigger(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = async (p) => {
    setLoading(true);
    await trigger(p);
    setLoading(false);
  };

  const getNextPageParam = (data) =>
    data && data.meta && data.meta.nextPage ? nextPage.current + 1 : undefined;

  useEffect(() => {
    if (!result.isSuccess) return;
    nextPage.current = getNextPageParam(result.data);
    setPages([...(pages ?? []), ...result.data?.res]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result.data]);

  return {
    ...result,
    data: pages,
    isLoading: (result.isFetching && pages === undefined) || loading,
    hasNextPage: nextPage.current !== undefined,
    fetchNextPage() {
      if (nextPage.current !== undefined) {
        trigger({ ...params, page: nextPage.current });
      }
    },
    refetch() {
      trigger(params);
    },
    trigger: load,
    isFetchingNextPage: result.isFetching && pages !== undefined,
  };
}

export default useInfiniteQuery;
