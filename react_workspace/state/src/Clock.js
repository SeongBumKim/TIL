import React, { Component } from 'react';
// state : component 내에서 변경되는 데이터
//          생성자에서 초기화
//          값변경 - setState()
class Clock extends Component {
    constructor(props) {
        super(props); //React.Component에 props 전달
        this.state = {
            date : new Date()
        };
    }

    // mount 후 호출 lifecycle method
    componentDidMount(){
        setInterval(
            () => this.setState({
                date: new Date()
            }), 1000
        );
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    // tick() {
    //     this.setState({
    //         date: new Date()
    //     });
    // }

    render() {
        const {name} = this.props;
        return (
            <div>
                <h1>Hello, State Test {name}</h1>    
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;