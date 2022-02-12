import React, { Component } from 'react';

class ScheduleList extends Component {
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.scheduleno);
    }

    handleSelectRow = () => {
        const {row, onSelectRow} = this.props;
        onSelectRow(row);
    }

    render() {
        console.log(this.props.row.scheduleno)
        return (
            <tr>
            <td>
                {this.props.row.scheduleno}
            </td>
            <td>
                <a onSelect={this.handleSelectRow}>{this.props.row.scheduletitle}</a>
            </td>
            <td>
                {this.props.row.scheduledate.toLocaleDateString('ko-KR')}
            </td>
            <td><button onClick={this.handleRemove}>X</button></td>
        </tr>
        );
    }
}

export default ScheduleList;