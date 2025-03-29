import React from "react";
import { useNavigate } from "react-router-dom";

import imageBannerMain from "@assanad/assets/banner/main-banner-upz-masjid-abdurrahman-assanad-jati.png";

const ProgramsGrid = ({data, dataBanners = []}) => {
  const navigate = useNavigate();

  return (
    <div className="upz-programs-grid">
      {data.map((program) => (
        <div
          key={program.codename}
          className="upz-program-item flex-column gap-075"
          // onClick={() => navigate(`/${program.category}/${program.codename}`)}
          onClick={() => navigate(`/checkout`)}
        >
          <div className="skeleton">
            <img src={dataBanners[program.codename] || imageBannerMain} alt="Banner UPZ Masjid Abdurrahman Assanad Jati" />
          </div>
          <div className="flex-column gap-025">
            <h4 className="upz-programs-grid-title">{program.title}</h4>
            {program.teaser && <p className="upz-programs-grid-teaser">{program.teaser}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramsGrid;
