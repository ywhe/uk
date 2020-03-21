import React from 'react'
export default class DetailsTable extends React.Component{
    render(){
        return (
            <table id="table" class="table table-responsive" style={{maxHeight:'100vh'}}>
                <thead class="thead-dark">
                    <tr>
                        <th>Location</th>
                        <th>Confirmed <span class="badge badge-danger badge-pill">New</span></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(t=>{
                        let name=t.name;
                        let count=<span>{t.count}<span class='badge badge-danger badge-pill'>{t.newCount}</span></span>;
                        return(
                        <tr>
                            <td>{name}</td>
                            <td>{count}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        );
    }
}