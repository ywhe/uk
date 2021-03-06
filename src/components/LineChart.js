import React from 'react'
import {Line} from 'react-chartjs-2'

class LineChart extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        let data={
            labels: this.props.labels,
            datasets: [{
                fill:false,
                label: this.props.title,
                backgroundColor: this.props.color,
                borderColor: this.props.color,
                data: this.props.data
            }]
        };
        let options={
            responsive: true,
            legend: {
                    display: false
            },
            title: {
                display: true,
                text: this.props.title
            },
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true,
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false,
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false,
                    }
                }]
            }
        };
        return (
            <Line data={data} options={options}></Line>
        )
    }
}
 export default LineChart