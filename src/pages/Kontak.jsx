import React from "react";
import { useNavigate } from "react-router-dom";

const Kontak = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-kontak">
      <div className="upz-page-kontak__header">
        <h1>Kontak</h1>
      </div>

      <div className="upz-page-kontak__content">
        info
      </div>
    </div>
  );
};

export default Kontak;
