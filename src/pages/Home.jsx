import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBagsStore from "@assanad/services/useBagsStore";
const Home = () => {
  const navigate = useNavigate();
  const { getBags } = useBagsStore();

  const programsData = getBags('config.tempData.programs');

  return (
    <div className="upz-page-home flex-column gap-150">
      <div className="skeleton skeleton-animate" style={{height: '200px', borderRadius: '1rem'}}></div>

      <div className="upz-page-home__programs flex-row gap-150">
        <div style={{flex: 1}}>
          <div className="flex-column gap-100">
            <div className="skeleton skeleton-animate" style={{height: '125px', borderRadius: '1rem'}}></div>
            <div>Zakat</div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            {/* <div className="skeleton skelseton-text" style={{ height: '16px', width: '70%'}}></div> */}
          </div>
        </div>
        <div style={{flex: 1}}>
          <div className="flex-column gap-100">
            <div className="skeleton skeleton-animate" style={{height: '125px', borderRadius: '1rem'}}></div>
            <div>Infaq</div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
      </div>

      <div className="upz-page-home__programs flex-column gap-200">
        <div className="flex-column gap-100">
          <h3>Program Utama</h3>
          {programsData.map((program) => (
            program.status && program.main && <div key={program.id} className="program-item">
              {program.name} {program.featured && '🔥'}
            </div>
          ))}
        </div>

        <div className="flex-column gap-100">
          <h3>Rekomendasi Program</h3>
          {programsData.map((program) => (
            program.status && !program.main && <div key={program.id} className="program-item">
              {program.name} {program.featured && '🔥'}
            </div>
          ))}
        </div>

        <div className="flex-column gap-100">
          <h3>Kampanye</h3>
          <div className="program-item">Kencleng UPZ</div>
          <div className="program-item">Sedekah sampah</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
