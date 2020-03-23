import React from 'react';
import './App.css';
import Summary from './components/Summary'
import SimpleChart from './components/SimpleChart'
import ConfirmedMap from './components/ConfirmedMap'
import DetailsTable from './components/DetailsTable'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        confirmedData: [],
        summary: {},
        details: []
      },
      isLoading: true,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    let url = "https://raw.githubusercontent.com/ywhe/uk/master/data.json"
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          data: data,
          isLoading: false
        });
      });
  }
  render() {
    document.cookie = "SameSite=None;Secure";
    if (this.state.isLoading) {
      return (<div>is loading.....</div>);
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col">
            <Summary data={this.state.data.summary}></Summary>
          </div>
        </div>
        <div style={{ height: '1rem' }}></div>
        <div className="row">
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="bar" title="Daily Confirmed" color="red" labels={this.state.data.labels} data={this.state.data.dailyConfirmed}></SimpleChart>
          </div>
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="line" title="Cumulative Confirmed" color="red" labels={this.state.data.labels} data={this.state.data.cumulativeConfirmed}></SimpleChart>
          </div>
        </div>
        <div style={{ height: '1rem' }}></div>
        <div className="row">
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="bar" title="Daily Deaths" color="black" labels={this.state.data.labels} data={this.state.data.dailyDeaths}></SimpleChart>
          </div>
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="line" title="Cumulative Deaths" color="black" labels={this.state.data.labels} data={this.state.data.cumulativeDeaths}></SimpleChart>
          </div>
        </div>
        <div style={{ height: '1rem' }}></div>
        <div className="row">
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="bar" title="Daily Tested" color="green" labels={this.state.data.labels} data={this.state.data.dailyTested}></SimpleChart>
          </div>
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="line" title="Cumulative Tested" color="green" labels={this.state.data.labels} data={this.state.data.cumulativeTested}></SimpleChart>
          </div>
        </div>
        <div style={{ height: '1rem' }}></div>
        <div className="row">
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="bar" title="London Daily Confirmed" color="red" labels={this.state.data.labels} data={this.state.data.dailyLondon}></SimpleChart>
          </div>
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="line" title="London Cumulative Confirmed" color="purple" labels={this.state.data.labels} data={this.state.data.cumulativeLondon}></SimpleChart>
          </div>
        </div>
        <div style={{ height: '1rem' }}></div>
        <div className="row">
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="line" title="Daily Positivity Rate(%)" color="blue" labels={this.state.data.labels} data={this.state.data.dailyPositivityRate}></SimpleChart>
          </div>
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="line" title="Overall Positivity Rate(%)" color="red" labels={this.state.data.labels} data={this.state.data.overallPositivityRate}></SimpleChart>
          </div>
        </div>
        <div style={{ height: '1rem' }}></div>
        <div className="row">
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="line" title="Case Fatality Rate(%)" color="black" labels={this.state.data.labels} data={this.state.data.deathRate}></SimpleChart>
          </div>
          <div className="col-sm" style={{ minHeight: '300px' }}>
            <SimpleChart type="line" title="Case Daily Increase (%)" color="red" labels={this.state.data.labels} data={this.state.data.caseDailyIncrease}></SimpleChart>
          </div>
        </div>
        <div style={{ height: '1rem' }}></div>
        <div className="row vh-100">
          <div className="col" style={{ height: '100vh' }}>
            <ConfirmedMap records={this.state.data.details}></ConfirmedMap>
          </div>
        </div>
        <div className="col" style={{ height: '300px' }}>
            <DetailsTable data={this.state.data.details}></DetailsTable>
          </div>
      </div>

    );
  }
}
export default App;
