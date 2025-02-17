import { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";

import config from '@assanad/config';
import useBagsStore from '@assanad/services/useBagsStore';

import '@assanad/App.css'

function App() {
  console.log('=== App.jsx ===');

  const navigate = useNavigate();
  const { setBags } = useBagsStore();

  useEffect(() => {
    setBags('config', config);
  }, []);

  return (
    <div className="upz-app">
      <div className="upz-app__header">
        <div as="h1" variant="display">
          {config.app.name}
        </div>
      </div>
      <div className="upz-main">
        <Outlet />
      </div>
      <div className="upz-app__footer">
      <div>
        <div className="upz-app__footer-button" onClick={() => navigate('/')}>
          <div as="div" variant="body">Home</div>
        </div>
        <div className="upz-app__footer-button" onClick={() => navigate('/program/checkin')}>
          <div as="div" variant="body" >Check In</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
