import React from 'react';
import './App.css';
import Summary from './components/Summary'
import SimpleChart from './components/SimpleChart'
import ConfirmedMap from './components/ConfirmedMap'
import DetailsTable from './components/DetailsTable'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:{labels:[],
        confirmedData:[],
        summary:{},
        details:[]},
      isLoading: true,
    };
  }
  componentDidMount(){
    this.setState({isLoading:true});
    let url="https://raw.githubusercontent.com/ywhe/uk/master/data.json"
    fetch(url)
    .then(response=>{
      return response.json()})
    .then(data=>{
      this.setState({
        data:data,
        isLoading:false
      });
    });
  }
  render(){
    if(this.state.isLoading)
    {
        return (<div>is loading.....</div>);
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col">
            <Summary data={this.state.data.summary}></Summary>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="line" title="Cumulative Confirmed" color="red" labels={this.state.data.labels} data={this.state.data.cumulativeConfirmed}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="line" title="Cumulative Deaths" color="black" labels={this.state.data.labels} data={this.state.data.cumulativeDeaths}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="line" title="Cumulative Tested" color="green" labels={this.state.data.labels} data={this.state.data.cumulativeTested}></SimpleChart>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="bar" title="Daily Confirmed" color="red" labels={this.state.data.labels} data={this.state.data.dailyConfirmed}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="bar" title="Daily Deaths" color="black" labels={this.state.data.labels} data={this.state.data.dailyDeaths}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="bar" title="Daily Tested" color="green" labels={this.state.data.labels} data={this.state.data.dailyTested}></SimpleChart>
          </div>
        </div>
        <div style={{height:'1rem'}}></div>
        <div className="row vh-100">
          <div className="col-md-8" style={{height:'100vh'}}>
              <ConfirmedMap records={this.state.data.details}></ConfirmedMap>
            </div>
          <div className='col-sm'>
              <DetailsTable data={this.state.data.details}></DetailsTable> 
          </div>
        </div>
      </div>
    );
  } 
}
export default App;
