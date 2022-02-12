import React, { Component } from 'react';
import Customer from './Customer';
import Book from './Book';
// JSX & props
class App extends Component {
  render() {
    return (
      <div>
        {/* props : 자식 Component에 전달할 attribute 데이터 저장 - read only */}
        <Customer id="seongbum9@gmail.com" name="KIM"
          orders={["ISBN 111-235", "ISBN 211-237", "ISBN 311-547"]} />
        <Customer id="seongbum9@gmail.com" name="KIM"
          orders={["ISBN 111-235", "ISBN 311-547"]} />
        <Customer id="seongbum9@gmail.com" name="KIM"
          orders={["ISBN 111-235"]} />

        <Book isbn="111-234" title="React" author="facebook" />
      </div>
    );
  }
}

export default App;