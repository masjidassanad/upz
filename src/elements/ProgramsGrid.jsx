import React from "react";
import { useNavigate } from "react-router-dom";

import imageBannerMain from "@assanad/assets/banner/main-banner-upz-masjid-abdurrahman-assanad-jati.png";

const ProgramsGrid = ({data, onClick = null}) => {
  const navigate = useNavigate();

  const handleClick = (program) => {
    if (onClick) {
      onClick(program);
    } else {
      // navigate(`/${program.category}/${program.codename}`);
      navigate(`/checkout`);
    }
  }

  return (
    <div className="upz-programs-grid">
      {data.map((program) => (
        <div
          key={program.codename}
          className="upz-program-item flex-column gap-075"
          onClick={() => handleClick(program)}
        >
          <div className="skeleton skeleton-img-fit">
            <img
              className="skeleton-img-fit"
              src={program._banner || imageBannerMain}
              alt={`Banner ${program.title} - UPZ Masjid Abdurrahman Assanad Jati`}
              loading="lazy"
            />
            <div className="skeleton skeleton-animate"/>
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
