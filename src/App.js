import React from 'react';
import Header from './componentes/Header';
import SectionInformations from './componentes/SectionInformations';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="h1">
        <SectionInformations />
      </h1>
    </div>
  );
}

export default App;
