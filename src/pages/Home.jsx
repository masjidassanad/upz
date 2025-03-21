import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBagsStore from "@assanad/services/useBagsStore";

const programsGrid = (data) => {
  return (
    <div className="upz-page-home__programs grid grid-cols-2 gap-base-inline">
      {data.map((program) => (
        <div className="flex-column gap-100">
          <div className="skeleton skeleton-animate" style={{height: '125px', borderRadius: '1rem'}}></div>
          <div>{program.name}</div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      ))}
    </div>
  )
}

const Home = () => {
  const navigate = useNavigate();
  const { getBags } = useBagsStore();

  const programsData = getBags('config.tempData.programs');
  console.log(programsData);

  return (
    <div className="upz-page-home flex-column gap-base-block">
      <div className="skeleton skeleton-animate" style={{height: '200px', borderRadius: '1rem'}}></div>

      <div className="upz-page-home__programs flex-column gap-base-block">
        <div className="flex-column gap-100">
          <h3>Program Utama</h3>
          {programsGrid(programsData.filter((program) => program.status && program.main))}

          {/* {programsData.map((program) => (
            program.status && program.main && <div key={program.id} className="program-item">
              {program.name} {program.featured && '🔥'}
            </div>
          ))} */}
        </div>

        <div className="flex-column gap-100">
          <h3>Rekomendasi Program</h3>
          {programsGrid(programsData.filter((program) => program.status && !program.main))}

          {/* {programsData.map((program) => (
            program.status && !program.main && <div key={program.id} className="program-item">
              {program.name} {program.featured && '🔥'}
            </div>
          ))} */}
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
