import React from 'react';
import Son from './Son';
import "./App.css"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mes: "father"
    }
    console.log("constructor")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("derived")
    return null;
  }
  shouldComponentUpdate(props, state) {
    //优化生命名周期
    let notChange = true;
    for (let item in this.state) {
      if (this.state[item] !== state[item]) {
        notChange = false;
      }
    }
    return !notChange;

  }
  render() {
    console.log("render")
    return (
      <div>
        <div>{this.state.mes}</div>
        <button onClick={() => {
          this.setState({
            mes: "hello"
          })
        }}>修改mes</button>
        <Son></Son>
      </div >
    )
  }
  componentDidMount() {
    console.log("didmount")
  }
  componentDidUpdate() {
    console.log("didupate")
  }
}

export default App;
