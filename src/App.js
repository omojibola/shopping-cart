import React, { useEffect } from 'react';

import './App.css';
import Header from './components/header/Header';
import ContextDataProvider from './Context';
import Section from './Section';

const App = () => {
  return (
    <ContextDataProvider>
      <div className="App">
        <Header />
        <Section />
      </div>
    </ContextDataProvider>
  );
};

export default App;
