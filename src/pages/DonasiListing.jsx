import React from "react";
import { useNavigate } from "react-router-dom";

const DonasiListing = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-inner upz-page-donasiListing">
      <div className="upz-page-donasiListing__header">
        <h1>Donasi</h1>
      </div>

      <div className="upz-page-programs__content">
        Coming Soon <button onClick={() => navigate('/donasi/coming-soon')}>view program</button>
      </div>

    </div>
  );
};

export default DonasiListing;
