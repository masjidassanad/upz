import React from "react";
import { useNavigate } from "react-router-dom";

const Konfirmasi = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-inner upz-page-konfirmasi">
      <div className="upz-page-konfirmasi__header">
        <h1>Konfirmasi</h1>
      </div>

      <div className="upz-page-konfirmasi__content">
        info
      </div>
    </div>
  );
};

export default Konfirmasi;
