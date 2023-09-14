import React, { useEffect, useState } from 'react'
import logo from './dogcaturga_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <Heading level={1}>Hello dude!</Heading>
        <Button>Sign out</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Woof woof!
          </p>
        </header>
    </div>
  );
}

export default App;
