import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import useBagsStore from "@assanad/services/useBagsStore";
import api from "@assanad/services/api";

const Home = () => {
  const navigate = useNavigate();

  const { getBags, setBags } = useBagsStore();
  console.log({
    bags: getBags(),
    getVersion: getBags('config.app.version'),
  });

  const {
    data: settingsData,
    isLoading: settingsDataLoading,
    error: settingsDataError,
  } = useQuery({
    queryFn: () => api.getSettings(),
    queryKey: ['settings'],
  });

  useEffect(() => {
    setBags('settings', settingsData);
  }, [settingsData]);

  console.log({settingsData});

  if (settingsDataLoading) return <div>Loading...</div>;
  if (settingsDataError) return <div>Error fetching settings: {settingsDataError.message}</div>;

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
