import React from 'react';
import './App.css';
import Summary from './components/Summary'
import SimpleChart from './components/SimpleChart'
import ConfirmedMap from './components/ConfirmedMap'

function App() {
  let summaryData={
    Date:'1995-04-07T00:00:00',
    NewConfirmedCount:10,
    ConfirmedCount:1000,
    TestedCount:20000,
    NewTestedCount:2000,
    DeathsCount:144,
    NewDeathsCount:30,
    LondonCount:800,
    NewLondonCount:0
  }
  let labels=['aaaa','bbbbbbb','cccccccc'];
  let cdata=[1,30,15];
  let confirmedData=[1,22,32];

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <Summary data={summaryData}></Summary>
        </div>
      </div>
      <div className="row">
        <div className="col-sm" style={{minHeight:'300px'}}>
          <SimpleChart type="line" title="Cumulative Confirmed" color="red" labels={labels} data={confirmedData}></SimpleChart>
        </div>
        <div className="col-sm" style={{minHeight:'300px'}}>
          <SimpleChart type="line" title="Cumulative Deaths" color="black" labels={labels} data={confirmedData}></SimpleChart>
        </div>
        <div className="col-sm" style={{minHeight:'300px'}}>
          <SimpleChart type="line" title="Cumulative Tested" color="green" labels={labels} data={confirmedData}></SimpleChart>
        </div>
      </div>
      <div className="row">
        <div className="col-sm" style={{minHeight:'300px'}}>
          <SimpleChart type="bar" title="Daily Confirmed" color="red" labels={labels} data={confirmedData}></SimpleChart>
        </div>
        <div className="col-sm" style={{minHeight:'300px'}}>
          <SimpleChart type="bar" title="Daily Deaths" color="black" labels={labels} data={confirmedData}></SimpleChart>
        </div>
        <div className="col-sm" style={{minHeight:'300px'}}>
          <SimpleChart type="bar" title="Daily Tested" color="green" labels={labels} data={confirmedData}></SimpleChart>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8" style={{height:'100vh'}}>
            <ConfirmedMap records={[]}></ConfirmedMap>
          </div>
        <div className='col-sm'>
            table here 
        </div>
      </div>
    </div>
  );
}

export default App;
