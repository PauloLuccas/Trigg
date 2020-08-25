import React from 'react';
import Header from './componentes/Header';
import SectionInformations from './componentes/SectionInformations';
import Footer from './componentes/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="sectionInformations">
        <SectionInformations />
      </section>
      <Footer />
    </div>
  );
}

export default App;
