import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const Home = () => {
  const navigate = useNavigate();

  const {
    data: ajaxMainData,
    isLoading: ajaxMainLoading,
    error: ajaxMainError,
  } = useQuery({
    queryKey: ['main'],
    queryFn: () => api.getMainApi(),
  });

  if (ajaxMainLoading) return <div>Loading...</div>;
  if (ajaxMainError) return <div>Error fetching program: {ajaxMainError.message}</div>;

  return (
    <div className="upz-page-home">
      <div className="upz-page-home__programs">
        {ajaxMainData.programs.map((program) => (
          program.status && <div key={program.id} className="program-item">
            {program.name} {program.featured && '🔥'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
