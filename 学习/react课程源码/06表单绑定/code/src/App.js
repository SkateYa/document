
import './App.css';
import React from 'react';

class App extends React.PureComponent {
  state = {
    inputValue: "",
    checkedArr: ["c1", "c3"]
  }
  handleChecked = (e) => {

    let arr = [...this.state.checkedArr]
    if (e.target.checked) {
      arr.push(e.target.value);
    } else {
      arr.splice(arr.indexOf(e.target.value), 1);
    }
    this.setState({
      checkedArr: arr
    })

  }
  render() {
    return <div className="App">
      {this.state.inputValue}
      <input value={this.state.inputValue} onInput={(e) => {
        this.setState({
          inputValue: e.target.value
        })

      }} />
      {this.state.checkedArr}
      <input
        checked={this.state.checkedArr.indexOf("c1") !== -1}
        onChange={this.handleChecked}
        value="c1"
        type="checkbox"
        name="choose" />选项1
      <input
        checked={this.state.checkedArr.indexOf("c2") !== -1}
        onChange={this.handleChecked}
        type="checkbox"
        value="c2"
        name="choose" />选项2
      <input
        checked={this.state.checkedArr.indexOf("c3") !== -1}
        onChange={this.handleChecked}
        value="c3"
        type="checkbox"
        name="choose" />选项3
    </div>
  }
}

export default App;
