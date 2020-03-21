import React from 'react';
import './App.css';
import Summary from './components/Summary'
import SimpleChart from './components/SimpleChart'
import ConfirmedMap from './components/ConfirmedMap'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      labels:['aaaa','bbbbbbb','cccccccc'],
      confirmedData:[1,22,32],
      summary:{},
      details:[]
    };
  }
  componentDidMount(){
    let date=new Date();
    let url="https://raw.githubusercontent.com/ywhe/UK-COVID-19-Daily-Update/master/data.json"
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState(data));
  }
  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="col">
            <Summary data={this.state.summary}></Summary>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="line" title="Cumulative Confirmed" color="red" labels={this.state.labels} data={this.state.confirmedData}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="line" title="Cumulative Deaths" color="black" labels={this.state.labels} data={this.state.confirmedData}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="line" title="Cumulative Tested" color="green" labels={this.state.labels} data={this.state.confirmedData}></SimpleChart>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="bar" title="Daily Confirmed" color="red" labels={this.state.labels} data={this.state.confirmedData}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="bar" title="Daily Deaths" color="black" labels={this.state.labels} data={this.state.confirmedData}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="bar" title="Daily Tested" color="green" labels={this.state.labels} data={this.state.confirmedData}></SimpleChart>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8" style={{height:'100vh'}}>
              <ConfirmedMap records={this.state.details}></ConfirmedMap>
            </div>
          <div className='col-sm'>
              table here 
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
