import React, { Component } from 'react';
import ScheduleForm from './components/ScheduleForm';
import ScheduleList from './components/ScheduleList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        text: '',
        maxNo: 3,
        scheduleItem : [
            {
            scheduleNo : 1,
            scheduleTitle : 'test1',
            scheduleDate : new Date()
            },
            {
            scheduleNo : 2,
            scheduleTitle : 'test2',
            scheduleDate : new Date()
            },
            {
            scheduleNo : 3,
            scheduleTitle : 'test3',
            scheduleDate : new Date()
            },
          ],
        }
      }

  addSchedule = (event) => {
    this.setState({
      maxNo: this.state.maxNo+1,
      scheduleItem : this.state.scheduleItem.concat({
      scheduleNo: this.state.maxNo, scheduleTitle: event.target.value, scheduleDate:new Date()
      })
    })
  }

  render() {
    const {scheduleItem} = this.state;
    const {value} = this.props;
    return (
      <div>
        <ScheduleForm value={value} onSubmit={this.addSchedule}/>
        <table>
          <tbody>
          <tr align="center">
                <td width="50"> No. </td>
                <td width="300"> Title </td>
                <td width="100"> Date </td>
          </tr>
          {
            scheduleItem.map(item => 
              (<ScheduleList key={scheduleItem.scheduleNo} item={item} />)
              )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;