import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
class SummaryItem extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        let totalClass=this.props.textColorClass+' front-weight-bold';
        let total="NA";
        if(this.props.total>0)
        {
            total=this.props.total;            
        }
        let newCount="NA";
        if(this.props.new>0)
        {
            newCount='+'+this.props.new;            
        }
        if(this.props.new<0)
        {
            newCount=this.props.new;
        }
        
        if(total<=0){}
        return(
            <div className="border-bottom d-inline-block text-center" style={{width:6+'rem',height:6+'rem'}}>
                <small className="font-weigh-lighter">New:<span className={this.props.textColorClass}>{newCount}</span></small>
                <h3 className={totalClass}>{total}</h3>
                <h6>{this.props.title}</h6>
            </div>
        );
    }
}
export default SummaryItem;