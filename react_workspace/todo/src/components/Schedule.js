import React, { Component } from 'react';
import Controller from './Controller';
import ScheduleList from './ScheduleList';

class Schedule extends Component {
    constructor(props){
        super(props)
        this.state = {
            maxNo: 0,
            scheduleList : [],
            selectedSchedule:{}
        }
    }
    

    handleSaveData = (data) => {
        let scheduleList = this.state.scheduleList;
        if (data.scheduleno === null || data.scheduletitle === '' || data.scheduleno === undefined){
            this.setState({
                maxNo: this.state.maxNo+1,
                scheduleList: scheduleList.concat({scheduleno: this.state.maxNo, scheduletitle: data.scheduletitle ,scheduledate: new Date()})
            });
        } else {
            this.setState({
                scheduleList: scheduleList.map(row => data.scheduleno === row.scheduleno ? data.scheduletitle === row.scheduletitle : row)
            })
        }
        // this.setState({
        //     maxNo: this.state.maxNo+1,
        //     scheduleList : this.state.scheduleList.concat({
        //         scheduleno: this.state.maxNo, scheduletitle: data.scheduletitle ,scheduledate: new Date()
        //     })
        // })
    }

    handleSelectRow = (row) => {
        this.setState({selectedSchedule:row});
    }

    handleRemove = (scheduleno) => {
        this.setState({
            scheduleList: this.state.boards.filter(row => row.scheduleno !== scheduleno)   
        })
    }

    render() {
        const {scheduleList, selectedSchedule} = this.state;

        return (
            <div>
                <Controller selectedSchedule={selectedSchedule} onSaveData={this.handleSaveData}/>
                <table>
                    <tbody>
                        <tr align="center">
                            <td width="50"> No. </td>
                            <td width="300"> Title </td>
                            <td width="100"> Date </td>
                        </tr>
                        {
                            scheduleList.map(row=>
                                (<ScheduleList key={row.scheduleno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Schedule;