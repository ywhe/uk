import React from 'react';
import logo from './logo.svg';
import './App.css';
import Summary from './components/Summary'

function App() {
  let data={
    NewConfirmedCount:10,
    ConfirmedCount:1000,
    TestedCount:20000,
    NewTestedCount:2000,
    DeathsCount:144,
    NewDeathsCount:30,
    LondonCount:800,
    NewLondonCount:0
  }
  return (
    <div className="App">
      <Summary data={data}></Summary>
    </div>
  );
}

export default App;
