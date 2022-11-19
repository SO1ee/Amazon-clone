import React from 'react';
import './App.css';
import Header from'./header.js';
import Home from'./Home.js'

function App() {
  return (
    //BEM
    <div className="App">
      <Header/>
      <Home/>
      {/*HOME*/}
    </div>
  );
}

export default App;
