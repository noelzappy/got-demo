import React from "react";
import { Loader, Title } from "app/components";
import { useGetBookQuery } from "app/services/modules/books";
import { useParams } from "react-router-dom";
import moment from "moment";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookQuery(id);

  return (
    <div className="content">
      <Loader loading={isLoading} />
      <Title title={data?.name || "Loading..."} back />
      <div className="card mb-2 width-50 center f-center">
        <div className="spacer" />
        <p className="text-c">
          Author(s):{" "}
          <span className="text">
            {data?.authors.map((author) => author).join(", ")}
          </span>
        </p>
        <p className="text-c">
          Country: <span className="text">{data?.country}</span>
        </p>

        <p className="text-c">
          Publisher: <span className="text">{data?.publisher}</span>
        </p>

        <p className="text-c">
          Released Date:{" "}
          <span className="text">
            {moment(data?.released).format("DD MMM YYYY")}
          </span>
        </p>

        <p className="text-c">
          ISBN: <span className="text">{data?.isbn}</span>
        </p>

        <p className="text-c">
          Number of Pages: <span className="text">{data?.numberOfPages}</span>
        </p>

        <p className="text-c">
          Media Type: <span className="text">{data?.mediaType}</span>
        </p>

        <p className="text-c">
          Number of Characters:{" "}
          <span className="text">{data?.characters.length}</span>
        </p>

        <p className="text-c">
          Number of POV-Characters:{" "}
          <span className="text">{data?.povCharacters.length}</span>
        </p>

        <div className="divider" />
      </div>
    </div>
  );
};

export default Page;
