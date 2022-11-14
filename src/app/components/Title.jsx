import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Title = ({ title, subtitle, back }) => {
  const classes = back ? "center row f-center" : "center";
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes}>
        {back && (
          <button
            className="mr"
            onClick={() => {
              navigate(-1);
            }}
          >
            <FiArrowLeft size={20} />
          </button>
        )}

        <div>
          <h1>
            <span>{title}!</span>
          </h1>
          <p> {subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
