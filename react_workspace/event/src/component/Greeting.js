import React, { Component } from 'react';

class Greeting extends Component {
        
    render() {    
        const isLoggedIn = this.props.isLoggedIn
        if (isLoggedIn){
            return (<div><h1>Welcom back!</h1></div>)
        } else {
            return (<div><h1>Please sign up.</h1></div>)
        }
    }
}

export default Greeting;

