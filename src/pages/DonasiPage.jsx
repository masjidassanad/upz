import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DonasiPage = () => {
  const navigate = useNavigate();
  const { codename } = useParams();

  return (
    <div className="upz-page-inner upz-page-donasiPage">
      <div className="upz-page-donasiPage__header">
        <h1>{codename}</h1>
      </div>

      <div className="upz-page-donasiPage__content">
        info
      </div>
    </div>
  );
};

export default DonasiPage;
