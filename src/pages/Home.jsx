import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const Home = () => {
  const navigate = useNavigate();

  const {
    data: mainData,
    isLoading: mainDataLoading,
    error: mainDataError,
  } = useQuery({
    queryFn: () => api.getMainApi(),
    queryKey: ['main'],
  });

  if (mainDataLoading) return <div>Loading...</div>;
  if (mainDataError) return <div>Error fetching program: {mainDataError.message}</div>;

  console.log({mainData});


  return (
    <div className="upz-page-home">
      <div className="upz-page-home__programs">
        {mainData.programs.map((program) => (
          program.status && <div key={program.id} className="program-item">
            {program.name} {program.featured && '🔥'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
