import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App(){
  return <div className="app">
    <header><div className="brand">PolarOps</div><div className="subtitle">Polar Expedition Logistics</div></header>
    <main>
      <section className="hero"><h1>Polar Expedition Logistics</h1><p>Integrated Polar Expedition Logistics and Asset Management System</p></section>
      <section className="cards">
        <div className="card"><h2>Logistics</h2><p>Track expedition cargo, movement and operational logistics.</p></div>
        <div className="card"><h2>Assets</h2><p>Manage expedition assets and inventory information.</p></div>
        <div className="card"><h2>Operations</h2><p>Monitor key expedition activities from a central dashboard.</p></div>
      </section>
    </main>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
