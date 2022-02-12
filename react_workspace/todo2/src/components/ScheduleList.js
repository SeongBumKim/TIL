import React, { Component } from 'react';

class ScheduleList extends Component {
    
    render() {
        return (
            <tr>
                <td> {this.props.item.scheduleNo} </td>
                <td> {this.props.item.scheduleTitle} </td>
                <td> {this.props.item.scheduleDate.toLocaleDateString('ko-KR')} </td>
            </tr>
        );
    }
}

export default ScheduleList;