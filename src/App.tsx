// App.tsx

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container" style={{backgroundColor: 'violet'}}>
      <header className="app-header">
        <h1>Welcome to Our Amazing Application</h1>
      </header>
      <main className="industries-grid">
        {renderIndustries()}
      </main>
    </div>
  );
};

const renderIndustries = () => {
  const industries = [
    { logo: 'pepsi.svg', name: 'Pepsi' },
    { logo: 'coca-cola.svg', name: 'Coca-Cola' },
    { logo: 'kfc.svg', name: 'KFC' },
    { logo: 'crafers.svg', name: 'Crafers' },
    { logo: 'uzum.svg', name: 'Uzum' },
    { logo: 'nbu.svg', name: 'NBU' },
  ];

  return (
    <div className="grid-container">
      {industries.map((industry, index) => (
        <div key={index} className="grid-item">
          <img src={industry.logo} alt={industry.name} className="logo" />
          <p>{industry.name}</p>
        </div>
      ))}
    </div>
  );
};

export default App;