import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const Home = () => {
  const navigate = useNavigate();

  const {
    data: ajaxProgramData,
    isLoading: ajaxProgramLoading,
    error: ajaxProgramError,
  } = useQuery({
    queryKey: ['program'],
    queryFn: () => api.getPrograms(),
  });

  if (ajaxProgramLoading) return <div>Loading...</div>;
  if (ajaxProgramError) return <div>Error fetching program: {ajaxProgramError.message}</div>;

  return (
    <div className="upz-page-home">
      <div className="upz-page-home__programs">
        {ajaxProgramData.map((program) => (
          <div key={program.id} className="program-item">
            {program.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
