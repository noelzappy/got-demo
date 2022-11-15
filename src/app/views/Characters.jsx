import React from "react";
import { Loader,  Spinner } from "app/components";
import useInfiniteQuery from "app/hooks/useInfiniteQuery";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { charactersApi } from "app/services/modules/characters";

const Page = () => {
  const characters = useInfiniteQuery(charactersApi.endpoints.getCharacters);
  const navigate = useNavigate();

  return (
    <div className="content">
      <Loader loading={characters.isLoading || characters.isFetchingNextPage} />
    
      <div className="grid-container mb-2 ">
        {characters.data?.map((character, index) => (
          <div
            className="grid-item"
            key={index}
            onClick={() => {
              const id = character.url.split("/").pop();
              navigate(`/characters/${id}`);
            }}
          >
            <FiUser size={50} />
            <h3>{character.name || "Unknown"}</h3>
            <p>{character.aliases.map((alias) => alias).join(", ")}</p>
            <div className="divider" />
            <p className="text-c">
              Gender: <span className="text">{character.gender}</span>
            </p>

            <p className="text-c">
              Books: <span className="text">{character.books.length}</span>
            </p>
          </div>
        ))}
      </div>
      <Spinner
        loading={characters.isFetchingNextPage || characters.isLoading}
      />

      {characters.hasNextPage &&
        !characters.isLoading &&
        !characters.isFetchingNextPage && (
          <div className="center">
            <button onClick={() => characters.fetchNextPage()}>
              Load More
            </button>
          </div>
        )}
      <div className="spacer" />
    </div>
  );
};

export default Page;
