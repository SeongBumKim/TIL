import React, { Component } from 'react';
//값을 입력받아 Schedule.js에 넘겨줌
class Controller extends Component {
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        let selectedSchedule = nextProps.selectedSchedule;
        if (!selectedSchedule.scheduleno) {
            this.scheduleTitle.value = "";
            return true;
        }
        this.scheduleTitle.value = selectedSchedule.scheduleTitle;
        return true;
    }
   

    handleSubmit = (e) => {
        e.preventDefault();
        let selectedSchedule = this.props.selectedSchedule;
        let data = {
            scheduleTitle: this.scheduleTitle.value
        }
        if (selectedSchedule.scheduleno){
            data.scheduleno = selectedSchedule.scheduleno
            data.scheduledate = selectedSchedule.scheduledate
        }
        this.props.onSaveData(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="일정을 입력하세요" onChange={this.handleChange} ></input>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default Controller;