import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import useBagsStore from "@assanad/services/useBagsStore";
import api from "@assanad/services/api";

import { Button, Text } from "@qmdz/ui";

const Home = () => {
  const navigate = useNavigate();

  const { bags,getBags, setBags } = useBagsStore();
  console.log({bags, getBags: getBags()});



  // const {
  //   data: settingsData,
  //   isLoading: settingsDataLoading,
  //   error: settingsDataError,
  // } = useQuery({
  //   queryFn: () => api.getSettings(),
  //   queryKey: ['settings'],
  // });

  // if (settingsDataLoading) return <div>Loading...</div>;
  // if (settingsDataError) return <div>Error fetching settings: {settingsDataError.message}</div>;

  // useEffect(() => {
  //   setBags('settings', settingsData);
  // }, [settingsData]);

  // console.log({settingsData});


  return (
    <div className="upz-page-home">
      <div className="upz-page-home__programs">
        <Text as="h1" variant="display" fontWeight="bold">Home</Text>

        Test <Button onClick={() => navigate('/program/test')}>Test</Button>
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
