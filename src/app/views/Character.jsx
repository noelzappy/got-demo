import React from "react";
import { CharacterParent, InfoText, Loader, Title } from "app/components";
import { useParams } from "react-router-dom";
import { useGetCharacterQuery } from "app/services/modules/characters";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCharacterQuery(id);

  return (
    <div className="content">
      <Loader loading={isLoading} />
      <Title title={isLoading ? "Loading..." : data.name || "Unknown"} back />

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
          <CharacterParent id={data?.mother} title="Mother" />
          <CharacterParent id={data?.father} title="Father" />
          <CharacterParent id={data?.spouse} title="Spouse" />
          <InfoText title="Culture" subtitle={data?.culture} />
          <InfoText title="Born" subtitle={data?.born} />
          <InfoText title="Died" subtitle={data?.died} />
        </div>

        <div className="card grid-row-item">
          <div className="spacer" />
          <h3>Aliases</h3>

          <p>{data?.aliases.map((alias) => alias).join(", ")}</p>
          <div className="divider" />

          <p className="text-c">
            Country: <span className="text">{data?.country}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
