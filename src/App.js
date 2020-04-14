import React from 'react';
import './App.css';
import { GeoPosition } from './components/GeoPosition';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Geolocation States</h1>
      </header>
      <main>
        <GeoPosition />
      </main>
    </div>
  );
}

export default App;
