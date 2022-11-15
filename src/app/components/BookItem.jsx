import React from "react";
import { useGetBookQuery } from "app/services/modules/books";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BookItem = ({ id, title, left = false }) => {
  const newId = id?.split("/").pop() || "";
  const { data, isLoading } = useGetBookQuery(newId);
  const navigate = useNavigate();

  const classes = left ? "row hover-cursor" : "row hover-cursor f-center";

  return (
    <div
      className={classes}
      onClick={() => {
        if (id) {
          navigate(`/books/${newId}`);
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

export default BookItem;
