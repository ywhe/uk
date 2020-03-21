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
        let date=new Date(this.props.data.Date);
        let dateStr=date.toDateString();
        return(
        <Card style={{ 'minWidth':'9rem','maxWidth':'28rem',margin:'auto'}}>
            <Card.Header>
                 <span className="font-weight-bold">COVID-19 UK Summary</span><span className="float-right small">{dateStr}</span>
            </Card.Header>
            <Card.Body>
                <SummaryItem title="Confirmed" new={this.props.data.NewConfirmedCount} total={this.props.data.ConfirmedCount} textColorClass="text-danger"></SummaryItem>
                <SummaryItem title="Deaths" new={this.props.data.NewDeathsCount} total={this.props.data.DeathsCount} textColorClass="text-dark"></SummaryItem>
                <SummaryItem title="Tested" new={this.props.data.NewTestedCount} total={this.props.data.TestedCount} textColorClass="text-info"></SummaryItem>
                <SummaryItem title="London" new={this.props.data.NewLondonCount} total={this.props.data.LondonCount} textColorClass="text-warning"></SummaryItem>
            </Card.Body>
        </Card>
        );
    }
}
export default Summary;