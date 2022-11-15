import React from "react";

export default function Spinner({ loading }) {
  if (loading) {
    return (
      <div className="f-center center">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return null;
}
