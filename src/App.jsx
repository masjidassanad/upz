import { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import useBagsStore from "@assanad/services/useBagsStore";
import config from '@assanad/config';
import '@assanad/App.css'

import { Icon, IconLoading } from '@assanad/elements/Icon';

const App = () => {
  // console.log('=== App.jsx ===');
  const navigate = useNavigate();
  const location = useLocation();
  console.log({config});

  const isActive = (path) => path === '/' ? location.pathname === path : location.pathname.startsWith(path);

  const { getBags, setBags, checkAndFlushBags } = useBagsStore();

  useEffect(() => {
    checkAndFlushBags(config.app.version);

    if (!getBags('config')) {
      setBags('config', config);
    }
  }, []);

  return (
    <div className="upz-app">
      <div className="upz-app__header">
        <div>{config.app.name}</div>
      </div>

      <div className="upz-app__main">
        {getBags('config') ? <Outlet /> : <h2 className="flex-row gap-100"><IconLoading /> Loading...</h2>}
      </div>

      <div className="upz-app__footer">

        <div className={`upz-app__footer-nav ${isActive('/') ? 'active' : ''}`} onClick={() => navigate('/')}>
          <Icon name="home-alt-2" />
          <div>Home</div>
        </div>
        <div className={`upz-app__footer-nav ${isActive('/zakat') ? 'active' : ''}`} onClick={() => navigate('/zakat')}>
          <Icon name="archive" />
          <div>Zakat</div>
        </div>
        <div className={`upz-app__footer-nav ${isActive('/infaq') ? 'active' : ''}`} onClick={() => navigate('/infaq')}>
          {/* <Icon name="donate-blood" /> */}
          <Icon name="stack-overflow" type="logo" />
          <div>Infaq</div>
        </div>
        <div className={`upz-app__footer-nav ${isActive('/program') ? 'active' : ''}`} onClick={() => navigate('/programs')}>
          <Icon name="layer" />
          <div>Donasi</div>
        </div>
        {/* TODO: modal */}
        <div className={`upz-app__footer-nav ${isActive('/kontak') ? 'active' : ''}`} onClick={() => navigate('/kontak')}>
          <Icon name="chat" />
          <div>Kontak</div>
        </div>

      </div>
    </div>
  )
}

export default App
