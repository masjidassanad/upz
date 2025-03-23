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
      <div className="upz-app__main">
        <div className="upz-app__header">
          <div className="upz-app__header-title">{config.app.name}</div>
          {/* TODO: User login */}
        </div>

        <div className="upz-app__content">
          {getBags('config') ? <Outlet /> : <h2 className="flex-row gap-100"><IconLoading /> Loading...</h2>}
        </div>
      </div>

      <div className="upz-app__footer">
        <div className="upz-app__footer-bar">

          <div className={`upz-app__footer-nav ${isActive('/') ? 'active' : ''}`} onClick={() => navigate('/')}>
            <Icon name="home-alt-2" />
            <div>Home</div>
          </div>
          <div className={`upz-app__footer-nav ${isActive('/ziswah') ? 'active' : ''}`} onClick={() => navigate('/ziswah')}>
            <Icon name="box" />
            <div>ZISWAH</div>
          </div>
          <div className={`upz-app__footer-nav nav-action-pay ${isActive('/checkout') ? 'active' : ''}`} onClick={() => navigate('/checkout')}>
            <Icon name="plus-circle" />
            <div>Bayar</div>
          </div>
          <div className={`upz-app__footer-nav ${isActive('/donasi') ? 'active' : ''}`} onClick={() => navigate('/donasi')}>
            {/* <Icon name="donate-heart" /> */}
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
    </div>
  )
}

export default App
