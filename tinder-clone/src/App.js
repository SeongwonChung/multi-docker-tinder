import React from 'react';
import './App.css';
import Header from "./components/Header"
import TinderCards from "./components/TinderCards"
import SwipeButtons from "./components/SwipeButtons"

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
