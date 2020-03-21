import React from 'react'
import Chart from 'chart.js'

export default class SimpleChart extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    chartRef = React.createRef();
    componentDidMount(){
        const ctx = this.chartRef.current.getContext("2d");
        let data = {
            labels:this.props.labels,
            datasets: [{
                label: this.props.title,
                backgroundColor: this.props.color,
                borderColor: this.props.color,
                fill: false,
                data: this.props.data
                }]
        };
        let options = {
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

        new Chart(ctx,{
            type:this.props.type,
            data:data,
            options:options,
        });
    }
    render(){
        return (
            <canvas ref={this.chartRef}></canvas>
        );
    }
}

