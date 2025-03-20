import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-home flex-column gap-150">
      <div className="skeleton skeleton-animate" style={{height: '150px', borderRadius: '1rem'}}></div>

      <div className="upz-page-home__programs flex-row gap-150">
        <div style={{flex: 1}}>
          <div className="flex-column gap-100">
            <div className="skeleton skeleton-animate" style={{height: '100px', borderRadius: '1rem'}}></div>
            <div>Zakat</div>
            {/* <div className="skeleton skelseton-text" style={{ height: '16px', width: '70%'}}></div> */}
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
        <div style={{flex: 1}}>
          <div className="flex-column gap-100">
            <div className="skeleton skeleton-animate" style={{height: '100px', borderRadius: '1rem'}}></div>
            <div>Infaq</div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
      </div>

      <div>
        {/* {settingsData.programs.map((program) => (
          program.status && <div key={program.id} className="program-item">
            {program.name} {program.featured && '🔥'}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Home;
