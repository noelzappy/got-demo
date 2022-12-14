import React from "react";
import { InfoText, Loader, Pagination } from "app/components";
import useInfiniteQuery from "app/hooks/useInfiniteQuery";
import { FiPackage } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { housesApi } from "app/services/modules/houses";

const Page = () => {
  const houses = useInfiniteQuery(housesApi.endpoints.getHouses);
  const navigate = useNavigate();

  return (
    <div className="content">
      <div className="content-inner">
        <Loader loading={houses.isLoading || houses.isFetchingNextPage} />

        <div className="grid-container mb-2 ">
          {houses.data?.map((house, index) => (
            <div
              className="grid-item"
              key={index}
              onClick={() => {
                const id = house.url.split("/").pop();
                navigate(`/houses/${id}`);
              }}
            >
              <FiPackage size={50} />
              <h3>{house.name || "Unknown"}</h3>

              <div className="divider" />

              <InfoText title="Coat of Arms" subtitle={house.coatOfArms} />
              <InfoText title="Region" subtitle={house.region} />
            </div>
          ))}
        </div>
        <Pagination {...houses} />
        <div className="spacer" />
      </div>
    </div>
  );
};

export default Page;
