import React from "react";
import { useGetHouseQuery } from "app/services/modules/houses";
import { useNavigate } from "react-router-dom";

const HouseItem = ({ id, title, left = false }) => {
  const newId = id?.split("/").pop() || "";
  const { data, isLoading } = useGetHouseQuery(newId);
  const navigate = useNavigate();
  const classes = left
    ? "row hover-cursor item"
    : "row hover-cursor f-center item";

  return (
    <div
      className={classes}
      onClick={() => {
        if (id) {
          navigate(`/houses/${newId}`);
        }
      }}
    >
      <div>{title}: </div>{" "}
      {isLoading ? (
        <div className="text">Loading...</div>
      ) : (
        <div className="row">
          <div>{data?.name || "Unknown"}</div>
        </div>
      )}
    </div>
  );
};

export default HouseItem;
