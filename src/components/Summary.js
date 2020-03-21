import React from 'react'
import Card from 'react-bootstrap/Card';
import SummaryItem from './SummaryItem'
import 'bootstrap/dist/css/bootstrap.css';
class Summary extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        let date=new Date(this.props.data.date);
        let dateStr=date.toDateString();
        return(
        <Card style={{ 'minWidth':'9rem','maxWidth':'28rem',margin:'auto'}}>
            <Card.Header>
                 <span className="font-weight-bold">COVID-19 UK Summary</span><span className="float-right small">{dateStr}</span>
            </Card.Header>
            <Card.Body>
                <SummaryItem title="Confirmed" new={this.props.data.newConfirmedCount} total={this.props.data.confirmedCount} textColorClass="text-danger"></SummaryItem>
                <SummaryItem title="Deaths" new={this.props.data.newDeathsCount} total={this.props.data.deathsCount} textColorClass="text-dark"></SummaryItem>
                <SummaryItem title="Tested" new={this.props.data.newTestedCount} total={this.props.data.testedCount} textColorClass="text-info"></SummaryItem>
                <SummaryItem title="London" new={this.props.data.newLondonCount} total={this.props.data.londonCount} textColorClass="text-warning"></SummaryItem>
            </Card.Body>
        </Card>
        );
    }
}
export default Summary;