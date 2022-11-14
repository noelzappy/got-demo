import React from "react";

function InfoText({ title, subtitle }) {
  return (
    <div>
      <p className="text-c">
        {title}: <span className="text">{subtitle || "N/A"}</span>
      </p>
    </div>
  );
}

export default InfoText;
