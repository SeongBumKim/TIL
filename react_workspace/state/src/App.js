import React, { Component } from 'react';
import Clock from './Clock';
import Count from './Count';
// state : component내의 변경데이터 사용 (cf.props - 부보 component로부터 전달받은 속성값 read only
// Clock : state class component - constructor에서 초기화, setState로 값변경
// Count : state function component - const [data, setData] = useState(초기값)
//                                          setData로 값변경                                      
class App extends Component {
  render() {
    return (
      <div>
        <Clock name="c1"/>
        <Clock name="c2"/>
        <Count/>
      </div>
    );
  }
}

export default App;