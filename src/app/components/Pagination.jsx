/* eslint-disable */

import React from "react";
import ReactPaginate from "react-paginate";
// import { useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";

const Pagination = ({
  currentPage = 1,
  fetchPage,
  lastPage,
  isLoading,
  isFetchingNextPage,
}) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (e) => {
    fetchPage(e.selected + 1);
    // setSearchParams({ page: e.selected + 1 });
  };

  return (
    <div className="center f-center d-flex justify-content-center">
      {!isLoading && !isFetchingNextPage ? (
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={lastPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={searchParams || currentPage - 1}
          renderOnZeroPageCount={null}
        />
      ) : (
        <Spinner loading={isFetchingNextPage || isLoading} />
      )}
    </div>
  );
};

export default Pagination;
