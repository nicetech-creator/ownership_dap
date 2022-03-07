import React from 'react';
import { Web3ReactProvider } from '@web3-react/core'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import './App.css';
import Home from './Home';

import { getLibrary } from './utils/web3React'

const App = () => {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Home />
      </Web3ReactProvider>
      <NotificationContainer/>
    </>
  )
}

export default App
