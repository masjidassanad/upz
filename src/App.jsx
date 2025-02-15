import { useEffect } from 'react'
import { Outlet } from "react-router-dom";

import config from './config';
import useBagsStore from './services/useBagsStore';
import './App.css'

function App() {
  console.log('=== App.jsx ===');

  const { setBags } = useBagsStore();

  useEffect(() => {
    setBags('config', config);
  }, []);

  return (
    <div className="upz-app">
      <p>
        {config.app.name}
      </p>
      <div className="upz-outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default App
