import React from "react";
import { useNavigate } from "react-router-dom";

const Ziswah = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-inner upz-page-zakat">
      <div className="upz-page-ziswah__header">
        <h1>Ziswah</h1>
        <p className="upz-tagline">Zakat, Infaq, Shadaqah, Wakaf dan Hibah</p>
      </div>

      <div className="upz-page-ziswah__content">
        info
      </div>
    </div>
  );
};

export default Ziswah;
