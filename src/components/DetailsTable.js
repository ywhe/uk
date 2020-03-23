import React from 'react'
export default class DetailsTable extends React.Component{
    render(){
        return (
            <table id="table" className="table table-responsive" style={{height:'100%'}}>
                <thead className="thead-dark">
                    <tr>
                        <th>Location</th>
                        <th>Confirmed <span className="badge badge-danger badge-pill">New</span></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((t,index)=>{
                        let name=t.name;
                        let count=<span>{t.count}<span className='badge badge-danger badge-pill'>{t.newCount}</span></span>;
                        return(
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{count}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        );
    }
}