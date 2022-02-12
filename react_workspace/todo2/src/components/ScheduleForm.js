import React, { Component } from 'react';

class ScheduleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        alert('일정이 등록되었습니다. : ' + this.state.value);
        event.preventDefault();
        return this.state.value
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="일정을 입력하세요" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default ScheduleForm;