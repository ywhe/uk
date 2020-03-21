import React from 'react';
import './App.css';
import Summary from './components/Summary'
import SimpleChart from './components/SimpleChart'
import ConfirmedMap from './components/ConfirmedMap'

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
    let url="https://raw.githubusercontent.com/ywhe/uk/master/src/data.json"
    fetch(url)
    .then(response=>{
      console.log(response);
      return response.json()})
    .then(data=>{
      this.setState({
        data:data,
        isLoading:false
      });
      console.log(this.state);
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
            <SimpleChart type="line" title="Cumulative Confirmed" color="red" labels={this.state.data.labels} data={this.state.data.confirmedData}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="line" title="Cumulative Deaths" color="black" labels={this.state.data.labels} data={this.state.data.confirmedData}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="line" title="Cumulative Tested" color="green" labels={this.state.data.labels} data={this.state.data.confirmedData}></SimpleChart>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="bar" title="Daily Confirmed" color="red" labels={this.state.data.labels} data={this.state.data.confirmedData}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="bar" title="Daily Deaths" color="black" labels={this.state.data.labels} data={this.state.data.confirmedData}></SimpleChart>
          </div>
          <div className="col-sm" style={{minHeight:'300px'}}>
            <SimpleChart type="bar" title="Daily Tested" color="green" labels={this.state.data.labels} data={this.state.data.confirmedData}></SimpleChart>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8" style={{height:'100vh'}}>
              <ConfirmedMap records={this.state.data.details}></ConfirmedMap>
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
