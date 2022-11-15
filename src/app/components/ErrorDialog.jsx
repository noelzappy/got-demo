import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorDialog({ open }) {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setVisible(open);
  }, [open]);
  if (visible) {
    return (
      <div>
        <div id="myModal" className="modal width-50">
          <div class="modal-content">
            <span
              class="close"
              onClick={() => {
                setVisible(false);
                navigate(-1);
              }}
            >
              &times;
            </span>
            <p>Something went wrong. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
