import React from "react";
import { useGetCharacterQuery } from "app/services/modules/characters";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CharacterParent = ({ id, title, left = false }) => {
  const newId = id?.split("/").pop() || "";
  const { data, isLoading } = useGetCharacterQuery(newId);
  const navigate = useNavigate();

  const classes = left ? "row hover-cursor" : "row hover-cursor f-center";

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
          <FiUser size={20} />
          <div>{data?.name || "Unknown"}</div>
        </div>
      )}
    </div>
  );
};

export default CharacterParent;
