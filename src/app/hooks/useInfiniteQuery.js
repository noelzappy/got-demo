import { useEffect, useRef, useState } from "react";

function useInfiniteQuery(endpoint, params = { page: 1 }) {
  const nextPage = useRef(null);
  const lastPage = useRef(null);
  const [pages, setPages] = useState(undefined);
  const [trigger, result] = endpoint.useLazyQuery();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    nextPage.current = params.page;
    lastPage.current = params.page;
    trigger(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = async (p) => {
    setLoading(true);
    await trigger(p);
    setLoading(false);
  };

  const getPageParams = (data) => ({
    nextPage: data?.meta?.nextPage || undefined,
    lastPage: data?.meta?.lastPage || undefined,
  });

  useEffect(() => {
    if (!result.isSuccess) return;
    nextPage.current = getPageParams(result.data).nextPage;
    lastPage.current = getPageParams(result.data).lastPage;
    setPages([...result.data?.res]);

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
    nextPage: nextPage.current !== undefined ? nextPage.current : 1,
    lastPage: lastPage.current !== undefined ? lastPage.current : 1,
    hasPreviousPage: nextPage.current !== undefined && nextPage.current - 1 > 1,
    fetchPreviousPage() {
      if (lastPage.current !== undefined) {
        trigger({ ...params, page: lastPage.current });
      }
    },
    currentPage: nextPage.current !== undefined ? nextPage.current - 1 : 1,
    fetchPage(page) {
      trigger({ ...params, page });
    },
  };
}

export default useInfiniteQuery;
