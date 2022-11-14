import React from "react";
import { Loader, Title } from "app/components";
import useInfiniteQuery from "app/hooks/useInfiniteQuery";
import { booksApi } from "app/services/modules/books";
import { FiBookOpen } from "react-icons/fi";

const Page = () => {
  const books = useInfiniteQuery(booksApi.endpoints.getBooks);

  return (
    <div>
      <Loader loading={books.isLoading || books.isFetchingNextPage} />
      <Title title="Books" subtitle="Choose a book and let's begin" />
      <div className="grid-container mb-2">
        {books.data?.map((book) => (
          <div className="grid-item" key={book.id}>
            <FiBookOpen size={50} />

            <h4>{book.name}</h4>
          </div>
        ))}
      </div>

      {books.hasNextPage && !books.isLoading && !books.isFetchingNextPage && (
        <div className="center">
          <button onClick={() => books.fetchNextPage()}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Page;
