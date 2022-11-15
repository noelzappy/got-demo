import React from "react";
import {
  CharacterParent,
  ErrorDialog,
  HouseItem,
  InfoText,
  Loader,
  Spinner,
  Title,
  BookItem,
} from "app/components";
import { useParams } from "react-router-dom";
import { useGetCharacterQuery } from "app/services/modules/characters";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetCharacterQuery(id);

  return (
    <div className="content">
      <div className="content-inner">
        <Loader loading={isLoading} />
        <Title title={isLoading ? "Loading..." : data.name || "Unknown"} back />
        <Spinner loading={isLoading} />
        <ErrorDialog open={isError} />

        <div className="grid-row">
          <div className="card grid-row-item">
            <div className="spacer" />
            <h3>Aliases</h3>

            <p>{data?.aliases.map((alias) => alias).join(", ")}</p>
            <p className="text-c">
              Titles:{" "}
              <span className="text">
                {data?.titles.map((title) => title).join(", ")}
              </span>
            </p>
            <div className="divider" />
            <CharacterParent id={data?.mother} title="Mother" left />
            <CharacterParent id={data?.father} title="Father" left />
            <CharacterParent id={data?.spouse} title="Spouse" left />
            <InfoText title="Culture" subtitle={data?.culture} />
            <InfoText title="Born" subtitle={data?.born} />
            <InfoText title="Died" subtitle={data?.died} />
          </div>

          <div className="card grid-row-item">
            <div className="spacer" />
            <p> Allegiances</p>
            {data?.allegiances.map((house) => (
              <HouseItem id={house} key={house} title="Allegiance" left />
            ))}

            <div className="divider" />
            <p> Books</p>
            {data?.books.map((book) => (
              <BookItem id={book} key={book} title="Book" left />
            ))}
            <div className="divider" />
            <p> TV Series</p>
            {data?.tvSeries.map((series) => (
              <li key={series}>{series}</li>
            ))}
            <div className="divider" />
            <p> Played By</p>
            {data?.playedBy.map((actor) => (
              <li key={actor}>{actor}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
