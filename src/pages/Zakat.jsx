import React from "react";
import { useNavigate } from "react-router-dom";

const Zakat = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-inner upz-page-zakat">
      <div className="upz-page-zakat__header">
        <h1>Zakat</h1>
      </div>

      <div className="upz-page-zakat__content">
        info
      </div>
    </div>
  );
};

export default Zakat;
