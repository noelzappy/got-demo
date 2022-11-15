import React from "react";
import { useGetCharacterQuery } from "app/services/modules/characters";
import { useNavigate } from "react-router-dom";

const CharacterParent = ({ id, title, left = false }) => {
  const newId = id?.split("/").pop() || "";
  const { data, isLoading } = useGetCharacterQuery(newId);
  const navigate = useNavigate();
  const classes = left
    ? "row hover-cursor item"
    : "row hover-cursor f-center item";

  return (
    <div
      className={classes}
      onClick={() => {
        if (id) {
          navigate(`/characters/${newId}`);
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

export default CharacterParent;
