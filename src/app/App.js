import React from 'react';

import './App.css';

import { Body } from '../UI/components/Body/Body';
import {Header} from '../UI/components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
