import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import './App.css'


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <p>
        UPZ Masjid Assanad
      </p>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
