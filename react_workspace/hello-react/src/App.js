import React, { Component } from 'react';

class App extends Component {
  myfunction(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    // 변수선언 : 상수 const 변수 let
    // 변수참조 : {변수명}
    // {Javascript 표현식}
    const name = 'Cloud MSA'

    const user = {
      firstName : '김',
      lastName : '성범'
    }

    return (
      <div>
        <h1> Hello, {name}, {this.myfunction(user)} </h1>
        <h2> root element1 </h2>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello React</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
