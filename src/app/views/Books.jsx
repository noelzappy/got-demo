import React from "react";
import { Loader, Pagination } from "app/components";
import useInfiniteQuery from "app/hooks/useInfiniteQuery";
import { booksApi } from "app/services/modules/books";
import { FiBookOpen } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const books = useInfiniteQuery(booksApi.endpoints.getBooks);
  const navigate = useNavigate();

  return (
    <div className="content">
      <div className="content-inner">
        <Loader loading={books.isLoading || books.isFetchingNextPage} />

        <div className="grid-container mb-2 ">
          {books?.data?.map((book, index) => (
            <div
              className="grid-item"
              key={index}
              onClick={() => {
                const id = book.url.split("/").pop();
                navigate(`/books/${id}`);
              }}
            >
              <FiBookOpen size={50} />
              <h3>{book.name}</h3>
              <div className="divider" />
              <p className="text-c">
                Author(s):{" "}
                <span className="text">
                  {book.authors?.map((author) => author).join(", ")}
                </span>
              </p>

              <p className="text-c">
                Country: <span className="text">{book.country}</span>
              </p>
            </div>
          ))}
        </div>
        <Pagination {...books} />
        <div className="spacer" />
      </div>
    </div>
  );
};

export default Page;
