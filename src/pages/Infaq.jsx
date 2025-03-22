import React from "react";
import { useNavigate } from "react-router-dom";

const Infaq = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-inner upz-page-infaq">
      <div className="upz-page-infaq__header">
        <h1>Infaq</h1>
      </div>

      <div className="upz-page-infaq__content">
        info
      </div>
    </div>
  );
};

export default Infaq;
